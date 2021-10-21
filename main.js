const list_nav = document.querySelectorAll('.list_nav');
function activeLink(){
    list_nav.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list_nav.forEach((item) => 
item.addEventListener('click', activeLink));

const bntMobile = document.getElementById('bnt_mobile');

function toggleMenu() {
const nav = document.getElementById('menu_navegacao');
nav.classList.toggle('active')
}

bntMobile.addEventListener('click', toggleMenu);