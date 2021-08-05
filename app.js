const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to('.into', {y: "-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=1');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
   
    
    burger.addEventListener('click', () => {
        //togggle nav
        nav.classList.toggle('nav-active');

    });

    //burger animation
    burger.classList.toggle('toggle');
    console.log(toggle);
}

navSlide();
