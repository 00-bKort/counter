const valor = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

let cont = 0

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const bn = e.currentTarget.classList

        if (bn.contains("decrease")) {
            cont--
        } else if (bn.contains("increase")) {
            cont++
        } else {
            cont = 0
        }
        valor.textContent = cont
    })
})