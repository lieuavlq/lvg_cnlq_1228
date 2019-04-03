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
        // StatusBar.hide();

        // var admobid = {};
        // admobid = {
        //     banner: 'ca-app-pub-1308924557880612/1873635551',
        //     interstitial: 'ca-app-pub-1308924557880612/8909569777',
        // };

        // admob.banner.config({
        //     id: admobid.banner,
        //     autoShow: true,
        //     isTesting: false,
        // });
        // admob.banner.prepare();

        // admob.interstitial.config({
        //     id: admobid.interstitial,
        //     autoShow: false,
        //     isTesting: false,
        // });
        // admob.interstitial.prepare();

        // $('document').ready(function(){
        //     var connectVal = checkConnection();
        //     var storage = window.localStorage;

        //     /* Check internet exists */
        //     if(connectVal!=1){
        //       //if not connect
        //     }

        //     var wrap_adv_div = $('#wrap-countdown');
        //     var adv_time = 120000;
        //     var delay_show_banner = setTimeout(function(){
        //         wrap_adv_div.addClass('allready');
        //     }, adv_time);

        //     var myCount = function() {
        //         var countdownClass = wrap_adv_div.attr('class');
        //         if(countdownClass == "allready"){
        //             clearTimeout(delay_show_banner);
        //             wrap_adv_div.removeClass('allready').addClass('notready');
        //             admob.interstitial.show();
        //             delay_show_banner = setTimeout(function(){
        //               wrap_adv_div.removeClass('notready').addClass('allready');
        //             }, adv_time);
        //         }
        //     };

        //     $(this).on('click', '.btn_show_ads', function(){
        //       myCount();
        //     });
        // });

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