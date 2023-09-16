const nav = document.querySelector(".container-nav-ul")
const openButton = document.querySelector('.container-nav-btn-open')
const closeButton = document.querySelector('.container-nav-ul-btn-close')

openButton.addEventListener('click',()=>{
    nav.classList.add('container-nav-ul-visible')
    // console.log('open')
    closeButton.classList.add('container-nav-ul-btn-close-visible')
})

closeButton.addEventListener('click',()=>{
    nav.classList.remove('container-nav-ul-visible')
})