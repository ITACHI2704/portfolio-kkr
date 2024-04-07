
// contact form ///

const scriptURL = 'https://script.google.com/macros/s/AKfycbxrZsjAEtQH_-OheTkdNsbnWc3DuYBKelzjTQO0eRBRBn7U5S9HUZPgTbpdUB_hoZpCMg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML="Message sent sucessfully"
      setTimeout(function (){
        msg.innerHTML=""
      },2000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



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





