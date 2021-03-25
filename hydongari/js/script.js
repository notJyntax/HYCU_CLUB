const imgs = document.querySelectorAll(".section-club-intro .container .club-image img");
const imgBox = document.querySelector(".section-club-intro .right-side .right-image .expanded-img");
const clubTitle = document.querySelector(".right-text .title");
const clubDivs = document.querySelectorAll(".left-side div");

const mobileMenu = document.querySelector(".nav-icon-box");
const gnbMenu = document.querySelector(".header .gnb");

mobileMenu.addEventListener("click", () => {
    gnbMenu.classList.toggle("active");
})

imgBox.src = "images/hygolfclub.png";

clubDivs.forEach( div => div.addEventListener("click", showDetail));

function showDetail(e){
   imgBox.src = e.target.src;
   const clubName = e.target.nextElementSibling.innerText;
   clubTitle.innerText = clubName;
}




