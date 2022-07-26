// array of images
$(document).ready(function(){
    const images2 = [
        'img/8853578481694.jpg',    // index 0 --> images[0]
        'img/8845084131358.jpg'    // index 2 --> images[2]
    ];
    const images3 = [
        'img/8810632282142.jpg',    // index 1 --> images[1]
        'img/8849829625886.jpg'    // index 3 --> images[3]
    ];
    const firstImage = 0;
    const lastImage = images2.length -1;
    let currentImage = 0;
    // next
    const nextBtn = document.getElementById('next1');
    nextBtn.addEventListener('click',()=>{

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
    const preBtn = document.getElementById('prev1');
    preBtn.addEventListener('click',()=>{

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
    $

    (".prev1").click(function() {
        $(".merch-item").removeClass("active");
        $(".st0-2").removeClass("thick");
        $(".st0-3").removeClass("thin");
    });

});