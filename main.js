
function myFunction() {
    let x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  const urls = [
   "./imagine/front/1.jpg",
   "./imagine/front/2.jpg",
   "./imagine/front/3.jpg",
   "./imagine/front/4.jpg"
  ];

  const countPic = urls.length;

  let infinite = true;
  let current = 0;
  let nextUrl = 0;
  let prevUrl = 0;

  let bgStyle = document.querySelector(".section-hero").style;

  bgStyle.backgroundImage = `url(${urls[0]}) `;
  bgStyle.backgroundRepeat = "no-repeat";
  bgStyle.backgroundPosition = "center";
  bgStyle.backgroundSize = "cover";

  function showPrev() {}

  document.querySelector(".picnav-left").addEventListener("click", e => {
    e.preventDefault();

    if (current === 0) {
      prevUrl = urls[countPic - 1];
      current = countPic - 1;

      if (!infinite) {
        current = 0;
        prevUrl = urls[current];
      }
    } else {
      prevUrl = urls[--current];
    }
    bgStyle.backgroundImage = `url(${prevUrl})`;

    console.log(current + " " + countPic);
  });
  document.querySelector(".picnav-right").addEventListener("click", e => {
    e.preventDefault();

    if (current === countPic - 1) {
      current = 0;
      nextUrl = urls[current];

      if (!infinite) {
        current = countPic - 1;
        nextUrl = urls[current];
      }
    } else {
      nextUrl = urls[++current];
    }
    bgStyle.backgroundImage = `url(${nextUrl})`;
  });

  

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 


