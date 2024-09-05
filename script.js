const images = [
    '/assets/img1.webp',
    '/assets/img2.webp',
    '/assets/img3.webp',
    '/assets/img4.webp',
    '/assets/img5.webp'
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
