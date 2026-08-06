const WHATSAPP_NUMBER = '5511975696057';
const FIXED_FREIGHT = 30;
const money = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const products = [
  { id: 1, name: 'AMD Ryzen 5 5600', category: 'processador', price: 749.90, oldPrice: 829.90, image: 'assets/products/ryzen-5600.png', badge: 'Mais vendido', rating: 4.9, installments: 12, description: '6 núcleos, 12 threads e excelente desempenho para jogos e produtividade.' },
  { id: 2, name: 'Intel Core i5-12400F', category: 'processador', price: 899.90, oldPrice: 999.90, image: 'assets/products/intel-i5.png', badge: 'Oferta', rating: 4.8, installments: 12, description: 'Performance equilibrada, baixo consumo e ótima resposta em multitarefas.' },
  { id: 9, name: 'AMD Ryzen 7 5700X', category: 'processador', price: 1199.90, oldPrice: 1399.90, image: 'assets/products/ryzen-5700x.png', badge: 'Alta performance', rating: 4.9, installments: 12, description: '8 núcleos e 16 threads para games, criação de conteúdo e produtividade avançada.' },
  { id: 10, name: 'Intel Core i7-12700F', category: 'processador', price: 1799.90, oldPrice: 1999.90, image: 'assets/products/intel-i7.png', badge: 'Profissional', rating: 4.9, installments: 12, description: 'Arquitetura híbrida e potência para jogos competitivos e tarefas pesadas.' },

  { id: 3, name: 'GeForce RTX 4060 8GB', category: 'placa-video', price: 2199.90, oldPrice: 2499.90, image: 'assets/products/rtx-4060.png', badge: 'Destaque', rating: 4.9, installments: 12, description: 'Ray tracing, DLSS e excelente eficiência energética para Full HD.' },
  { id: 4, name: 'Radeon RX 7600 8GB', category: 'placa-video', price: 1899.90, oldPrice: 2099.90, image: 'assets/products/rx-7600.Png', badge: 'Custo-benefício', rating: 4.8, installments: 12, description: 'Alta taxa de quadros em Full HD com excelente qualidade visual.' },
  { id: 11, name: 'GeForce RTX 4070 12GB', category: 'placa-video', price: 4299.90, oldPrice: 4699.90, image: 'assets/products/rtx-4070.png', badge: 'Performance 1440p', rating: 4.9, installments: 12, description: 'Desempenho elevado em 1440p, ray tracing e recursos avançados de IA.' },
  { id: 12, name: 'Radeon RX 7700 XT 12GB', category: 'placa-video', price: 3499.90, oldPrice: 3899.90, image: 'assets/products/rx-7700xt.png', badge: 'Potência Radeon', rating: 4.8, installments: 12, description: 'Excelente desempenho em Quad HD com 12 GB de memória dedicada.' },

  { id: 5, name: 'Memória DDR4 16GB 3200MHz', category: 'memoria', price: 279.90, oldPrice: 329.90, image: 'assets/products/ddr4-16gb.png', badge: 'Oferta', rating: 4.7, installments: 6, description: 'Kit rápido e confiável para multitarefas, estudos e jogos.' },
  { id: 6, name: 'Memória DDR5 32GB 5600MHz', category: 'memoria', price: 699.90, oldPrice: 779.90, image: 'assets/products/ddr5-32gb.png', badge: 'Nova geração', rating: 4.9, installments: 10, description: 'Mais velocidade e estabilidade para máquinas de alto desempenho.' },
  { id: 13, name: 'Memória DDR4 32GB 3600MHz', category: 'memoria', price: 499.90, oldPrice: 579.90, image: 'assets/products/ddr4-32gb.png', badge: 'Ideal para upgrade', rating: 4.8, installments: 8, description: 'Capacidade ampliada e alta frequência para jogos e produtividade.' },
  { id: 14, name: 'Memória DDR5 64GB 6000MHz', category: 'memoria', price: 1299.90, oldPrice: 1499.90, image: 'assets/products/ddr5-64gb.png', badge: 'Entusiasta', rating: 4.9, installments: 12, description: 'Desempenho extremo para estações de trabalho e computadores premium.' },

  { id: 7, name: 'SSD NVMe 1TB', category: 'armazenamento', price: 419.90, oldPrice: 479.90, image: 'assets/products/ssd-1tb.png', badge: 'Mais vendido', rating: 4.8, installments: 8, description: 'Inicialização rápida e amplo espaço para arquivos, programas e jogos.' },
  { id: 8, name: 'SSD NVMe 2TB', category: 'armazenamento', price: 749.90, oldPrice: 849.90, image: 'assets/products/ssd-2tb.png', badge: 'Alta capacidade', rating: 4.9, installments: 12, description: 'Mais capacidade, velocidade e segurança para seus dados.' },
  { id: 15, name: 'SSD NVMe 500GB', category: 'armazenamento', price: 249.90, oldPrice: 299.90, image: 'assets/products/ssd-500gb.png', badge: 'Econômico', rating: 4.7, installments: 5, description: 'Ótima opção para sistema operacional, aplicativos e jogos essenciais.' },
  { id: 16, name: 'SSD SATA 1TB', category: 'armazenamento', price: 359.90, oldPrice: 419.90, image: 'assets/products/ssd-sata-1tb.png', badge: 'Upgrade fácil', rating: 4.8, installments: 7, description: 'Compatibilidade ampla e desempenho consistente para notebooks e desktops.' }
];

