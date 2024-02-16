const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  autoplay: {
    delay: 5000,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



window.addEventListener('scroll', function() {
  const jsBar = document.getElementById('js-bar');
  const htmlBar = document.getElementById("html-bar")
  const cssBar = document.getElementById("css-bar")
  const reactBar = document.getElementById("react-bar")
  const positionFromTopHtml = cssBar.getBoundingClientRect().top;
  const jsSpan = this.document.getElementById("js-bar-span")
  const htmlSpan = this.document.getElementById("html-bar-span")
  const cssSpan = this.document.getElementById("css-bar-span")
  const reactSpan = this.document.getElementById("react-bar-span")
  const windowHeight = window.innerHeight;

  
  let scrolledPercentageJs = (windowHeight - positionFromTopHtml + 130) / windowHeight * 100;


  scrolledPercentageJs = Math.min(Math.max(scrolledPercentageJs, 0), 100);

 
  jsSpan.textContent = `(${(scrolledPercentageJs - 10 <= 70 ? scrolledPercentageJs - 10 : 70 ).toFixed()}%)`
  jsBar.value = scrolledPercentageJs - 10 <= 70 ? scrolledPercentageJs - 10 : 70 ;
  htmlSpan.textContent = `(${(scrolledPercentageJs - 10 <= 80 ? scrolledPercentageJs - 10 : 80 ).toFixed()}%)`
  htmlBar.value = scrolledPercentageJs - 10 <= 80 ? scrolledPercentageJs - 10 : 80 ;
  cssSpan.textContent = `(${(scrolledPercentageJs - 10 <= 70 ? scrolledPercentageJs - 10 : 70 ).toFixed()}%)`
  cssBar.value = scrolledPercentageJs - 10 <= 70 ? scrolledPercentageJs - 10 : 70 ;
  reactSpan.textContent = `(${(scrolledPercentageJs - 10 <= 80 ? scrolledPercentageJs - 10 : 80 ).toFixed()}%)`
  reactBar.value = scrolledPercentageJs - 10 <= 80 ? scrolledPercentageJs - 10 : 80 ;
  

});
