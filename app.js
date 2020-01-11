const open = document.querySelector('#open');

open.addEventListener('click', myOpen);
function myOpen() {
    let elem = document.querySelector('nav');
    elem.classList.toggle('navTerlihat');
    console.log(elem);
    
}