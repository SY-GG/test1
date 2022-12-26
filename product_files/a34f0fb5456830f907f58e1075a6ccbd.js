
setTimeout(function(){


    (function(CAFE24API) {
        sessionStorage.setItem('MALL_ID',CAFE24API.MALL_ID);
        sessionStorage.setItem('SHOP_NO',CAFE24API.SHOP_NO);

        $('.clp_widget').each(function(){
            //<div class="clp_widget" module_key="5877f5a4eda67af8abf5a4302eda817a" module_type="live_card" id="wlive_card"></div>
            /*clp_app.load_clp_module({
                mkey:$(this).attr('module_key'),
                mtype:$(this).attr('module_type'),
                mid:$(this).attr('id'),
                mall_id:CAFE24API.MALL_ID,
                shop_no:CAFE24API.SHOP_NO,
            });*/
        });

        if(location.href.indexOf('/live24_player.html') >0){

        }

        //console.log('LIVE24 Player!!!');
        CAFE24API.getCustomerInfo(function (err,res) {
            if (err) {
                //console.log(err);
                sessionStorage.removeItem('USER_KEY');
                sessionStorage.removeItem('USER_MEMBER_ID');
                sessionStorage.removeItem('USER_MEMBER_GROUP_ID');
                sessionStorage.removeItem('USER_MEMBER_GROUP_NAME');
            } else {


                sessionStorage.setItem('USER_MEMBER_ID', res.customer.member_id);
                sessionStorage.setItem('USER_MEMBER_GROUP_ID', res.customer.group_no);
                sessionStorage.setItem('USER_MEMBER_GROUP_NAME', res.customer.group_name);





                /* if(!sessionStorage.getItem('USER_KEY')) {
                     $.ajax({
                         type: 'POST',
                         url: 'https://live24.app/cafe24/mall_user_sync',
                         data: {
                             mall_id: CAFE24API.MALL_ID,
                             member_id: res.customer.member_id,
                             shop_no: CAFE24API.SHOP_NO,
                         },
                         dataType: 'json',
                         success: function (res_sub, status) {
                             if (res_sub.code == 200) {
                                 sessionStorage.setItem('USER_KEY', res_sub.result.user_key);
                                 sessionStorage.setItem('USER_MEMBER_ID', res.customer.member_id);
                             } else {
                                 console.log(res.message);
                             }
                         },
                         error: function (request, status, error) {
                             console.log(request.responseText);
                         }
                     });
                 }*/


            }
        });



    })(CAFE24API.init({
        client_id : 'QFf0CgssYa4YTLAyyi7hJC',  // 사용할 앱의 App Key를 설정해 주세요.
        version : '2022-06-01'   // 적용할 버전을 설정해 주세요.
    }));


    console.log('LIVE24' , 'All in script init. 2.0');


},300);
