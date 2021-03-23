const contact=document.querySelector("#contact");
const burger=document.querySelector(".burger");

const contact_modal=document.querySelector("#contact_modal");
const nav_modal=document.querySelector("#nav_modal");

const close_modal=document.querySelector("#contact_modal .fa-times");
const close_nav=document.querySelector("#nav_modal .fa-times");

const nav_contact=document.querySelector("#nav_contact");


contact.addEventListener("click",()=>{
    contact_modal.style.display="block";
});

close_modal.addEventListener("click",()=>{
    contact_modal.style.display="none";
});

burger.addEventListener("click",()=>{
    nav_modal.style.display="block";
});

close_nav.addEventListener("click",()=>{
    nav_modal.style.display="none";
});

nav_contact.addEventListener("click",()=>{
    nav_modal.style.display="none";
    contact_modal.style.display="block";
});
