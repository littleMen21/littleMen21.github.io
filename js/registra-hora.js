const botao = document.querySelector(".botao");

botao.addEventListener("click", function(){
    botao.textContent = '';
    botao.append("Horário registrado com sucesso!");
})