$(function(){
	var body = $('body');
  var storage = window.localStorage;
  var lang_vn = lang_vn_file;
  var app_url = storage.getItem('app_url_store');

  body.css({'min-height': $(window).height()});

  //Review app
  body.append('<div id="wrap-review" class="lvg_popup"><div class="content"><p>' + lang_vn['review_info'] + '</p><p class="ttl">&#9734;&#9734;&#9734;&#9734;&#9734;</p><p><a href="' + app_url + '" class="lvg_popup_link btn-review">' + lang_vn['review'] + '</a><a href="#" class="lvg_popup_link btn-close">' + lang_vn['next_time'] + '</a></p></div></div>');

  //Update popup
  body.append('<div id="wrap-updated" class="lvg_popup"><div class="content"><p class="ttl">' + lang_vn['update_title'] + '</p><p><a href="' + app_url + '" target="_blank" class="lvg_popup_link">' + lang_vn['update_btn'] + '</a></p></div></div>');

  //Navbar click
  $(this).on('click','.lvg_popup_btn', function(e){
    e.preventDefault();
    var a_href = $(this).attr('href');
    $('.lvg_popup').removeClass('active');
    $(a_href).addClass('active');
  });

  $(this).on('click','.lvg_popup_close', function(e){
    e.preventDefault();
    $('.lvg_popup').removeClass('active');
  });

  $('html, body').on('click', function(){
    $('.lvg_popup').removeClass('active');
  });

  //Navbar click
  $(this).on('click','[data-role="navbar"] a', function(){
    var a_href = $(this).attr('href');
    $('[data-role="navbar"] a').removeClass('active');
    $(this).addClass('active');
    $('[id*="hero-tab0"]').hide();
    $(a_href).show();
    $('html, body').animate({ scrollTop: $('#deviceready').offset().top }, 1);
  });

  //Open page
  $('#main').addClass('active');
  $(this).on('click','a[class*="ui-btn"]',function(e){
    e.preventDefault();
    $('[data-role="page"]').removeClass('active');
    $('.lvg_change_page').show().stop().fadeOut(400);
    var data_page = $(this).attr('href');
    $(data_page).addClass('active');
  });

  /* Review app */
  var wrap_review = $('#wrap-review');
  if (storage.getItem("app_review_store") === null) {
    setTimeout(function(){
      wrap_review.addClass('active');
    }, 180000);
  }
  wrap_review.find('.btn-review').click(function() {
		wrap_review.removeClass('active');
		storage.setItem("app_review_store", 1);
  });
  wrap_review.find('.btn-close').click(function() {
    wrap_review.removeClass('active');
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