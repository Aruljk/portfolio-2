let menu=document.querySelector('#menu-bars');
let header=document.querySelector('header');

menu.onclick=()=>{
    menu.classList.toggle("icofont-close");
    header.classList.toggle('active');

}
window.onscroll=()=>{
    menu.classList.remove("icofont-close");
    header.classList.remove('active');

}
