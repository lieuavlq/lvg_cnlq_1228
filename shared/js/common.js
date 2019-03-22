$(function(){
	var body = $('body'),i,j;
  var storage = window.localStorage;
  var marketLink = storage.getItem('store_url_storage');
  var lang_vn = lang_vn_file;
  var mailContact = 'lvgames.net@gmail.com';
  var fbContact = 'https://www.facebook.com/LVGamesDotNet';
  var fbName = '@LVGamesDotNet';

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
    $(this).parent().addClass('active');
    $('.wrap-btn-shop02').removeClass('active');
    $.ajax({
        url: "http://lvgames.net/cnlq_app/shop/shop.json",
        success: function (output) {
          get_shop_content(output);
        }
    });
  });

  $(this).on("click",".btn_shop_page",function(){
    get_shop_page($(this).attr('data-page'));
  });

  /* Outside panel */
  $( ".pnl_outside" ).panel();

});

function get_shop_page(num){
  $.ajax({
      url: "http://lvgames.net/cnlq_app/shop/shop"+num+".json",
      success: function (output) {
        add_more_item_shop(output);
      }
  });
}

function add_more_item_shop(val){
  var lvg_shop_list = $('.lvg_shop_list');
  if(val.next == 0) { $('.lvg_shop_page .wrap_btn_old').hide(); }
  var shop_item = val.item;
  for(var i=0;i<shop_item.length;i++) {
    lvg_shop_list.append('<div data-filtertext="'+shop_item[i].key+'"><a href="'+shop_item[i].url+'" target="_blank"><img src="'+shop_item[i].img+'" alt=""><p class="pro-wrap"><span class="pro-code">'+shop_item[i].code+'</span>: <span class="pro-price">'+shop_item[i
      ].price+'</span></p></a></div>');
  }
  $('.lvg_shop_page .wrap_btn_old').attr('data-page', val.next);
}

function get_shop_content(val){
  var lvg_shop = $('.lvg_shop_page');
  lvg_shop.children().remove();
  var shop_item = val.item;
  if(shop_item.length > 0) {
    lvg_shop.append('<p class="note">'+val.note+'</p><div class="lvg_shop_ip_wrap"><input id="lvg_shop_filter" data-type="search" placeholder="Tìm hàng theo tên tướng"></div>');
    lvg_shop.append('<div class="lvg_shop_list" data-filter="true" data-input="#lvg_shop_filter"></div>');
    for(var i=0;i<shop_item.length;i++) {
      lvg_shop.children('.lvg_shop_list').append('<div data-filtertext="'+shop_item[i].key+'"><a href="'+shop_item[i].url+'" target="_blank"><img src="'+shop_item[i].img+'" alt=""><p class="pro-wrap"><span class="pro-code">'+shop_item[i].code+'</span>: <span class="pro-price">'+shop_item[i
        ].price+'</span></p></a></div>');
    }
  }else{
    lvg_shop.append('<p class="note">*Shop chưa mở cửa quay lại sau nha!!</p>');
  }
  lvg_shop.append('<div class="wrap_btn_old"><a href="#" class="btn_shop_page" data-page="'+val.next+'">&darr; Xem thêm sản phẩm &darr;</a></div>');
  lvg_shop.children('.lvg_shop_list').listview().listview('refresh');
}