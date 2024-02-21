const sidebar = document.getElementById('sideBarRef');
let isOpen = false;

function onBurgerClick(){
    isOpen = !isOpen;

    gsap.to(sidebar,{
        x:isOpen ? 0 : -300,
        duration: 0.5,
        ease: "power2.inOut",
    });
}