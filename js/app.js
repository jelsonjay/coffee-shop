const list = document.querySelectorAll(".links li");
const menuToggle = document.querySelector(".menuToggle");
const navbar = document.querySelector(".navbar");


//===================ACTIVE MENU=====================

function menuActive() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", menuActive));

//===================MENU TOOGLE=====================
menuToggle.onclick = function () {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
menuToggle.classList.remove("active")
navbar.classList.remove("active")
}

//===================LOADING=====================
window.addEventListener("load", () => {
  
const loader = document.querySelector(".loader")
loader.classList.add("loader--active")
document.querySelector(".loader").addEventListener("transitionend" , () => {
//document.body.removeChild(document.querySelector(".loader"))
})
})

//===================MOVE HERO IMAGE=====================
// document.addEventListener("mousemove", moveImg)
// function moveImg(e){
// e.this.querySelectorAll(".move").forEach((item) =>{
//   const speed = item.getAttribute("data-speed")

//   const x = (window.innerWidth - e.pageX * speed)/120
//   const y = (window.innerWidth - e.pageY * speed)/120

//   item.style.transform = `translateX(${x}px) translateY(${y}px)`
// })
// }



//===================GSAP LIBRARY=====================
//gsap.from(".logo", {opacity: 0, duration:1, delay:2, y:10 })
gsap.from("header .navbar .links", {opacity: 0, duration:1, delay:2.1, y:30 , stagger:0.2})

gsap.from(".hero-title", {opacity: 0, duration:1, delay:1.6, y:30 })
gsap.from(".desc", {opacity: 0, duration:1, delay:2, y:30 })
gsap.from(".btn-order", {opacity: 0, duration:1, delay:2.8, y:30 })
gsap.from(".btn-read", {opacity: 0, duration:1, delay:1.6, y:30 })
gsap.from(".hero-img", {opacity: 0, duration:1, delay:2.6, y:30 })
gsap.from(".logo", {opacity: 0, duration:1, delay:2, y:10 })




//===================TO TOP=====================
const srollTopItem = () => {
  let scrollToUp = document.querySelector(".scrollUp")
  let pos = document.documentElement.scrollTop
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let scrollValue = Math.round((pos * 100) / calcHeight)
  
  if(pos > 100){
   scrollToUp.style.display = "grid"
  }else{
   scrollToUp.style.display = "none"
  }

  scrollToUp.addEventListener("click" , ()=> {
  document.documentElement.scrollTop = 0
  })

  scrollToUp.style.background = `
  conic-gradient(#bc9667 ${scrollValue}%, #2b211d ${scrollValue}% ) 
  `
 
}

window.onscroll = srollTopItem
window.onload = srollTopItem


//=============JSON DATA===============

const screen = document.querySelector(".shop-container")

const jsonFile = "./db.json"

fetch(jsonFile).then(res => {

  //console.log(res.json())

  return res.json()
}).then(data =>{
  data.map(product => {

  const {id, title, price, image} = product

  screen.innerHTML += `
    <div class="card">
    <img src=${image} alt=${title}>
    <h3>${title}</h3>
    <div class="card-content">
    <span>£ ${price}</span>
    <a href="#" ><i class='bx bx-cart'></i></a>
    </div>
    </div>
  `
  })

})