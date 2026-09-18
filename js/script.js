// ==========================================
// 1. CONTAGEM REGRESSIVA
// ==========================================
const countDownDate = new Date("2027-01-30T16:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) return; // Se a data já passou, para por aqui

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysElem = document.getElementById("days");
    if (daysElem) {
        daysElem.innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }
}
// Atualiza imediatamente e depois a cada 1 segundo
updateTimer();
setInterval(updateTimer, 1000);


// ==========================================
// 2. LISTA DE PRESENTES E CARRINHO
// ==========================================
const products = [
    // --- Lua de Mel ---
    { id: 1, name: "Passagens lua de mel", price: 4196.60, category: "Itens de Presentes na Lua de Mel", image:"img/presentes/passagens-lua-de-mel.jpg",fallbackEmoji: "✈️" },
    { id: 2, name: "Almoço para o casal lua de mel", price: 282.62, category: "Itens de Presentes na Lua de Mel", image:"img/presentes/cafe-da-manha-lua-de-mel.jpg",fallbackEmoji: "🍽️" },
    { id: 3, name: "Café da manhã lua de mel", price: 230.59, category: "Itens de Presentes na Lua de Mel", image:"img/presentes/almoco-lua-de-mel.jpg", fallbackEmoji: "🥐" },
    { id: 4, name: "Jantar lua de mel", price: 334.64, category: "Itens de Presentes na Lua de Mel", image:"img/presentes/jantar-lua-de-mel.jpg",fallbackEmoji: "🍷" },
    { id: 5, name: "Um vale passeio na lua de mel para o casal", price: 261.81, category: "Itens de Presentes na Lua de Mel", image:"img/presentes/passeio-lua-de-mel.jpg", fallbackEmoji: "🗺️" },
    { id: 6, name: "Uma rodada de caipirinhas ao casal", price: 126.55, category: "Itens de Presentes na Lua de Mel", image:"img/presentes/rodada-caipirinha.jpg",fallbackEmoji: "🍹" },
    { id: 7, name: "Vale spa para a noiva", price: 398.87, category: "Itens de Presentes na Lua de Mel", image:"img/presentes/spa-day-noiva-lua-de-mel.jpg", fallbackEmoji: "💆‍♀️" },
    { id: 8, name: "One Piece: em busca do tesouro do casal", price: 554.94, category: "Itens de Presentes na Lua de Mel", image:"img/presentes/onepiece.jpg", fallbackEmoji: "🏴‍☠️" },

    // --- Cama, Mesa e Banho ---
    { id: 9, name: "Talheres Brinox em Aço", price: 990.26, category: "Item de Presentes Cama e Banho", image:"img/presentes/talheres-brinox-em-aço.jpg", fallbackEmoji: "🍴" },
    { id: 10, name: "Aparelho de Jantar, Chá e Sobremesa 42 Peças", price: 934.87, category: "Item de Presentes Cama e Banho", image:"img/presentes/aparelho-jantar.jpg", fallbackEmoji: "🍽️" },
    { id: 11, name: "Edredom Soft Touch King Plumasul", price: 594.18, category: "Item de Presentes Cama e Banho", image:"img/presentes/edredom-soft-touch-king-plumasul.jpg", fallbackEmoji: "🛏️" },
    { id: 12, name: "Conjunto de Baixelas Tramontina", price: 278.71, category: "Item de Presentes Cama e Banho", image:"img/presentes/baixelas.jpg", fallbackEmoji: "🍲" },
    { id: 13, name: "Jogo de Banho", price: 271.78, category: "Item de Presentes Cama e Banho", image:"img/presentes/jogo-banho.jpg", fallbackEmoji: "🛁" },
    { id: 14, name: "Conjunto de Taças para Champagne", price: 228.85, category: "Item de Presentes Cama e Banho", image:"img/presentes/jogo-tacas.jpg", fallbackEmoji: "🥂" },
    { id: 15, name: "Kit xícaras", price: 178.57, category: "Item de Presentes Cama e Banho", image:"img/presentes/xicaras-casamento.jpg", fallbackEmoji: "☕" },
    { id: 16, name: "Colcha Dupla Face Casal Camesa", price: 174.84, category: "Item de Presentes Cama e Banho", image:"img/presentes/colcha-dupla-face-casal-camesa.jpg", fallbackEmoji: "🛏️" },

    // --- Decorações ---
    { id: 17, name: "Conjunto de Quadros Kapos City Dreams", price: 464.01, category: "Itens de Presente Decorações", image:"img/presentes/kit-quadros.jpg", fallbackEmoji: "🖼️" },
    { id: 18, name: "Cortinas para a sala", price: 334.64, category: "Itens de Presente Decorações", image:"img/presentes/cortina-janela.jpg", fallbackEmoji: "🏡" },
    { id: 19, name: "Poltrona Verde", price: 518.02, category: "Itens de Presente Decorações", image:"img/presentes/poltrona-verde.jpg", fallbackEmoji: "🛋️" },
    { id: 20, name: "Alexa", price: 178.57, category: "Itens de Presente Decorações", image: "img/presentes/alexa-branca.jpg", fallbackEmoji: "📻" },
    // --- Objetos de Casa ---
    { id: 21, name: "Aspirador Robô Philco", price: 2112.01, category: "Itens Objetos de Casa", image:"img/presentes/robo-aspirador.jpg", fallbackEmoji: "🤖" },
    { id: 22, name: "Soundbar JBL Cinema SB160", price: 1765.79, category: "Itens Objetos de Casa", image:"img/presentes/soundbar.jpg",fallbackEmoji: "🔊" },
    { id: 23, name: "Adega de Vinhos Electrolux", price: 1696.55, category: "Itens de Presente Decorações", image: "img/presentes/adega-vinho.jpg", fallbackEmoji: "📻" },
    { id: 24, name: "Torradeira Expressionist Collection", price: 421.26, category: "Itens Objetos de Casa", image:"img/presentes/torradeira.jpg", fallbackEmoji: "🍞" },
    { id: 25, name: "Conjunto de Panelas 6 Peças Tramontina", price: 775.61, category: "Itens Objetos de Casa", image:"img/presentes/jogo-de-panela-tramontina.jpg", fallbackEmoji: "🍳" },
    { id: 26, name: "Mini Processador de Alimentos KitchenAid", price: 506.00, category: "Itens Objetos de Casa", image:"img/presentes/mini-processador-alimentos-vermelho.jpg", fallbackEmoji: "⚙️" },
    { id: 27, name: "Batedeira Planetária Britânia", price: 657.89, category: "Itens Objetos de Casa", image:"img/presentes/batedeira-planetaria-britania.jpg", fallbackEmoji: "🥣" },
    { id: 28, name: "Centrífuga Britânia", price: 602.50, category: "Itens Objetos de Casa", image:"img/presentes/centrifiga-alimentos-342-britania.jpg", fallbackEmoji: "🌀" },
    { id: 29, name: "Fritadeira Sem Óleo Pratic Fryer Cadence", price: 559.57, category: "Itens Objetos de Casa", image:"img/presentes/air-fryer-cadence-fritadeira.jpg", fallbackEmoji: "🍟" },
    { id: 30, name: "Purificador de Água Consul", price: 538.19, category: "Itens Objetos de Casa", image:"img/presentes/purificador.jpg", fallbackEmoji: "💧" },
    { id: 31, name: "Aspirador de Pó e Água Vertical Wap", price: 502.32, category: "Itens Objetos de Casa", image:"img/presentes/aspirador-de-po.jpg", fallbackEmoji: "🧹" },
    { id: 32, name: "Liquidificador Philips Walita Problend", price: 470.94, category: "Itens Objetos de Casa", image:"img/presentes/liquidificador.jpg", fallbackEmoji: "🥤" },
    { id: 33, name: "Conjunto Especial Mondial KT-105-R", price: 425.23, category: "Itens Objetos de Casa", image:"img/presentes/Conjunto-Especial-Mondial.jpg", fallbackEmoji: "⚡" },
    { id: 34, name: "Cafeteira Elétrica Oster Flavor Programável", price: 421.08, category: "Itens Objetos de Casa", image:"img/presentes/cafeteira.jpg", fallbackEmoji: "☕" },
    { id: 35, name: "Aparelho de Fondue Forma Lugano", price: 393.38, category: "Itens Objetos de Casa", image:"img/presentes/foundue.jpg", fallbackEmoji: "🫕" },
    { id: 36, name: "Conjunto Porta Tempero Giratório", price: 160.32, category: "Itens Objetos de Casa", image:"img/presentes/porta-temperos-giratorio-inox.jpg", fallbackEmoji: "🧂" },
    { id: 37, name: "Caçarola Multiflon em Alumínio", price: 285.63, category: "Itens Objetos de Casa", image:"img/presentes/cacarola.jpg", fallbackEmoji: "🍲" },
    { id: 38, name: "Tábua de Passar Utimil Casaútil", price: 285.63, category: "Itens Objetos de Casa", image:"img/presentes/tabua-passar.jpg", fallbackEmoji: "👕" },
    { id: 39, name: "Garrafa Térmica Hauskraft em Aço Inox", price: 271.78, category: "Itens Objetos de Casa", image:"img/presentes/garrafa-termica.jpg", fallbackEmoji: "🫖" },
    { id: 40, name: "Panela Elétrica Mondial MultiCook", price: 264.86, category: "Itens Objetos de Casa", image:"img/presentes/panela-eletrica-mondial-multicook.jpg", fallbackEmoji: "🍚" },
    { id: 41, name: "Batedeira Philco Paris com 4 Velocidades - Branca", price: 256.54, category: "Itens Objetos de Casa", image:"img/presentes/Batedeira-Philco-Paris-com-4-velocidades-branca.jpg", fallbackEmoji: "🧁" },
    { id: 42, name: "Panela de Pressão 4,5 L Rochedo Turbo", price: 251.01, category: "Itens Objetos de Casa", image: "img/presentes/panela-pressao.jpg", fallbackEmoji: "🍲" },
    { id: 43, name: "Conjunto de Frigideiras Tramontina", price: 237.16, category: "Itens Objetos de Casa", image:"img/presentes/conjunto-frigideiras.jpg", fallbackEmoji: "🍳" },
    { id: 44, name: "Churrasqueira Elétrica Mallory Montana", price: 230.23, category: "Itens Objetos de Casa", image:"img/presentes/churrasqueira-eletrica.jpg", fallbackEmoji: "🥩" },
    { id: 45, name: "Ferro Electrolux", price: 202.53, category: "Itens Objetos de Casa", image:"img/presentes/ferro-electrolux.jpg", fallbackEmoji: "👔" },
    { id: 46, name: "Conjunto de Facas Euro Home Colorstone", price: 206.68, category: "Itens Objetos de Casa", image:"img/presentes/conjunto-facas.jpg", fallbackEmoji: "🔪" },
    { id: 47, name: "Kit utensílios de cozinha", price: 178.57, category: "Itens Objetos de Casa", image:"img/presentes/kit-utensilios-cozinha.jpg", fallbackEmoji: "🥄" },
    { id: 48, name: "Chaleira Britânia Elétrica", price: 174.84, category: "Itens Objetos de Casa", image:"img/presentes/chaleira-britania-139.jpg", fallbackEmoji: "☕" },
    { id: 49, name: "Conjunto de potes", price: 174.84, category: "Itens Objetos de Casa", image:"img/presentes/conjunto-potes.jpg", fallbackEmoji: "🫙" },
    { id: 50, name: "Pipoqueira Britânia POPFIT", price: 159.60, category: "Itens Objetos de Casa", image:"img/presentes/pipoqueira.jpg", fallbackEmoji: "🍿" },
    { id: 51, name: "Conjunto de Facas de Mesa Brinox", price: 145.75, category: "Itens Objetos de Casa", image:"img/presentes/conjunto-facas-brinox.jpg", fallbackEmoji: "🍴" },
    { id: 52, name: "Escorredor de Pratos Amazon", price: 120.56, category: "Itens Objetos de Casa", image:"img/presentes/escorredor-pratos-amazon-156.jpg", fallbackEmoji: "🍽️" },
    { id: 53, name: "Conjunto de Potes", price: 94.26, category: "Itens Objetos de Casa", image:"img/presentes/conjunto-potes-vidro.jpg", fallbackEmoji: "🫙" }
];

