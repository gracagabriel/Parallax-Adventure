let texto = document.getElementById('text')
let bird1 = document.querySelector('img#b1')
let bird2 = document.getElementById('b2')
let forest = document.querySelector('img#forest')
let button = document.getElementById('btn')
let rock = document.querySelector('img#rocks')
let water = document.getElementById('water')
let head = document.querySelector('header#header')

window.addEventListener('scroll', function (){
    let value = window.scrollY

    texto.style.top = 20 + value * -0.5 + '%'
    bird1.style.top = value * -1.5 + 'px'
    bird1.style.left = value * 2 + 'px'
    bird2.style.top = value * -1.5 + 'px'
    bird2.style.left = value * -5 + 'px'
    button.style.marginTop = value * 1.5 + 'px'
    rock.style.top = value * -0.12 + 'px'
    forest.style.top = value * -.15 + 'px'
})