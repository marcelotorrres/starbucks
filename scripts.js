let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.copo')


function TrocarCor(cor){
    circulo.style.background = cor
}

function TrocarImagem(endereco){
    imagem.src = endereco 
}