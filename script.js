// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["A Principal",  "and Founder of", "J Small Consulting"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["A Principal",  "and Founder of", "J Small Consulting"],
    typeSpeed: 100,
    backSpeed: 60,
});


//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})