const builderOptions = {
  cpuSelect: [
    { name: 'Ryzen 5 5600', price: 749.90 },
    { name: 'Core i5-12400F', price: 899.90 },
    { name: 'Ryzen 7 5700X', price: 1199.90 }
  ],
  gpuSelect: [
    { name: 'Sem placa dedicada', price: 0 },
    { name: 'Radeon RX 7600 8GB', price: 1899.90 },
    { name: 'GeForce RTX 4060 8GB', price: 2199.90 },
    { name: 'GeForce RTX 4070 12GB', price: 4299.90 }
  ],
  ramSelect: [
    { name: '16GB DDR4', price: 279.90 },
    { name: '32GB DDR4', price: 499.90 },
    { name: '32GB DDR5', price: 699.90 }
  ],
  storageSelect: [
    { name: 'SSD NVMe 512GB', price: 249.90 },
    { name: 'SSD NVMe 1TB', price: 419.90 },
    { name: 'SSD NVMe 2TB', price: 749.90 }
  ],
  caseSelect: [
    { name: 'Gabinete NexCore Air', price: 349.90 },
    { name: 'Gabinete NexCore Glass RGB', price: 549.90 },
    { name: 'Gabinete NexCore Pro', price: 749.90 }
  ]
};

let cart = JSON.parse(localStorage.getItem('nexcore-cart')) || [];
let activeCategory = 'todos';
let searchTerm = '';

function categoryLabel(category) {
  return {
    processador: 'Processador',
    'placa-video': 'Placa de vídeo',
    memoria: 'Memória',
    armazenamento: 'Armazenamento'
  }[category] || category;
}

function filteredProducts() {
  return products.filter(product => {
    const matchesCategory = activeCategory === 'todos' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const list = filteredProducts();
  $('#productGrid').innerHTML = list.length ? list.map(product => `
    <article class="product-card reveal visible">
      <div class="product-topline"><span class="product-badge">${product.badge}</span><button class="favorite-button" type="button" aria-label="Adicionar ${product.name} aos favoritos">♡</button></div>
      <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
      <span class="tag">${categoryLabel(product.category)}</span>
      <h3>${product.name}</h3>
      <div class="product-rating"><span>★★★★★</span><small>${product.rating.toFixed(1)}</small></div>
      <p>${product.description}</p>
      <div class="product-old-price">de ${money(product.oldPrice)}</div>
      <div class="price-row"><div><strong>${money(product.price)}</strong><small>ou ${product.installments}x de ${money(product.price / product.installments)}</small></div><button class="add-cart" data-id="${product.id}">Adicionar</button></div>
    </article>`).join('') : '<div class="empty-products"><strong>Nenhum produto encontrado</strong><span>Tente outro termo ou categoria.</span></div>';
}

function cartProductsTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartProductsTotal();
  const total = subtotal + (cart.length ? FIXED_FREIGHT : 0);
  $('#cartCount').textContent = count;
  $('#cartSubtotal').textContent = money(subtotal);
  $('#cartTotal').textContent = money(total);
  $('#cartItems').innerHTML = cart.length ? cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info"><strong>${item.name}</strong><small>${money(item.price)}</small><div class="quantity-controls"><button class="quantity-button" data-action="decrease" data-id="${item.id}">−</button><span>${item.quantity}</span><button class="quantity-button" data-action="increase" data-id="${item.id}">+</button></div></div>
      <button class="remove-item" data-id="${item.id}" aria-label="Remover ${item.name}">×</button>
    </div>`).join('') : '<div class="cart-empty"><span>🛒</span><strong>Seu carrinho está vazio</strong><p>Adicione produtos para visualizar o resumo da compra.</p></div>';
  localStorage.setItem('nexcore-cart', JSON.stringify(cart));
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  existing ? existing.quantity++ : cart.push({ ...product, quantity: 1 });
  renderCart();
  showToast(`${product.name} foi adicionado ao carrinho.`);
}

function updateCartItem(id, action) {
  const item = cart.find(product => product.id === id);
  if (!item) return;
  if (action === 'increase') item.quantity++;
  if (action === 'decrease') item.quantity--;
  if (item.quantity <= 0) cart = cart.filter(product => product.id !== id);
  renderCart();
}

function showToast(text) {
  const toast = $('#toast');
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function openCart(open = true) {
  $('#cartDrawer').classList.toggle('open', open);
  $('#overlay').classList.toggle('show', open);
  $('#cartDrawer').setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('no-scroll', open);
}

function populateBuilder() {
  Object.entries(builderOptions).forEach(([id, options]) => {
    const select = document.getElementById(id);
    select.innerHTML = options.map((item, index) => `<option value="${index}">${item.name} — ${money(item.price)}</option>`).join('');
    select.addEventListener('change', updateBuild);
  });
  updateBuild();
}

function getBuild() {
  return Object.entries(builderOptions).map(([id, options]) => {
    const item = options[Number(document.getElementById(id).value || 0)];
    const label = document.querySelector(`#${id}`).closest('label').childNodes[0].textContent.trim();
    return { label, ...item };
  });
}

