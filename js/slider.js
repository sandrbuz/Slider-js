
var sliderFactory = {
    createNewSlider: function () {
        var newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,

            showPrevBtn: null,
            showNextBtn: null,
            slideImage: null,

            start: function (elId) {
                var that = this;

                var elSelector = '#' + elId;
                var el = document.querySelector(elSelector);

                this.showPrevBtn = el.querySelector('.show-prev-btn');
                this.showNextBtn = el.querySelector('.show-next-btn');
                this.slideImage = el.querySelector('.slide-img');



                // subscribe to events
                this.showPrevBtn.addEventListener('click', function (e) {
                    that.onShowPrevBtnClick(e);
                });

                this.showNextBtn.addEventListener('click', function (e) {
                    that.onShowNextBtnClick();
                });


                // create images Array
                this.imagesUrls.push('https://vybratpravilno.ru/wp-content/uploads/2016/04/2.Ferrari-599XX-1024x768.jpg');
                this.imagesUrls.push('https://avatars.mds.yandex.net/get-zen_doc/1862846/pub_5eef2b77e24705067fe965d0_5eef2bca1fc1653038a9d853/scale_1200');
                this.imagesUrls.push('https://7960777a-2fd1-4b07-8bbb-896e98c4659c.selcdn.net/upload/prod_add2/096/product-291096-2.jpg');
                this.imagesUrls.push('https://img2.goodfon.ru/original/2880x1800/6/9b/bugatti-veyron-sport-car-avto.jpg');




                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = true;
            },

            onShowPrevBtnClick: function (e) {
                this.currentImageIndex--;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showNextBtn.disabled = false;


                // disable prev button if need
                if (this.currentImageIndex === 0) {
                    this.showPrevBtn.disabled = true;
                }
            },



            onShowNextBtnClick: function (e) {
                this.currentImageIndex++;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = false;


                // disable next button if need
                if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
                    this.showNextBtn.disabled = true;
                }
            },




        };

        return newSlider;

    }
};


