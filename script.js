

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


let follow = document.querySelector(".follow");
let exit = document.querySelector(".bx-exit");
let btn = document.querySelector(".btn");
let first = document.querySelector(".first");


btn.addEventListener("click", ()=>{

  follow.style.display = "block";

})

first.addEventListener("click", ()=>{

follow.style.display = "block";

})


    exit.addEventListener("click", ()=>{

      follow.style.display = "none";

   })





