$('document').ready(function(){
  var body = $('body'),i,j;
  var img_path = 'shared/img/';
  var popup_close = '<a href="#" data-rel="back" class="ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-right"></a>';
  var wallPath = 'http://lvgames.net/lienquan/wall/?champ=';
  var lang_vn = lang_vn_file;
  var hr_line = '<hr class="hr">';
  var img_path = 'shared/img/';
  var champs_free_str = 'valhein,airi';

  /* Hero loading */
  var hero_build = all_hero_file;
  var countHero = hero_build.length;
  var main_page = $('#main');
  for(i=countHero-1; i>=0; i--){
    main_page.find('.lvg_champs').append('<div data-filtertext="' + hero_build[i].id + ' ' + hero_build[i].id_page + ' ' + hero_build[i].name + '" class="ui-screen-hidden ' + hero_build[i].id + ' ' + hero_build[i].position + '"><a href="#hero-page" class="ui-btn hero-tap btn_show_ads" data-page="' + hero_build[i].id + '" style="background-image: url(' + img_path + 'champs/' + hero_build[i].id_page + '/thumb1.jpg);"><span>' + hero_build[i].name + '</span></a></div>');
  }

  /* Items loading */
  var all_item = all_item_file;
  var itemAllPage = $('.lvg_item_all');
  for(i=0; i<all_item.length; i++){
    body.find('.items-wrap').append('<div class="item ui-content" data-theme="a" id="' + all_item[i].id + '">' + popup_close + '<strong>' + all_item[i].name + '</strong><p>' + all_item[i].info + '</p></div>');
    itemAllPage.append('<div data-filtertext="' + all_item[i].id + ' ' + all_item[i].name + ' ' + change_vn_text(all_item[i].name) + '" class="ui-block-b"><a href="#' + all_item[i].id + '" class="ui-btn item btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path + 'items/' + all_item[i].id + '.png)"></a></div>');
  }

  /* Spells loading */
  var all_spell = all_spell_file;
  var spellAllPage = $('.lvg_spell_all');
  for(i=0; i<all_spell.length; i++){
    body.find('.spells-wrap').append('<div class="item ui-content" data-theme="a" id="' + all_spell[i].id + '">' + popup_close + '<strong>' + all_spell[i].name + '</strong><p>' + all_spell[i].info + '</p></div>');
    spellAllPage.append('<div data-filtertext="' + all_spell[i].id + ' ' + all_spell[i].name + ' ' + change_vn_text(all_spell[i].name) + '" class="ui-block-b"><a href="#' + all_spell[i].id + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path + 'skills/' + all_spell[i].id + '.png)"></a></div>');
  }

  // Finding champs
  var lvg_select_champs = $('.lvg_select_champs');
  lvg_select_champs.find('input').attr('placeholder', countHero + ' ' + lang_vn['find_hero']);
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
    var data_hero = $(this).attr('data-page');
    $('#hero-page').remove();
    body.append('<div data-role="page" id="hero-page" class="'+$(this).parent().attr('class')+'"><div data-role="header" data-position="fixed" data-fullscreen="true"><a href="#main" class="ui-btn-left">Back</a><h1></h1><a href="#news-panel" class="ui-btn-right">News</a></div><div class="lvg_holder"><div data-role="tabs" id="hero-tabs" class="tabs-fixed"><div data-role="navbar"><ul><li><a href="#hero-tab01">Guide</a></li><li><a href="#hero-tab02">Tips</a></li><li><a href="#hero-tab03">Info</a></li><li><a href="#hero-tab04">Skins</a></li></ul></div><div id="hero-tab01"></div><div id="hero-tab02"></div><div id="hero-tab03"></div><div id="hero-tab04"></div></div></div></div>');
    $('#hero-page').trigger('create');
    $.ajax({
      cache: false,
      type: "GET",
      url: 'http://lvgames.net/cnlq_app/champs/'+data_hero+'.json',
      async: true,
      success : function(val) {
        add_hero_page(val);
      }
    });
    $.mobile.changePage('#hero-page', { allowSamePageTransition: true, transition: "none" });
  });

  $(this).on("click","a[href*='#hero-tab0']",function(){
    $('html, body').animate({ scrollTop: $('#hero-page').offset().top }, 1);
  });

  $(this).on("click","a[href='#main']",function(){
    $('.lvg_main_img').attr('style', '');
  });

  function add_hero_page(idhero){
    // var hero_list = infoHeros;
    // var hero = hero_list[idhero];
    var hero = idhero;
    var hero_id = hero.hero_id;
    var hero_name = hero.hero_name;
    var hero_info = hero.main_info;
    var hero_page = $('#hero-page');

    var hero_tab01 = hero_page.find('#hero-tab01');
    var hero_tab02 = hero_page.find('#hero-tab02');
    var hero_tab03 = hero_page.find('#hero-tab03');
    var hero_tab04 = hero_page.find('#hero-tab04');

    hero_page.find('h1').text(hero_name);

    $('.lvg_main_img').css({'background-image':'url(shared/img/champs/'+ hero.hero_id +'/screen.jpg)'});

    /* Common info */
    hero_tab03.append('<h3>' + lang_vn['info_common'] + '</h3>');
    checkShow(hero_info.price_gold,function(){
      hero_tab03.append('<p class="price">' + hero_info.price_gold + '</p>');
    });
    checkShow(hero_info.price_voucher,function(){
      hero_tab03.append('<p class="price voucher">' + hero_info.price_voucher + '</p>');
    });
    checkShow(hero_info.price_text,function(){
      hero_tab03.append('<p>' + hero_info.price_text + '</p>');
    });
    hero_tab03.append('<p>' + lang_vn['hero_position'] + ': ' + hero_info.position + '</p><p>' + lang_vn['hero_special'] + ': ' + hero_info.special + '</p>');
    checkShow(hero_info.lane,function(){
      hero_tab03.append('<p>' + lang_vn['hero_lane'] + ': ' + hero_info.lane + '</p>');
    });

    /* Skill detail */
    var hero_skill = hero.main_skill;
    var skills_old_hero = '';
    if($('.skills-wrap').attr('data-hero') != null) {
      skills_old_hero = $('.skills-wrap').attr('data-hero');
      $('.skills-wrap').attr('data-hero', hero_id);
    }
    $('[id*="'+skills_old_hero+'_Skill"][class*="ui-popup"]').remove();
    $('.skills-wrap').children().remove();
    hero_tab03.append(hr_line);
    hero_tab03.append('<h3>' + lang_vn['hero_skill'] + '</h3><p class="note">' + lang_vn['btn_tap'] + '</p><div class="lvg_skills detail"></div>');
    $('.skills-wrap').append('<div id="' + hero_id + '_Skill0" class="item ui-content" data-theme="a">' + popup_close + '<strong>' + lang_vn['normal_skill'] + '</strong><p>' + lang_vn['normal_skill_info'] + '</p></div>');
    for(i=0; i<4; i++){
      hero_tab03.find('.lvg_skills.detail').append('<div><a href="#' + hero_id + '_Skill' + (i+1) + '" class="ui-btn skill btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path +'champs/' + hero_id + '/skill' + (i+1) + '.png)"></a></div>');
      $('.skills-wrap').append('<div id="' + hero_id + '_Skill' + (i+1) + '" class="item ui-content" data-theme="a">' + popup_close + '<strong>' + hero_skill[i].name + '</strong><p>' + hero_skill[i].info + '</p></div>');
    }
    $('.popup-wrap.skills-wrap > .item').enhanceWithin().popup();

    /* Skill up */
    var hero_skill_up = hero.skill_up;
    hero_tab02.append('<h3>' + lang_vn['skill_up'] + '</h3>');
    hero_tab02.append('<p class="note">*Từ 1 -> 15 là cấp độ của tướng, hãy tăng theo gợi ý.</p>');
    for(i=0;i<hero_skill_up.length;i++){
      hero_tab02.append('<p>'+hero_skill_up[i].name+'</p><div class="lvg_incskill_wrap"><div class="lvg_incskill_info"></div><div class="lvg_incskill"><div>' + hero_skill_up[i].line1 + '</div><div>' + hero_skill_up[i].line2 + '</div><div>' + hero_skill_up[i].line3 + '</div></div>');
    }
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
    for(i=0; i<4; i++){
      $('.lvg_incskill_info').append('<div><a href="#' + hero_id + '_Skill' + (i+1) + '" class="btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path +'champs/' + hero_id + '/skill' + (i+1) + '.png)"></a></div>');
    }

    /* Skill combo */
    hero_tab02.append(hr_line);
    hero_tab02.append('<div class="lvg_combo"></div>');
    var skillCombo = hero.skill_combo;
    var lvgCombo = hero_tab02.find('.lvg_combo');
    lvgCombo.append('<h3>Combo chiêu thức</h3>');
    lvgCombo.append('<p class="note">' + lang_vn['btn_tap'] + '</p>');
    for(i=0; i<skillCombo.length; i++){
      lvgCombo.append('<p>' + skillCombo[i].name + '</p><div class="combo" data-skill="' + hero_id + '">' + skillCombo[i].info + '</div>');
    }
    lvgCombo.children('.combo').each(function() {
      var txtCombo = $(this).text();
      var splCombo = txtCombo.split(',');
      $(this).text('');
      for(j=0; j<splCombo.length; j++){
        if(splCombo[j] != "0"){
          $(this).append('<div><a href="#' + hero_id + '_Skill' + splCombo[j] + '" class="btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path +'champs/' + hero_id + '/skill' + splCombo[j] + '.png)"></a></div>');
        }else{
          $(this).append('<div><a href="#' + hero_id + '_Skill' + splCombo[j] + '" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path +'common/normal.png)"></a></div>');
        }
      }
    });

    /* Items */
    hero_tab01.append('<h3>' + lang_vn['item_title'] + '</h3><p class="note">' + lang_vn['btn_tap_item'] + '</p>');
    var itemBuild = hero.item_build;
    for(i=0; i<itemBuild.length; i++){
      hero_tab01.append('<p>' + (i+1) + '. ' + lang_vn['full_set'] + ': ' + itemBuild[i].name + '</p><div class="lvg_items build' + i + '"></div>');
      var splItems = itemBuild[i].info.split(',');
      var iup = 1;
      for(j=0; j<splItems.length; j++){
        hero_tab01.find('.lvg_items.build' + i).append('<div><a href="#' + splItems[j] + '" class="btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path + 'items/' + splItems[j] + '.png)"></a></div>');
        iup = checkGridB(iup);
      }
    }
    hero_tab01.append(hr_line);

    /* Runes */
    var hero_rune_up = hero.main_rune;
    hero_tab01.append('<h3>' + lang_vn['hero_rune'] + '</h3>');
    for(i=0;i<hero_rune_up.length;i++){
      var rune_inner = hero_rune_up[i].info;
      var rune_str = '';
      for(j=0;j<rune_inner.length;j++){
        rune_str += '<div><span class="rune" style="background-image: url('+ img_path + 'runes/' + rune_inner[j].name + '.png)"></span><div>' + rune_inner[j].info + '</div></div>'
      }
      hero_tab01.append('<p>' + hero_rune_up[i].name+ '</p><div class="lvg_runes">'+rune_str+'</div>');
    }

    /* Skill Tips */
    var skillNote = hero.skill_note;
    hero_tab02.append(hr_line);
    hero_tab02.append('<h3>Mẹo chơi</h3>');
    hero_tab02.append('<p class="note">*Một số mẹo nhỏ cho các bạn mới chơi tham khảo</p>');
    hero_tab02.append('<p>' + skillNote + '</p>');

    /* Skill special */
    hero_tab01.append(hr_line);
    var skillSpecial = hero.skill_special;
    hero_tab01.append('<h3>' + lang_vn['hero_special_skill'] + '</h3><p>' + lang_vn['hero_special_skill_info'] + '</p><p class="note">' + lang_vn['btn_tap_spell'] + '</p><div class="lvg_skills_sp">' + skillSpecial + '</div>');
    var lvgSkillSp = hero_tab01.find('.lvg_skills_sp');
    var splSkillSp = lvgSkillSp.text().split(',');
    lvgSkillSp.text('');
    for(i=0; i<splSkillSp.length; i++){
      lvgSkillSp.append('<div><a href="#' + splSkillSp[i] + '" class="btn_show_ads" data-rel="popup" data-position-to="window" style="background-image: url('+ img_path + 'skills/' + splSkillSp[i] + '.png)"></a></div>');
    }

    /* Team and enemy */
    var heroBattle = hero.hero_battle;
    for(i=0; i<heroBattle.length; i++){
      var txtHero = '';
      var heroBattleInfo = heroBattle[i].info;
      hero_tab02.append(hr_line);
      hero_tab02.append('<h3>' + heroBattle[i].name + '</h3>');
      hero_tab02.append('<p class="note">*Tap vào tướng để xem chi tiết</p>');
      for(j=0; j<heroBattleInfo.length; j++){
        txtHero += '<div class="lvg_champs_related"><div class="lvg_champs"><div>'+get_name_hero(heroBattleInfo[j].hero_id)+'</div></div><p>'+heroBattleInfo[j].info+'</p></div>';
      }
      hero_tab02.append(txtHero);
    }

    /* Story */
    hero_tab03.append(hr_line);
    var heroStory = hero.hero_story;
    hero_tab03.append('<h3>' + lang_vn['hero_story'] + ' ' + hero_name + '</h3><p>' + heroStory + '</p>');

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
      lvgSlider.append('<a href="' + wallPath + heroSkin[i].wall + '" class="ui-btn lvg_walls"><span>' + lang_vn['wall_download'] + '</span></a>');
      checkShow(heroSkin[i].wall, function(){
        lvgSlider.append('<div class="thumb-wrap"><img src="' + img_path + 'champs/' + hero_id + '/' + heroSkin[i].img + '" alt=""></div>');
      });
    }
  }

});

function get_name_hero(id_hero){
  var hero_name = $('#all_champs.lvg_champs .' + id_hero).html();
  return hero_name;
}

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