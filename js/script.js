// Dark Mode
const dayNight = document.querySelector(".day-night");

// dayNight.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
//     if(document.body.classList.contains("dark"))
//     {
//         dayNight.querySelector("i").classList.remove("fa-moon");
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else
//     {
//         dayNight.querySelector("i").classList.remove("fa-sun");
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

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

// Typing Animation
var typed = new Typed(".typing", {
    strings:["DevOps Intern" , "Web Developer", "Software Developer", "Cyber Security Analyst"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

