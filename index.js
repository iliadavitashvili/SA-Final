const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  autoplay: {
    delay: 5000,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  allowTouchMove: false,
 


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

  
  let scrolledPercentageJs = (windowHeight - positionFromTopHtml + 550) / windowHeight * 100;


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


const servicesEl = document.getElementById("services")

const skills = ["Best Service","Pixel Perfect" ,"Unique Ideas","Helpful Support","HTML","CSS","Javascript","React"]

skills.map(skill =>{
  servicesEl.innerHTML += `
  <div class="service-wrapper">
  <div class="service">
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
      <path id="Forma_1" data-name="Forma 1" d="M556.724,2363.744l-4.664-4.664a1.106,1.106,0,0,0-1.566,0l-1.824,1.824a25.056,25.056,0,0,0-23.084-2.866l7.174-7.173a3.61,3.61,0,1,0-1.566-1.568l-11.332,11.332-1.549-1.548a1.107,1.107,0,0,0-1.566,0l-4.664,4.664a1.107,1.107,0,0,0,0,1.567l1.549,1.549L502.3,2378.19a3.609,3.609,0,1,0,1.566,1.567l7.174-7.175a25.058,25.058,0,0,0,2.866,23.085l-1.824,1.823a1.109,1.109,0,0,0,0,1.568l4.664,4.663a1.107,1.107,0,0,0,1.566,0l4.664-4.663a1.109,1.109,0,0,0,0-1.568l-4.664-4.664a1.106,1.106,0,0,0-1.566,0l-1.244,1.244a22.811,22.811,0,0,1,0-25.34l1.244,1.244a1.109,1.109,0,0,0,1.566,0l4.664-4.665a1.108,1.108,0,0,0,0-1.567l-1.244-1.244a22.814,22.814,0,0,1,25.341,0l-1.244,1.244a1.107,1.107,0,0,0,0,1.566l4.664,4.665a1.109,1.109,0,0,0,1.566,0l4.664-4.665A1.107,1.107,0,0,0,556.724,2363.744Zm-39.194,31.434,3.1,3.1-3.1,3.1-3.1-3.1Zm15.889-48.508a1.392,1.392,0,1,1,0,1.97h0A1.394,1.394,0,0,1,533.419,2346.669Zm-31.778,35.716a1.391,1.391,0,1,1,0-1.97h0A1.4,1.4,0,0,1,501.641,2382.386Zm15.889-14.76-1.549-1.548h0l-1.549-1.55,3.1-3.1,1.546,1.547,0,0,0,0,.142.141.009.008,1.4,1.4Zm33.747,0-3.1-3.1,3.1-3.1,3.1,3.1Z" transform="translate(-497.049 -2344.047)" fill="#15263e"/>
    </svg>
    
    <h3>${skill}</h3>            
  </div>
  <div class="service-description">
    <h3>${skill}</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam necessitatibus maiores cum aspernatur, deleniti dolore ipsa aut vitae et, magni, officiis consequatur? Architecto soluta quia ratione quas adipisci itaque.</p>
  </div>
</div>
  `
})

const recommswiper = new Swiper(".recc-swiper", {
  direction: "horizontal",

  autoplay: {
    delay: 50000,
  },
  pagination: {
    el: '.swiper-paginationa',
    clickable:true,
    renderBullet: function (index, className) {
      
      return '<span class="' + className + '" style="background-color: transparent; border: 1px solid white;">' + (index + 1) + '</span>';
    },
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  currentClass:"swiper-pagination-current",
  allowTouchMove: false,
 


});