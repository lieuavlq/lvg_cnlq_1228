$(function(){
	var body = $('body'),i,j;
  var storage = window.localStorage;
  var marketLink = storage.getItem('store_url_storage');
  var lang_vn = lang_vn_file;
  var mailContact = 'lvgames.net@gmail.com';
  var fbContact = 'https://www.facebook.com/LVGamesDotNet';
  var fbName = '@LVGamesDotNet';

  // Add menu left
  // $('.lvg_menu_left').append('<h2>' + lang_vn['app_name'] + '</h2><p>' + lang_vn['thanks_for'] + '</p><p><a href="mailto:' + mailContact + '" target="_blank">' + lang_vn['btn_mail'] + '</a></p><p><a href="' + fbContact + '" target="_blank">' + fbName + '</a></p><p>' + lang_vn['mail_status'] + '</p><p><a href="' + marketLink + '" target="_blank">' + lang_vn['review'] + '</a></p><a href="#" data-rel="close" class="ui-btn ui-btn-inline">' + lang_vn['btn_close'] + '</a>');

  // body.append('<div id="wrap-review"><div class="holder"><div class="inner"><div class="content"><p>' + lang_vn['review_info'] + '</p><p class="al-center">&#9734;&#9734;&#9734;&#9734;&#9734;</p><p><a href="' + marketLink + '" rel="external" class="ui-btn btn-sys btn-review">' + lang_vn['review'] + '</a><a href="#" class="ui-btn btn-close">' + lang_vn['next_time'] + '</a></p></div></div></div></div>');

  // body.append('<div id="wrap-updated"><div class="holder"><div class="inner"><div class="content"><p><strong>' + lang_vn['update_title'] + '</strong></p><br><p>' + lang_vn['update_info'] + '</p><p><a href="' + marketLink + '" rel="external" class="ui-btn btn-sys btn-review">' + lang_vn['update_btn'] + '</a></p></div></div></div></div>');

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

  /* Shop page */
  $(this).on("click",".btn-shop-get",function(){
    $.ajax({
        url: "http://lvgames.net/cnlq_app/shop/shop.json",
        type: 'GET',
        success: function (output) {
          get_shop_content(output);
        }
    });
  });

  /* Popup outside */
  $( ".popup-wrap .item" ).enhanceWithin().popup();

  /* News panel */
  $( ".pnl_outside" ).panel();

});

function get_shop_content(val){
  var lvg_shop = $('.lvg_shop_page');
  lvg_shop.children().remove();
  var shop_item = val.item;
  if(shop_item.length > 0) {
    lvg_shop.append('<p class="note">'+val.note+'</p><div><input id="lvg_shop_filter" data-type="search" placeholder="Tìm hàng theo tên tướng"></div>');
    lvg_shop.append('<div class="lvg_shop_list" data-filter="true" data-input="#lvg_shop_filter"></div>');
    for(var i=0;i<shop_item.length;i++) {
      lvg_shop.children('.lvg_shop_list').append('<div data-filtertext="'+shop_item[i].key+'"><div class="lvg_shop_item"><a href="'+shop_item[i].url+'"><img src="'+shop_item[i].img+'" alt=""><p class="pro-wrap"><span class="pro-code">'+shop_item[i].code+'</span>: <span class="pro-price">'+shop_item[i
        ].price+'</span></p></a></div></div>');
    }
  }else{
    lvg_shop.append('<p class="note">*Shop chưa mở cửa quay lại sau nha!!</p>');
  }
  lvg_shop.append('<div class="wrap_btn_old" data-page="'+val.next+'"><a href="#" class="btn_shop_page">&darr; Xem thêm sản phẩm &darr;</a></div>');
  lvg_shop.children('.lvg_shop_list').listview().listview('refresh');
}