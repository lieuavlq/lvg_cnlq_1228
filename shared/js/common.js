$(function(){
	var body = $('body'),i,j;
  var storage = window.localStorage;
  var marketLink = storage.getItem('store_url_storage');
  var lang_vn = lang_vn_file;
  var mailContact = 'lvgames.net@gmail.com';
  var fbContact = 'https://www.facebook.com/LVGamesDotNet';
  var fbName = '@LVGamesDotNet';

  // Add menu left
  $('.lvg_menu_left').append('<h3>' + lang_vn['app_name'] + '</h3><p>' + lang_vn['thanks_for'] + '</p><p><a href="mailto:' + mailContact + '" target="_blank">' + lang_vn['btn_mail'] + '</a></p><p><a href="' + fbContact + '" target="_blank">' + fbName + '</a></p><p>' + lang_vn['mail_status'] + '</p><p><a href="' + marketLink + '" target="_blank">' + lang_vn['review'] + '</a></p><a href="#" data-rel="close" class="ui-btn ui-btn-inline">' + lang_vn['btn_close'] + '</a>');

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
    $(this).text(lang_vn['liked']).css({'pointer-events': 'none'});
  });

  /* Popup outside */
  $( ".popup-wrap .item" ).enhanceWithin().popup();

  /* News panel */
  // $( "#news-panel" ).panel();
  $( ".pnl_outside" ).panel();

  // body.append('<div id="wrap-review"><div class="holder"><div class="inner"><div class="content"><p>' + lang_vn['review_info'] + '</p><p class="al-center">&#9734;&#9734;&#9734;&#9734;&#9734;</p><p><a href="' + marketLink + '" rel="external" class="ui-btn btn-sys btn-review">' + lang_vn['review'] + '</a><a href="#" class="ui-btn btn-close">' + lang_vn['next_time'] + '</a></p></div></div></div></div>');

  // body.append('<div id="wrap-updated"><div class="holder"><div class="inner"><div class="content"><p><strong>' + lang_vn['update_title'] + '</strong></p><br><p>' + lang_vn['update_info'] + '</p><p><a href="' + marketLink + '" rel="external" class="ui-btn btn-sys btn-review">' + lang_vn['update_btn'] + '</a></p></div></div></div></div>');

});