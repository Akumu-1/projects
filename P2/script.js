const nav = document.getElementById("nav2");
let cury = window.pageYOffset;
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > cury){
        nav.style.top = "-100px";
    }
    else nav.style.top = "0px";
    cury = window.pageYOffset;
})