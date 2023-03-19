var images = document.querySelectorAll('.carouselImg')
var leftButton = document.querySelector('.left')
var rightButton = document.querySelector('.right')
let count = 0
let intervalId = setInterval(left, 1000)

function changeImage(position) {
    
    for (let index = 0; index < images.length; index++) {
        images[index].classList.remove('activeImg')
    }

    images[position].classList.add('activeImg')

}

function left() {
    
    count--

    if (count == -1) {
        count = images.length -1
    }
    
    changeImage(count)
    clearInterval(intervalId)
    intervalId = setInterval(left, 10000)

}

function right() {
    
    count++

    if (count == images.length) {
        count = 0
    }
    
    changeImage(count)
    clearInterval(intervalId)
    intervalId = setInterval(left, 10000)

}

leftButton.addEventListener('click', () =>{
    left()
    console.log(count)
})

rightButton.addEventListener('click', () =>{
    right()
    console.log(count)
})
