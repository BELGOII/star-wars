const slideView = document.getElementById('slide-view')
const slideEnd = (slides) => {
    slides.style.left = '0'
    slides.appendChild(slides.children[0])
}

let isSlidable = true

slideView.addEventListener('click', () => {
    slide()
})

const slide = () => {
    if (!isSlidable) return
    isSlidable = false
    const slides = slideView.firstElementChild
    slides.style.transition = '750ms'
    slides.style.left = '-80vw'
    setTimeout(() => {
        isSlidable = true
        slides.style.transition = '0ms'
        slideEnd(slides)
    }, 750)
}

setInterval(() => {
    slide()
}, 2000)