
// toggle menu

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});


// sitcky header

header_div= document.getElementById('header');
function testScroll()
{
    
   if(document.documentElement.scrollTop > 10)
   {
   
    header_div.style.boxShadow = "0px 10px 45px 0px hsla(240, 100%, 10%, 0.4)";
   }
   else
   {
  
    header_div.style.boxShadow= "none";
   }
}


// accordio

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {

var panel = this.nextElementSibling;
if (panel.style.maxHeight){
  panel.style.maxHeight = null;
} else{
  let active = document.querySelectorAll(".grid .accordion.active");
  for(let j = 0; j < active.length; j++){
    active[j].classList.remove("active");
    active[j].nextElementSibling.style.maxHeight = null;
  }
  this.classList.toggle("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}


// slick slider
$('.slider').slick({
  centerMode: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
  dots: false,
  arrow: true,
  responsive: [
      {
          breakpoint: 1440,
          settings: {
              arrows: true,
              dots: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 3
          }
      },
      {
          breakpoint: 1025,
          settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 3
          }
      },
      {
          breakpoint: 768,
          settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 3
          }
      },
      {
          breakpoint: 576,
          settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              variableWidth: false,
              centerPadding: '0px',
              slidesToShow: 2

          }
      }
  ]
});



