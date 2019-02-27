$('document').ready(function(){
  var body = $('body'),i,j;
  var img_path = 'shared/img/';
  var popup_close = '<a href="#" data-rel="back" class="ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-right"></a>';
  var wallPath = 'http://lvgames.net/lienquan/wall/?champ=';
  var lang_str_vn = string_common_vn;
  var hr_line = '<hr class="hr">';
  var img_path = 'shared/img/';
  var champs_free_str = 'valhein,alice,krixi,ngo_khong,nakroth,murad';

  /* Add all hero */
  var hero_build = common_object['all_hero_vn'];
  var countHero = hero_build.length;
  var main_page = $('#main');
  for(i=countHero-1; i>=0; i--){
    main_page.find('.lvg_champs').append('<div data-filtertext="' + hero_build[i].id + ' ' + hero_build[i].id_page + ' ' + hero_build[i].name + '" class="ui-screen-hidden ' + hero_build[i].id + ' ' + hero_build[i].position + '"><a href="#hero-page" class="ui-btn hero-tap btn_show_ads" data-page="' + hero_build[i].id + '" style="background-image: url(' + img_path + 'champs/' + hero_build[i].id_page + '/avat1.jpg);"><span>' + hero_build[i].name + '</span></a></div>');
  }

  /* Add all items */
  var allItem = common_object['all_item'];
  var itemAllPage = $('.lvg_item_all');
  for(i=0; i<allItem.length; i++){
    body.find('.items-wrap').append('<div class="item ui-content" data-theme="a" id="' + allItem[i].id + '">' + popup_close + '<strong>' + allItem[i].name + '</strong><p>' + allItem[i].info + '</p></div>');
    itemAllPage.append('<div data-filtertext="' + allItem[i].id + ' ' + allItem[i].name + ' ' + change_vn_text(allItem[i].name) + '" class="ui-block-b"><a href="#' + allItem[i].id + '" class="ui-btn item btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path + 'items/' + allItem[i].id + '.png)"></a></div>');
  }

  /* Add all spells */
  var allSpell = common_object['all_spell'];
  var spellAllPage = $('.lvg_spell_all');
  for(i=0; i<allSpell.length; i++){
    body.find('.spells-wrap').append('<div class="item ui-content" data-theme="a" id="' + allSpell[i].id + '">' + popup_close + '<strong>' + allSpell[i].name + '</strong><p>' + allSpell[i].info + '</p></div>');
    spellAllPage.append('<div data-filtertext="' + allSpell[i].id + ' ' + allSpell[i].name + ' ' + change_vn_text(allSpell[i].name) + '" class="ui-block-b"><a href="#' + allSpell[i].id + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path + 'skills/' + allSpell[i].id + '.png)"></a></div>');
  }

  // Finding champs
  var lvg_select_champs = $('.lvg_select_champs');
  lvg_select_champs.find('input').attr('placeholder', countHero + ' ' + lang_str_vn['find_hero']);
  lvg_select_champs.find('input').focus(function(){
    $(this).val('');
    $('.lvg_champs_class > span').removeClass('active');
    // $('.lvg_select_champs > .lvg_champs > div').addClass('ui-screen-hidden');
    $('.lvg_champs_wrap').hide();
  });

  // Class champs
  var lvg_champs_class = $('.lvg_champs_class > span');
  var lvg_champs = $('.lvg_champs > div');
  lvg_champs_class.click(function(){
    lvg_champs_class.removeClass('active');
    $(this).addClass('active');
    var cur_value = $(this).attr('data-value');
    lvg_champs.addClass('ui-screen-hidden');
    $('.lvg_champs > div[class*="'+cur_value+'"]').removeClass('ui-screen-hidden');
    $('.lvg_champs_wrap').hide();
  });

  // Champs Free and New show
  $('.lvg_champs_wrap').append('<div class="lvg_champs"></div>');
  $('.lvg_champs_wrap').find('.lvg_champs').append($('.lvg_champs > div.new')[0].outerHTML);
  var champs_free_spl = champs_free_str.split(',');
  for(i=0;i<champs_free_spl.length;i++){
    $('.lvg_champs_wrap').find('.lvg_champs').append($('.lvg_champs > div[class*="'+champs_free_spl[i]+'"]')[0].outerHTML);
    $('.lvg_champs > div[class*="'+champs_free_spl[i]+'"]').addClass('free');
  }
  $('.lvg_champs_wrap .lvg_champs > div').removeClass('ui-screen-hidden');

  /* Add hero */
  $(this).on("click",".hero-tap",function(){
    $('#hero-page').remove();
    body.append('<div data-role="page" id="hero-page"><div data-role="header" data-position="fixed" data-fullscreen="true"><a href="#main" class="ui-btn-left">Back</a><h1 class="'+$(this).parent().attr('class')+'"></h1><a href="#news-panel" class="ui-btn-right">News</a></div><div class="lvg_holder"><div data-role="tabs" id="hero-tabs" class="tabs-fixed"><div data-role="navbar"><ul><li><a href="#hero-tab01">Guide</a></li><li><a href="#hero-tab02">Tips</a></li><li><a href="#hero-tab03">Info</a></li><li><a href="#hero-tab04">Skins</a></li></ul></div><div id="hero-tab01"></div><div id="hero-tab02"></div><div id="hero-tab03"></div><div id="hero-tab04"></div></div></div></div>');
    $('#hero-page').trigger('create');
    add_hero_page($(this).attr('data-page'));
    $.mobile.changePage('#hero-page', { allowSamePageTransition: true, transition: "none" });
  });

  $(this).on("click","a[href*='#hero-tab0']",function(){
    $('html, body').animate({ scrollTop: $('#hero-page').offset().top }, 1);
  });

  $(this).on("click","a[href='#main']",function(){
    $('.lvg_main_img').attr('style', '');
  });

  function add_hero_page(idhero){
    var hero_list = infoHeros;
    var hero = hero_list[idhero];
    var hero_id = hero.hero_id;
    var hero_name = hero.hero_name;
    var hero_info = hero.main_info;
    var hero_skill = hero.main_skill;
    var hero_page = $('#hero-page');

    var hero_tab01 = hero_page.find('#hero-tab01');
    var hero_tab02 = hero_page.find('#hero-tab02');
    var hero_tab03 = hero_page.find('#hero-tab03');
    var hero_tab04 = hero_page.find('#hero-tab04');

    hero_page.find('h1').text(hero_name);

    $('.lvg_main_img').css({'background-image':'url(shared/img/champs/'+ hero.hero_id +'/thumb1.jpg)'});
    console.log($('.lvg_main_img').text())

    /* Common info */
    hero_tab03.append('<h3>' + lang_str_vn['info_common'] + '</h3>');
    checkShow(hero_info.price_gold,function(){
      hero_tab03.append('<p class="price">' + hero_info.price_gold + '</p>');
    });
    checkShow(hero_info.price_voucher,function(){
      hero_tab03.append('<p class="price voucher">' + hero_info.price_voucher + '</p>');
    });
    checkShow(hero_info.price_text,function(){
      hero_tab03.append('<p>' + hero_info.price_text + '</p>');
    });
    hero_tab03.append('<p>' + lang_str_vn['hero_position'] + ': ' + hero_info.position + '</p><p>' + lang_str_vn['hero_special'] + ': ' + hero_info.special + '</p>');
    checkShow(hero_info.lane,function(){
      hero_tab03.append('<p>' + lang_str_vn['hero_lane'] + ': ' + hero_info.lane + '</p>');
    });

    /* Skill detail */
    hero_tab03.append(hr_line);
    hero_tab03.append('<h3>' + lang_str_vn['hero_skill'] + '</h3><p class="note">' + lang_str_vn['btn_tap'] + '</p><div class="ui-grid-c lvg_skills detail"></div>');
    for(i=0; i<4; i++){
      hero_tab03.find('.lvg_skills.detail').append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#' + hero_id + '_Skill' + (i+1) + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path +'champs/' + hero_id + '/skill' + (i+1) + '.png)"></a><div data-role="popup" id="' + hero_id + '_Skill' + (i+1) + '" class="ui-content" data-theme="a">' + popup_close + '<strong>' + hero_skill[i].name + '</strong><p>' + hero_skill[i].info + '</p></div></div>');
    }
    hero_tab03.find('.lvg_skills.detail').append('<div data-role="popup" id="' + hero_id + '_Skill0" class="ui-content" data-theme="a">' + popup_close + '<strong>' + lang_str_vn['normal_skill'] + '</strong><p>' + lang_str_vn['normal_skill_info'] + '</p></div>');

    /* Skill up */
    var skillUp = hero.skill_up;
    hero_tab02.append('<h3>' + lang_str_vn['skill_up'] + '</h3><div class="lvg_incskill"><div>' + skillUp.line1 + '</div><div>' + skillUp.line2 + '</div><div>' + skillUp.line3 + '</div></div>');
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
    hero_tab02.append(hr_line);
    hero_tab02.append('<div class="lvg_combo"></div>');
    var skillCombo = hero.skill_combo;
    var lvgCombo = hero_tab02.find('.lvg_combo');
    lvgCombo.append('<h3>Combo chiêu thức</h3>');
    for(i=0; i<skillCombo.length; i++){
      lvgCombo.append('<p class="note">' + skillCombo[i].name + '</p><div class="lvg_skills combo" data-skill="' + hero_id + '">' + skillCombo[i].info + '</div>');
    }
    lvgCombo.children('.combo').each(function() {
      var txtCombo = $(this).text();
      var splCombo = txtCombo.split(',');
      $(this).text('');
      for(j=0; j<splCombo.length; j++){
        if(splCombo[j] != "0"){
          $(this).append('<div><a href="#' + hero_id + '_Skill' + splCombo[j] + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path +'champs/' + hero_id + '/skill' + splCombo[j] + '.png)"></a></div>');
        }else{
          $(this).append('<div><a href="#' + hero_id + '_Skill' + splCombo[j] + '" class="ui-btn skill" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path +'common/normal.png)"></a></div>');
        }
      }
    });

    /* Skill special */
    var skillNote = hero.skill_note;
    hero_tab02.append(hr_line);
    hero_tab02.append('<h3>Mẹo chơi</h3>');
    hero_tab02.append('<p class="note">' + skillNote + '</p>');
    hero_tab02.append(hr_line);
    var skillSpecial = hero.skill_special;
    hero_tab01.append('<h3>' + lang_str_vn['hero_special_skill'] + '</h3><p>' + lang_str_vn['hero_special_skill_info'] + '</p><p class="note">' + lang_str_vn['btn_tap_spell'] + '</p><div class="ui-grid-c lvg_skills_sp">' + skillSpecial + '</div>');
    var lvgSkillSp = hero_tab01.find('.lvg_skills_sp');
    var splSkillSp = lvgSkillSp.text().split(',');
    lvgSkillSp.text('');
    for(i=0; i<splSkillSp.length; i++){
      lvgSkillSp.append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#' + splSkillSp[i] + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path + 'skills/' + splSkillSp[i] + '.png)"></a></div>');
    }
    hero_tab01.append(hr_line);

    /* Runes */
    hero_tab01.append('<h3>' + lang_str_vn['hero_rune'] + '</h3><p>' + lang_str_vn['hero_rune2'] + '</p><div class="ui-grid-b lvg_runes rune2"></div><p>' + lang_str_vn['hero_rune3'] + '</p><div class="ui-grid-b lvg_runes rune3"></div>');
    var mainRune = hero.main_rune;
    for(i=0; i<mainRune.rune2.length; i++){
      hero_tab01.find('.lvg_runes.rune2').append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#" class="ui-btn rune btn-disable" style="background-image: url('+ img_path + 'runes/' + mainRune.rune2[i].name + '.png)"></a><p>' + mainRune.rune2[i].info + '</p></div>');
    }
    for(i=0; i<mainRune.rune3.length; i++){
      hero_tab01.find('.lvg_runes.rune3').append('<div class="ui-block-' + getBlockChar(i+1) + '"><a href="#" class="ui-btn rune btn-disable" style="background-image: url('+ img_path + 'runes/' + mainRune.rune3[i].name + '.png)"></a><p>' + mainRune.rune3[i].info + '</p></div>');
    }
    hero_tab01.append(hr_line);

    /* Items */
    hero_tab01.append('<h3>' + lang_str_vn['item_title'] + '</h3><p class="note">' + lang_str_vn['btn_tap_item'] + '</p>');
    var itemBuild = hero.item_build;
    for(i=0; i<itemBuild.length; i++){
      hero_tab01.append('<p>' + (i+1) + '. ' + lang_str_vn['full_set'] + ': ' + itemBuild[i].name + '</p><div class="ui-grid-b lvg_items build' + i + '"></div>');
      var splItems = itemBuild[i].info.split(',');
      var iup = 1;
      for(j=0; j<splItems.length; j++){
        hero_tab01.find('.lvg_items.build' + i).append('<div class="ui-block-' + getBlockChar(iup) + '"><a href="#' + splItems[j] + '" class="ui-btn item btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path + 'items/' + splItems[j] + '.png)"></a></div>');
        iup = checkGridB(iup);
      }
    }

    /* Team and enemy */
    var heroBattle = hero.hero_battle;
    for(i=0; i<heroBattle.length; i++){
      var txtHero = '';
      var heroBattleInfo = heroBattle[i].info;
      for(j=0; j<heroBattleInfo.length; j++){
        txtHero += '<div><a href="#hero-page" class="hero-tap btn_show_ads" data-page="' + heroBattleInfo[j].hero_id + '" style="background-image: url('+ img_path + 'champs/' + heroBattleInfo[j].id_page +'/avat1.jpg)"><span>' + hero_list[heroBattleInfo[j].hero_id].hero_name + '</span></a></div>';
      }
      hero_tab02.append('<h3>' + hero_name + ' ' + heroBattle[i].name + '</h3><p class="note">*' + hero_name + ' ' + heroBattle[i].desc + '</p><div class="lvg_champs">' + txtHero + '</div>');
    }

    /* Story */
    hero_tab03.append(hr_line);
    var heroStory = hero.hero_story;
    hero_tab03.append('<h3>' + lang_str_vn['hero_story'] + ' ' + hero_name + '</h3><p>' + heroStory + '</p>');

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
      lvgSlider.append('<a href="' + wallPath + heroSkin[i].wall + '" class="ui-btn lvg_walls"><span>' + lang_str_vn['wall_download'] + '</span></a>');
      checkShow(heroSkin[i].wall, function(){
        lvgSlider.append('<div class="thumb-wrap"><img src="' + img_path + 'champs/' + hero_id + '/' + heroSkin[i].img + '" alt=""></div>');
      });
    }
  }

});

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