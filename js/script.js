// Dark Mode Functionality
const dayNight = document.querySelector(".day-night");

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


// Typing Animation Functionality
var typed = new Typed(".typing", {
    strings:["DevOps Intern" , "Web Developer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// Navigation bar Functionality
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
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogBtn();
            }
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

    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }

    function asideSectionTogBtn()
    {
        aside.classList.toggle("open");
        navTogBtn.classList.toggle("open");

        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.toggle("open");
        }
           
    }

    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }

    // Project Filter Functionality
    const filterContainer = document.querySelector(".project-filter"), filterBtn = filterContainer.children,
    totalFilterBtn = filterBtn.length, 
    projectItems = document.querySelectorAll(".project-item"), totalProjectItem = projectItems.length;

    for(let i=0; i<totalFilterBtn; i++)
    {
        filterBtn[i].addEventListener("click", function()
        {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let j=0; j<totalProjectItem; j++)
            {
                if(filterValue === projectItems[j].getAttribute("data-category"))
                {
                    projectItems[j].classList.remove("hide");
                    projectItems[j].classList.add("show");
                }
                else
                {
                    projectItems[j].classList.add("hide");
                    projectItems[j].classList.remove("show");
                }
               
                if(filterValue === "all")
                {
                    projectItems[j].classList.remove("hide");
                    projectItems[j].classList.add("show");
                }
            }
        })
    }
