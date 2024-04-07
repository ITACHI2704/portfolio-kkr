

let  menu = document.querySelector(" i.bx-menu-alt-right");
let cross = document.querySelector(" i.bx-x");
let navbar = document.querySelector(".hlinks");


// transform: translateX(800px);

menu.addEventListener("click", ()=>{
navbar.style.transform = "translateX(0px)";


})


cross.addEventListener("click", ()=>{
    navbar.style.transform = "translateX(800px)";
  
    })


      //////  portfolio form /////////////////

  let arrow = document.querySelector(".arrow ");
  let poster = document.querySelector(".pimg")

poster.addEventListener("mouseover",()=>(
  // console.log("yes it was working ")
  arrow.style. visibility="visible" 
))





