const input = document.querySelector('.primeiro-input-area')
function removerCor(){
    input.classList.remove('input-vermelho')
}
function mudarCor(){
    if(event.keyCode == 13){
        input.classList.add('input-vermelho')
        setTimeout(removerCor, 500)
    }
}