let amigos = [];
let input = document.getElementById("amigo")



function adicionarAmigo(){
    if (input.value != "") {
        
      amigos.push(input.value)
      console.log(amigos)
      input.value = ""
    } else {
        alert("O campo esta vazio. Digite um nome.")
    }

}