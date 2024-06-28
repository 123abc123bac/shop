$(function() {
    $('.caidan li').each(function(i,ele) {
        $(this).attr('id',i);
    });
    $('.caidan').on('click','li',function() {
        $(this).addClass('butouming').siblings().removeClass('butouming');
        var xulie = $(this).attr('id');
        $('.neirong .fenlei').eq(xulie).show().siblings().hide();
    });
    $('.jia').on('click',function() {
        var zhi = $(this).siblings('.geshu').text();
        zhi++;
        if(zhi>0) {
            $(this).siblings('.geshu').show().siblings('.jian').removeClass('xiaoshi');
        }
        $(this).siblings('.geshu').text(zhi);
        jisuan();
    });
    $('.jian').on('click',function() {
        var zhi = $(this).siblings('.geshu').text();
        zhi--;
        if(zhi < 1) {
            $(this).siblings('.geshu').hide().siblings('.jian').addClass('xiaoshi');
            zhi=0;
        }
        $(this).siblings('.geshu').text(zhi);
        jisuan();
    });
    function jisuan() {
        $('.bai').html("<div class='yangshi'><div>商品</div><div>数量</div><div>单价</div></div>");
        var zongjia = 0;
        var shuzu = [];
        var mingzi = [];
        var jiage = [];
        $('.mingcheng').each(function(i,ele) {
            mingzi.push($(ele).text());
        });
        $('.geshu').each(function(i,ele) {
            shuzu.push($(ele).text());
        });
        $('.jiage').each(function(i,ele) {
            jiage.push($(ele).text());
            var danjia = $(ele).text();
            danjia = danjia.substr(1);
            zongjia = zongjia + shuzu[i]*danjia;
        });
        $('.geshu').each(function(i,ele) {
            if($(ele).text()>0) {
                $('.bai').append("<div><span>"+mingzi[i]+"</span><div><a href='javascript:;' class='zuihoujian'>-</a><span id="+i+">"+$(ele).text()+"</span><a href='javascript:;' class='zuihoujia'>+</a></div><span>"+jiage[i]+"</span></div>");
            }
        });
        $('.qian').html("￥"+zongjia.toFixed(2));
    }
    var kaiguan = true;
    $('.zhangdan').on('click',function() {
        if(kaiguan) {
            $('.hei').show();
            $('.bai').show();
            kaiguan = false;
        } else {
            $('.hei').hide();
            $('.bai').hide();
            kaiguan = true;
        }
    });
    $('.hei').on('click',function() {
        $('.hei').hide();
        $('.bai').hide();
        kaiguan = true;
    });
    $('.bai').on('click','.zuihoujia',function() {
        var zhi = $(this).siblings('span').text();
        var xulie = $(this).siblings('span').attr('id');
        zhi++;
        $(this).siblings('span').text(zhi);
        $('.geshu').eq(xulie).text(zhi);
        jisuan();
    });
    $('.bai').on('click','.zuihoujian',function() {
        var zhi = $(this).siblings('span').text();
        var xulie = $(this).siblings('span').attr('id');
        zhi--;
        if(zhi<1) {
            $('.geshu').eq(xulie).hide().siblings('.jian').addClass('xiaoshi');
        }
        $(this).siblings('span').text(zhi);
        $('.geshu').eq(xulie).text(zhi);
        jisuan();
    });
});