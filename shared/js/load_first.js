$(function(){
  var img_path = 'shared/img/';
  var popup_close = '<a href="#" data-rel="back" class="ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-right"></a>';
  var storage = window.localStorage;

  //loading champs
  $.ajax({
      url: "http://lvgames.net/cnlq_app/load_first/champs.json",
      success: function (output) {
        var hero_build = output.all;
        var hero_count = hero_build.length;
        $('#lvg_filter_champs').attr('placeholder', 'Có '+hero_count+' tướng bạn tìm ai?');
        var lvg_champs_all = $('#all_champs.lvg_champs');
        for(i=hero_count-1; i>=0; i--){
          lvg_champs_all.append('<div data-filtertext="' + hero_build[i].id + ' ' + hero_build[i].id_page + ' ' + hero_build[i].name + '" class="ui-screen-hidden ' + hero_build[i].id + ' ' + hero_build[i].position + '"><a href="#hero-page" class="hero-tap btn_show_ads" data-page="' + hero_build[i].id + '" style="background-image: url(' + img_path + 'champs/' + hero_build[i].id_page + '/thumb1.jpg);"><span>' + hero_build[i].name + '</span></a></div>');
        }
        var week_hero = output.week;
        $('.lvg_champs_wrap').append('<div class="lvg_champs"></div>');
        $('.lvg_champs_wrap .lvg_champs').append($('#all_champs.lvg_champs > div[class*="'+week_hero.new+'"]').prop('outerHTML'));
        $('.lvg_champs > div[class*="'+week_hero.new+'"]').addClass('new');

        var free_hero = week_hero.free.split(',');
        for(i=0;i<free_hero.length;i++){
          $('.lvg_champs_wrap .lvg_champs').append($('#all_champs.lvg_champs > div[class*="'+free_hero[i]+'"]').prop('outerHTML'));
          $('.lvg_champs > div[class*="'+free_hero[i]+'"]').addClass('free');
        }

        $('.lvg_champs_wrap .lvg_champs > div').removeClass('ui-screen-hidden');

        var app_version_html = $('body').attr('data-appversion');
        if(output.version > app_version_html){
          $('#wrap-updated').addClass('active');
        }

        storage.setItem('app_url_store', output.app_url);
      }
  });

  //loading menu left
  var load_menu = true;
  $(this).on("click","a[href='#menu-left']",function(){
    if(load_menu ==true) {
      $('.lvg_menu_left').append('<div class="ui-panel-inner"></div>');
      $.ajax({
        url: "http://lvgames.net/cnlq_app/menu_left/menu.json",
        success: function (output) {
          for(var i=0;i<output.length;i++){
            $('.lvg_menu_left > div').append(output[i]);
          }
        }
      });
    }
    load_menu = false;
  });

  //loading items and spells
  var load_time = true;
  $(this).on("click",".hero-tap",function(){
    if(load_time == true) {
      $.ajax({
          url: "http://lvgames.net/cnlq_app/load_first/items.json",
          success: function (output) {
            var items = output;
            for(var i=0; i<items.length; i++){
              $('.items-wrap').append('<div class="item ui-content" data-theme="a" id="' + items[i].id + '">' + popup_close + '<strong>' + items[i].name + '</strong><p>' + items[i].info + '</p></div>');
            }
            $(".items-wrap .item").enhanceWithin().popup();
          }
      });

      $.ajax({
          url: "http://lvgames.net/cnlq_app/load_first/spells.json",
          success: function (output) {
            var spells = output;
            for(i=0; i<spells.length; i++){
              $('.spells-wrap').append('<div class="item ui-content" data-theme="a" id="' + spells[i].id + '">' + popup_close + '<strong>' + spells[i].name + '</strong><p>' + spells[i].info + '</p></div>');
            }
            $(".spells-wrap .item").enhanceWithin().popup();
          }
      });
    }
    load_time = false;
  });

});