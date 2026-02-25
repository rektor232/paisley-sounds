const toggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");

toggle.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        menu.classList.toggle("show");
    }
});

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
})

//close menu items when clicked outside
window.addEventListener("click",(event)=>{
    if (!menu.contains(event.target)&& !toggle.contains(event.target)){
        menu.classList.remove("show");
    }
})

//open mobile nav when menu icon clicked

const mobileMenu = document.getElementById("mobile-menu");
const mobileNav = document.getElementById("mobile-menus");

mobileMenu.addEventListener("click", () => {
   mobileNav.classList.toggle("show");



});

//close mobile nav when clicked outside
window.addEventListener("click", (event) => {

    if (!mobileNav.contains(event.target) && !mobileMenu.contains(event.target)) {
       mobileNav.classList.remove("show");
    }
});

//add shadow to nav when page scrolled
window.addEventListener('scroll',()=>{
const nav=document.getElementById("containerr");
if (window.scrollY>0){
    nav.classList.add('sticky');
}else{
    nav.classList.remove('sticky');
}
}); 
