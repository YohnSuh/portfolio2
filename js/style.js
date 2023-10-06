// 모바일 햄버거 아이콘 클릭
function hamMenuClick() {
    $('.header-bg').toggleClass('mo-bg-on');
    $('header').toggleClass('mo-menu-on');
};
// 모바일 메뉴 배경 클릭
function mBackgroundOn() {
    $('.header_bg').removeClass('mo-bg-on');
    $('header').removeClass('mo-menu-on');
};
$(document).ready(function() {
    // 모바일에서 햄버거 메뉴 클릭 시
    $('.hamburger').click(hamMenuClick);
    $('.header-bg').click(mBackgroundOn);

    // 메인 화면 슬라이드
    $('.mainWrap').slick({
        asNavFor : '.mainTextWrap'
    ,   autoplay : true
    ,   autoplaySpeed : 5000
    });
    $('.mainTextWrap').slick({
        asNavFor : '.mainWrap'
    ,   fade : true
    });
});

    
