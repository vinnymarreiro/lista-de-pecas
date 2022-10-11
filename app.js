var listadePeca = ["Filtro de Ar", "Amortecedor", "Disco de Freio"]

if (listadePeca.length < 10){
    console.log("é possivel cadastrar mais peças")
} else {
    console.log("A lista esta de buxim cheio")
}

let peso = 500
if(peso<100){
 console.log("a Peça precisa ter no minimo 100g")
}else{
 console.log("a peca possui peso adequado")
}

let nomePeca = "Caixa de Cambio"
if (nomePeca.length>1000){
    
    console.log("O tamanho do nome da peca esta adequado")
}else{
    console.log("O nome deve ter mais que 3 caracteres, digite um nome adequado")
}
