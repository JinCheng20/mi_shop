// 1  判断购物车是否有商品 来进行show or hide
if (localStorage.length != 0) {
    var arr = localStorage.getItem('goods');
    arr = JSON.parse(arr);
    for (var i = 0; i < arr.length; i++) {
        for (var j in arr[i]) {
            // 获取购买的产品型号 参数配置
            var _goods_name = arr[i].goods_name + ' ' + (arr[i].goods_color).trim() + ' ' + arr[i].goods_type;
            var _goods_num = arr[i].token;
            // console.log(typeof _goods_num)//number
            var _goods_price = arr[i].goods_price;
            // console.log(typeof _goods_price)//string
            var xiaoji_price = parseInt(_goods_price) * _goods_num;
        }
        $('.jiesuan').css('display', 'block');
        $('.shop_content').css('display', 'block');
        var str = `
            <div class="item-box goods_con">
                <div class="goods_sel"> <input class="select_box xuanze" type="checkbox"> </div>
                <div class="goods_kg">&nbsp;</div>
                <div class="goods_name goods_name1">${_goods_name}</div>
                <div class="goods_price danjia">${_goods_price}</div>
                <div class="goods_num" style="border: 1px solid #e0e0e0;line-height: 40px;margin-top: 15px;">
                    <a class="J_minus"> - </a>
                    <input class="shuliang" tyep="text" name="2183600020_0_buy" value=${_goods_num}>
                    <a class="J_plus"> + </a>
                </div>
                <div class="goods_total zongfeiyong">${xiaoji_price}</div>
                <div class="goods_action">
                    <a class="delete">x</a>
                </div>
            </div>
        `;
        $(str).insertBefore(".jiesuan");
    }
} else {
    $('.jiesuan').css('display', 'none');
    $('.shop_content').remove();
}

// 单选
$('.xuanze').click(function () {
    if ($(this).is(':checked')) {
        $('#J_cartTotalNum').text(parseInt($('#J_cartTotalNum').text()) + 1);
        $('#J_selTotalNum').text($('#J_selTotalNum').text() - 0 + parseInt($(this).parent('.goods_sel').siblings('.goods_num').children('.shuliang').val() - 0));
        $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) + parseInt($(this).parent('.goods_sel').siblings('.zongfeiyong').text()))
        // 结算按钮
        $('#J_goCheckout').removeClass('btn-disabled');
        $('#J_goCheckout').addClass('btn-active');
    } else {
        $(".quanxuan").prop("checked", false);
        $('#J_cartTotalNum').text(parseInt($('#J_cartTotalNum').text()) - 1)
        $('#J_selTotalNum').text($('#J_selTotalNum').text() - $(this).parent('.goods_sel').siblings('.goods_num').children('.shuliang').val())
        $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) - parseInt($(this).parent('.goods_sel').siblings('.zongfeiyong').text()))
        // 结算按钮
        $('#J_goCheckout').removeClass('btn-active');
        $('#J_goCheckout').addClass('btn-disabled');
    }
})

// 全选
$(".quanxuan").click(function () {
    if (this.checked) {
        var num = 0;
        var total_price = 0;
        $('#J_cartTotalNum').text(0) //总选中1
        $('#J_selTotalNum').text(0) //总选中2
        $(".xuanze").prop("checked", true);
        $('#J_cartTotalNum').text($(".xuanze").length);
        for (var i = 0; i < $('.shuliang').length; i++) {
            num += $('.shuliang')[i].value - 0
            total_price += $('.shuliang')[i].value * parseInt($('.danjia')[i].innerHTML)
        }
        $('#J_selTotalNum').text(num)
        $('#J_cartTotalPrice').text(total_price)
        $('#J_goCheckout').removeClass('btn-disabled');
        $('#J_goCheckout').addClass('btn-active');
    } else {
        $(".xuanze").prop("checked", false);
        $('#J_cartTotalNum').text(0)
        $('#J_selTotalNum').text(0)
        $('#J_cartTotalPrice').text(0)
        $('#J_goCheckout').removeClass('btn-active');
        $('#J_goCheckout').addClass('btn-disabled');
    }
});

// 删除按钮操作
$('.delete').click(function () {
    // 获取索引 根据索引来进行本地存储的删除
    var goods_index = $(this).parents('.item-box').index('.item-box');
    var str = window.localStorage.getItem('goods');
    str = JSON.parse(str);
    str.splice(goods_index, 1);
    str = JSON.stringify(str);
    window.localStorage.setItem('goods', str);
    if (localStorage.getItem('goods') == '[]') {
        localStorage.clear();
    }
    $(this).parents('.item-box').remove();
    if ($(this).parents('.item-box').find('.xuanze').prop("checked") == true) {
        $('#J_cartTotalNum').text($('#J_cartTotalNum').text() - 1)
        $('#J_selTotalNum').text($('#J_selTotalNum').text() - $(this).parents('.item-box').find('.shuliang').val())
        $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) - parseInt($(this).parents(
            '.item-box').children('.zongfeiyong').text()))
    }
})

// - button
$('.J_minus').click(function () {
    if ($(this).siblings('.shuliang').val() >= 1) {
        // 获取索引 根据索引来进行本地存储的删除
        var goods_index = $(this).parents('.item-box').index('.item-box');
        var str = window.localStorage.getItem('goods');
        str = JSON.parse(str);
        var num = str[goods_index].token;
        // str.splice(goods_index, 1, );
        str[goods_index].token = --num;
        str = JSON.stringify(str);
        window.localStorage.setItem('goods', str);
        $(this).siblings('.shuliang').val($(this).siblings('.shuliang').val() - 1);
        $(this).parent('.goods_num').siblings('.zongfeiyong').text($(this).parent('.goods_num').siblings(
                '.zongfeiyong').text().match(/\d+/) - $(this).parent('.goods_num').siblings('.danjia').text()
            .match(/\d+/) + '元')
        console.log($(this).parent('.goods_num').siblings('.goods_sel').children(".xuanze").prop("checked"))
        if ($(this).parent('.goods_num').siblings('.goods_sel').children(".xuanze").prop("checked") == true) {
            $('#J_selTotalNum').text($('#J_selTotalNum').text() - 1)
            $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) - parseInt($(this).parent(
                '.goods_num').siblings('.danjia').text()))
        }
    }
});

// + button
$('.J_plus').click(function () {
    if ($(this).siblings('.shuliang').val() >= 0) {
        // 获取索引 根据索引来进行本地存储的删除
        var goods_index = $(this).parents('.item-box').index('.item-box');
        var str = window.localStorage.getItem('goods');
        str = JSON.parse(str);
        var num = str[goods_index].token;
        str[goods_index].token = ++num;
        str = JSON.stringify(str);
        window.localStorage.setItem('goods', str);
        $(this).siblings('.shuliang').val(parseInt($(this).siblings('.shuliang').val()) + 1);
        $(this).parent('.goods_num').siblings('.zongfeiyong').text(parseInt($(this).parent('.goods_num').siblings(
            '.zongfeiyong').text().match(/\d+/)) + parseInt($(this).parent('.goods_num').siblings(
            '.danjia').text().match(/\d+/)) + '元')
        if ($(this).parent('.goods_num').siblings('.goods_sel').children(".xuanze").prop("checked") == true) {
            $('#J_selTotalNum').text($('#J_selTotalNum').text() - 0 + 1)
            $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) + parseInt($(this).parent(
                '.goods_num').siblings('.danjia').text()))
        }
    }
});