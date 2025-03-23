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

// Navigation bar
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
        })
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }

    const navTogBtn = document.querySelector(".nav-tog"),
        aside = document.querySelector(".aside");
        navTogBtn.addEventListener("click", () => 
        {
            asideSectionTogBtn();
        })

        function asideSectionTogBtn()
        {
            aside.classList.toggle("open");
            navTogBtn.classList.toggle("open");
           
        }


    //allSection = document.querySelectorAll(".section"),
    //totalSection = allSection.length;


