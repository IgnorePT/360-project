console.log("We are online");

//Animations
gsap.registerPlugin(ScrollTrigger);
gsap.from('.section-text', {opacity: 0, duration: 1.8, y: -50, ease: "power2.out", delay: 0.4});
gsap.from('.feature', {scrollTrigger: ".features-list", opacity: 0, duration: 1, y: 50, stagger: 1, ease: "power2.out"})
// gsap.from('.card_challenge', {scrollTrigger: ".challenge_list", opacity: 0, duration: 1, y: 50, stagger: 0.6, ease: "power2.out"})


const highlightsElements = document.getElementsByClassName('highlight');

function replaceHighlightContent(index){
    
}

Array.from(highlightsElements).forEach(element => {
    element.addEventListener('click', function(e){
        document.querySelector('.highlight.active').classList.remove('active');
        this.classList.add('active');
    })
});