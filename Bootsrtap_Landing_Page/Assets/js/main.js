const toTop = document.querySelector(".to-top");
let navColor = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
        navColor.classList.remove("bg-color");
    } else {
        toTop.classList.remove("active");
        navColor.classList.add("bg-color");
    }
});