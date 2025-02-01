const showNav = document.getElementById('fa-menu');
const navbar = document.getElementById('nav-content');
const hideNav = document.getElementById('close-fa')



showNav.addEventListener('click',()=>{
   
    navbar.classList.add('show-menu')
})

hideNav.addEventListener('click',()=>{
    navbar.classList.remove('show-menu')
})
