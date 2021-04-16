const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

// NOTE - Ao clicar no botão proximo, ele vai adicionar um valor e se for um valor maior que os circulos, vai ser adicionado o valor dos circulos ha variavel que esta contando os clicks.
next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.lenght) {
        currentActive = circles.lenght
    }
    update()
})
// NOTE - Ao clicar no botão anterior, ele vai diminuir um valor e se for um valor menor que 1, vai ser adicionado o valor de 1 ha variavel que esta contando os clicks.
prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})
// NOTE - A função atualizar, vai atualizar a barra de progresso pra cada circulo baseado na variavel que esta contando os botões de clicks de proximo e anterior. 
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}