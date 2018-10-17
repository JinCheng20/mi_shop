// 右上角显示购物车的数量
function show_shop_num() {
    if (localStorage.length != 0) {
        var shop_num = localStorage.getItem('goods');
        shop_num = JSON.parse(shop_num);
        var _shop_num = '(' + shop_num.length + ')';
        $('.shop_car_num').text(_shop_num);
        console.log(_shop_num);
    } else {
        var _shop_num = '(' + 0 + ')';
        $('.shop_car_num').text(_shop_num);
    }
}
show_shop_num();
// 右上角悬停显示购物车商品详情
function show_shop_details() {
    if(localStorage.getItem('goods')){
        var shop_details = localStorage.getItem('goods');
        shop_details = JSON.parse(shop_details);
        for (var i = 0; i < shop_details.length; i++) {
            var shop_name = shop_details[i].goods_name;
            var shop_num = shop_details[i].token;
            var shop_type = shop_details[i].goods_type;
            var shop_color = shop_details[i].goods_color;
            var shop_price = shop_details[i].goods_price;
            var str =
                `<span class="shop_details">
            <span class="details_fl">${shop_name}</span>
            <span class="details_fl">${shop_type}</span>
            <span class="details_fl">${shop_color}</span>
            <span class="details_fl">${shop_price}</span>        
            <span class="details_fl">数量:${shop_num}</span>
        </span>`
            $(str).appendTo(".shopcar_num");
        }
    }
}

show_shop_details();



// head_menu_con
// 顶部菜单悬停显示下拉商品列表
$(".head_menu").hover(function () {
    $('.head_menu_con').stop();
    $('.head_menu_con').slideDown(300);
}, function () {
    $('.head_menu_con').stop();
    $('.head_menu_con').slideUp(300);
})

$('.head_menu').children().hover(function () {

    $(this).children(".head_menu_con").css("z-index", "1002");
    $(this).siblings().children(".head_menu_con").css("z-index", 999)
}, function () {
    $(this).children(".head_menu_con").css("z-index", "1001");
})

// 上方大图轮播图
var mySwiper = new Swiper('.big_banner_pic_wrap', {
    loop: true,
    // autoplay: true,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    fadeEffect: {
        crossFade: true,
    },
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

// 上方大图鼠标悬停停止播放
var obanner_box = document.querySelector('.big_banner_pic_wrap');
obanner_box.onmouseover = function () {
    mySwiper.autoplay.stop();
}
obanner_box.onmouseout = function () {
    mySwiper.autoplay.start();
}

// 下方内容栏轮播图
var mySwiper2 = new Swiper('.bottom_pic_box_change', {
    // loop: true,
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    //     },
    fadeEffect: {
        crossFade: true,
    },
    // effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// 下方轮播图悬停显示按钮
$('.bottom_pic_box').mouseover(function () {
    $(this).find('.swiper-button-prev').css('display', 'block');
    $(this).find('.swiper-button-next').css('display', 'block');
})
$('.bottom_pic_box').mouseout(function () {
    $(this).find('.swiper-button-prev').css('display', 'none');
    $(this).find('.swiper-button-next').css('display', 'none');
})



// 左侧导航栏悬停显示菜单
$("#banner_menu_wrap").children().hover(function () {
    $(this).css("background", "#ff6700");
    $(this).children(".banner_menu_content").css("border", "1px solid #F0F0F0").show();
}, function () {
    $(this).css("background", "none");
    $(this).children(".banner_menu_content").css("border", "0px solid #F0F0F0").hide();
});

// 右边侧边栏按钮 & 回到顶部
$(window).scroll(function () {
    if ($(window).scrollTop() >= 1300) {
        $('.back_top').css('display', 'block');
    } else {
        $('.back_top').css('display', 'none');
    }
});
// 点击回到顶部
$(function () {
    $(".back_top").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 500);
    });
})

// 点击进入到购物车页面
$('.right_btn_shop_car').click(function () {
    location.href = 'shop_car.html';
})