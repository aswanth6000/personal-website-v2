var stick = document.querySelector(".navbar")
window.onscroll = ()=>{
    this.scrollY > 20 ? stick.classList.add("sticky"):
    stick.classList.remove("sticky")
}

document.getElementById("button3").onclick = function () {
    location.href = "https://aswanth6000imagegallery.netlify.app/";
};
document.getElementById("button2").onclick = function () {
    location.href = "https://aswanth6000imagegallery.netlify.app/";
};
document.getElementById("button1").onclick = function () {
    location.href = "https://aswanth6000imagegallery.netlify.app/";
};


const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
  
})
document.querySelectorAll("menu-btn").forEach( n => n.addEventListener("click" , () => {
  hamburger.classList.remove("active")
  menu.classList.remove("active")
}))