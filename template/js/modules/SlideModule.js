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
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            slidesPerColumnFill: 'row',
                            slidesPerColumn: '2',
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            slidesPerColumnFill: 'row',
                            slidesPerColumn: '2',
                        }
                    }
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
                    
                    
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    // slidesPerColumnFill: 'row',
                    // slidesPerColumn: '2',

                    breakpoints: {
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                            slidesPerColumnFill: 'row',
                            slidesPerColumn: '2',
                        },
                        576: {
                            slidesPerView: 4,
                            slidesPerColumnFill: 'row',
                            slidesPerColumn: '2',
                        },
                        768: {
                            slidesPerView: 5,
                            slidesPerColumnFill: 'row',
                            slidesPerColumn: '2',
                        },
                        1024: {
                            slidesPerView: 6,
                            slidesPerColumnFill: 'row',
                            slidesPerColumn: '2',
                            allowTouchMove: false,
                        }
                    }
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-brand').length && slideBrand();

    function slideTwo() {
        if (document.querySelector('.slide-two')) {
            const swiper = document.querySelector('.slide-two');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    slidesPerView: 2,
                    // autoHeight: true,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    
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

    $('.slide-two').length && slideTwo();

    function slidePnew() {
        if (document.querySelector('.slide-pnew')) {
            const swiper = document.querySelector('.slide-pnew');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: false,
                    slidesPerView: 2,
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
                    slidesPerColumn: '3',
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

    $('.slide-pnew').length && slidePnew();

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