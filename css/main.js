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
let cursor1=document.querySelector('.cursor-1');
let cursor2=document.querySelector('.cursor-2');

window.onmousemove=(e)=>{
    cursor1.style.top=e.pageY+'px';
    cursor1.style.left=e.pageX+'px';
    cursor2.style.top=e.pageY+'px';
    cursor2.style.left=e.pageX+'px';
}