var linesMenu = document.querySelectorAll('.lines')
var home = document.querySelector('.homeOption')
var catalog = document.querySelector('.catalogOption')
var contact = document.querySelector('.contactOption')

document.querySelector('#btnMenu').addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('active')
    document.querySelector('#body').classList.toggle('menuOpen')
    for (let index = 0; index < linesMenu.length; index++) {
        linesMenu[index].classList.toggle('active')
    }
})

function onKeyDownHandler(event) {

    var codigo = event.which || event.keyCode;

    if (codigo === 27) {
        document.querySelector('#menu').classList.toggle('active')
        document.querySelector('#body').classList.toggle('menuOpen')
        for (let index = 0; index < linesMenu.length; index++) {
            linesMenu[index].classList.toggle('active')
        }
    }

}

home.addEventListener('click', () =>{
    document.querySelector('#menu').classList.toggle('active')
    document.querySelector('#body').classList.toggle('menuOpen')
    for (let index = 0; index < linesMenu.length; index++) {
        linesMenu[index].classList.toggle('active')
    }
})

catalog.addEventListener('click', () =>{
    document.querySelector('#menu').classList.toggle('active')
    document.querySelector('#body').classList.toggle('menuOpen')
    for (let index = 0; index < linesMenu.length; index++) {
        linesMenu[index].classList.toggle('active')
    }
})

contact.addEventListener('click', () =>{
    document.querySelector('#menu').classList.toggle('active')
    document.querySelector('#body').classList.toggle('menuOpen')
    for (let index = 0; index < linesMenu.length; index++) {
        linesMenu[index].classList.toggle('active')
    }
})