let cart = [];

function renderProducts() {
    const container = document.getElementById("gifts-container");
    container.innerHTML = "";

    const categories = [...new Set(products.map(p => p.category))];

    categories.forEach(category => {
        // Bloco de cada Categoria
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category-group";
        
        const categoryTitle = document.createElement("h3");
        categoryTitle.className = "category-title";
        categoryTitle.innerText = category;
        categoryDiv.appendChild(categoryTitle);

        // Agora sim a Grid de itens vai APENAS AQUI DENTRO
        const gridDiv = document.createElement("div");
        gridDiv.className = "gifts-grid";

        const itemsInCategory = products.filter(p => p.category === category);
itemsInCategory.forEach(product => {
            const priceFmt = product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
            
            // Verifica se o produto tem imagem personalizada ou usa o emoji de fallback
            const imgContent = product.image 
                ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 5px;">` 
                : product.fallbackEmoji;

            gridDiv.innerHTML += `
                <div class="gift-card">
                    <div class="gift-img" style="display:flex;align-items:center;justify-content:center;font-size:3.5rem; overflow:hidden;">${imgContent}</div>
                    <h4>${product.name}</h4>
                    <div class="price">R$ ${priceFmt}</div>
                    <button class="btn-presentear" onclick="addToCart(${product.id})">Presentear</button>
                </div>
            `;
        });

        categoryDiv.appendChild(gridDiv);
        container.appendChild(categoryDiv);
    });
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    alert(`${item.name} foi adicionado ao seu carrinho!`);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    
    if (cart.length === 0) {
        document.getElementById('cart-status').innerText = '🛒 Carrinho vazio';
        list.innerHTML = '<p style="text-align:center; color:#888;">Seu carrinho está vazio.</p>';
        document.getElementById('cart-total-box').style.display = 'none';
        document.getElementById('btn-checkout').style.display = 'none';
        document.getElementById('pix-instructions').style.display = 'none';
        return;
    }
    
    document.getElementById('cart-status').innerText = `🛒 ${cart.length} item(ns) selecionado(s)`;
    list.innerHTML = '';
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const priceFmt = item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        list.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remover item</button>
                </div>
                <div style="font-weight: 600;">R$ ${priceFmt}</div>
            </div>`;
    });
    
    document.getElementById('cart-total-value').innerText = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    document.getElementById('cart-total-box').style.display = 'block';
    document.getElementById('btn-checkout').style.display = 'block';
    document.getElementById('pix-instructions').style.display = 'none';
}

function openCart() {
    document.getElementById('cart-modal').style.display = 'flex';
    updateCartUI();
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function checkoutPix() {
    document.getElementById('btn-checkout').style.display = 'none';
    document.getElementById('pix-instructions').style.display = 'block';
}

function confirmarPresenca() {
    const nome = document.getElementById('rsvp-name').value;
    if(nome) {
        const numeroWhatsApp = "5511966688598"; 
        const mensagem = encodeURIComponent(`Olá! Gostaria de confirmar a presença no casamento de Bianca e Bruno. Convite em nome de: ${nome}`);
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
    } else {
        alert("Por favor, preencha o seu nome no campo antes de clicar.");
    }
}

// Controle do Menu Mobile (3 pontinhos)
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
}

// Inicia os presentes ao carregar a página
window.onload = renderProducts;