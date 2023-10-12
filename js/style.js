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
    // 모바일 헤더 스크롤 시
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('header').addClass('mo-bg-color');
        } else {
            $('header').removeClass('mo-bg-color');
        }
    });

    // 모바일에서 햄버거 메뉴 클릭 시
    $('.hamburger').click(hamMenuClick);
    $('.header-bg').click(mBackgroundOn);

    // 메인 화면 슬라이드
    $('.mainWrap').slick({
        asNavFor : '.mainTextWrap'
    ,   autoplay : true
    ,   autoplaySpeed : 8000
    ,   arrows : false
    });
    $('.mainTextWrap').slick({
        asNavFor : '.mainWrap'
    ,   fade : true
    ,   autoplay : true
    ,   autoplaySpeed : 8000
    ,   arrows : false
    });

    // 베스트셀러 슬라이드
    $('.bestContWrap').slick({
        slideToShow : 5
    ,   slideToScroll : 3
    ,   variableWidth : true
    ,   arrows : false
    ,   infinite : false
    });

    // 뱅앤올룹슨의 세계 슬라이드
    $('.aboutContWrap').slick({
        arrows : false
    ,   autoplay : true
    ,   autoplaySpeed : 2000
    });

    // 푸터 아코디언
    $('footer h2').click(function() {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('ul').stop().slideUp();

        $(this).toggleClass('on');
        $(this).parent().siblings().find('h2').removeClass('on');
    });
});
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
    // 모바일 헤더 스크롤 시
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('header').addClass('mo-bg-color');
        } else {
            $('header').removeClass('mo-bg-color');
        }
    });

    // 모바일에서 햄버거 메뉴 클릭 시
    $('.hamburger').click(hamMenuClick);
    $('.header-bg').click(mBackgroundOn);

    // 메인 화면 슬라이드
    $('.mainWrap').slick({
        asNavFor : '.mainTextWrap'
    ,   autoplay : true
    ,   autoplaySpeed : 8000
    ,   arrows : false
    ,   responsive: [
            {
                breakpoint: 769,
                on : $(".mainWrap").on("breakpoint", function(a,b,c) {
                    AOS.refresh();
                })
            }
        ]
    });
    $('.mainTextWrap').slick({
        asNavFor : '.mainWrap'
    ,   fade : true
    ,   autoplay : true
    ,   autoplaySpeed : 8000
    ,   arrows : false
    });

    // 베스트셀러 슬라이드
    $('.bestContWrap').slick({
        slideToShow : 5
    ,   slideToScroll : 3
    ,   variableWidth : true
    ,   arrows : false
    ,   infinite : false
    });

    // 뱅앤올룹슨의 세계 슬라이드
    $('.aboutContWrap').slick({
        arrows : false
    ,   autoplay : true
    ,   autoplaySpeed : 3000
    });

    // 푸터 아코디언
    $('footer h2').click(function() {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('ul').stop().slideUp();

        $(this).toggleClass('on');
        $(this).parent().siblings().find('h2').removeClass('on');
    });
});
