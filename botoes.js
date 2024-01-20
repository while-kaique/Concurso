const bloco1 = document.querySelector('.bloco1')
const bloco2 = document.querySelector('.bloco2')
const bloco3 = document.querySelector('.bloco3')
var bloco = 2

function go(){
    switch (bloco) {
        case 1:
            bloco1.style.left = '-20vw'
            bloco2.style.left = '50vw'
            bloco = 2
            break;
        case 2:
            bloco2.style.left = '-20vw'
            bloco3.style.left = '50vw'
            bloco = 3
            break
        case 3:
            break;
    }
}

function back(){
    switch (bloco) {
        case 1:
            break;
        case 2:
            bloco1.style.left = '50vw'
            bloco2.style.left = '120vw'
            bloco = 1
            break
        case 3:
            bloco2.style.left = '50vw'
            bloco3.style.left = '120vw'
            bloco = 2
            break;
    }
}