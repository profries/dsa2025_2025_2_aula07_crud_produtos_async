//Para testar o repository com JSON
const produtoRepository = require("./repository/produto_repository_json")

async function main() {
    console.log("Lista de Produtos", await produtoRepository.listar());
}

main();