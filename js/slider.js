// array of images
const images = [
    'img/8853578481694.webp',    // index 0 --> images[0]
    'img/8845084131358.webp'    // index 2 --> images[2]
];
const images1 = [
    'img/8810632282142.webp',    // index 1 --> images[1]
    'img/8849829625886.webp'    // index 3 --> images[3]
];
const title = [
    'LES BEIGES',    // index 0 --> images[0]
    'LE LIFT CRÈME'    // index 2 --> images[2]
];
const title1 = [
    'LA CRÈME MAIN',    // index 1 --> images[1]
    'PARIS-PARIS'    // index 3 --> images[3]
];
const chracter = [
    'Bronzing Cream',    // index 0 --> images[0]
    'Smooths – Firms'    // index 2 --> images[2]
];
const chracter1 = [
    'Nourish - Soften - Brighten',    // index 1 --> images[1]
    'les eaux'    // index 3 --> images[3]
];
const price = [
    '$50',    // index 0 --> images[0]
    '$165'    // index 2 --> images[2]
];
const price1 = [
    '$50',    // index 1 --> images[1]
    '$140'    // index 3 --> images[3]
];

const firstTitle = 0;
const lastTitle = title.length -1;
let currentTitle = 0;

const firstChracter = 0;
const lastChracter = chracter.length -1;
let currentChracter = 0;

const firstPrice = 0;
const lastPrice = price.length -1;
let currentPrice = 0;

const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{

        // get price tag
        const priceTag = document.getElementById('price');
        const priceTag1 = document.getElementById('price1');
        currentPrice++;
        if(currentPrice >= lastPrice){
            currentPrice = 1;
        }
        priceTag.innerText = price[currentPrice];
        priceTag1.innerText = price1[currentPrice];

        // get chracter tag
        const chracterTag = document.getElementById('chracter');
        const chracterTag1 = document.getElementById('chracter1');
        currentChracter++;
        if(currentChracter >= lastChracter){
            currentChracter = 1;
        }
        chracterTag.innerText = chracter[currentChracter];
        chracterTag1.innerText = chracter1[currentChracter];

        // get title tag
        const titleTag = document.getElementById('title');
        const titleTag1 = document.getElementById('title1');
        currentTitle++;
        if(currentTitle >= lastTitle){
            currentTitle = 1;
        }
        titleTag.innerText = title[currentTitle];
        titleTag1.innerText = title1[currentTitle];

        // get image tag
        const imageTag = document.getElementById('image');
        const imageTag1 = document.getElementById('image1');
        currentImage++; // 1
        if(currentImage >= lastImage){
            currentImage = 1;
        }
        imageTag.src = images[currentImage];
        imageTag1.src = images1[currentImage];
        document.getElementById('info').innerHTML = (currentImage +1) + ' / 2';

});
// prev
const preBtn = document.getElementById('prev2');
preBtn.addEventListener('click',()=>{

    // get price tag
    const priceTag = document.getElementById('price');
    const priceTag1 = document.getElementById('price1');
    currentPrice--;
    if(currentPrice >= firstPrice){
        currentPrice = 0;
    }
    priceTag.innerText = price[currentPrice];
    priceTag1.innerText = price1[currentPrice];

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
    document.getElementById('info').innerHTML = (currentImage +1) + ' / 2';

});

// this is mine
$(".next").click(function() {
    $(".merch-item").addClass("active");
    $(".st0-2").addClass("thick");
    $(".st0-3").addClass("thin");
});
$

(".prev2").click(function() {
    $(".merch-item").removeClass("active");
    $(".st0-2").removeClass("thick");
    $(".st0-3").removeClass("thin");
});