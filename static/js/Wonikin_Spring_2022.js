//passion 슬라이드
var wis_psn_slide = new Swiper('.wis_psn_slide', {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    navigation: {
        prevEl: '.wis_psn_slide_wrap .swiper-button-prev',
        nextEl: '.wis_psn_slide_wrap .swiper-button-next'
    },
    breakpoints: {
        1260: {
            slidesPerView: 1,
            on: {
                slideChange: function () {
                    $('.wis_psn_slide_wrap .swiper-slide').removeClass(
                        'action'
                    );
                },
                slideChangeTransitionStart: function () {
                    $('.wis_psn_slide_wrap .swiper-slide-next').removeClass(
                        'action'
                    );
                }
            }
        }
    },
    on: {
        slideChange: function () {
            $('.wis_psn_slide_wrap .swiper-slide').removeClass('action');
        },
        slideChangeTransitionStart: function () {
            $('.wis_psn_slide_wrap .swiper-slide-next').addClass('action');
        }
    }
});
//passion 슬라이드 마우스 오버시 잠시 멈춤
$('.wis_psn_slide_wrap .swiper-slide').on('mouseover', function () {
    wis_psn_slide.autoplay.stop();
});
$('.wis_psn_slide_wrap .swiper-slide').on('mouseout', function () {
    wis_psn_slide.autoplay.start();
});
//passion 슬라이드//

//insight 슬라이드
var wis_ins_slide = new Swiper('.wis_ins_slide', {
    slidesPerView: 2,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    navigation: {
        prevEl: '.wis_ins_slide_wrap .swiper-button-prev',
        nextEl: '.wis_ins_slide_wrap .swiper-button-next'
    },
    breakpoints: {
        1260: {
            slidesPerView: 1
        }
    }
});
//insight 슬라이드//

//event 슬라이드
var wis_evt_slide = new Swiper('.wis_evt_slide', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.wis_evt_slide .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        }
    }
});
//event 슬라이드//

//원익 영상 탭 클릭 이벤트
$('.wis_video_tab > button').click(function () {
    $('.wis_video_tab > button').toggleClass('on');
    $('.wis_video_cont > ul').hide();
    $('.wis_video_' + $(this).data('video')).show();
});
//원익 영상 리스트 클릭 이벤트
$('.wis_video_li').click(function () {
    var videoBox = $(this).data('video-box');
    console.log(videoBox);
    $('.wis_video_box').html(
        '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' +
            videoBox +
            '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
});

//풋터 지난 호 보기 클릭 이벤트
$('.ft_select_btn').click(function () {
    $(this).next('.ft_select_list').toggle();
});

//모바일 GNB 클릭 이벤트
$('.wis_h_side + .mo_wis_gnb_btn').click(function () {
    console.log('ddd');
    $('.mo_wis_h_gnb_wrap').addClass('on');
});
$('.mo_wis_h_gnb_list .mo_wis_gnb_btn').click(function () {
    $('.mo_wis_h_gnb_wrap').removeClass('on');
});
$('.mo_wis_h_gnb').click(function () {
    var _this = $(this);
    $('.mo_wis_h_gnb').removeClass('on');
    _this.addClass('on');
    var slideUp = _this.hasClass('on');
    $('.mo_wis_h_lnb').stop().slideUp();
    if (slideUp == true) {
        _this.next('.mo_wis_h_lnb').stop().slideToggle();
    }
});
