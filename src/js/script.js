let produtos = []
let carrinho = []

const carrinhoSalvo = localStorage.getItem('carrinho')
if (carrinhoSalvo) {
  carrinho = JSON.parse(carrinhoSalvo)
}

atualizarContador()

fetch("../js/produtos.json")
  .then(res => res.json())
  .then(data => {
    produtos = data
    const categoriaInicial = getCategoriaURL()
    marcarCategoriaInicial(categoriaInicial)
    aplicarFiltros()
    renderizarCarrinho()
    atualizarContador()
  })

let produtoAtual = null

const carrinhoAside = document.getElementById('carrinho')

document.getElementById('btnModalCarrinho').addEventListener('click', () => {
    if (produtoAtual) {
      adicionarAoCarrinho(produtoAtual)
    }
  })

document.querySelector('.fa-cart-shopping').addEventListener('click', () => {
    carrinhoAside.classList.add('ativo')
  })

document.getElementById('fecharCarrinho').addEventListener('click', () => {
    carrinhoAside.classList.remove('ativo')
  })

function adicionarAoCarrinho(prod) {
  const itemExistente = carrinho.find(item => item.id === prod.id)

  if (itemExistente) {
    itemExistente.quantidade++
  } else {
    carrinho.push({
      id: prod.id,
      nome: prod.nome,
      preco: prod.preco,
      quantidade: 1
    })
  }

  renderizarCarrinho()
  salvarCarrinho()
  atualizarContador()
}

function renderizarCarrinho() {
  const container = document.getElementById('carrinho-itens')
  const totalElemento = document.getElementById('carrinho-total')

  container.innerHTML = ""

  let total = 0

  carrinho.forEach(item => {
    const div = document.createElement('div')
    div.classList.add('item-carrinho')

    const subtotal = item.preco * item.quantidade
    total += subtotal

    div.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <div>
            <p class="mb-1">${item.nome}</p>
            <small>R$ ${subtotal.toFixed(2)}</small>
        </div>

        <div class="d-flex align-items-center gap-2">
            <button class="btn btn-sm btn-secondary btn-menos">-</button>
            <span>${item.quantidade}</span>
            <button class="btn btn-sm btn-success btn-mais">+</button>
            <button class="btn btn-sm btn-danger btn-remover">🗑</button>
        </div>
    </div>
    `
    div.querySelector('.btn-mais').addEventListener('click', () => {
        alterarQuantidade(item.id, 1)
    })

    div.querySelector('.btn-menos').addEventListener('click', () => {
        alterarQuantidade(item.id, -1)
    })

    div.querySelector('.btn-remover').addEventListener('click', () => {
        removerDoCarrinho(item.id)
    })
    container.appendChild(div)
  })

  totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`
}
  
function renderizarProdutos(lista) {
  const container = document.getElementById("produtos-container")

  container.innerHTML = ""

  lista.forEach(prod => {
    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
      <img src="${prod.imagem}" class="card-img-top" alt="${prod.nome}">
      <div class="card-body">
        <h5 class="card-title">${prod.nome}</h5>
        <p>R$ ${prod.preco.toFixed(2)}</p>
        <button class="btn btn-outline-dark btn-detalhes">Ver detalhes</button>
        <button class="btn btn-success btn-carrinho">Adicionar ao carrinho</button>
      </div>
    `
    card.querySelector('.btn-detalhes').addEventListener('click', () => {
        abrirModal(prod)
    })

    card.querySelector('.btn-carrinho').addEventListener('click', () => {
            adicionarAoCarrinho(prod)
        })

    container.appendChild(card)
  })    
}

function abrirModal(prod){

    produtoAtual = prod

    document.getElementById('modalImagem').src = prod.imagem
    document.getElementById('modalTitulo').textContent = prod.nome_desc
    document.getElementById('modalDescricao').textContent = prod.descricao
    document.getElementById('modalPreco').textContent = prod.preco.toFixed(2)

    const modal = new bootstrap.Modal(document.getElementById('modalProduto'))
    modal.show()
}

function aplicarFiltros() {
    const precoMin = parseFloat(document.getElementById('precoMin').value) || 0
    const precoMax = parseFloat(document.getElementById('precoMax').value) || Infinity

    const categoriaSelecionada = document.querySelector('#filtroCategoria .ativo')?.dataset.categoria || 'todos'

    let filtrados = produtos.filter(prod => {
    const dentroPreco = prod.preco >= precoMin && prod.preco <= precoMax
    const dentroCategoria = categoriaSelecionada === 'todos' || prod.categoria === categoriaSelecionada
    return dentroPreco && dentroCategoria
  })

  renderizarProdutos(filtrados)
}

document.querySelectorAll('#filtroCategoria li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('#filtroCategoria li').forEach(li => li.classList.remove('ativo'))
        item.classList.add('ativo')

        aplicarFiltros()
    })
  })

document.getElementById('precoMin').addEventListener('input', aplicarFiltros)
document.getElementById('precoMax').addEventListener('input', aplicarFiltros)

function limpa() {
  document.getElementById('precoMin').value = ''
  document.getElementById('precoMax').value = ''

  document.querySelectorAll('#filtroCategoria li').forEach(li => li.classList.remove('ativo'))

  const todos = document.querySelector('[data-categoria="todos"]')
  if (todos) todos.classList.add('ativo')

  renderizarProdutos(produtos)
}

function getCategoriaURL() {
  const params = new URLSearchParams(window.location.search)
  return params.get('categoria') || 'todos'
}

function marcarCategoriaInicial(categoria) {
  document.querySelectorAll('#filtroCategoria li')
    .forEach(li => li.classList.remove('ativo'))

  const item = document.querySelector(`[data-categoria="${categoria}"]`)
  if (item) item.classList.add('ativo')
}

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

function atualizarContador() {
  const contador = document.getElementById('contador-carrinho')

  let totalItens = 0

  carrinho.forEach(item => {
    totalItens += item.quantidade
  })

  contador.textContent = totalItens
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id)

  renderizarCarrinho()
  salvarCarrinho()
  atualizarContador()
}

function alterarQuantidade(id, delta) {
  const item = carrinho.find(prod => prod.id === id)

  if (!item) return

  item.quantidade += delta

  if (item.quantidade <= 0) {
    removerDoCarrinho(id)
    return
  }

  renderizarCarrinho()
  salvarCarrinho()
  atualizarContador()
}