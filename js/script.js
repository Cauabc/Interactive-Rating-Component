const ratingButton = document.querySelectorAll('.ratingButton')
const main = document.querySelector('main')
const submit = document.querySelector('.submit')
const ratingText = document.querySelector('.choose')
const thankyou = document.querySelector('.thankyou')
let rating
ratingButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        const targetbutton = e.target.classList
        if (!targetbutton.contains('active')){
            ratingButton.forEach((button) => {
                rating = e.target.textContent
                button.classList.remove('active')
            })
    }
    targetbutton.add('active')
    })
})

submit.addEventListener('click', (e) => {
    if (rating){
        main.style.display = 'none'
        ratingText.textContent = rating
        thankyou.style.display = 'flex'
    }
})