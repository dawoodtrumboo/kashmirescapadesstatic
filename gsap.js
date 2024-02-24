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
const swiperParents = document.querySelectorAll('.swiper-parent');

swiperParents.forEach(swiperParent => {
  const swiperOverlay = swiperParent.querySelector('.swiper-overlay');
  const swiperHeader = swiperParent.querySelector('.swiper-content h2');
  const swiperText = swiperParent.querySelector('.swiper-content p');
  const swiperBtn = swiperParent.querySelector('.swiper-content button');

  // Initial State
  gsap.set(swiperOverlay, { backgroundColor: 'rgba(0,0,0,0.20)', y: 0 });
  gsap.set(swiperHeader, { y: 0 });
  gsap.set(swiperText, { y: 0 });
  gsap.set(swiperBtn, { y: 50 });

  // Hover Animation of Swiper
  const hoverAnimation = gsap.timeline({ paused: true });
  hoverAnimation.to(swiperOverlay, { backgroundColor: '#c85a009d', ease: 'ease-in-out' });
  hoverAnimation.to(swiperHeader, { y: -50, ease: 'power3.in' }, "0");
  hoverAnimation.to(swiperText, { y: -50, ease: 'power3.in' }, ">-0.3");
  hoverAnimation.to(swiperBtn, { y: -30, ease: 'power3.in' }, ">-0.3");

  // Add hover event Listener
  swiperOverlay.addEventListener('mouseenter', () => hoverAnimation.play());
  swiperParent.addEventListener('mouseleave', (event) => {
    if (!isCursorInsideOverlay(event, swiperParent) && !isCursorInsideBtn(event, swiperBtn) && !isCursorInsideHeader(event, swiperHeader) && !isCursorInsideText(event, swiperText)) {
      hoverAnimation.reverse();
    }
  });

  // Functions
  function isCursorInsideOverlay(event, element) {
    const parent = element.getBoundingClientRect();
    return (
      event.clientX >= parent.left &&
      event.clientX <= parent.right &&
      event.clientY >= parent.top + window.scrollY &&
      event.clientY <= parent.bottom + window.scrollY
    );
  }

  function isCursorInsideHeader(event, element) {
    const header = element.getBoundingClientRect();
    return (
      event.clientX >= header.left &&
      event.clientX <= header.right &&
      event.clientY >= header.top + window.scrollY &&
      event.clientY <= header.bottom + window.scrollY
    );
  }

  function isCursorInsideText(event, element) {
    const text = element.getBoundingClientRect();
    return (
      event.clientX >= text.left &&
      event.clientX <= text.right &&
      event.clientY >= text.top + window.scrollY &&
      event.clientY <= text.bottom + window.scrollY
    );
  }

  function isCursorInsideBtn(event, element) {
    const btn = element.getBoundingClientRect();
    return (
      event.clientX >= btn.left &&
      event.clientX <= btn.right &&
      event.clientY >= btn.top + window.scrollY &&
      event.clientY <= btn.bottom + window.scrollY
    );
  }
});
