// array of images
$(document).ready(function(){
    const images2 = [
        'img/8853578481694.webp',    // index 0 --> images[0]
        'img/8845084131358.webp'    // index 2 --> images[2]
    ];
    const images3 = [
        'img/8810632282142.webp',    // index 1 --> images[1]
        'img/8849829625886.webp'    // index 3 --> images[3]
    ];
    const title2 = [
    'LES BEIGES',    // index 0 --> images[0]
    'LE LIFT CRÈME'    // index 2 --> images[2]
    ];
    const title3 = [
        'LA CRÈME MAIN',    // index 1 --> images[1]
        'PARIS-PARIS'    // index 3 --> images[3]
    ];
    const chracter2 = [
    'Bronzing Cream',    // index 0 --> images[0]
    'Smooths – Firms'    // index 2 --> images[2]
    ];
    const chracter3 = [
        'Nourish - Soften - Brighten',    // index 1 --> images[1]
        'les eaux'    // index 3 --> images[3]
    ];
    const price2 = [
    '$50',    // index 0 --> images[0]
    '$165'    // index 2 --> images[2]
    ];
    const price3 = [
        '$50',    // index 1 --> images[1]
        '$140'    // index 3 --> images[3]
    ];
    const firstTitle = 0;
    const lastTitle = title2.length -1;
    let currentTitle = 0;

    const firstChracter = 0;
    const lastChracter = chracter.length -1;
    let currentChracter = 0;

    const firstPrice = 0;
    const lastPrice = price.length -1;
    let currentPrice = 0;

    const firstImage = 0;
    const lastImage = images2.length -1;
    let currentImage = 0;
    // next
    const nextBtn = document.getElementById('next1');
    nextBtn.addEventListener('click',()=>{

            // get price tag
            const priceTag2 = document.getElementById('price2');
            const priceTag3 = document.getElementById('price3');
            currentPrice++;
            if(currentPrice >= lastPrice){
                currentPrice = 1;
            }
            priceTag2.innerText = price2[currentPrice];
            priceTag3.innerText = price3[currentPrice];

            // get chracter tag
            const chracterTag2 = document.getElementById('chracter2');
            const chracterTag3 = document.getElementById('chracter3');
            currentChracter++;
            if(currentChracter >= lastChracter){
                currentChracter = 1;
            }
            chracterTag2.innerText = chracter2[currentChracter];
            chracterTag3.innerText = chracter3[currentChracter];

            // get title tag
            const titleTag2 = document.getElementById('title2');
            const titleTag3 = document.getElementById('title3');
            currentTitle++;
            if(currentTitle >= lastTitle){
                currentTitle = 1;
            }
            titleTag2.innerText = title2[currentTitle];
            titleTag3.innerText = title3[currentTitle];

            // get image tag
            const imageTag2 = document.getElementById('image2');
            const imageTag3 = document.getElementById('image3');
            currentImage++; // 1
            if(currentImage >= lastImage){
                currentImage = 1;
            }
            imageTag2.src = images2[currentImage];
            imageTag3.src = images3[currentImage];
            document.getElementById('info1').innerHTML = (currentImage +1) + ' / 2';

    });
    // prev
    const preBtn = document.getElementById('prev3');
    preBtn.addEventListener('click',()=>{

        // get price tag
        const priceTag2 = document.getElementById('price2');
        const priceTag3 = document.getElementById('price3');
        currentPrice--;
        if(currentPrice <= firstPrice){
            currentPrice = 0;
        }
        priceTag2.innerText = price2[currentPrice];
        priceTag3.innerText = price3[currentPrice];

        // get chracter tag
        const chracterTag2 = document.getElementById('chracter2');
        const chracterTag3 = document.getElementById('chracter3');
        currentChracter--;
        if(currentChracter <= firstChracter){
            currentChracter = 0;
        }
        chracterTag2.innerText = chracter2[currentChracter];
        chracterTag3.innerText = chracter3[currentChracter];

        // get title tag
        const titleTag2 = document.getElementById('title2');
        const titleTag3 = document.getElementById('title3');
        currentTitle--;
        if(currentTitle <= firstTitle){
            currentTitle = 0;
        }
        titleTag2.innerText = title2[currentTitle];
        titleTag3.innerText = title3[currentTitle];

        // get image tag
        const imageTag2 = document.getElementById('image2');
        const imageTag3 = document.getElementById('image3');
        currentImage--; // 1
        if(currentImage <= firstImage){
            currentImage = 0;
        }
        imageTag2.src = images2[currentImage];
        imageTag3.src = images3[currentImage];
        document.getElementById('info1').innerHTML = (currentImage +1) + ' / 2';

    });



    // this is mine
    $(".next1").click(function() {
        $(".merch-item").addClass("active");
        $(".st0-2").addClass("thick");
        $(".st0-3").addClass("thin");
    });
   

    $(".prev3").click(function() {
        $(".merch-item").removeClass("active");
        $(".st0-2").removeClass("thick");
        $(".st0-3").removeClass("thin");
    });

});