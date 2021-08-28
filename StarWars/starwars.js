const slideView = document.getElementById('slide-view')
const slideEnd = (slides, clone)=> {
    slides.style.left = '0';
    slides.appendChild(clone);
    console.log('HELP')
}
slideView.addEventListener('click', ()=>{
    const slides = slideView.firstElementChild;
    const firstSlide = slides.firstChild;
//    const clone = firstSlide.cloneNode();
   slides.removeChild(firstSlide);
    // slides.style.left = '-900px';
    // setTimeout(() => {
    //     slideEnd(slides, clone)
    // }, 750);
    
})