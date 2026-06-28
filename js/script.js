
const itens = [
  {
    id: 1,
    nome: "Pizza Margherita",
    imagem: "img/pexels-mographe-29609013.jpg",
    descricao: "Molho de tomate fresco, mussarela de primeira qualidade e folhas de manjericão. Um clássico simples e delicioso.",
    preco: "R$ 39,90"
  },
  {
    id: 2,
    nome: "Pizza Calabresa",
    imagem: "img/pexels-natan-machado-fotografia-gastronomica-162809799-11176611.jpg",
    descricao: "Molho de tomate, mussarela, calabresa fatiada na hora e cebola roxa.",
    preco: "R$ 42,90"
  },
  {
    id: 3,
    nome: "Pizza Quatro Queijos",
    imagem: "img/pexels-pedrofurtadoo-33458021.jpg",
    descricao: "Mistura cremosa de mussarela, provolone, parmesão e gorgonzola.",
    preco: "R$ 46,90"
  },
  {
    id: 4,
    nome: "Pizza Portuguesa",
    imagem: "img/pexels-pedrofurtadoo-33457575.jpg",
    descricao: "Presunto, ovos, cebola, azeitona, ervilha e bastante mussarela.",
    preco: "R$ 44,90"
  },
  {
    id: 5,
    nome: "Pizza Frango com Catupiry",
    imagem: "img/pexels-pedrofurtadoo-31450857.jpg",
    descricao: "Frango desfiado temperado, catupiry cremoso e milho.",
    preco: "R$ 45,90"
  },
  {
    id: 6,
    nome: "Pizza Pepperoni",
    imagem: "img/pexels-pedrofurtadoo-31450869.jpg",
    descricao: "Molho de tomate, mussarela e fatias generosas de pepperoni.",
    preco: "R$ 47,90"
  },
  {
    id: 7,
    nome: "Pizza Chocolate com Morango",
    imagem: "img/pexels-saulo-leite-1491182-17637073.jpg",
    descricao: "Pizza doce com chocolate ao leite derretido e morangos fatiados na hora.",
    preco: "R$ 38,90"
  },
  {
    id: 8,
    nome: "Refrigerante 2L",
    imagem: "img/pexels-irene-vega-2151814552-34534006.jpg",
    descricao: "Garrafa de 2 litros, bem gelada, para acompanhar a sua pizza.",
    preco: "R$ 12,90"
  }
];

function pegarIdDaURL() {
  const parametros = new URLSearchParams(window.location.search);
  return parametros.get("id");
}

window.onload = function () {
  const idEscolhido = pegarIdDaURL();

  const itemEscolhido = itens.find(function (item) {
    return item.id == idEscolhido;
  });

  if (itemEscolhido) {
    document.getElementById("item-imagem").src = itemEscolhido.imagem;
    document.getElementById("item-imagem").alt = itemEscolhido.nome;
    document.getElementById("item-nome").textContent = itemEscolhido.nome;
    document.getElementById("item-descricao").textContent = itemEscolhido.descricao;
    document.getElementById("item-preco").textContent = itemEscolhido.preco;
  } else {
    document.getElementById("item-nome").textContent = "Nenhum item selecionado";
    document.getElementById("item-descricao").textContent = "Volte ao cardápio e clique em 'Ver detalhes' em algum item.";
    document.getElementById("item-imagem").src = "https://placehold.co/700x500/cccccc/666666?text=Sem+imagem";
  }
};
