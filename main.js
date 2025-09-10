const produtoRepository = require("./repository/produto_repository")

async function main() {
    let produto1 = {
        nome: "Arroz",
        categoria: "Alimento",
        preco: 4.5
    };
    
    let produto2 = {
        nome: "Coca-cola 2L",
        categoria: "Bebida",
        preco: 10.8
    };

    await produtoRepository.inserir(produto1);
    await produtoRepository.inserir(produto2);
    await produtoRepository.inserir({nome:"Feijao", categoria:"Alimento", preco:6.7});
    await produtoRepository.inserir({nome:"Coca-cola", categoria:"Bebida", preco:8.9});
    await produtoRepository.inserir({nome:"Detergente", categoria:"Limpeza", preco:2.5});

    console.log(await produtoRepository.listar());
    console.log("Produto [id=2]: ", await produtoRepository.buscarPorId(2));

    console.log("Produtos da categoria Alimento", await produtoRepository.pesquisarPorCategoria("Alimento"));

    console.log("Produtos que possuem a letra 'a'", await produtoRepository.pesquisarPorNomeLike("a"));

    console.log("Produto atualizado ", await produtoRepository.atualizar(4, {nome:"Coca-cola", categoria:"Bebida", preco: 8.5, id:4}));

    console.log("Produto removido: ", await produtoRepository.deletar(1));

    console.log("Lista de produtos: ", await produtoRepository.listar());
}

main();