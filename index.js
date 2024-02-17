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

const servicesEl = document.getElementById("services");

const skills = [
  "Best Service",
  "Pixel Perfect",
  "Unique Ideas",
  "Helpful Support",
  "HTML",
  "CSS",
  "Javascript",
  "React",
];

skills.map((skill) => {
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
  `;
});

const recommswiper = new Swiper(".recc-swiper", {
  direction: "horizontal",

  autoplay: {
    delay: 50000,
  },
  pagination: {
    el: ".swiper-paginationa",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '" style="background-color: transparent; border: 1px solid white;">' +
        (index + 1) +
        "</span>"
      );
    },
  },

  currentClass: "swiper-pagination-current",
  allowTouchMove: false,
});

function handleScroll() {
  const jsBar = document.getElementById("js-bar");
  const htmlBar = document.getElementById("html-bar");
  const cssBar = document.getElementById("css-bar");
  const reactBar = document.getElementById("react-bar");
  const positionFromTopHtml = htmlBar.getBoundingClientRect().top;

  const jsSpan = document.getElementById("js-bar-span");
  const htmlSpan = document.getElementById("html-bar-span");
  const cssSpan = document.getElementById("css-bar-span");
  const reactSpan = document.getElementById("react-bar-span");
  const windowHeight = window.innerHeight;

  let scrolledPercentageHtml =
    ((windowHeight - positionFromTopHtml) / windowHeight) * 100;
  scrolledPercentageHtml = Math.min(Math.max(scrolledPercentageHtml, 0), 100);

  if (positionFromTopHtml < windowHeight) {
    htmlSpan.textContent = `(0%)`;
    cssSpan.textContent = `(0%)`;
    jsSpan.textContent = `(0%)`;
    reactSpan.textContent = `(0%)`;
    let currentValue = 0;
    const incrementInterval = setInterval(() => {
      if (currentValue >= 100) {
        clearInterval(incrementInterval);
      } else {
        currentValue += 1;
        htmlBar.value = currentValue;
        htmlSpan.textContent = `(${currentValue}%)`;
        cssBar.value = currentValue;
        cssSpan.textContent = `(${currentValue}%)`;
        jsBar.value = currentValue;
        jsSpan.textContent = `(${currentValue}%)`;
        reactBar.value = currentValue;
        reactSpan.textContent = `(${currentValue}%)`;
      }
    }, 10);

    window.removeEventListener("scroll", handleScroll);
  } else {
    htmlSpan.textContent = `(${scrolledPercentageHtml.toFixed()}%)`;
    htmlBar.value = scrolledPercentageHtml;
  }
}

window.addEventListener("scroll", handleScroll);

// latest projects

let projects = [
  { time: 2, name: "3D Mockup Design", id: "prd3" },
  { time: 5, name: "Markup", id: "prmarkup" },
  { time: 7, name: "Chat-box", id: "prchat-box" },
  { time: 4, name: "movies", id: "prmovies" },
  { time: 1, name: "music", id: "prmusic" },
  { time: 8, name: "social", id: "prsocial" },
];
const projectsEl = document.getElementById("projects");

projects.map((project) => {
  projectsEl.innerHTML += `
  <div class="project" >
  <div class="project-inner-wrapper" id=${project.id}>
  <div class="project-svg-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      viewBox="0 0 14 12"
    >
      <path
        id="Forma_1_copy_10"
        data-name="Forma 1 copy 10"
        d="M1105,4100l-.98-.913c-3.64-3-6.02-5.021-6.02-7.5a3.673,3.673,0,0,1,3.85-3.588,4.306,4.306,0,0,0,6.3,0,3.673,3.673,0,0,1,3.85,3.588c0,2.478-2.38,4.5-6.02,7.5Z"
        transform="translate(-1098 -4087.997)"
        fill="#e93656"
      />
    </svg>
  </div>
  <p>${project.time} months ago</p>
  <h2>${project.name}</h2>
  </div>
</div>
  `;
});

let allProjectesClicked = false;
const allProjectNav = document.getElementById("all");

allProjectNav.addEventListener("click", function () {
  const allProjectsEl = document.querySelectorAll(".project-inner-wrapper");
  allProjectesClicked = !allProjectesClicked;

  if (allProjectesClicked) {
    allProjectsEl.forEach((project) => (project.style.opacity = "1"));
    allProjectsEl.forEach(
      (project) => (project.style.backgroundColor = "black")
    );
    allProjectsEl.forEach(
      (project) => (project.style.border = "1px solid gray")
    );
    projects.forEach(
      (project) =>
        (document.getElementById(project.id.slice(2)).style.color = "white")
    );
  } else {
    allProjectsEl.forEach((project) => (project.style.opacity = "0"));

    projects.forEach(
      (project) =>
        (document.getElementById(project.id.slice(2)).style.color = "white")
    );
  }
});

document.addEventListener("click", function (e) {
  let asd = projects.find((project) => `pr${e.target.id}` == project.id);
  let foundId = asd?.id;

  if (foundId) {
    projects.forEach(
      (project) => (document.getElementById(project.id).style.opacity = "0")
    );
    projects.forEach(
      (project) =>
        (document.getElementById(project.id.slice(2)).style.color = "white")
    );
    document.getElementById(foundId).style.opacity = "1";
    document.getElementById(foundId).style.backgroundColor = "black";
    document.getElementById(foundId)?.setAttribute("data", "clickced");
    document.getElementById(e.target.id).style.color = "#E93656";
  } else {
    document.getElementById(foundId)?.setAttribute("data", "unclicked");

    document.getElementById(foundId).style.opacity = "0";
  }
  // console.log(e.target.id === document.getElementById(`pr${id}`))
});

document.getElementsByClassName("project").addEventListener("mouseEnter",function(){
  document.getElementsByClassName("project-inner-wrapper").style.opacity ="1"
})
