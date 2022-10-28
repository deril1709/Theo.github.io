const galleryImage = document.querySelectorAll(".gallery-img");

galleryImage.forEach((img, i) => {
  img.dataset.aos = "fade-down";
});

AOS.init();

gsap.from(".jumbotron img", { duration: 1, y: -100, opacity: 0, ease: "bounce" });

var typeEffect = new Typed(".lead", {
    strings : ["student", "web developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
});
