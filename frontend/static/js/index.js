const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

window.addEventListener("DOMContentLoaded", () => {
    hamburger.addEventListener("click", () => {
        if (menu.className.includes("show")) {
            menu.classList.remove("show");
        } else {
            menu.classList.add("show");
        }
        
    })
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        if (menu.className.includes("show")) {
            menu.classList.remove("show");
        }
    }
})