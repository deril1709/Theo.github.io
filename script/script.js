const galleryImage = document.querySelectorAll('.gallery-img');

galleryImage.forEach((img , i) => {
    img.dataset.aos = 'fade-down';
})

AOS.init();