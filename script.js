const images = [
    'img1.webp',
    'img2.webp',
    'img3.webp',
    'img4.webp',
    'img5.webp'
];

let currentIndex = 0;

function updateImage() {
    document.getElementById('product-image').src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
}
