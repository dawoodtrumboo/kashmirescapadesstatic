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
const swiperParent = document.querySelector('.swiper-parent');
const swiperOverlay = document.querySelector('.swiper-overlay');
const swiperContent = document.querySelector('.swiper-content');
const swiperHeader = document.querySelector('.swiper-content h2');
const swiperText = document.querySelector('.swiper-content p')
const swiperBtn = document.querySelector('.swiper-content button')


// Initial State
gsap.set(swiperOverlay, {backgroundColor: 'rgba(0,0,0,0.20)',y:0});
gsap.set(swiperHeader,{y:0});
gsap.set(swiperText,{y:0});
gsap.set(swiperBtn,{y:50});

// custom ease
// gsap.registerEase('customEase', time => 1 - Math.pow(1 - time,8));

// Hover Animation of Swiper 2

const hoverAnimation = gsap.timeline({paused:true});
hoverAnimation.to(swiperOverlay,{backgroundColor:'#c85a009d', ease:'ease-in-out'});
hoverAnimation.to(swiperHeader,{y:-50,ease:'power3.in'},"0");
hoverAnimation.to(swiperText,{y:-50,ease:'power3.in'},">-0.3");
hoverAnimation.to(swiperBtn,{y:-30,ease:'power3.in'},">-0.3");

// Add hover event Listener

swiperOverlay.addEventListener('mouseenter', ()=> hoverAnimation.play());
swiperParent.addEventListener('mouseleave', (event)=>{
    if(!isCursorInsideOverlay(event) && !isCursorInsideBtn(event) && !isCursorInsideHeader(event) && !isCursorInsideText(event)){
        hoverAnimation.reverse();
    }
});


function isCursorInsideOverlay(event) {
    const parent = swiperParent.getBoundingClientRect();
    return (
        event.clientX >= parent.left &&
        event.clientX <= parent.right &&
        event.clientY >= parent.top + window.scrollY &&
        event.clientY <= parent.bottom + window.scrollY
      );
  }
  function isCursorInsideContent(event) {
    const content = swiperContent.getBoundingClientRect();
    return (
        event.clientX >= content.left &&
        event.clientX <= content.right &&
        event.clientY >= content.top + window.scrollY &&
        event.clientY <= content.bottom + window.scrollY
      );
  }

function isCursorInsideHeader(event) {
    const header = swiperHeader.getBoundingClientRect();
    return (
        event.clientX >= header.left &&
        event.clientX <= header.right &&
        event.clientY >= header.top + window.scrollY &&
        event.clientY <= header.bottom + window.scrollY
      );
  }
  function isCursorInsideText(event) {
    const text = swiperText.getBoundingClientRect();
    return (
        event.clientX >= text.left &&
        event.clientX <= text.right &&
        event.clientY >= text.top + window.scrollY &&
        event.clientY <= text.bottom + window.scrollY
      );
  }
  function isCursorInsideBtn(event) {
    const btn = swiperBtn.getBoundingClientRect();
    return (
        event.clientX >= btn.left &&
        event.clientX <= btn.right &&
        event.clientY >= btn.top + window.scrollY &&
        event.clientY <= btn.bottom + window.scrollY
      );
  }

