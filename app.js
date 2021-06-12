const openModelButton = document.querySelectorAll('[data-model-target]')
const closeModelButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const register = document.getElementById('register')

openModelButton.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal =document.querySelector(button.dataset.modelTarget)
        openModel(modal)
    })
})

overlay.addEventListener('click',()=>{
    const models =document.querySelectorAll('.model.active')
    models.forEach(modal =>{
        closeModel(modal)
    })
})
register.addEventListener('click',()=>{
    const models =document.querySelectorAll('.model.active')
    models.forEach(modal =>{
        closeModel(modal)
    })
})

closeModelButton.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.model')
        closeModel(modal)
    })
})

function openModel(modal){
    if(modal == null) return
    model.classList.add('active')
    overlay.classList.add('active')
}

function closeModel(modal){
    if(modal == null) return
    model.classList.remove('active')
    overlay.classList.remove('active')
    register.classList.remove('active')
}