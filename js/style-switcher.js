// Style Switch Toggle
const styleSwitcherToggler = document.querySelector(".style-switcher-tog");

styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");

})

// Dark Mode
const dayNight = document.querySelector(".day-night");
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})