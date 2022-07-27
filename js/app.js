console.log("We are online");

//Animations
gsap.registerPlugin(ScrollTrigger);

/* Feature List */
gsap.from('.feature', { scrollTrigger: ".features-list", opacity: 0, duration: 1, y: 50, stagger: 1, ease: "power2.out" })


/* Highlight Content */
const highlightsElements = document.getElementsByClassName('highlight');

function replaceHighlightContent(index) {

}

Array.from(highlightsElements).forEach(element => {
    element.addEventListener('click', function (e) {
        document.querySelector('.highlight.active').classList.remove('active');
        this.classList.add('active');
    })
});


function ToogleHamburgerMenu() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}

function loadListeners() {

    document.getElementById('open-hamburger-menu').addEventListener('click', ToogleHamburgerMenu)
    document.getElementById('close-hamburger-menu').addEventListener('click', ToogleHamburgerMenu)
}

document.addEventListener('DOMContentLoaded', () => {
    loadListeners();
})