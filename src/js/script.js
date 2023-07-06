var itens = [];


function cadastrar() {
    var nomeProduto = document.querySelector('input[name=nome-produto]');
    var valorProduto = document.querySelector('input[name=valor-produto]');
    var quantidade = document.querySelector('input[name=quantidade]');
    var resultado = valorProduto.value * quantidade.value;
    var resultadoArredondado = resultado.toFixed(2);

    itens.push({
        nome: nomeProduto.value,
        valor: resultadoArredondado,
    });

    /*
        <div class="lista-produto-single">
            <h4 class="produto">redbul</h4>
            <div class="valor">
                <h4 class="valor">R$20.00</h4>
                <button name="excluir">x</button>
            </div>
        </div>
    */
    let listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaProdutos.innerHTML = "";
    itens.map((val) => {
        soma += parseFloat(val.valor);

        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
            <h4 class="produto">`+val.nome+' '+quantidade.value+`un</h4>
            <div class="valor">
                <h4>R$<span class="price">`+ val.valor + `</span></h4>
                <img class="lixeira" src="./src/imagens/excluir.png" alt="">
            </div>
        </div>
        `;

    itens.sort();
    console.log(itens);
        
    } )

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    valorProduto.value = "";
    quantidade.value = "";


    var excluirItem = document.querySelectorAll(".lixeira");
    var itemLista = document.querySelectorAll('.lista-produto-single');
    var valorExcluido = document.querySelectorAll('.price');
    
    let total = document.querySelector('.soma-produto h2 span');
    total.innerHTML = soma
    

    excluirItem.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            itemLista[indice].remove();
            itens.splice(indice,1);
            soma = soma.toFixed(2);
            total.innerHTML = total.innerHTML - valorExcluido[indice].innerHTML;
            
            console.log(itens);

        })

    })


}

function limpar() {
    var mensagem;
    var retorno = confirm('deseja limpar?');
    if(retorno == true){
    itens = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h2 span').innerHTML = 0;
    }else{
        mensagem = alert("limpeza cancelada");
    };
}



