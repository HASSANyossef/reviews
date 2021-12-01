let reviews = [
    {
        id: 1,
        name: "join madisom",
        job: "auther",
        img: "images/member-10.jpg.webp",
        info: `ratione quo sit eveniet culpa? Et! i am expect Lorem ipsum dolor,
        sit amet consectetur
        adipisicing elit.Illum deserunt sequi optio amet  facilis impedit libero perspiciatis
        `
    },
    {
        id: 2,
        name: "samy androw",
        job: "web developer",
        img: "images/member-2.jpg.webp",
        info: `i am expect Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit.Illum deserunt sequi optio amet  facilis impedit libero perspiciatis
        ratione quo sit eveniet culpa? Et!`
    },
    {
        id: 3,
        name: "ramy teto",
        job: "data base",
        img: "images/member-1.jpg.webp",
        info: `i am expect Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit.Illum deserunt sequi optio amet  facilis impedit libero perspiciatis
        ratione quo sit eveniet culpa? Et!`
    },
    {
        id: 4,
        name: "louis kavany",
        job: "web developer",
        img: "images/member-9.jpg.webp",
        info: `adipisicing elit.Illum deserunt sequi optio amet  facilis impedit libero perspiciatis
        i am expect Lorem ipsum dolor, sit amet consectetur 
        ratione quo sit eveniet culpa? Et!`
    },
    {
        id: 5,
        name: "jali lokako",
        job: "web developer",
        img: "images/member-4.jpg.webp",
        info: `i am expect Lorem ipsum dolor, sit amet consectetur 
        ratione quo sit eveniet culpa? Et!
        adipisicing elit.Illum deserunt sequi optio amet  facilis impedit libero perspiciatis
`
    }
]

let image = document.querySelector(".img");
let user = document.getElementById("name");
let job = document.getElementById("job");
let desc = document.getElementById("desc");

let prev = document.querySelector(".prev-btn");
let next = document.querySelector(".next-btn");
let randamm = document.querySelector(".randam-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function ()
{
    showItem();
})

function showItem()
{
    let temp = reviews[currentItem];
    user.textContent = temp.name;
    image.src = temp.img;
    job.textContent = temp.job;
    desc.textContent = temp.info;
}

next.addEventListener("click", function ()
{
    currentItem++;
        console.log(currentItem);
    if (currentItem > reviews.length-1)
    {
        currentItem = 0;
    }
    showItem();
})

prev.addEventListener("click", function ()
{
    currentItem--;
        console.log(currentItem);
    if (currentItem < 0)
    {
        currentItem = reviews.length-1;
    }
    showItem();

})

randamm.addEventListener("click", function ()
{
    let item = reviews[getRandam()];
    user.textContent = item.name;
    image.src = item.img;
    job.textContent = item.job;
    desc.textContent = item.info;
    console.log(getRandam());
})


function getRandam()
{
    return  Math.floor(Math.random() * reviews.length);
}

