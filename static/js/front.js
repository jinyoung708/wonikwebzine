(() => {
    msieversion();

    //Browser check
    let browser = (function (agent) {
        switch (true) {
            case agent.indexOf("edge") > -1:
                return "edge";
            case agent.indexOf("edg") > -1:
                return "chromium based edge (dev or canary)";
            case agent.indexOf("chrome") > -1 && !!window.chrome:
                return "chrome";
            case agent.indexOf("trident") > -1:
                return "ie";
            case agent.indexOf("firefox") > -1:
                return "firefox";
            case agent.indexOf("safari") > -1:
                return "safari";
            default:
                return "other";
        }
    })(window.navigator.userAgent.toLowerCase());
    const el = document.querySelector('body');
    if (browser === 'chrome') el.classList.add('chrome');
    else if (browser === 'edge') el.classList.add('edge');
    else if (browser === 'edg') el.classList.add('edg-chrome');
    else if (browser === 'trident') el.classList.add('ie');
    else if (browser === 'firefox') el.classList.add('firefox');
    else if (browser === 'safari') el.classList.add('safari');
    else el.classList.add('other');


    const heroSlide = new Swiper('.hero-slide', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    const mainStory = new Swiper('.story-slide', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        //effect: 'fade',
        slidesPerView: 3,
        spaceBetween: 45,
        centeredSlides: true,
        navigation: {
            nextEl: ".story-navigation .swiper-next",
            prevEl: ".story-navigation .swiper-prev",
        },
        breakpoints: {
            1024: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            768: {
                spaceBetween: 10,
                slidesPerView: 2.5,
                centeredSlides: false,
            },
            640: {
                spaceBetween: 10,
                slidesPerView: 1.5,
                centeredSlides: false,
            },
            480: {
                spaceBetween: 0,
                slidesPerView: 1,
                centeredSlides: false,
            },
        }
    });

    const mainPeople = new Swiper('.people-slide', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 45,
        centeredSlides: true,
        navigation: {
            nextEl: ".people-navigation .swiper-next",
            prevEl: ".people-navigation .swiper-prev",
        },
        breakpoints: {
            1024: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            768: {
                spaceBetween: 0,
                slidesPerView: 1,
            },
        }
    })

    const mainLife = new Swiper('.life-slide', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 40,
        //centeredSlides: true,
        navigation: {
            nextEl: ".life-navigation .swiper-next",
            prevEl: ".life-navigation .swiper-prev",
        },
        breakpoints: {
            1024: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            768: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            480: {
                spaceBetween: 0,
                slidesPerView: 1,
            },

        }
    });

    const mainFocus = new Swiper('.focus-slide', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 1.8,
        //spaceBetween: 50,
        centeredSlides: true,
        navigation: {
            nextEl: ".focus-navigation .swiper-next",
            prevEl: ".focus-navigation .swiper-prev",
        },
        breakpoints: {
            1024: {

                slidesPerView: 1,
            },
        }
    });


    //////////////
    let mainInfo = Swiper;
    let mainEvent = Swiper;
    let init = false;

    function swiperM() {
        var mobile = window.matchMedia('(max-width: 768px');
        var desktop = window.matchMedia('(min-width: 769px');
        if (mobile.matches) {
            if (!init) {
                init = true;
                mainInfo = new Swiper('.info-slide', {
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    centeredSlides: false,
                    navigation: {
                        nextEl: ".info-navigation .swiper-next",
                        prevEl: ".info-navigation .swiper-prev",
                    },
                });
                mainEvent = new Swiper('.event-slide', {
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    centeredSlides: false,
                    navigation: {
                        nextEl: ".event-navigation .swiper-next",
                        prevEl: ".event-navigation .swiper-prev",
                    },
                });
            }
        } else if (desktop.matches) {
            if ($('.info-slide').hasClass('swiper-container-initialized')) {
                mainInfo.destroy();
                mainEvent.destroy();
                init = false;
            }
            if ($('.event-slide').hasClass('swiper-container-initialized')) {
                mainInfo.destroy();
                mainEvent.destroy();
                init = false;
            }
        }
    }

    let vh;
    jQuery.exists = function (selector) {
        return ($(selector).length > 0);
    }

    window.addEventListener('load', () => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        if ($('.info-slide').length > 0) {
            swiperM();
        }


    });
    window.addEventListener('resize', () => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        if ($('.info-slide').length > 0) {
            swiperM();
        }

    });

    $('.button-nav').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('on')
        if ($(this).hasClass('button-nav--pc')) {
            $('.lnb').toggleClass('on')
        } else if ($(this).hasClass('button-nav--mobile')) {
            $('.m-lnb').toggleClass('on')
        }
    });

    $('.m-lnb > ul > li > a ').on('click', function (e) {
        e.preventDefault();
        $('.sub-nav').stop().slideUp();
        $(this).next('.sub-nav').stop().slideDown();
    });

    $('.prev-issue').on('click', function () {
        $(this).children('.list-wrap').toggleClass('on');
    });


    $('.btn-notify').on('click', function (e) {
        $(this).toggleClass('on')
    })



})();

function tablist() {
    $('.tab-list-wrap').each(function () {
        let i = $(this).find('.tab-list > ul > li').length;
        //$(this).find('.tab-list').addClass(`tab-list--length${i}`)
        $(this).find('.tab-list').addClass('tab-list--length' + i);
    })
    $('.tab-list > ul > li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $(this).parent().parent().parent().find('.tab-content').removeClass('active');
        $(this).parent().find('li').removeClass('active')
        $(this).addClass('active');
        $(this).parent().parent().parent().find('.tab-content').eq(idx).addClass('active');
    })
}

function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE");

    if (msie > 0) {
        $("[data-aos^=fade][data-aos^=fade]").css({
            opacity: 1,
            transform: "none",
        });
        console.log("IE10");
    } else {
        AOS.init({
            startEvent: "DOMContentLoaded",
            once: false,
            duration: 400,
            //offset: 200,
            delay: 150,
            anchorPlacement: "top-bottom",
        });
    }
}