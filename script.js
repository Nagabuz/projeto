// Definição de livros (exemplo)
const livros = [
    { id: 1, titulo: "Livro 1", preco: 25.00 },
    { id: 2, titulo: "Livro 2", preco: 30.00 },
    // Adicione mais livros conforme necessário
];

// Função para exibir os livros na lista
function exibirLivros() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    livros.forEach(livro => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <img src="img/${livro.id}.jpg" alt="${livro.titulo}">
            <h2>${livro.titulo}</h2>
            <p>Preço: R$ ${livro.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${livro.id})">Adicionar ao Carrinho</button>
        `;
        bookList.appendChild(bookCard);
    });
}

// Função para adicionar um livro ao carrinho
function adicionarAoCarrinho(idLivro) {
    const livroSelecionado = livros.find(livro => livro.id === idLivro);
    if (livroSelecionado) {
        const cartItems = document.getElementById('cart-items');
        const novoItem = document.createElement('li');
        novoItem.textContent = `${livroSelecionado.titulo} - R$ ${livroSelecionado.preco.toFixed(2)}`;
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => {
            cartItems.removeChild(novoItem);
            atualizarTotal();
        });
        novoItem.appendChild(botaoRemover);
        cartItems.appendChild(novoItem);
        atualizarTotal();
    }
}

// Função para atualizar o total do carrinho
function atualizarTotal() {
    const cartItems = document.getElementById('cart-items');
    const itensCarrinho = cartItems.querySelectorAll('li');
    let total = 0;
    itensCarrinho.forEach(item => {
        const preco = parseFloat(item.textContent.split(' - ')[1].substring(3));
        total += preco;
    });
    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Inicialização
exibirLivros();