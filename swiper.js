document.addEventListener('DOMContentLoaded', function () {
    const images = [
        "https://advenx.wpengine.com/wp-content/uploads/2023/04/Thumb-Slider-01.jpg",
        "https://advenx.wpengine.com/wp-content/uploads/2023/04/AdobeStock_585370086.png",
        "https://advenx.wpengine.com/wp-content/uploads/2023/04/AdobeStock_586872603.png",
        "https://advenx.wpengine.com/wp-content/uploads/2023/04/AdobeStock_447414502.jpg",
      ];
    let slide =0;
    var mySwiper = new Swiper('#mySwiper', {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 2,
      breakpoints:{
        1800:{
          slidesPerView:3
        }
      }
    });
    const updateBackgroundImage = (index)=>{
        const backgroundImage = `url(${images[index]})`;
        document.querySelector('#home-header-image').style.backgroundImage = backgroundImage;
    }
   
    updateBackgroundImage(slide);
    const handleSwiperNext = () =>{
        if(slide<mySwiper.slides.length-1){
            slide++;
            mySwiper.slideNext();
            updateBackgroundImage(slide);
        }
        
    }


    const handleSwiperPrev = () =>{
        if(slide>0){
            slide--;
            mySwiper.slidePrev();
            updateBackgroundImage(slide);
        }
    }


    document.querySelector('.nextBtn1').addEventListener('click',handleSwiperNext);
    document.querySelector('.backBtn1').addEventListener('click',handleSwiperPrev);


    var mySwiper2 = new Swiper('#mySwiper2',{
      spaceBetween:20,
      slidesPerView:1,
      slidesPerGroup:1,
      slidesPerGroupSkip:2,
      breakpoints:{
        640:{
          slidesPerView:2
        },
        1320:{
          slidesPerView:3
        }
      }
    })
    let slide2 =0;
    const handleSwiperNext2 = () =>{
      if(slide2<mySwiper2.slides.length-1){ 
          mySwiper2.slideNext();
          slide2++;
       
      }
      
  }


  const handleSwiperPrev2 = () =>{
      if(slide2>0){ 
          mySwiper2.slidePrev();
          slide2--;
      }
  }

    document.querySelector('.nextBtn2').addEventListener('click',handleSwiperNext2);
    document.querySelector('.backBtn2').addEventListener('click',handleSwiperPrev2);
  });