function updateBuild() {
  const items = getBuild();
  const assembly = 249.90;
  $('#buildItems').innerHTML = items.map(item => `<div class="build-item"><span>${item.label}</span><strong>${item.name}</strong></div>`).join('') + `<div class="build-item"><span>Montagem e testes</span><strong>${money(assembly)}</strong></div>`;
  $('#buildTotal').textContent = money(items.reduce((sum, item) => sum + item.price, assembly));
  $('#buildName').textContent = `NexCore ${$('#usage').selectedOptions[0].text}`;
}

function buildWhatsAppMessage() {
  const items = getBuild();
  const assembly = 249.90;
  const total = items.reduce((sum, item) => sum + item.price, assembly);
  const lines = items.map(item => `- ${item.label}: ${item.name}`);
  const notes = $('#builderNotes').value.trim();
  return `Olá, NexCore! Gostaria de solicitar um orçamento para este PC:\n\n${lines.join('\n')}\n- Montagem e testes: ${money(assembly)}\n\nEstimativa: ${money(total)}\nUso: ${$('#usage').selectedOptions[0].text}${notes ? `\nObservações: ${notes}` : ''}`;
}

async function findCep(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!response.ok) throw new Error('Não foi possível consultar o CEP.');
  const data = await response.json();
  if (data.erro) throw new Error('CEP não encontrado.');
  return data;
}

function botReply(message) {
  const text = message.toLowerCase();
  if (text.includes('montar') || text.includes('pc')) return 'Na área “Monte seu PC”, você escolhe as principais peças e recebe uma estimativa instantânea. Nossa equipe confirma compatibilidade e disponibilidade pelo WhatsApp.';
  if (text.includes('entrega') || text.includes('frete') || text.includes('cep')) return 'O frete é fixo em R$ 30,00 por pedido. Use a consulta de CEP para preencher seu endereço automaticamente.';
  if (text.includes('produto') || text.includes('peça') || text.includes('placa')) return 'Temos processadores, placas de vídeo, memórias e SSDs selecionados. Você pode buscar, filtrar e adicionar os itens ao carrinho.';
  if (text.includes('atendente') || text.includes('whatsapp') || text.includes('suporte')) return 'Clique no botão do WhatsApp no canto inferior direito para falar diretamente com a equipe NexCore.';
  if (text.includes('pagamento') || text.includes('pix') || text.includes('parcel')) return 'Condições de pagamento, PIX e parcelamento podem ser confirmados com nossa equipe comercial pelo WhatsApp.';
  return 'Posso ajudar com produtos, montagem personalizada, frete, pagamentos ou atendimento pelo WhatsApp.';
}

