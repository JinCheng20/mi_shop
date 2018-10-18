var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// head_menu_con
// 顶部菜单悬停显示下拉商品列表
$(".head_menu").hover(function () {
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



// 右边侧边栏按钮 & 回到顶部
$(window).scroll(function () {
  if ($(window).scrollTop() >= 500) {
    $('.back_top').css('display', 'block');
  } else {
    $('.back_top').css('display', 'none');
  }
});
// 点击回到顶部
$(function () {
  $("._back_top").click(function () {
    $("html").animate({
      scrollTop: 0
    }, 500);
  });
})

// 页面滚动一定距离固定图片
$(window).scroll(function () {
  if ($(window).scrollTop() >= 203) {
    $('.imation').css({
      'position': 'fixed',
      'top': '0',
      'z-index': 9,
      'background-color': '#fff'
    })
    $('.main_left').css({
      'position': 'fixed',
      'top': '63px'
    })
  } else {
    $('.imation').css({
      'position': 'relative',
    })
    $('.main_left').css({
      'position': 'static',
    })
  }
  if ($(window).scrollTop() >= 800) {
    $('.main_left').css({
      'position': 'absolute',
      'top': '810px'
    })
  }
})

// 根据选中的型号切换对应的轮播图 & 改变选中的样式

// 选择型号

$('.show_btn1').click(function () {
  $('.imgshow_box').children().css('z-index', '10');
  $('.imgshow_box1').css('z-index', '100');
  $('.choose_box2').children().removeClass('active');
  $(this).addClass('active');
  $('.color').text($(this).text());
})
$('.show_btn2').click(function () {
  $('.imgshow_box').children().css('z-index', '10');
  $('.imgshow_box2').css('z-index', '100');
  $('.choose_box2').children().removeClass('active');
  $(this).addClass('active');
  $('.color').text($(this).text());
})
$('.show_btn3').click(function () {
  $('.imgshow_box').children().css('z-index', '10');
  $('.imgshow_box3').css('z-index', '100');
  $('.choose_box2').children().removeClass('active');
  $(this).addClass('active');
  $('.color').text($(this).text());
})
$('.show_btn4').click(function () {
  $('.imgshow_box').children().css('z-index', '10');
  $('.imgshow_box4').css('z-index', '100');
  $('.choose_box2').children().removeClass('active');
  $(this).addClass('active');
  $('.color').text($(this).text());
})

// 选择版本
$('.choose_box1').children().click(function () {
  $('.choose_box1').children().removeClass('active');
  $(this).addClass('active');
  // 根据用户所选择的型号和服务 来修改对应的结果
  $('.type').text($(this).parents().find('.main_right_name').text());
  $('.pig').text($(this).find('.name').text());
  $('.zuiPrice').text($(this).find('.price').text());

  // 总价
  var price1 = parseInt($('.zuiPrice').text());
  var price2 = $('.fuwu_price').text();
  console.log(price2, typeof price2);
  if (price2 == '') {
    price2 == 0;
  } else {
    price2 = parseInt(price2);
  }
  var _total_price = price1 + price2;
  $('.total_price').text(_total_price + '元');

  // 改变打折之前的价格 带中划线的价格  
  //   if($(this).find('.price').text() == '849元'){
  //     $('.daZhe').text('999元');  
  //   }
  //   else{
  //     $('.daZhe').text('799元');  
  //   }
})

//购买商品的保障服务 打钩选项
$('.fuwu2').click(function () {
  $('.fuwu3').removeClass('active');
  $('.fuwu3').children('.duigou1').text('');
  $('.fuwu3').find('.name').removeClass('active1');
  $('.fuwu3').find('.duigou2').text('');
  var val1 = $(this).children('.duigou1').text();
  var val2 = $(this).find('.duigou2').text();
  var price1 = parseInt($('.zuiPrice').text());
  if (val1 == '' && val2 == '') {
    $(this).children('.duigou1').text('√');
    $(this).find('.duigou2').text('√');
    $(this).addClass('active');
    $(this).find('.name').addClass('active1');

    // 下方统计保险服务价格
    $('.fuwu_name').text($(this).find('.name').text());
    $('.fuwu_price').text($(this).find('.price').text());

    var price2 = parseInt($('.fuwu_price').text());
    var _total_price = price1 + price2;
    $('.total_price').text(_total_price + '元');
  } else {
    $(this).children('.duigou1').text('');
    $(this).find('.duigou2').text('');
    $(this).removeClass('active');
    $(this).find('.name').removeClass('active1');

    $('.fuwu_name').text('');
    $('.fuwu_price').text('');

    $('.total_price').text(price1 + '元');
  }
})

$('.fuwu3').click(function () {
  $('.fuwu2').removeClass('active');
  $('.fuwu2').children('.duigou1').text('');
  $('.fuwu2').find('.name').removeClass('active1');
  $('.fuwu2').find('.duigou2').text('');
  var val1 = $(this).children('.duigou1').text();
  var val2 = $(this).find('.duigou2').text();
  var price1 = parseInt($('.zuiPrice').text());
  if (val1 == '' && val2 == '') {
    $(this).children('.duigou1').text('√');
    $(this).find('.duigou2').text('√');
    $(this).addClass('active');
    $(this).find('.name').addClass('active1');

    $('.fuwu_name').text($(this).find('.name').text());
    $('.fuwu_price').text($(this).find('.price').text());

    var price2 = parseInt($('.fuwu_price').text());
    var _total_price = price1 + price2;
    $('.total_price').text(_total_price + '元');
  } else {
    $(this).children('.duigou1').text('');
    $(this).find('.duigou2').text('');
    $(this).removeClass('active');
    $(this).find('.name').removeClass('active1');

    $('.fuwu_name').text('');
    $('.fuwu_price').text('');

    $('.total_price').text(price1 + '元');
  }
})

// 点击修改地址
// $('.switch-choose-regions').click(function(){

// })

// 点击加入购物车按钮  创建localStorage
$('.add_goods_btn').click(function () {
  var goods_obj = {
    'goods_name': $('.type').text(),
    'goods_type': $('.pig').text(),
    'goods_color': $('.color').text(),
    'goods_price': $('.zuiPrice').text(),
    'service_price': $('.fuwu_price').text(),
    'token': 1
  }
  // var goods_arr = [];
  // goods_arr.push(goods_obj);
  // 判断用户是否购买了保险服务
  if ($('.fuwu2').hasClass('active')) {
    goods_obj.goods_service = $('.fuwu2').find('.name').text();
    goods_obj.service_price = $('.fuwu2').find('.price').text();
  }
  if ($('.fuwu3').hasClass('active')) {
    goods_obj.goods_service = $('.fuwu3').find('.name').text();
    goods_obj.service_price = $('.fuwu3').find('.price').text();
  }

  // 没有商品
  if (localStorage.length == 0) {
    var goods_arr = [];
    goods_arr.push(goods_obj);
    goods_arr = JSON.stringify(goods_arr);
    window.localStorage.setItem('goods', goods_arr);
    // console.log(0);
  }
  // 已有商品
  else {
    
    var _arr = localStorage.getItem('goods');
    _arr = JSON.parse(_arr);
    console.log(_arr)
    
     for(var i = 0;i < _arr.length;i ++){
      if (goods_obj.goods_name == _arr[i].goods_name &&
        goods_obj.goods_type == _arr[i].goods_type &&
        goods_obj.goods_color == _arr[i].goods_color &&
        goods_obj.goods_price == _arr[i].goods_price) {
        _arr[i].token += 1;
        break
        // _arr = JSON.stringify(_arr);
        // window.localStorage.setItem('goods', _arr);
        //  console.log(1);
      } else {
        if(i + 1 == _arr.length){
          _arr.push(goods_obj);
          break;
        }
        // console.log(_arr);
      }
    }
    _arr = JSON.stringify(_arr);
    window.localStorage.setItem('goods', _arr);
    // console.log('jinru')
    // console.log(_arr);
  }
})

// 右上角显示购物车的数量
function show_shop_num() {
  if (localStorage.getItem('goods')) {
      var shop_num = localStorage.getItem('goods');
      shop_num = JSON.parse(shop_num);
      var _shop_num = '(' + shop_num.length + ')';
      $('.shop_car_num').text(_shop_num);
      // console.log(_shop_num);
  } else {
      var _shop_num = '(' + 0 + ')';
      $('.shop_car_num').text(_shop_num);
  }
}
show_shop_num();
// 右上角悬停显示购物车商品详情
function show_shop_details() {
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

show_shop_details();