// array of images
const images = [
    'img/for-slider.webp',    // index 0 --> images[0]
    'img/8845084131358.webp',    // index 2 --> images[2]
    'img/for-slider-1.webp'    // index 2 --> images[2]
];
const images1 = [
    'img/8810632282142.webp',    // index 1 --> images[1]
    'img/8849829625886.webp',    // index 3 --> images[3]
    'img/for-slider-2.webp'    // index 3 --> images[3]
];
const title = [
    'MOLLIT ANIM',    // index 1 --> images[1]
    'UT ENIM CREAM',    // index 3 --> images[3]
    'DESERUNT'    // index 3 --> images[3]
];
const title1 = [
    'ULTRA HOLD',    // index 1 --> images[1]
    'BEAUTY',    // index 3 --> images[3]
    'FUGIAT NULLA'    // index 3 --> images[3]
];
const chracter = [
    'Lip Balm',    // index 1 --> images[1]
    'Esse – Cillum',    // index 3 --> images[3]
    'Excepteur Colour'    // index 3 --> images[3]
];
const chracter1 = [
    'Minim - Veniam - Quis',    // index 1 --> images[1]
    'Bath Oil',    // index 3 --> images[3]
    'Laboris Nisi'    // index 3 --> images[3]
];
const price = [
    '$42',    // index 1 --> images[1]
    '$70',    // index 3 --> images[3]
    '$80'    // index 3 --> images[3]
];
const price1 = [
    '$50',    // index 1 --> images[1]
    '$100',    // index 3 --> images[3]
    '$146'    // index 3 --> images[3]
];

const firstTitle = 0;
const lastTitle = title.length -0;
let currentTitle = 0;

const firstChracter = 0;
const lastChracter = chracter.length -0;
let currentChracter = 0;

const firstPrice = 0;
const lastPrice = price.length -0;
let currentPrice = 0;

const firstImage = 0;
const lastImage = images.length -0;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{

        // get price tag
        const priceTag = document.getElementById('price');
        const priceTag1 = document.getElementById('price1');
        currentPrice++;
        if(currentPrice >= lastPrice){
            currentPrice = 2;
        }
        priceTag.innerText = price[currentPrice];
        priceTag1.innerText = price1[currentPrice];

        // get chracter tag
        const chracterTag = document.getElementById('chracter');
        const chracterTag1 = document.getElementById('chracter1');
        currentChracter++;
        if(currentChracter >= lastChracter){
            currentChracter = 2;
        }
        chracterTag.innerText = chracter[currentChracter];
        chracterTag1.innerText = chracter1[currentChracter];

        // get title tag
        const titleTag = document.getElementById('title');
        const titleTag1 = document.getElementById('title1');
        currentTitle++;
        if(currentTitle >= lastTitle){
            currentTitle = 2;
        }
        titleTag.innerText = title[currentTitle];
        titleTag1.innerText = title1[currentTitle];

        // get image tag
        const imageTag = document.getElementById('image');
        const imageTag1 = document.getElementById('image1');
        currentImage++; // 1
        if(currentImage >= lastImage){
            currentImage = 2;
        }
        imageTag.src = images[currentImage];
        imageTag1.src = images1[currentImage];
        document.getElementById('info').innerHTML = (currentImage +1) + ' / 3';

});
// prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click',()=>{

    // get price tag
        const priceTag = document.getElementById('price');
        const priceTag1 = document.getElementById('price1');
        currentPrice--;
        if(currentPrice <= firstPrice){
            currentPrice = 0;
        }
        priceTag.innerText = price[currentPrice];
        priceTag1.innerText = price1[currentPrice];

     // get chracter tag
        const chracterTag = document.getElementById('chracter');
        const chracterTag1 = document.getElementById('chracter1');
        currentChracter--;
        if(currentChracter <= firstChracter){
            currentChracter = 0;
        }
        chracterTag.innerText = chracter[currentChracter];
        chracterTag1.innerText = chracter1[currentChracter];

    // get title tag
    const titleTag = document.getElementById('title');
        const titleTag1 = document.getElementById('title1');
        currentTitle--;
        if(currentTitle <= firstTitle){
            currentTitle = 0;
        }
        titleTag.innerText = title[currentTitle];
        titleTag1.innerText = title1[currentTitle];


    // get image tag
    const imageTag = document.getElementById('image');
    const imageTag1 = document.getElementById('image1');
    currentImage--; // 1
    if(currentImage <= firstImage){
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
    imageTag1.src = images1[currentImage];
    document.getElementById('info').innerHTML = (currentImage +1) + ' / 3';

});



// change numbers buttons active-colors for three click
$(".next").click(function () {
    if ($(this).hasClass('one')==true)
        {
           $(this).addClass("two");
           $(this).removeClass("one");
           $(this).addClass("three");
           $('.prev').addClass("three");
        }
    else 
        $(this).addClass("one");
        $('.prev').removeClass("one");

    $(".merch-item").toggleClass("active");
    $(".prev").addClass("apply");
});

$(".prev").click(function () {
    if ($(this).hasClass('one')==true)
        {
           $(this).removeClass("one");
           $(this).removeClass("three");
           $('.next').removeClass("three");
        }
    else 
        $(this).removeClass("one");
        $('.next').removeClass("one two");

    $(".merch-item").toggleClass("active");
    $(".prev").addClass("one");
});
// end of change numbers buttons active-colors for three click






// $(".prev").click(function() {
//     $(".merch-item").toggleClass("active");
//     // $(".st0-2").removeClass("thick");
//     $(".st0-3").removeClass("thin");
// });