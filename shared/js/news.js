$(function(){
  var body = $('body');
  var window_h = $(window).height();
  var news_content_box = $('.lvg-news-content');
  var img_loading = '<p class="img-load"><img src="shared/css/images/ajax-loader.gif" alt=""></p>';

  function getNewsAjax(pageNum,handleData){
      $.ajax({
          url: "http://lvgames.net/lqm/lqmnews/page/" + pageNum + "/",
          success: function (result) {
              data = $.parseJSON(result);
              handleData(data);
          }
      });
  }

  $(this).on('click', '.btn-news-get', function(e){
    e.preventDefault();
    $(this).parent().addClass('active');
    $('.wrap-btn-news02').removeClass('active');
    setTimeout(function(){
      $('.wrap-btn-news01').removeClass('active');
      $('.wrap-btn-news02').addClass('active');
    },180000);

    $('#news .lvg_holder.sub').append(img_loading);
    news_content_box.children().remove();
    getNewsAjax(1,function(it){
        $('#news .lvg_holder.sub .img-load').remove();
        news_content_box.attr('data-pagi', it.max_page);
        var output = it.items;
        append_news_content_box(news_content_box,output);
    });
  });

  var page_run = 2;
  $(this).on('click', '.btn_news_old', function(e){
    e.preventDefault();
      news_content_box.find('.wrap_btn_old').remove();
      var dataPagi = news_content_box.attr('data-pagi');
      news_content_box.append(img_loading);
      if(page_run <= dataPagi){
          getNewsAjax(page_run,function(it){
              news_content_box.find('.img-load').remove();
              var output = it.items;
              append_news_content_box(news_content_box,output);
          });
          page_run++;
      }
  });

  function append_news_content_box(lvgn,output){
      for(var i=0; i<output.length; i++){
          lvgn.append('<div id="' + output[i].id + '" class="item ' + output[i].category + '"><div class="lvg-news-head"><div class="wrap-img"><img src="' + output[i].thumb + '" alt="" class="img"></div><h3 class="title">' + output[i].title + '</h3><span class="date">' + output[i].date + '</span></div><div id="' + output[i].id + '-popup" class="lvg-news-popup"><div class="inner"><a href="#" class="close btn_show_ads">Đóng</a><h3 class="title">' + output[i].title + '</h3><span class="date">' + output[i].catg_name + ' - ' + output[i].date + '</span><div class="news-popup-content">' + output[i].content + '</div></div></div></div>');
          var newsPopupContent = $('#' + output[i].id).find('.news-popup-content').text();
          $('#' + output[i].id).find('.news-popup-content').text('').html(newsPopupContent);
      }
      lvgn.append('<div class="wrap_btn_old"><a href="#" class="btn_news_old">&darr; Tin tức củ hơn &darr;</a></div>');
  }

  /* News item click */
  $(this).on('click', '.lvg-news-head', function(e){
      e.preventDefault();
      var itemId = $(this).parent().attr('id');
      $('#' + itemId + '-popup').show();
      body.css({'overflow-y': 'hidden', 'height': window_h});
      //table wrap
      $('.news-popup-content > table').each(function(){
        if($(this).width() > $(this).parent().width()){
          $(this).wrap('<div class="tbl-border-wrap"></div>');
        }
      });
  });

  /* Close News popup */
  $(this).on('click','.lvg-news-popup .close', function(e) {
      e.preventDefault();
      $(this).parents('.lvg-news-popup').hide();
      var innerHTML = $(this).parents('.lvg-news-popup').children().html();
      $(this).parents('.lvg-news-popup').children().html('').html(innerHTML);
      body.css({'overflow-y': 'auto', 'height': 'auto'});
  });

  /* Redirect News popup */
  $(this).on('click','.news-popup-content a', function(e) {
    e.preventDefault();
      body.css({'overflow-y': 'auto', 'height': 'auto'});
  });
});