function sendChatMessage(text) {
  const cleanText = text.trim().replace(/[<>]/g, '');
  if (!cleanText) return;
  $('#chatMessages').insertAdjacentHTML('beforeend', `<div class="message user">${cleanText}</div>`);
  $('#chatMessages').scrollTop = $('#chatMessages').scrollHeight;
  setTimeout(() => {
    $('#chatMessages').insertAdjacentHTML('beforeend', `<div class="message bot">${botReply(cleanText)}</div>`);
    $('#chatMessages').scrollTop = $('#chatMessages').scrollHeight;
  }, 450);
}

renderProducts();
renderCart();
populateBuilder();

$('#usage').addEventListener('change', updateBuild);
$('#productSearch').addEventListener('input', event => { searchTerm = event.target.value.trim().toLowerCase(); renderProducts(); });
$('#productFilters').addEventListener('click', event => {
  if (!event.target.matches('.filter')) return;
  $$('.filter').forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
  activeCategory = event.target.dataset.category;
  renderProducts();
});
$('#productGrid').addEventListener('click', event => {
  if (event.target.matches('.add-cart')) addToCart(Number(event.target.dataset.id));
  if (event.target.matches('.favorite-button')) {
    event.target.classList.toggle('active');
    event.target.textContent = event.target.classList.contains('active') ? '♥' : '♡';
    showToast(event.target.classList.contains('active') ? 'Produto salvo nos favoritos.' : 'Produto removido dos favoritos.');
  }
});
$('#cartItems').addEventListener('click', event => {
  if (event.target.matches('.remove-item')) {
    cart = cart.filter(item => item.id !== Number(event.target.dataset.id));
    renderCart();
  }
  if (event.target.matches('.quantity-button')) updateCartItem(Number(event.target.dataset.id), event.target.dataset.action);
});
$('#cartButton').addEventListener('click', () => openCart(true));
$('#closeCart').addEventListener('click', () => openCart(false));
$('#overlay').addEventListener('click', () => openCart(false));
$('#checkoutButton').addEventListener('click', () => {
  if (!cart.length) return showToast('Adicione produtos ao carrinho primeiro.');
  const subtotal = cartProductsTotal();
  const total = subtotal + FIXED_FREIGHT;
  const lines = cart.map(item => `- ${item.name} (${item.quantity}x): ${money(item.price * item.quantity)}`);
  const address = [$('#street').value, $('#number').value, $('#district').value, $('#city').value, $('#state').value].filter(Boolean).join(', ');
  const message = `Olá, NexCore! Quero finalizar este pedido:\n\n${lines.join('\n')}\n\nSubtotal: ${money(subtotal)}\nFrete: ${money(FIXED_FREIGHT)}\nTotal: ${money(total)}${address ? `\n\nEndereço: ${address}` : ''}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
});
$('#requestBuild').addEventListener('click', () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`, '_blank'));
$('#whatsappFloat').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, NexCore! Gostaria de suporte.')}`;
$('#cepInput').addEventListener('input', event => {
  let value = event.target.value.replace(/\D/g, '').slice(0, 8);
  if (value.length > 5) value = `${value.slice(0, 5)}-${value.slice(5)}`;
  event.target.value = value;
});
$('#cepForm').addEventListener('submit', async event => {
  event.preventDefault();
  const cep = $('#cepInput').value.replace(/\D/g, '');
  const status = $('#cepStatus');
  if (cep.length !== 8) {
    status.textContent = 'Digite um CEP com 8 números.';
    status.className = 'form-status error';
    return;
  }
  status.textContent = 'Consultando endereço...';
  status.className = 'form-status';
  try {
    const data = await findCep(cep);
    $('#street').value = data.logradouro || '';
    $('#district').value = data.bairro || '';
    $('#city').value = data.localidade || '';
    $('#state').value = data.uf || '';
    status.textContent = 'Endereço encontrado com sucesso.';
    status.className = 'form-status success';
    $('#number').focus();
  } catch (error) {
    status.textContent = error.message;
    status.className = 'form-status error';
  }
});
$('#chatToggle').addEventListener('click', () => {
  $('#chatbot').classList.toggle('open');
  $('#chatbot').setAttribute('aria-hidden', String(!$('#chatbot').classList.contains('open')));
});
$('#chatClose').addEventListener('click', () => $('#chatbot').classList.remove('open'));
$('#chatForm').addEventListener('submit', event => {
  event.preventDefault();
  sendChatMessage($('#chatInput').value);
  $('#chatInput').value = '';
});
$$('.quick-options button').forEach(button => button.addEventListener('click', () => sendChatMessage(button.dataset.message)));
$('#menuToggle').addEventListener('click', () => {
  const open = $('#mainNav').classList.toggle('open');
  $('#menuToggle').setAttribute('aria-expanded', String(open));
  $('#menuToggle').textContent = open ? '×' : '☰';
});
$$('#mainNav a').forEach(link => link.addEventListener('click', () => {
  $('#mainNav').classList.remove('open');
  $('#menuToggle').textContent = '☰';
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
$$('.reveal').forEach(element => observer.observe(element));
 

// Showroom 3D premium da seção principal
function initInteractivePC() {
  const canvas = document.getElementById('pc3dCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(6.3, 3.4, 7.5);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.enablePan = false;
  controls.minDistance = 6.2;
  controls.maxDistance = 11;
  controls.minPolarAngle = Math.PI * .2;
  controls.maxPolarAngle = Math.PI * .72;
  controls.target.set(0, .35, 0);
  controls.autoRotate = true;
  controls.autoRotateSpeed = .65;

  const stopAutoRotate = () => {
    controls.autoRotate = false;
    clearTimeout(initInteractivePC.rotateTimer);
    initInteractivePC.rotateTimer = setTimeout(() => { controls.autoRotate = true; }, 4200);
  };
  renderer.domElement.addEventListener('pointerdown', stopAutoRotate);
  renderer.domElement.addEventListener('wheel', stopAutoRotate, { passive: true });

  scene.add(new THREE.HemisphereLight(0xbfefff, 0x02040a, 1.05));
  const key = new THREE.DirectionalLight(0xffffff, 1.8);
  key.position.set(5, 8, 6); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); scene.add(key);
  const rim = new THREE.DirectionalLight(0x6984ff, 1.2);
  rim.position.set(-5, 3, -6); scene.add(rim);
  const rgbLight = new THREE.PointLight(0x25e7ff, 3.2, 14);
  rgbLight.position.set(-2.5, 1.2, 4); scene.add(rgbLight);

  const root = new THREE.Group();
  root.rotation.y = -.28;
  scene.add(root);

  const mat = {
    frame: new THREE.MeshStandardMaterial({ color: 0x0d111a, metalness: .92, roughness: .2 }),
    black: new THREE.MeshStandardMaterial({ color: 0x020307, metalness: .68, roughness: .28 }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x090b10, metalness: .1, roughness: .82 }),
    board: new THREE.MeshStandardMaterial({ color: 0x102d29, metalness: .38, roughness: .5 }),
    silver: new THREE.MeshStandardMaterial({ color: 0xaab5c7, metalness: .95, roughness: .16 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0x9feaff, transparent: true, opacity: .16, roughness: .05, metalness: 0, transmission: .55, thickness: .08, side: THREE.DoubleSide }),
    rgb: new THREE.MeshStandardMaterial({ color: 0x25e7ff, emissive: 0x25e7ff, emissiveIntensity: 2.5, metalness: .2, roughness: .24 }),
    blades: new THREE.MeshPhysicalMaterial({ color: 0x9fb2c8, transparent: true, opacity: .5, roughness: .25, transmission: .15 })
  };
  const rgbMaterials = [mat.rgb];

  function box(w, h, d, material, x, y, z, parent = root, bevel = false) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d, bevel ? 3 : 1, bevel ? 3 : 1, bevel ? 3 : 1), material);
    mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
  }
  function cylinder(r, h, material, x, y, z, rx = 0, rz = 0, parent = root) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 40), material);
    mesh.position.set(x, y, z); mesh.rotation.x = rx; mesh.rotation.z = rz; mesh.castShadow = true; parent.add(mesh); return mesh;
  }

  function buildDetailedFallback() {
    // Gabinete panorâmico
    box(3.55, 5.35, 3.25, mat.frame, 0, .25, 0);
    box(3.28, 5.05, .055, mat.glass, 0, .28, 1.66);
    box(.055, 5.02, 3.0, mat.glass, -1.79, .28, 0);
    box(3.35, .18, 3.05, mat.black, 0, -2.48, 0);
    box(3.35, .16, 3.05, mat.black, 0, 2.98, 0);
    // pés
    [[-1.35,-2.67,-1.15],[1.35,-2.67,-1.15],[-1.35,-2.67,1.15],[1.35,-2.67,1.15]].forEach(p=>box(.42,.3,.42,mat.rubber,...p));

    // motherboard e detalhes
    box(2.05, 3.15, .11, mat.board, -.25, .45, 1.42);
    for (let i=0;i<7;i++) box(.12,.05,.025,mat.silver,-.95+i*.28,1.55,1.49);
    box(.72,.72,.12,mat.silver,-.55,.85,1.53);
    box(.5,.5,.16,mat.black,-.55,.85,1.62);

    // RAM RGB
    [-.03,.27].forEach(x=>{
      box(.18,1.75,.15,mat.black,x,.86,1.55);
      const strip=box(.12,1.5,.035,mat.rgb,x,.86,1.65); rgbMaterials.push(strip.material);
    });

    // GPU com fans e logo luminoso
    const gpu = new THREE.Group(); gpu.position.set(.12,-.62,.9); root.add(gpu);
    box(2.75,.64,.88,mat.black,0,0,0,gpu);
    box(2.35,.08,.91,mat.rgb,0,.33,0,gpu); rgbMaterials.push(mat.rgb);
    box(.68,.38,.93,mat.silver,-.82,0,0,gpu);
    box(.48,.22,.94,mat.frame,.9,0,0,gpu);
    [ -0.45, .45 ].forEach(x=>{
      const ring=new THREE.Mesh(new THREE.TorusGeometry(.28,.045,12,48),mat.rgb); ring.rotation.x=Math.PI/2; ring.position.set(x,-.03,.47); gpu.add(ring);
      cylinder(.1,.07,mat.black,x,-.03,.49,Math.PI/2,0,gpu);
    });

    // PSU e shroud
    box(2.65,.92,2.25,mat.black,.18,-1.9,-.18);
    box(2.55,.08,2.15,mat.silver,.18,-1.42,-.18);
    box(1.15,.22,.04,mat.rgb,.15,-1.38,1.0); rgbMaterials.push(mat.rgb);

    // Water cooler radiator no topo
    box(2.55,.28,1.1,mat.black,0,2.55,.25);
    const pump = cylinder(.42,.22,mat.black,-.55,.85,1.43,Math.PI/2);
    const pumpRing = new THREE.Mesh(new THREE.TorusGeometry(.31,.045,16,60),mat.rgb); pumpRing.position.set(-.55,.85,1.57); root.add(pumpRing);
    rgbMaterials.push(pumpRing.material);

    // mangueiras curvas
    const cableMat = new THREE.MeshStandardMaterial({color:0x050608,roughness:.78});
    [[-.55,.85,1.43,.5,2.38,.3],[-.4,.9,1.4,.85,2.38,.25]].forEach(v=>{
      const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(v[0],v[1],v[2]),new THREE.Vector3(v[0]+.5,v[1]+.85,.8),new THREE.Vector3(v[3],v[4],v[5])]);
      const tube=new THREE.Mesh(new THREE.TubeGeometry(curve,30,.055,10,false),cableMat); root.add(tube);
    });

    // fans: frente, topo e fundo
    const fans=[];
    function fan(x,y,z,rx=0,ry=0){
      const g=new THREE.Group(); g.position.set(x,y,z); g.rotation.set(rx,ry,0); root.add(g);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(.48,.065,16,64),mat.rgb); g.add(ring); rgbMaterials.push(ring.material);
      const hub=new THREE.Mesh(new THREE.CylinderGeometry(.13,.13,.14,32),mat.black); hub.rotation.x=Math.PI/2; g.add(hub);
      const blades=new THREE.Group();
      for(let i=0;i<9;i++){ const b=new THREE.Mesh(new THREE.BoxGeometry(.42,.08,.025),mat.blades); b.position.x=.23; b.rotation.z=i*Math.PI*2/9+.4; blades.add(b); }
      g.add(blades); g.userData.blades=blades; fans.push(g); return g;
    }
    [1.68,.5,-.68].forEach(y=>fan(.95,y,1.69));
    [-.88,0,.88].forEach(x=>fan(x,2.72,.2,Math.PI/2));
    [-.88,0,.88].forEach(x=>fan(x,-2.34,.2,-Math.PI/2));

    // cabos de energia organizados
    for(let i=0;i<3;i++){
      const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(.95,-1.5,.65+i*.12),new THREE.Vector3(1.35,-.9,.8+i*.1),new THREE.Vector3(1.05,-.45,1.1+i*.08)]);
      root.add(new THREE.Mesh(new THREE.TubeGeometry(curve,24,.028,8,false),new THREE.MeshStandardMaterial({color:i===0?0x1b1e26:0x090a0d,roughness:.7})));
    }
    return fans;
  }

  let fans = buildDetailedFallback();

  // Se o usuário adicionar assets/models/computador-gamer.glb, ele substitui automaticamente o fallback.
  if (THREE.GLTFLoader) {
    const loader = new THREE.GLTFLoader();
    loader.load('assets/models/computador-gamer.glb', gltf => {
      root.clear();
      const model = gltf.scene;
      const bounds = new THREE.Box3().setFromObject(model);
      const size = bounds.getSize(new THREE.Vector3());
      const center = bounds.getCenter(new THREE.Vector3());
      model.position.sub(center);
      const scale = 5.2 / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(scale);
      model.traverse(obj => { if (obj.isMesh) { obj.castShadow = true; obj.receiveShadow = true; } });
      root.add(model);
      fans = [];
    }, undefined, () => {});
  }

  // Piso de showroom e anéis de luz
  const floor = new THREE.Mesh(new THREE.CircleGeometry(5.4,96), new THREE.MeshPhysicalMaterial({color:0x050913,metalness:.65,roughness:.2,transparent:true,opacity:.9}));
  floor.rotation.x=-Math.PI/2; floor.position.y=-2.68; floor.receiveShadow=true; scene.add(floor);
  [2.7,3.35,4.05].forEach((r,i)=>{ const ring=new THREE.Mesh(new THREE.RingGeometry(r,r+.012,96),new THREE.MeshBasicMaterial({color:i?0x263d73:0x25e7ff,transparent:true,opacity:.24,side:THREE.DoubleSide})); ring.rotation.x=-Math.PI/2; ring.position.y=-2.66+i*.003; scene.add(ring); });

  // partículas tecnológicas
  const particleGeo=new THREE.BufferGeometry();
  const positions=[];
  for(let i=0;i<180;i++) positions.push((Math.random()-.5)*11,Math.random()*8-3,(Math.random()-.5)*9);
  particleGeo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  const particles=new THREE.Points(particleGeo,new THREE.PointsMaterial({color:0x25e7ff,size:.025,transparent:true,opacity:.5})); scene.add(particles);

  document.querySelectorAll('.pc-3d-colors button').forEach(button=>button.addEventListener('click',()=>{
    const color=new THREE.Color(`#${button.dataset.rgb}`);
    mat.rgb.color.copy(color); mat.rgb.emissive.copy(color); rgbLight.color.copy(color);
    rgbMaterials.forEach(material=>{ if(material.color) material.color.copy(color); if(material.emissive) material.emissive.copy(color); });
    stopAutoRotate();
  }));

  function resize(){ const rect=canvas.getBoundingClientRect(); if(!rect.width||!rect.height)return; renderer.setSize(rect.width,rect.height,false); camera.aspect=rect.width/rect.height; camera.updateProjectionMatrix(); }
  window.addEventListener('resize',resize); resize();

  const clock=new THREE.Clock();
  function animate(){
    const t=clock.getElapsedTime();
    fans.forEach((f,i)=>{ if(f.userData.blades) f.userData.blades.rotation.z-=.045+i*.0006; });
    particles.rotation.y=t*.015;
    rgbLight.intensity=2.8+Math.sin(t*1.7)*.45;
    root.position.y=Math.sin(t*.75)*.035;
    controls.update(); renderer.render(scene,camera); requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener('DOMContentLoaded', initInteractivePC);

// Cadastro de cliente (demonstração local, sem servidor)
(function initRegisterScreen(){
  const modal = document.getElementById('registerModal');
  const form = document.getElementById('registerForm');
  if (!modal || !form) return;

  const openButton = document.getElementById('openRegister');
  const closeButton = document.getElementById('closeRegister');
  const finishButton = document.getElementById('finishRegister');
  const success = document.getElementById('registerSuccess');
  const phone = document.getElementById('registerPhone');

  function openRegister(){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('register-open');
    setTimeout(()=>document.getElementById('registerName').focus(),120);
  }
  function closeRegister(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('register-open');
  }
  function setError(input,message){
    const label=input.closest('label');
    const error=label ? label.querySelector('.field-error') : null;
    input.setAttribute('aria-invalid',message?'true':'false');
    if(error) error.textContent=message;
  }
  function validEmail(value){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }

  phone.addEventListener('input',()=>{
    let value=phone.value.replace(/\D/g,'').slice(0,11);
    if(value.length>10) value=value.replace(/(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3');
    else if(value.length>6) value=value.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3');
    else if(value.length>2) value=value.replace(/(\d{2})(\d+)/,'($1) $2');
    else if(value.length) value=value.replace(/(\d{0,2})/,'($1');
    phone.value=value;
  });

  document.querySelectorAll('.toggle-password').forEach(button=>button.addEventListener('click',()=>{
    const input=document.getElementById(button.dataset.target);
    const show=input.type==='password';
    input.type=show?'text':'password';
    button.textContent=show?'●':'◉';
    button.setAttribute('aria-label',show?'Ocultar senha':'Mostrar senha');
  }));

  form.addEventListener('submit',event=>{
    event.preventDefault();
    const name=document.getElementById('registerName');
    const email=document.getElementById('registerEmail');
    const password=document.getElementById('registerPassword');
    const confirm=document.getElementById('registerConfirm');
    const terms=document.getElementById('registerTerms');
    let valid=true;

    [[name,name.value.trim().length>=3?'':'Informe seu nome completo.'],
     [phone,phone.value.replace(/\D/g,'').length>=10?'':'Informe um telefone válido.'],
     [email,validEmail(email.value.trim())?'':'Informe um e-mail válido.'],
     [password,password.value.length>=8?'':'Use pelo menos 8 caracteres.'],
     [confirm,confirm.value===password.value&&confirm.value?'':'As senhas não coincidem.']]
      .forEach(([input,message])=>{ setError(input,message); if(message) valid=false; });

    const termsError=form.querySelector('.terms-error');
    termsError.textContent=terms.checked?'':'Você precisa aceitar os termos.';
    if(!terms.checked) valid=false;
    if(!valid) return;

    const customer={name:name.value.trim(),email:email.value.trim().toLowerCase(),phone:phone.value,createdAt:new Date().toISOString()};
    localStorage.setItem('nexcore-customer',JSON.stringify(customer));
    form.hidden=true;
    success.hidden=false;
    openButton.querySelector('.account-label').textContent=customer.name.split(' ')[0];
    if(typeof showToast==='function') showToast('Conta NexCore criada com sucesso.');
  });

  const saved=JSON.parse(localStorage.getItem('nexcore-customer')||'null');
  if(saved?.name) openButton.querySelector('.account-label').textContent=saved.name.split(' ')[0];
  openButton.addEventListener('click',openRegister);
  closeButton.addEventListener('click',closeRegister);
  finishButton.addEventListener('click',closeRegister);
  modal.querySelector('[data-close-register]').addEventListener('click',closeRegister);
  document.addEventListener('keydown',event=>{ if(event.key==='Escape'&&modal.classList.contains('open')) closeRegister(); });
  document.getElementById('loginLink').addEventListener('click',()=>{
    if(typeof showToast==='function') showToast('A tela de login poderá ser adicionada na próxima etapa.');
  });
})();

let sessionApiKey='';
document.getElementById('connectApiBtn')?.addEventListener('click',()=>{
 sessionApiKey=document.getElementById('openaiApiKey').value.trim();
 document.getElementById('apiStatus').textContent=sessionApiKey?'🟢 Conectado (sessão)':'Informe uma chave';
});
async function askOpenAI(message){
 if(!sessionApiKey){return 'Informe sua API Key.';}
 const r=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+sessionApiKey},body:JSON.stringify({model:'gpt-4.1-mini',temperature:0.3,max_tokens:200,messages:[{role:'system',content:'Você é o bot-NexCore. Ajude clientes sobre computadores, peças, montagem, frete, cadastro e funcionalidades da NexCore. Se a pergunta fugir do contexto responda: Estou configurado com a função de auxiliar no contexto de peças para computador. Esta pergunta foge do meu contexto.'},{role:'user',content:message}]})});
 const d=await r.json();
 if(d.error) return d.error.message;
 return d.choices?.[0]?.message?.content||'Sem resposta.';
}
sendChatMessage=async function(text){
 const clean=text.trim(); if(!clean)return;
 $('#chatMessages').insertAdjacentHTML('beforeend',`<div class="message user">${clean}</div><div class="message bot" id="typing">Digitando...</div>`);
 $('#chatMessages').scrollTop=$('#chatMessages').scrollHeight;
 const resp=await askOpenAI(clean);
 document.getElementById('typing').outerHTML=`<div class="message bot">${resp}</div>`;
}
