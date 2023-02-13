const body = document.body;
const header = document.querySelector("header");
// const main = document.querySelector("main");
const headerHeight = document.querySelector("header").offsetHeight;

// main.style.top = headerHeight + "px";

let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    // this console log is just for my practise
    // console.log("current: ", currentScroll);
    // console.log("last: ", lastScroll);

    if (currentScroll - lastScroll > 0) {
        // scrolled down -- header hide
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
    } else {
        // scrolled up -- header show
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
        header.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    }

    lastScroll = currentScroll;
    // console.log("last: ", lastScroll);
})

// changing the title onclicking every other page 
function homeTitle(){
    document.querySelector("title").textContent = "Alex Turnwall>>Designer & Developer";

    // document.getElementsByTagName("title").textContent = "Alex Turnwall>>Designer & Developer";
    
}
let workTitle = () =>{
    document.querySelector("title").textContent = "Portfolio Archive-Alex Turnwall";
    document.getElementById("nava").style.borderBottom = "3px solid black";
    document.getElementById("navb").style.borderBottom = "";
    document.getElementById("navc").style.borderBottom = "";
}
let blogTitle = () =>{
    document.querySelector("title").textContent = "Articles-Alex Turnwall";
    document.getElementById("navb").style.borderBottom = "3px solid black";
    document.getElementById("nava").style.borderBottom = "";
    document.getElementById("navc").style.borderBottom = "";
}
let aboutTitle = () =>{
    document.querySelector("title").textContent = "About-Alex Turnwall";
    document.getElementById("navc").style.borderBottom = "3px solid black";
    document.getElementById("navb").style.borderBottom = "";
    document.getElementById("nava").style.borderBottom = "";
}
let moveToabout = () => {
    const element = document.getElementById("about");
    element.scrollIntoView();
}
let moveTomodus = () =>{
    const element = document.getElementById("modus-operandi");
    element.scrollIntoView();
}
let moveToexpertise = () =>{
    const element = document.getElementById("expertise");
    element.scrollIntoView();
}
let moveTocontact =() =>{
    const element = document.getElementById("contact");
    element.scrollIntoView();
}

