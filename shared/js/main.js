$('document').ready(function(){
  var body = $('body');
  var storage = window.localStorage;
  var imgShared = 'shared/img/';
  var i,j;
  var blockBreak = '<hr class="hr">';
  var popupClose = '<a href="#" data-rel="back" class="ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-right"></a>';
  var rightBack = '<a href="#main" class="ui-btn-left btn-back">Back</a>';
  var hostLink = 'http://lvgames.net/lienquan/';
  var wallPath = hostLink + 'wall/?champ=';
  var mailContact = 'lvgames.net@gmail.com';
  var fbContact = 'https://www.facebook.com/LVGamesDotNet';
  var fbName = '@LVGamesDotNet';
  var commonLang = string_common_vn;
  var heroObj = infoHeros;
  var marketLink = storage.getItem('store_url_storage');

  // body.append('<div id="wrap-review"><div class="holder"><div class="inner"><div class="content"><p>' + commonLang['review_info'] + '</p><p class="al-center">&#9734;&#9734;&#9734;&#9734;&#9734;</p><p><a href="' + marketLink + '" rel="external" class="ui-btn btn-sys btn-review">' + commonLang['review'] + '</a><a href="#" class="ui-btn btn-close">' + commonLang['next_time'] + '</a></p></div></div></div></div>');

  // body.append('<div id="wrap-updated"><div class="holder"><div class="inner"><div class="content"><p><strong>' + commonLang['update_title'] + '</strong></p><br><p>' + commonLang['update_info'] + '</p><p><a href="' + marketLink + '" rel="external" class="ui-btn btn-sys btn-review">' + commonLang['update_btn'] + '</a></p></div></div></div></div>');

  /* Add all hero */
  var allHeroVN = common_object['all_hero_vn'];
  var exceptHero = 0;
  var countHero = allHeroVN.length - exceptHero;
  var mainPage = $('#main');
  var lastHeroVN = allHeroVN.length - 1;
  for(i=lastHeroVN; i>=0; i--){
    mainPage.find('.lvg_select_champs').append('<div data-filtertext="' + allHeroVN[i].id + ' ' + allHeroVN[i].id_page + ' ' + allHeroVN[i].name + '" class="ui-screen-hidden ' + allHeroVN[i].id + ' ' + allHeroVN[i].position + '"><a href="#hero-page" class="ui-btn hero-tap btn_show_ads" data-page="' + allHeroVN[i].id + '" style="background-image: url(' + imgShared + 'champs/' + allHeroVN[i].id_page + '/avat1.jpg);"><span>' + allHeroVN[i].name + '</span></a></div>');
  }

  // mainPage.find('select.lvg_class').append('<option value="all">' + commonLang['all_hero'] + ' (' + countHero + ')</option><option value="free">Miễn phí</option><option value="warrior">' + commonLang['warr_hero'] + '</option><option value="tank">' + commonLang['tank_hero'] + '</option><option value="assassin">' + commonLang['assa_hero'] + '</option><option value="mage">' + commonLang['mage_hero'] + '</option><option value="marksman">' + commonLang['mark_hero'] + '</option><option value="support">' + commonLang['supo_hero'] + '</option>');
  // mainPage.find('span.lvg_class').text(commonLang['all_hero'] + ' (' + countHero + ')');

  $('.lvg_menu_left').append('<h3>' + commonLang['app_name'] + '</h3><p>' + commonLang['thanks_for'] + '</p><p><a href="mailto:' + mailContact + '" class="btn-sys">' + commonLang['btn_mail'] + '</a></p><p><a href="' + fbContact + '" class="btn-sys">' + fbName + '</a></p><p>' + commonLang['mail_status'] + '</p><p><a href="' + marketLink + '" rel="external" class="btn-sys">' + commonLang['review'] + '</a></p><a href="#" data-rel="close" class="ui-btn ui-btn-inline">' + commonLang['btn_close'] + '</a>');

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

  /* Select hero */
  $(this).on("click",".hero-tap",function(){
    $('#hero-page').remove();
    body.append('<div data-role="page" id="hero-page"><div data-role="header" data-position="fixed" data-fullscreen="true"><a href="#main" class="ui-btn-left">Back</a><h1></h1><a href="#news-panel" class="ui-btn-right">News</a></div><div class="lvg_holder"><div data-role="tabs" id="hero-tabs" class="tabs-fixed"><div data-role="navbar"><ul><li><a href="#hero-tab01">Guide</a></li><li><a href="#hero-tab02">Tips</a></li><li><a href="#hero-tab03">Info</a></li><li><a href="#hero-tab04">Skins</a></li></ul></div><div id="hero-tab01"></div><div id="hero-tab02"></div><div id="hero-tab03"></div><div id="hero-tab04"></div></div></div></div>');
    $('#hero-page').trigger('create');
    add_hero_page($(this).attr('data-page'));
    $.mobile.changePage('#hero-page', { allowSamePageTransition: true, transition: "none" });
  });

  $(this).on("click","a[href*='#hero-tab0']",function(){
    $('html, body').animate({ scrollTop: $('#hero-page').offset().top }, 1);
  });

  /* Start Add hero */
  function add_hero_page(idhero){
    var hero = heroObj[idhero];
    var heroId = hero.hero_id;
    var heroName = hero.hero_name;
    var mainInfo = hero.main_info;
    var mainSkill = hero.main_skill;
    var hero_page = $('#hero-page');

    var hero_tab01 = hero_page.find('#hero-tab01');
    var hero_tab02 = hero_page.find('#hero-tab02');
    var hero_tab03 = hero_page.find('#hero-tab03');
    var hero_tab04 = hero_page.find('#hero-tab04');

    hero_page.find('h1').text(heroName);

    /* Common info */
    hero_tab03.append('<h3>' + commonLang['info_common'] + '</h3>');
    checkShow(mainInfo.price_gold,function(){
      hero_tab03.append('<p class="price">' + mainInfo.price_gold + '</p>');
    });
    checkShow(mainInfo.price_voucher,function(){
      hero_tab03.append('<p class="price voucher">' + mainInfo.price_voucher + '</p>');
    });
    checkShow(mainInfo.price_text,function(){
      hero_tab03.append('<p>' + mainInfo.price_text + '</p>');
    });
    hero_tab03.append('<p>' + commonLang['hero_position'] + ': ' + mainInfo.position + '</p><p>' + commonLang['hero_special'] + ': ' + mainInfo.special + '</p>');
    checkShow(mainInfo.lane,function(){
      hero_tab03.append('<p>' + commonLang['hero_lane'] + ': ' + mainInfo.lane + '</p>');
    });

    /* Skill detail */
    hero_tab03.append(blockBreak);
    hero_tab03.append('<h3>' + commonLang['hero_skill'] + '</h3><p class="note">' + commonLang['btn_tap'] + '</p><div class="ui-grid-c lvg_skills detail"></div>');
    for(i=0; i<4; i++){
      hero_tab03.find('.lvg_skills.detail').append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#' + heroId + '_Skill' + (i+1) + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared +'champs/' + heroId + '/skill' + (i+1) + '.png)"></a><div data-role="popup" id="' + heroId + '_Skill' + (i+1) + '" class="ui-content" data-theme="a">' + popupClose + '<strong>' + mainSkill[i].name + '</strong><p>' + mainSkill[i].info + '</p></div></div>');
    }
    hero_tab03.find('.lvg_skills.detail').append('<div data-role="popup" id="' + heroId + '_Skill0" class="ui-content" data-theme="a">' + popupClose + '<strong>' + commonLang['normal_skill'] + '</strong><p>' + commonLang['normal_skill_info'] + '</p></div>');

    /* Skill up */
    var skillUp = hero.skill_up;
    hero_tab02.append('<h3>' + commonLang['skill_up'] + '</h3><div class="lvg_incskill"><div>' + skillUp.line1 + '</div><div>' + skillUp.line2 + '</div><div>' + skillUp.line3 + '</div></div>');
    var lvgIncSkill = hero_tab02.find('.lvg_incskill');
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
    hero_tab02.append(blockBreak);
    hero_tab02.append('<div class="lvg_combo"></div>');
    var skillCombo = hero.skill_combo;
    var lvgCombo = hero_tab02.find('.lvg_combo');
    lvgCombo.append('<h3>Combo chiêu thức</h3>');
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
    hero_tab02.append(blockBreak);
    hero_tab02.append('<h3>Mẹo chơi</h3>');
    hero_tab02.append('<p class="note">' + skillNote + '</p>');
    hero_tab02.append(blockBreak);
    var skillSpecial = hero.skill_special;
    hero_tab01.append('<h3>' + commonLang['hero_special_skill'] + '</h3><p>' + commonLang['hero_special_skill_info'] + '</p><p class="note">' + commonLang['btn_tap_spell'] + '</p><div class="ui-grid-c lvg_skills_sp">' + skillSpecial + '</div>');
    var lvgSkillSp = hero_tab01.find('.lvg_skills_sp');
    var splSkillSp = lvgSkillSp.text().split(',');
    lvgSkillSp.text('');
    for(i=0; i<splSkillSp.length; i++){
      lvgSkillSp.append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#' + splSkillSp[i] + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared + 'skills/' + splSkillSp[i] + '.png)"></a></div>');
    }
    hero_tab01.append(blockBreak);

    /* Runes */
    hero_tab01.append('<h3>' + commonLang['hero_rune'] + '</h3><p>' + commonLang['hero_rune2'] + '</p><div class="ui-grid-b lvg_runes rune2"></div><p>' + commonLang['hero_rune3'] + '</p><div class="ui-grid-b lvg_runes rune3"></div>');
    var mainRune = hero.main_rune;
    for(i=0; i<mainRune.rune2.length; i++){
      hero_tab01.find('.lvg_runes.rune2').append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#" class="ui-btn rune btn-disable" style="background-image: url('+ imgShared + 'runes/' + mainRune.rune2[i].name + '.png)"></a><p>' + mainRune.rune2[i].info + '</p></div>');
    }
    for(i=0; i<mainRune.rune3.length; i++){
      hero_tab01.find('.lvg_runes.rune3').append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#" class="ui-btn rune btn-disable" style="background-image: url('+ imgShared + 'runes/' + mainRune.rune3[i].name + '.png)"></a><p>' + mainRune.rune3[i].info + '</p></div>');
    }
    hero_tab01.append(blockBreak);

    /* Items */
    hero_tab01.append('<h3>' + commonLang['item_title'] + '</h3><p class="note">' + commonLang['btn_tap_item'] + '</p>');
    var itemBuild = hero.item_build;
    for(i=0; i<itemBuild.length; i++){
      hero_tab01.append('<p>' + (i+1) + '. ' + commonLang['full_set'] + ': ' + itemBuild[i].name + '</p><div class="ui-grid-b lvg_items build' + i + '"></div>');
      var splItems = itemBuild[i].info.split(',');
      var iup = 1;
      for(j=0; j<splItems.length; j++){
        hero_tab01.find('.lvg_items.build' + i).append('<div class="ui-block-' + getBlockChar(iup) + '"><a href="#' + splItems[j] + '" class="ui-btn item btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ imgShared + 'items/' + splItems[j] + '.png)"></a></div>');
        iup = checkGridB(iup);
      }
    }

    /* Team and enemy */
    var heroBattle = hero.hero_battle;
    for(i=0; i<heroBattle.length; i++){
      var txtHero = '';
      var heroBattleInfo = heroBattle[i].info;
      for(j=0; j<heroBattleInfo.length; j++){
        txtHero += '<div><a href="#hero-page" class="hero-tap btn_show_ads" data-page="' + heroBattleInfo[j].hero_id + '" style="background-image: url('+ imgShared + 'champs/' + heroBattleInfo[j].id_page +'/avat1.jpg)"><span>' + heroObj[heroBattleInfo[j].hero_id].hero_name + '</span></a></div>';
      }
      hero_tab02.append('<h3>' + heroName + ' ' + heroBattle[i].name + '</h3><p class="note">*' + heroName + ' ' + heroBattle[i].desc + '</p><div class="lvg_champs">' + txtHero + '</div>');
    }

    /* Story */
    hero_tab03.append(blockBreak);
    var heroStory = hero.hero_story;
    hero_tab03.append('<h3>' + commonLang['hero_story'] + ' ' + heroName + '</h3><p>' + heroStory + '</p>');

    /* Skins */
    var heroSkin = hero.hero_skin;
    hero_tab04.append('<div class="lvg_slider"></div>');
    var lvgSlider, lvgSliderWrap = hero_tab04.find('.lvg_slider');
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
  }
  /* End Add hero */

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
  var lvg_slt_champ = $('.lvg_select_champs');
  var inputAuto = $("#lvg_filter_champs");
  var inputClear = $('.ui-input-clear');
  var uiSearch = $('.ui-input-search');
  selectClass.on('change', function() {
    var value = $(this).children('option:selected').val();
    if(inputAuto.val()){
      inputClear.click();
      inputAuto.blur();
    }
    lvg_slt_champ.children().hide();
    lvg_slt_champ.children('.' + value).show();
    if(value == 'all'){
      lvg_slt_champ.children().show();
    }
    if(value == 'free'){
      console.log('champ_free');
      lvg_slt_champ.children().show();
    }
  });
  uiSearch.click(function(){
    selectClass.val('all');
    lvg_slt_champ.children().show();
  });
  inputAuto.attr('placeholder', countHero + ' ' + commonLang['find_hero']);

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

  /* News panel */
  // $( "#news-panel" ).panel();
  $( ".pnl_outside" ).panel();

});