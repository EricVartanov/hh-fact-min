const swiper1 = new Swiper(".idc-swiper-1", {
    // Default parameters
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        slideShadows: true,
        stretch: 0,
    },
    loop: true,
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 0,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    watchOverflow: true,
    grabCursor: true,
    navigation: {
        nextEl: ".idc-swiper-button-next",
        prevEl: ".idc-swiper-button-prev",
    },
    pagination: {
        el: ".idc-swiper-1 .idc-swiper-pagination",
        type: "bullets",
    },
});

const swiper2 = new Swiper(".idc-swiper-2", {
    // Default parameters

    direction: "horizontal",
    slidesPerView: "auto",
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    watchOverflow: true,
    grabCursor: true,
    pagination: {
        el: ".idc-swiper-2 .idc-swiper-pagination",
        type: "bullets",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            spaceBetween: 15,
        },
        // when window width is >= 480px
        700: {
            spaceBetween: 30,
        },
    },
});
