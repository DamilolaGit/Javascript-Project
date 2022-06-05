
//local reviews
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "Web Developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "Everyone often expresses my mind when it comes to bad behaviour in the society and my feeling is that it should not be so.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "Web Developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "One benefit of life is calmness",
    },
    {
        id: 3,
        name: "peter jones",
        job: "Intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "seriouly, I think the government should review all policies.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "The boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "The boss acts like he is possessed.",
    },

];


//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


//initial value of starting item
let currentItem = 0;


//loading of initial item
window.addEventListener("DOMContentLoaded", function(){
   showPerson();
});


//show person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

//show previous person
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson();
});

//show random person
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(showPerson);
    showPerson();
});

