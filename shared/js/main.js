$('document').ready(function(){
  var body = $('body');
  var storage = window.localStorage;
  var imgShared = 'shared/img/';
  var i,j;
  var argsSlider = {infinite: false, speed: 300, slidesToShow: 1, variableWidth: true, arrows: true,};
  var blockBreak = '<hr class="hr">';
  var popupClose = '<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right"></a>';
  var rightBack = '<a href="#main" class="ui-btn-left btn-back">Back</a>';
  var hostLink = 'http://lvgames.net/lienquan/';
  var wallPath = hostLink + 'wall/?champ=';
  var videoPath = hostLink + 'video/?champ=';
  var mailContact = 'lvgames.net@gmail.com';
  var fbContact = 'https://www.facebook.com/LVGamesDotNet';
  var fbName = 'Góp ý trên FB';
  var commonLang = string_common_vn;
  var heroObj = infoHeros;
  var getVideoId = common_object['all_video'];
  var marketLink = storage.getItem('store_url_storage');

  body.append('<div id="wrap-review"><div class="holder"><div class="inner"><div class="content"><p>' + commonLang['review_info'] + '</p><p class="al-center">&#9734;&#9734;&#9734;&#9734;&#9734;</p><p><a href="' + marketLink + '" rel="external" class="ui-btn btn-sys btn-review">' + commonLang['review'] + '</a><a href="#" class="ui-btn btn-close">' + commonLang['next_time'] + '</a></p></div></div></div></div>');

  body.append('<div id="wrap-updated"><div class="holder"><div class="inner"><div class="content"><p><strong>' + commonLang['update_title'] + '</strong></p><br><p>' + commonLang['update_info'] + '</p><p><a href="' + marketLink + '" rel="external" class="ui-btn btn-sys btn-review">' + commonLang['update_btn'] + '</a></p></div></div></div></div>');

  /* Add all hero */
  var allHeroVN = common_object['all_hero_vn'];
  var exceptHero = 0;
  var countHero = allHeroVN.length - exceptHero;
  var mainPage = $('#main');
  var lastHeroVN = allHeroVN.length - 1;
  for(i=lastHeroVN; i>=0; i--){
    mainPage.find('.lvg_select_champs').append('<div data-filtertext="' + allHeroVN[i].id + ' ' + allHeroVN[i].id_page + ' ' + allHeroVN[i].name + '" class="ui-block-b ' + allHeroVN[i].id + ' ' + allHeroVN[i].position + '"><a href="#hero-page" class="ui-btn hero-tap btn_show_ads" data-page="' + allHeroVN[i].id + '" style="background-image: url(' + imgShared + 'champs/' + allHeroVN[i].id_page + '/avat1.jpg);"></a><span>' + allHeroVN[i].name + '</span></div>');
  }

  mainPage.find('select.lvg_class').append('<option value="all">' + commonLang['all_hero'] + ' (' + countHero + ')</option><option value="free">Miễn phí</option><option value="warrior">' + commonLang['warr_hero'] + '</option><option value="tank">' + commonLang['tank_hero'] + '</option><option value="assassin">' + commonLang['assa_hero'] + '</option><option value="mage">' + commonLang['mage_hero'] + '</option><option value="marksman">' + commonLang['mark_hero'] + '</option><option value="support">' + commonLang['supo_hero'] + '</option>');
  mainPage.find('span.lvg_class').text(commonLang['all_hero'] + ' (' + countHero + ')');

  mainPage.find('.ui-panel-inner').append('<h3>' + commonLang['app_name'] + '</h3><p>' + commonLang['thanks_for'] + '</p><p><a href="mailto:' + mailContact + '" class="btn-sys">' + commonLang['btn_mail'] + '</a></p><p><a href="' + fbContact + '" class="btn-sys">' + fbName + '</a></p><p>' + commonLang['mail_status'] + '</p><p><a href="' + marketLink + '" rel="external" class="btn-sys">' + commonLang['review'] + '</a></p><a href="#" data-rel="close" class="ui-btn ui-shadow ui-corner-all ui-btn-inline close-panel">' + commonLang['btn_close'] + '</a>');
  mainPage.find('.close-panel').click(function() {
    $(this).parents('.ui-panel').panel( "close" );
  });
  mainPage.find('h1').text(commonLang['app_name']);

  /* Add items */
  var allItem = common_object['all_item'];
  var itemAllPage = $('.lvg_item_all');
  for(i=0; i<allItem.length; i++){
    body.find('.items-wrap').append('<div class="item ui-content" data-theme="a" id="' + allItem[i].id + '">' + popupClose + '<strong>' + allItem[i].name + '</strong><p>' + allItem[i].info + '</p></div>');
    itemAllPage.append('<div data-filtertext="' + allItem[i].id + ' ' + allItem[i].name + ' ' + change_vn_text(allItem[i].name) + '" class="ui-block-b"><a href="#' + allItem[i].id + '" class="ui-btn item btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared + 'items/' + allItem[i].id + '.png)"></a></div>');
  }

  /* Add spells */
  var allSpell = common_object['all_spell'];
  var spellAllPage = $('.lvg_spell_all');
  for(i=0; i<allSpell.length; i++){
    body.find('.spells-wrap').append('<div class="item ui-content" data-theme="a" id="' + allSpell[i].id + '">' + popupClose + '<strong>' + allSpell[i].name + '</strong><p>' + allSpell[i].info + '</p></div>');
    spellAllPage.append('<div data-filtertext="' + allSpell[i].id + ' ' + allSpell[i].name + ' ' + change_vn_text(allSpell[i].name) + '" class="ui-block-b"><a href="#' + allSpell[i].id + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared + 'skills/' + allSpell[i].id + '.png)"></a></div>');
  }

  /* Btn read more */
  $(this).on("click",".btn-read-more",function(){
    $('.cnt-story').css({'max-height': 'none'});
    $(this).remove();
  });

  /* Select hero */
  $(this).on("click",".hero-tap",function(){
    var dataPage = $(this).attr('data-page');
    var dataHref = $(this).attr('href');
    var transiPage = $('.transi-page');
    transiPage.show();
    var champs_class_data = $(this).parent().attr('data-class');
    console.log(champs_class_data)
    if(typeof champs_class_data === 'undefined') champs_class_data = $(this).parent().attr('class');
    add_hero_page(dataPage, champs_class_data);
    transiPage.fadeOut(800);
    $('#hero-page').trigger('create');
    $.mobile.changePage(dataHref, { allowSamePageTransition: true, transition: "none" });
  });

  /* Start Add hero */
  function add_hero_page(idhero,class_n){
    var hero = heroObj[idhero];
    var heroId = hero.hero_id;
    var heroName = hero.hero_name;
    var mainInfo = hero.main_info;
    var mainSkill = hero.main_skill;
    var heroSelector = $('#hero-page');
    var idInfo = heroSelector.find('#hero-page-info');
    var idSkin = heroSelector.find('#hero-page-skin');

    heroSelector.find('.info-tab').text(commonLang['btn_info']);
    heroSelector.find('.skin-tab').text(commonLang['btn_skin']);

    idInfo.html('');
    idInfo.attr('data-class', '');
    idSkin.html('');
    heroSelector.find('.info-tab').click();
    heroSelector.find('.hero-bg').css({'background-image': 'none'});
    heroSelector.find('h1').text(heroName).append('<span>'+mainInfo.position+'</span>');

    idInfo.attr('data-class', class_n);

    /* Hero bg */
    heroSelector.find('.hero-bg').css({'background-image': 'url('+ imgShared +'champs/' + heroId + '/thumb' + getRandom(hero.hero_skin.length) + '.jpg)'});

    /* Common info */
    idInfo.append('<h3>' + commonLang['info_common'] + '</h3>');
    checkShow(mainInfo.price_gold,function(){
      idInfo.append('<p class="price">' + mainInfo.price_gold + '</p>');
    });
    checkShow(mainInfo.price_voucher,function(){
      idInfo.append('<p class="price voucher">' + mainInfo.price_voucher + '</p>');
    });
    checkShow(mainInfo.price_text,function(){
      idInfo.append('<p>' + mainInfo.price_text + '</p>');
    });
    idInfo.append('<p>' + commonLang['hero_position'] + ': ' + mainInfo.position + '</p><p>' + commonLang['hero_special'] + ': ' + mainInfo.special + '</p>');
    checkShow(mainInfo.lane,function(){
      idInfo.append('<p>' + commonLang['hero_lane'] + ': ' + mainInfo.lane + '</p>');
    });
    idInfo.append(blockBreak);

    /* Skill detail */
    idInfo.append('<h3>' + commonLang['hero_skill'] + '</h3><p class="note">' + commonLang['btn_tap'] + '</p><div class="ui-grid-c lvg_skills detail"></div>');
    for(i=0; i<4; i++){
      idInfo.find('.lvg_skills.detail').append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#' + heroId + '_Skill' + (i+1) + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared +'champs/' + heroId + '/skill' + (i+1) + '.png)"></a><div data-role="popup" id="' + heroId + '_Skill' + (i+1) + '" class="ui-content" data-theme="a">' + popupClose + '<strong>' + mainSkill[i].name + '</strong><p>' + mainSkill[i].info + '</p></div></div>');
    }
    idInfo.find('.lvg_skills.detail').append('<div data-role="popup" id="' + heroId + '_Skill0" class="ui-content" data-theme="a">' + popupClose + '<strong>' + commonLang['normal_skill'] + '</strong><p>' + commonLang['normal_skill_info'] + '</p></div>');

    /* Skill up */
    var skillUp = hero.skill_up;
    idInfo.append('<p>' + commonLang['skill_up'] + '</p><div class="lvg_incskill"><div>' + skillUp.line1 + '</div><div>' + skillUp.line2 + '</div><div>' + skillUp.line3 + '</div></div>');
    var lvgIncSkill = idInfo.find('.lvg_incskill');
    lvgIncSkill.children('div').each(function(){
      var txtSkill = $(this).text();
      var splText = txtSkill.split(',');
      $(this).text('');
      for(i = 1; i <= 15; i++){
        $(this).append('<span>' + i + '</span>');
      }
      for(var j = 0; j < splText.length; j++){
        $(this).children('span').eq(splText[j] - 1).addClass('active');
      }
    });

    /* Skill combo */
    idInfo.append('<div class="lvg_combo"></div>');
    var skillCombo = hero.skill_combo;
    var lvgCombo = idInfo.find('.lvg_combo');
    for(i=0; i<skillCombo.length; i++){
      lvgCombo.append('<p class="note">' + skillCombo[i].name + '</p><div class="lvg_skills combo" data-skill="' + heroId + '">' + skillCombo[i].info + '</div>');
    }
    lvgCombo.children('.combo').each(function() {
      var txtCombo = $(this).text();
      var splCombo = txtCombo.split(',');
      $(this).text('');
      for(j=0; j<splCombo.length; j++){
        if(splCombo[j] != "0"){
          $(this).append('<div><a href="#' + heroId + '_Skill' + splCombo[j] + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared +'champs/' + heroId + '/skill' + splCombo[j] + '.png)"></a></div>');
        }else{
          $(this).append('<div><a href="#' + heroId + '_Skill' + splCombo[j] + '" class="ui-btn skill" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared +'common/normal.png)"></a></div>');
        }
      }
    });

    /* Skill special */
    var skillNote = hero.skill_note;
    idInfo.append('<p class="note">' + skillNote + '</p>');
    idInfo.append(blockBreak);
    var skillSpecial = hero.skill_special;
    idInfo.append('<h3>' + commonLang['hero_special_skill'] + '</h3><p>' + commonLang['hero_special_skill_info'] + '</p><p class="note">' + commonLang['btn_tap_spell'] + '</p><div class="ui-grid-c lvg_skills_sp">' + skillSpecial + '</div>');
    var lvgSkillSp = idInfo.find('.lvg_skills_sp');
    var splSkillSp = lvgSkillSp.text().split(',');
    lvgSkillSp.text('');
    for(i=0; i<splSkillSp.length; i++){
      lvgSkillSp.append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#' + splSkillSp[i] + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared + 'skills/' + splSkillSp[i] + '.png)"></a></div>');
    }
    idInfo.append(blockBreak);

    /* Runes */
    idInfo.append('<h3>' + commonLang['hero_rune'] + '</h3><p>' + commonLang['hero_rune2'] + '</p><div class="ui-grid-b lvg_runes rune2"></div><p>' + commonLang['hero_rune3'] + '</p><div class="ui-grid-b lvg_runes rune3"></div>');
    var mainRune = hero.main_rune;
    for(i=0; i<mainRune.rune2.length; i++){
      idInfo.find('.lvg_runes.rune2').append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#" class="ui-btn rune btn-disable" style="background-image: url('+ imgShared + 'runes/' + mainRune.rune2[i].name + '.png)"></a><p>' + mainRune.rune2[i].info + '</p></div>');
    }
    for(i=0; i<mainRune.rune3.length; i++){
      idInfo.find('.lvg_runes.rune3').append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#" class="ui-btn rune btn-disable" style="background-image: url('+ imgShared + 'runes/' + mainRune.rune3[i].name + '.png)"></a><p>' + mainRune.rune3[i].info + '</p></div>');
    }
    idInfo.append(blockBreak);

    /* Items */
    idInfo.append('<h3>' + commonLang['item_title'] + '</h3><p class="note">' + commonLang['btn_tap_item'] + '</p>');
    var itemBuild = hero.item_build;
    for(i=0; i<itemBuild.length; i++){
      idInfo.append('<p>' + (i+1) + '. ' + commonLang['full_set'] + ': ' + itemBuild[i].name + '</p><div class="ui-grid-b lvg_items build' + i + '"></div>');
      var splItems = itemBuild[i].info.split(',');
      var iup = 1;
      for(j=0; j<splItems.length; j++){
        idInfo.find('.lvg_items.build' + i).append('<div class="ui-block-' + getBlockChar(iup) + '"><a href="#' + splItems[j] + '" class="ui-btn item btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared + 'items/' + splItems[j] + '.png)"></a></div>');
        iup = checkGridB(iup);
      }
    }
    idInfo.append(blockBreak);

    /* Team and enemy */
    var heroBattle = hero.hero_battle;
    for(i=0; i<heroBattle.length; i++){
      var txtHero = '', iup = 1;
      var heroBattleInfo = heroBattle[i].info;
      for(j=0; j<heroBattleInfo.length; j++){
        txtHero += '<div class="ui-block-' + getBlockChar(iup) + '" data-class="'+get_champs_class(heroBattleInfo[j].hero_id)+'"><a href="#hero-page" class="ui-btn hero-tap btn_show_ads" data-page="' + heroBattleInfo[j].hero_id + '" style="background-image: url('+ imgShared + 'champs/' + heroBattleInfo[j].id_page +'/avat1.jpg)"></a></div>';
        iup = checkGridB(iup);
      }
      idInfo.append('<h3>' + heroName + ' ' + heroBattle[i].name + '</h3><p class="note">*' + heroName + ' ' + heroBattle[i].desc + '</p><div class="ui-grid-b lvg_champs">' + txtHero + '</div>');
      idInfo.append(blockBreak);
    }

    /* Story */
    var heroStory = hero.hero_story;
    idInfo.append('<h3>' + commonLang['hero_story'] + ' ' + heroName + '</h3><p class="cnt-story">' + heroStory + '</p><span class="btn-read-more">' + commonLang['read_more'] + '</span>');

    /* Skins */
    var heroSkin = hero.hero_skin;
    idSkin.append('<div class="lvg_slider"></div>');
    var lvgSlider, lvgSliderWrap = idSkin.find('.lvg_slider');
    for(i=0; i<heroSkin.length; i++){
      lvgSliderWrap.append('<div class="item' + (i+1) + '"></div>');
      lvgSlider = lvgSliderWrap.children('.item' + (i+1));
      lvgSlider.append('<p>' + heroSkin[i].name + '</p>');
      checkShow(heroSkin[i].gold, function(){
        lvgSlider.append('<p class="price inline">' + heroSkin[i].gold + '</p>');
      });
      checkShow(heroSkin[i].voucher,function(){
        lvgSlider.append('<p class="price inline voucher">' + heroSkin[i].voucher + '</p>');
      });
      checkShow(heroSkin[i].event,function(){
        lvgSlider.append('<p>' + heroSkin[i].event + '</p>');
      });
      lvgSlider.append('<a href="' + wallPath + heroSkin[i].wall + '" class="ui-btn lvg_walls"><span>' + commonLang['wall_download'] + '</span></a>');
      checkShow(heroSkin[i].wall, function(){
        lvgSlider.append('<div class="thumb-wrap"><img src="' + imgShared + 'champs/' + heroId + '/' + heroSkin[i].img + '" alt=""></div>');
      });
    }
    lvgSliderWrap.slick(argsSlider);
  }
  /* End Add hero */

  //get champs class
  function get_champs_class(str) {
    return $('#main .lvg_champs > .' + str).attr('class');
  }

  /* Start function --------------- */
  function getRandom(num) {
    var x = Math.floor((Math.random() * num) + 1);
    return x;
  }

  function checkGridB(num){
    if(num >= 3){
      num = 1;
    }else{
      num++;
    }
    return num;
  }

  function checkShow(val,success,fail){
    if(fail === undefined){
      if(val){
        return success();
      }
    }else{
      if(val){
        return success();
      }else{
        return fail();
      }
    }
  }

  function getBlockChar(number){
    var char;
    switch(number){
      case 1: char = 'a'; break;
      case 2: char = 'b'; break;
      case 3: char = 'c'; break;
      case 4: char = 'd'; break;
      default: break;
    }
    return char;
  }

  function change_vn_text(alias) {
      var str = alias;
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
      str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
      str = str.replace(/đ/g,"d");
      str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
      str = str.replace(/ + /g," ");
      str = str.trim(); 
      return str;
  }
  /* End function --------------- */

  /* Popup outside */
  $( ".popup-wrap .item" ).enhanceWithin().popup();

  /* Open link outsite */
  var idWrapreview = $('#wrap-review');
  var btnReview = $('#wrap-review .btn-review');
  var btnReviewclose = $('#wrap-review .btn-close');
  if (storage.getItem("infiniteScrollEnabled3") === null) {
      setTimeout(function(){
        idWrapreview.addClass('active');
      }, 200000);
  }
  btnReview.click(function() {
     idWrapreview.removeClass('active');
     storage.setItem("infiniteScrollEnabled3", "value");
  });
  btnReviewclose.click(function() {
     idWrapreview.removeClass('active');
  });

  /* Selecte class */
  var selectClass = $('.lvg_class');
  var allHeroVN = $('.lvg_select_champs');
  var inputAuto = $("#rich-autocomplete-input");
  var inputClear = $('.ui-input-clear');
  var uiSearch = $('.ui-input-search');
  selectClass.on('change', function() {
    var value = $(this).children('option:selected').val();
    if(inputAuto.val()){
      inputClear.click();
      inputAuto.blur();
    }
    allHeroVN.children().hide();
    allHeroVN.children('.' + value).show();
    if(value == 'all'){
      allHeroVN.children().show();
    }
    if(value == 'free'){
      if (storage.getItem("champs_free_storage") === null) {
        alert(commonLang['connect_wifi']);
        selectClass.val('all');
        allHeroVN.children().show();
      }
    }
  });
  uiSearch.click(function(){
    selectClass.val('all');
    allHeroVN.children().show();
  });
  inputAuto.attr('placeholder', countHero + ' ' + commonLang['find_hero']);

  /* Filter news */
  var filterNews = $('.lvg_filter_news');
  var filtersNewsContent = $('.lvg-news-content');
  filterNews.find('select').append('<option value="all">Lọc nhanh tin tức</option><option value="sap-ra-mat">Sắp ra mắt</option><option value="cam-nang">Cẩm nang</option><option value="giai-dau">Giải đấu</option><option value="uu-dai-khuyen-mai">Ưu đãi - Khuyến mãi</option><option value="tuong-mien-phi">Tướng xoay tua miễn phí</option><option value="like">Tin tức đã thích</option>');
  filterNews.find('select').on('change', function() {
    var value = $(this).children('option:selected').val();
    filtersNewsContent.children().hide();
    filtersNewsContent.children('.' + value).show();
    if(value == 'all'){
      filtersNewsContent.children().show();
    }
    if(value == 'like'){
      var lsNewsId = storage.getItem('lvgnewsid');
      if(lsNewsId === null){
        alert(commonLang['no_like']);
        filterNews.find('select').val('all');
        filtersNewsContent.children().show();
      }else{
        var splNewsId = lsNewsId.split(',');
        for(var i=0; i<splNewsId.length; i++){
          filtersNewsContent.children('#' + splNewsId[i]).show();
        }
      }
    }
  });

  /* Add news like */
  var strNewsID = '';
  $(this).on('click', '.news-like span', function(){
    var idNews = $(this).parents('.item').attr('id');
    if(strNewsID){
      strNewsID += ',' + idNews;
    }else{
      strNewsID += idNews;
    }
    storage.setItem('lvgnewsid', strNewsID);
    $(this).text(commonLang['liked']).css({'pointer-events': 'none'});
  });

  /*Tab click*/
  $('[href*="#hero-page-"]').click(function(){
    $('html, body').animate({scrollTop: $('#hero-page').offset().top},1);
  });

  /* News panel */
  $( "#news-panel" ).panel();

});