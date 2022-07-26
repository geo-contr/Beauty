// array of images
const images = [
    'img/8853578481694.webp',    // index 0 --> images[0]
    'img/8845084131358.webp'    // index 2 --> images[2]
];
const images1 = [
    'img/8810632282142.webp',    // index 1 --> images[1]
    'img/8849829625886.webp'    // index 3 --> images[3]
];
const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{

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
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click',()=>{

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

(".prev").click(function() {
    $(".merch-item").removeClass("active");
    $(".st0-2").removeClass("thick");
    $(".st0-3").removeClass("thin");
});