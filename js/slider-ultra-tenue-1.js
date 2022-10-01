// array of images
$(document).ready(function(){
    const images2 = [
        'img/for-slider.webp',    // index 0 --> images[0]
        'img/8845084131358.webp',    // index 2 --> images[2]
        'img/for-slider-1.webp'    // index 2 --> images[2]
    ];
    const images3 = [
        'img/8810632282142.webp',    // index 1 --> images[1]
        'img/8849829625886.webp',    // index 3 --> images[3]
        'img/for-slider-2.webp'    // index 3 --> images[3]
    ];
    const title2 = [
    'ROUGE BAUME BALM',    // index 1 --> images[1]
    'LA SOLUTION 10',    // index 3 --> images[3]
    'MADEMOISELLE 5'    // index 3 --> images[3]
    ];
    const title3 = [
    'LA CRÈME MAIN',    // index 1 --> images[1]
    'BEAUTY MADEMOISELLE',    // index 3 --> images[3]
    'EAU TENDRE'    // index 3 --> images[3]
    ];
    const chracter2 = [
    'Lip Balm',    // index 1 --> images[1]
    'Sensitive Skin Cream',    // index 3 --> images[3]
    'Parfum Spray'    // index 3 --> images[3]
    ];
    const chracter3 = [
        'Nourish - Soften - Brighten',    // index 1 --> images[1]
        'Eau de Parfum',    // index 3 --> images[3]
        'Hair Mist'    // index 3 --> images[3]
    ];
    const price2 = [
    '$42',    // index 1 --> images[1]
    '$70',    // index 3 --> images[3]
    '$80'    // index 3 --> images[3]
    ];
    const price3 = [
        '$50',    // index 1 --> images[1]
        '$100',    // index 3 --> images[3]
        '$146'    // index 3 --> images[3]
    ];

    const firstTitle = 0;
    const lastTitle = title2.length -0;
    let currentTitle = 0;

    const firstChracter = 0;
    const lastChracter = chracter2.length -0;
    let currentChracter = 0;

    const firstPrice = 0;
    const lastPrice = price2.length -0;
    let currentPrice = 0;

    const firstImage = 0;
    const lastImage = images2.length -0;
    let currentImage = 0;
    // next
    const nextBtn = document.getElementById('next1');
    nextBtn.addEventListener('click',()=>{

            // get price tag
            const priceTag2 = document.getElementById('price2');
            const priceTag3 = document.getElementById('price3');
            currentPrice++;
            if(currentPrice >= lastPrice){
                currentPrice = 2;
            }
            priceTag2.innerText = price2[currentPrice];
            priceTag3.innerText = price3[currentPrice];

            // get chracter tag
            const chracterTag2 = document.getElementById('chracter2');
            const chracterTag3 = document.getElementById('chracter3');
            currentChracter++;
            if(currentChracter >= lastChracter){
                currentChracter = 2;
            }
            chracterTag2.innerText = chracter2[currentChracter];
            chracterTag3.innerText = chracter3[currentChracter];

            // get title tag
            const titleTag2 = document.getElementById('title2');
            const titleTag3 = document.getElementById('title3');
            currentTitle++;
            if(currentTitle >= lastTitle){
                currentTitle = 2;
            }
            titleTag2.innerText = title2[currentTitle];
            titleTag3.innerText = title3[currentTitle];

            // get image tag
            const imageTag2 = document.getElementById('image2');
            const imageTag3 = document.getElementById('image3');
            currentImage++; // 1
            if(currentImage >= lastImage){
                currentImage = 2;
            }
            imageTag2.src = images2[currentImage];
            imageTag3.src = images3[currentImage];
            document.getElementById('info1').innerHTML = (currentImage +1) + ' / 3';

    });
    // prev
    const preBtn = document.getElementById('prev1');
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
        document.getElementById('info1').innerHTML = (currentImage +1) + ' / 3';

    });



// change numbers buttons active-colors for three click
    $(".next1").click(function () {
        if ($(this).hasClass('one')==true)
            {
               $(this).addClass("two");
               $(this).removeClass("one");
               $(this).addClass("three");
               $('.prev1').addClass("three");
            }
        else 
            $(this).addClass("one");
            $('.prev1').removeClass("one");

        $(".merch-item").toggleClass("active");
        $(".prev1").addClass("apply");
    });

    $(".prev1").click(function () {
        if ($(this).hasClass('one')==true)
            {
               $(this).removeClass("one");
               $(this).removeClass("three");
               $('.next1').removeClass("three");
            }
        else 
            $(this).removeClass("one");
            $('.next1').removeClass("one two");

        $(".merch-item").toggleClass("active");
        $(".prev1").addClass("one");
    });
});
// end of change numbers buttons active-colors for three click