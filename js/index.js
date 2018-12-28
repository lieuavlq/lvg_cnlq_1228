/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        StatusBar.hide();

        var admobid = {};
        admobid = {
            banner: 'ca-app-pub-1308924557880612/1873635551',
            interstitial: 'ca-app-pub-1308924557880612/8909569777',
        };

        admob.banner.config({
            id: admobid.banner,
            autoShow: true,
            isTesting: false,
        });
        admob.banner.prepare();

        admob.interstitial.config({
            id: admobid.interstitial,
            autoShow: false,
            isTesting: false,
        });
        admob.interstitial.prepare();

        $('document').ready(function(){

            var connectVal = checkConnection();
            var storage = window.localStorage;

            var wrapCountdown = $('#wrap-countdown');
            var lvgChamps = $('.lvg_champs');
            var timeClickShowBanner = 90000;
            var delayShowBanner = setTimeout(function(){
                wrapCountdown.addClass('allready');
            }, timeClickShowBanner);

            var myCount = function() {
                var countdownClass = wrapCountdown.attr('class');
                if(countdownClass == "allready"){
                    clearTimeout(delayShowBanner);
                    wrapCountdown.removeClass('allready').addClass('notready');
                    admob.interstitial.show();
                    delayShowBanner = setTimeout(function(){
                        wrapCountdown.removeClass('notready').addClass('allready');
                    }, timeClickShowBanner);
                }
            };

            $(this).on('click', '.btn_show_ads', function(){
                if($(this).hasClass('btn_no_ads')){
                    //nothing
                }else{
                    myCount();
                }
            });

            var videoDm = 'https://www.youtube.com/embed/';
            var videoRef = '?autoplay=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3';
            var wrapVideoPopup = $('#wrap-video-popup');
            var commonLang = string_common_vn;
            wrapVideoPopup.append('<a href="#" class="close btn_show_ads">' + commonLang['btn_close'] + '</a>');
            $(this).on('click', '.btn-ifvideo', function(){
                var idvideo = $(this).attr('data-videoid');
                wrapVideoPopup.find('.close').removeClass('btn_no_ads');
                if($(this).hasClass('no_ads')){
                    wrapVideoPopup.find('.close').addClass('btn_no_ads');
                }
                if(connectVal!=0){
                    wrapVideoPopup.append('<iframe id="video-iframe" src="' + videoDm + idvideo + videoRef + '" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>').show();
                }
            });

            wrapVideoPopup.find('.close').click(function(){
                $(this).parent().find('iframe').remove();
                $(this).parent().find('video').remove();
                $(this).parent().hide();
            });

            /* New video call */
            var videotag_path = 'http://lvgames.net/lienquan/videos/';
            $(this).on('click', '.btn-videotag', function(){
                var videotag_id = $(this).attr('data-videoid');
                wrapVideoPopup.append('<video controls controlsList="nodownload nofullscreen noremoteplayback"><source src="' + videotag_path + videotag_id + '.mp4" type="video/mp4"></video>').show();
            });

            var appVersion = $('body').attr('data-appversion');
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://lvgames.net/lvgversion/lvg_camnanglienquan.json",
                async: false,
                success : function(val)
                {
                    if(val.version_code > appVersion){
                        $('#wrap-updated').addClass('active');
                    }
                    storage.setItem('champs_free_storage', val.champs_free);
                    storage.setItem('store_url_storage', val.store_url);
                    storage.setItem('shop_active_storage', val.shop_active);
                    storage.setItem('app_caudo_url_storage', val.app_caudo_url);
                    // storage.setItem('develop_url_storage', val.develop_url);
                }
            });

            /* Free champs */
            var freeChamps = storage.getItem("champs_free_storage");
            if (freeChamps != '0') {
                var splFreeChamps = freeChamps.split(',');
                for(var i=0; i<splFreeChamps.length; i++){
                    $('.lvg_champs').find('.' + splFreeChamps[i]).addClass('free');
                }
            }

            var app_caudo_url = storage.getItem("app_caudo_url_storage");
            if (app_caudo_url != '0') {
                $('.btn-caudo-link').attr('href', app_caudo_url);
            }

            var shop_active_status = storage.getItem("shop_active_storage");
            if (shop_active_status != '0') {
                $('.shop_active').show().children().attr('href', shop_active_status);
                $('.shop_noactive').hide();
            }

            function getNewsAjax(pageNum,handleData){
                $.ajax({
                    url: "http://lvgames.net/lqm/lqmnews/page/" + pageNum + "/",
                    type: 'GET',
                    success: function (result) {
                        data = $.parseJSON(result);
                        handleData(data);
                    }
                });
            }

            var runNews = 0;
            var lvgNews = $('.lvg-news-content');
            var imgLoad = '<p class="al-center"><img src="shared/css/images/ajax-loader.gif" alt="" class="img-load"></p>';
            $(this).on('click', '.btn-news-get', function(){
                runNews++;
                if(runNews == 1){
                    lvgNews.append(imgLoad);
                    getNewsAjax(1,function(it){
                        lvgNews.find('.img-load').remove();
                        lvgNews.attr('data-pagi', it.max_page);
                        var output = it.items;
                        append_lvgnews(lvgNews,output);
                    });
                }
            });

            var pageRun = 2;
            $(this).on('click', '.btn_get_news_more', function(){
                lvgNews.find('.btn_get_news_more').remove();
                var dataPagi = lvgNews.attr('data-pagi');
                lvgNews.append(imgLoad);
                if(pageRun <= dataPagi){
                    getNewsAjax(pageRun,function(it){
                        lvgNews.find('.img-load').remove();
                        var output = it.items;
                        append_lvgnews(lvgNews,output);
                    });
                    pageRun++;
                }
            });

            var newsTimeout;
            $(this).on('click', '.btn-news-more', function(){
                clearTimeout(newsTimeout);
                lvgNews.children().remove();
                lvgNews.append(imgLoad);
                getNewsAjax(1,function(it){
                    lvgNews.find('.img-load').remove();
                    var output = it.items;
                    append_lvgnews(lvgNews,output);
                });
                $(this).css({'pointer-events': 'none'});
                newsTimeout = setTimeout(function(){
                    $('.btn-news-more').css({'pointer-events': 'auto'});
                }, 60000);
            });

            function append_lvgnews(lvgn,output){
                for(var i=0; i<output.length; i++){
                    lvgn.append('<div id="' + output[i].id + '" class="item ' + output[i].category + '"><div class="lvg-news-head"><img src="' + output[i].thumb + '" alt="" class="img"><h3 class="title">' + output[i].title + '</h3><span class="date">' + output[i].date + '</span></div><div id="' + output[i].id + '-popup" class="lvg-news-popup"><div class="inner"><a href="#" class="close btn_show_ads">Đóng</a><h3 class="title">' + output[i].title + '</h3><span class="date">' + output[i].catg_name + ' - ' + output[i].date + '</span><p class="news-like"><span>Lưu vào iu thích</span></p><div class="news-popup-content">' + output[i].content + '</div></div></div></div>');
                    var newsPopupContent = $('#' + output[i].id).find('.news-popup-content').text();
                    $('#' + output[i].id).find('.news-popup-content').text('').html(newsPopupContent);
                }
                lvgn.append('<div class="wrap_btn"><a href="#" class="btn_get_news_more">&darr; Tin tức củ hơn &darr;</a></div>');
            }

            /* News item click */
            var bodyWrap = $('body');
            var winHeight = $(window).height();
            $(this).on('click', '.lvg-news-head', function(){
                var itemId = $(this).parent().attr('id');
                $('#' + itemId + '-popup').show();
                bodyWrap.css({'overflow-y': 'hidden', 'height': winHeight});
            });

            /* Close News popup */
            $(this).on('click','.lvg-news-popup .close', function() {
                $(this).parents('.lvg-news-popup').hide();
                var innerHTML = $(this).parents('.lvg-news-popup').children().html();
                $(this).parents('.lvg-news-popup').children().html('').html(innerHTML);
                bodyWrap.css({'overflow-y': 'auto', 'height': 'auto'});
            });

            /* Redirect News popup */
            $(this).on('click','.news-popup-content a', function() {
                bodyWrap.css({'overflow-y': 'auto', 'height': 'auto'});
            });

            /* Check internet exists */
            if(connectVal!=1){
                $('.notify_wifi_text').text(commonLang['connect_wifi']).addClass('active');
            }

            function check_minutes(minutes){
                var mn;
                if(minutes < 10){
                    mn = "0" + minutes;
                }else{
                    mn = minutes;
                }
                return mn;
            }

            function change_alias(alias) {
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

            $('#main').snowfall({flakeCount : 150});

        });

    }
};

function checkConnection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 1;
    states[Connection.ETHERNET] = 1;
    states[Connection.WIFI]     = 1;
    states[Connection.CELL_2G]  = 1;
    states[Connection.CELL_3G]  = 1;
    states[Connection.CELL_4G]  = 1;
    states[Connection.CELL]     = 1;
    states[Connection.NONE]     = 0;
    return states[networkState];
}

document.addEventListener('admob.interstitial.events.CLOSE', function() {
  admob.interstitial.prepare();
});

app.initialize();