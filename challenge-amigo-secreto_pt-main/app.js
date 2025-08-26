let listaAmigos = []
let addAmigo = document.querySelector(`#amigo`)

function adicionarAmigo() {
    let nomeAmigo = addAmigo.value
    if (nomeAmigo) {
        listaAmigos.push(nomeAmigo)
        alert(`Nome adicionado!`)
        addAmigo.value = ""
        atualizarLista()
    } else {
        alert(`Erro, por favor insira um nome!`)
    }
}

let lista = document.querySelector(`#listaAmigos`)

function atualizarLista(){
  lista.innerHTML = ``
  for(let i = 0; i < listaAmigos.length; i++ ){
    lista.innerHTML += `<li>${listaAmigos[i]}</li>`
    }

}
let sortAmigo = document.querySelector(`#listaAmigos`)

function sortearAmigo(){
  if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!")
        return
    }
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length)
    let amigoSorteado = listaAmigos[indiceSorteado]
    alert(`Amigo sorteado: ${amigoSorteado}`)
}
