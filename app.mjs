const navBar = document.querySelector("nav");
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');


openNav = () => {
    navBar.classList.add('open');

}
closeNav = () => {
    navBar.classList.remove('open');

}
menuBtn.addEventListener('click', openNav)
closeBtn.addEventListener('click', closeNav)
