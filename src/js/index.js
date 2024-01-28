/* 
Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma.
    passo  1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele.

    passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    passo 3 - pegar o clique do usuario no JS

    passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botão, para que o conteudo apareça

Objetivo 2 - Caso a liste de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido.
     Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
} ); 

