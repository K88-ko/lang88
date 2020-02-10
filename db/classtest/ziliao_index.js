/* 
* @Author: Marte
* @Date:   2018-05-08 15:12:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-08 15:30:59
*/

$(document).ready(function(){
    var mzIndex = function(){
        this.init();
    }
    mzIndex.prototype = {
        init:function(){
            this.heroFun();
        },
        //�깁썑饔ц걣�뉑뜟
        heroFun:function(){
            $(".hero-list-zhuanzhi li .hero-zhuanzhi").click(function(event) {
                $(this).addClass('zhuanzhi-active')
                $(this).parent().siblings().find('.hero-zhuanzhi').removeClass("zhuanzhi-active");
                var n = $(this).attr('tip');
                $('.newsList').hide();
                $('.newsList').stop().eq(n).show();
            });
        }
    }
    new mzIndex();
});