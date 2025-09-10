const promiseFs = require('fs').promises;

async function listar() {
    const result = await promiseFs.readFile('produtos.json', 'utf-8');
    const data = JSON.parse(result);
    if(data) {
        const listaProdutos = data.listaProdutos;        
        return listaProdutos;
    }
}
//Alterar outros metodos
async function inserir(produto) {
    produto.id = autoIncrement++;
    listaProdutos.push(produto);
    return Promise.resolve(produto);
}

async function buscarPorId(id) {
    return Promise.resolve(listaProdutos.find(
        function(produto) {
            return (produto.id == id);        
        }
    ));
}

function buscarIndicePorId(id) {
    return listaProdutos.findIndex((produto) => produto.id === id);
}

async function atualizar(id, produtoAtual) {
    let indice = buscarIndicePorId(id);
    if(indice >= 0) {
        produtoAtual.id = id; 
        listaProdutos[indice] = produtoAtual;
        return Promise.resolve(listaProdutos[indice]);
    }
    return Promise.resolve(undefined);
}

async function deletar(id) {
    let indiceProduto = buscarIndicePorId(id);
    if(indiceProduto >= 0) {
        let produtoRemovido = listaProdutos.splice(indiceProduto, 1)[0];
        return produtoRemovido;
    }
    return Promise.resolve(undefined);

}

async function pesquisarPorCategoria(categoria) {
    return Promise.resolve(listaProdutos.filter( (produto) => produto.categoria == categoria ));
}

async function pesquisarPorNomeLike(nome) {
    return Promise.resolve(listaProdutos.filter ( (produto) => {
        const produtoNomeUpper = produto.nome.toUpperCase();
        const nomeUpper = nome.toUpperCase();
        return (produtoNomeUpper.search(nomeUpper) >= 0);
    }));
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorNomeLike
}