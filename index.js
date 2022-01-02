const btnMoblie = document.getElementById("btn-moblie");

function toggleMenu(event){
    if(event.type === "touchstart") event.preventDefaut()
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
}
btnMoblie.addEventListener("click", toggleMenu);
btnMoblie.addEventListener("touchstart", toggleMenu);
