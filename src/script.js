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
            <h4 class="produto">`+ val.nome + `</h4>
            <div class="valor">
                <h4>R$<span class="price">`+ val.valor + `</span></h4>
                <button class="excluir">x</button>
            </div>
        </div>
        `;

        
    } )

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    valorProduto.value = "";
    quantidade.value = "";


    var excluirItem = document.querySelectorAll(".excluir");
    var itemLista = document.querySelectorAll('.lista-produto-single');
    var valorExcluido = document.querySelectorAll('.price');
    
    let total = document.querySelector('.soma-produto h2 span');
    total.innerHTML = soma

    console.log(itens);

    excluirItem.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            itemLista[indice].remove();
            itens.splice(indice,1)

            total.innerHTML = total.innerHTML - valorExcluido[indice].innerHTML;
            
            console.log(itens);

        })

    })


}

function limpar() {
    itens = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h2 span').innerHTML = 0;
}



