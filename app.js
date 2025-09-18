let amigos = [];
let input = document.getElementById("amigo")
let listaAmigos = document.getElementById("listaAmigos")
let listaResultado = document.getElementById("resultado")

function adicionarAmigo(){
    if (input.value != "") {
        
      amigos.push(input.value)
      console.log(amigos)
      input.value = ""

      listaAmigos.innerHTML = ""
      amigos.forEach(amigo => {
        let itemLista = document.createElement("li")
        itemLista.innerText = amigo
        

        listaAmigos.appendChild(itemLista)
        
      });
    } else { 
        alert("O campo esta vazio. Digite um nome.")
    }

}

function sortearAmigo(){
  
  if (amigos.length > 0) {
    let numeroAleatorio = Math.floor(Math.random() * amigos.length)
  
    listaResultado.innerHTML = amigos[numeroAleatorio]
    listaAmigos.innerHTML = ""
    amigos = [] 
  } else { 
        alert("adicione um nome na lista primeiro")
    }

  
}