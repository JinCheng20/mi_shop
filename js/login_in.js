// 二维码登录 手机登录 切换
var oewm_login = document.querySelector('.form_top_a2');
var oewm = document.querySelector('.ewm_login');
var otel_login = document.querySelector('.form_top_a1');
var otel = document.querySelector('.tel_login');

otel_login.onclick = function(){
    otel.style.display = 'block';
    otel_login.className = 'a_in';
    oewm.style.display = 'none';
    oewm_login.className = 'a_out';
}
oewm_login.onclick = function(){
    otel.style.display = 'none';
    otel_login.className = 'a_out';
    oewm.style.display = 'block';
    oewm_login.className = 'a_in';
}











