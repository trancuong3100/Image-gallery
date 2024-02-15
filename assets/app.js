const images = document.querySelectorAll(".wrapper .image img")
const prev = document.querySelector(".control.prev")
const next = document.querySelector(".control.next")
const close = document.querySelector(".gallery .close")
const galerryImg = document.querySelector(".gallery__inner img")
const galerry = document.querySelector(".gallery")

var currentIndex = 0

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add("hide")
    } else {
        prev.classList.remove("hide")
    }
    if (currentIndex == images.length - 1) {
        next.classList.add("hide")
    } else {
        next.classList.remove("hide")
    }

    galerryImg.src = images[currentIndex].src
    galerry.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', () => {
    galerry.classList.remove("show")
})


prev.addEventListener('click', () => {
    if(currentIndex > 0) {
        currentIndex--
        showGallery()
    }
}) 

next.addEventListener('click', () => {
    if(currentIndex < images.length - 1) {
        currentIndex++
        showGallery()
    }
}) 

document.addEventListener('keydown', (e) => {
    if(e.keyCode == 27) {
        galerry.classList.remove("show")
    }
}) 