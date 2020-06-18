const select = (name) => {
    return document.querySelector(name);
};

let ham = select('.ham');
let overlay = select('.overlay');
let mobileNav = select('.header__mobileNav');

ham.addEventListener('click', () => {
    ham.classList.toggle("change");

    overlay.classList.toggle("display");
    mobileNav.classList.toggle("display")

    // overlay.style.display = "block";
    // nav.style.display = "block";
});

