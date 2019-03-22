$(function(){
  var img_path = 'shared/img/';
  var popup_close = '<a href="#" data-rel="back" class="ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-right"></a>';

  //loading menu left
  $('.lvg_menu_left').append('<div class="ui-panel-inner"></div>');
  $.ajax({
      url: "http://lvgames.net/cnlq_app/menu_left/menu.json",
      success: function (output) {
        for(var i=0;i<output.length;i++){
          $('.lvg_menu_left > div').append(output[i]);
        }
      }
  });

  //loading champs
  $.ajax({
      url: "http://lvgames.net/cnlq_app/load_first/champs.json",
      success: function (output) {
        var hero_build = output;
        var countHero = hero_build.length;
        $('body').attr('data-champs', countHero);
        var lvg_champs_all = $('#all_champs.lvg_champs');
        for(i=countHero-1; i>=0; i--){
          lvg_champs_all.append('<div data-filtertext="' + hero_build[i].id + ' ' + hero_build[i].id_page + ' ' + hero_build[i].name + '" class="ui-screen-hidden ' + hero_build[i].id + ' ' + hero_build[i].position + '"><a href="#hero-page" class="hero-tap btn_show_ads" data-page="' + hero_build[i].id + '" style="background-image: url(' + img_path + 'champs/' + hero_build[i].id_page + '/thumb1.jpg);"><span>' + hero_build[i].name + '</span></a></div>');
        }
      }
  });

  //loading free and new
  $.ajax({
      url: "http://lvgames.net/cnlq_app/common/free_and_new.json",
      success: function (output) {
        $('.lvg_champs_wrap').append('<div class="lvg_champs"></div>');
        $('.lvg_champs_wrap').find('.lvg_champs').append($('#all_champs.lvg_champs > div[class*="'+output.new+'"]').prop('outerHTML'));
        $('.lvg_champs > div[class*="'+output.new+'"]').addClass('new');
        var champs_free_spl = output.free.split(',');
        for(i=0;i<champs_free_spl.length;i++){
          $('.lvg_champs_wrap').find('.lvg_champs').append($('#all_champs.lvg_champs > div[class*="'+champs_free_spl[i]+'"]').prop('outerHTML'));
          $('.lvg_champs > div[class*="'+champs_free_spl[i]+'"]').addClass('free');
        }
        $('.lvg_champs_wrap .lvg_champs > div').removeClass('ui-screen-hidden');
      }
  });


  var load_time = true;
  $(this).on("click",".hero-tap",function(){
    if(load_time == true) {
      //loading items
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

      //loading items
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