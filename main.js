
// find items
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images Array
var imagesUrls = [];

imagesUrls.push('https://vybratpravilno.ru/wp-content/uploads/2016/04/2.Ferrari-599XX-1024x768.jpg');
imagesUrls.push('https://avatars.mds.yandex.net/get-zen_doc/1862846/pub_5eef2b77e24705067fe965d0_5eef2bca1fc1653038a9d853/scale_1200');
imagesUrls.push('https://7960777a-2fd1-4b07-8bbb-896e98c4659c.selcdn.net/upload/prod_add2/096/product-291096-2.jpg');
imagesUrls.push('https://img2.goodfon.ru/original/2880x1800/6/9b/bugatti-veyron-sport-car-avto.jpg');


var currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;







// functions on btns onShowNextBtnClick
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;


    // disable prev button if need
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}



function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;


    // disable next button if need
    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}
