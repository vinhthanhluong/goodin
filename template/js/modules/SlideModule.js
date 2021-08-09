export default function SlideModule(){
    function slideAbout() {
        if (document.querySelector('.slide-about')) {
            const swiper = document.querySelector('.slide-about');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: false,
                    slidesPerView: 3,
                    // autoHeight: true,
                    spaceBetween: 30,
                    // autoplay: {
                    //     delay: 4000,
                    // },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    slidesPerColumnFill: 'row',
                    slidesPerColumn: '2',
                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                   
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-about').length && slideAbout();

    function slideBrand() {
        if (document.querySelector('.slide-brand')) {
            const swiper = document.querySelector('.slide-brand');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: false,
                    slidesPerView: 6,
                    allowTouchMove: false,
                    // autoHeight: true,
                    // spaceBetween: 30,
                    // autoplay: {
                    //     delay: 4000,
                    // },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    slidesPerColumnFill: 'row',
                    slidesPerColumn: '2',
                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                   
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-brand').length && slideBrand();

    if (document.querySelector('#slideasd')) {
        const swiper = document.querySelector('#slideasd');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                    loop: true,
                    spaceBetween: 20,
                    // autoplay: {
                    //     delay: 4000,
                    // },
                    // pagination: {
                    //     el: '.swiper-pagination',
                    //     clickable: true,
                    // },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}