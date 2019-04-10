$(function(){
  var img_path = 'http://lvgames.net/cnlq_app/images/';
  var popup_close = '<a href="#" class="lvg_popup_close">x</a>';
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
        // var week_hero = output.week;
        $('.lvg_champs_wrap').append('<div class="lvg_champs"></div>');
        $('.lvg_champs_wrap .lvg_champs').append($('#all_champs.lvg_champs > div[class*="'+output.new+'"]').prop('outerHTML'));
        $('.lvg_champs > div[class*="'+output.new+'"]').addClass('new');

        var free_hero = output.free.split(',');
        for(i=0;i<free_hero.length;i++){
          $('.lvg_champs_wrap .lvg_champs').append($('#all_champs.lvg_champs > div[class*="'+free_hero[i]+'"]').prop('outerHTML'));
          $('.lvg_champs > div[class*="'+free_hero[i]+'"]').addClass('free');
        }

        $('.lvg_champs_wrap .lvg_champs > div').removeClass('ui-screen-hidden');

        var app_version_html = $('body').attr('data-appversion');
        if(output.version > app_version_html){
          $('#wrap-updated').addClass('active');
        }

        $('#main h1 span').text(output.update);
        storage.setItem('app_url_store', output.app_url);

        var menu_s = output.menu;
        $('.lvg_menu_wrap').append('<div class="content"><div class="holder"></div></div>');
        $('.lvg_menu_wrap .holder').append('<a href="#" class="lvg_popup_close">Đóng lại</a>');
        for(var i=0;i<menu_s.length;i++){
          $('.lvg_menu_wrap .holder').append(menu_s[i]);
        }

      }
  });

  // //loading menu left
  // $('.lvg_menu_wrap').append('<div class="content"><div class="holder"></div></div>');
  // $.ajax({
  //   url: "http://lvgames.net/cnlq_app/menu_left/menu.json",
  //   success: function (output) {
  //     $('.lvg_menu_wrap .holder').append('<a href="#" class="lvg_popup_close">Đóng lại</a>');
  //     for(var i=0;i<output.length;i++){
  //       $('.lvg_menu_wrap .holder').append(output[i]);
  //     }
  //   }
  // });

  //loading items
  $.ajax({
      url: "http://lvgames.net/cnlq_app/load_first/items.json",
      success: function (output) {
        var items = output;
        for(var i=0; i<items.length; i++){
          $('.items-wrap').append('<div class="lvg_popup" id="' + items[i].id + '"><div class="content tp02">' + popup_close + '<p class="ttl">' + items[i].name + '</p><p>' + items[i].info + '</p></div></div>');
        }
      }
  });

  //loading spells
  $.ajax({
      url: "http://lvgames.net/cnlq_app/load_first/spells.json",
      success: function (output) {
        var spells = output;
        for(i=0; i<spells.length; i++){
          $('.spells-wrap').append('<div class="lvg_popup" id="' + spells[i].id + '"><div class="content">' + popup_close + '<p class="ttl">' + spells[i].name + '</p><p>' + spells[i].info + '</p></div></div>');
        }
      }
  });

});