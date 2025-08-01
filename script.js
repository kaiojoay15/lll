const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
  {
    enunciado: "1. Qual tipo de comida mais te atrai?",
    alternativas: [
      {
        texto: "Feijoada, pizza, sushi e culinária internacional",
        afirmacao: "Você aprecia a diversidade gastronômica e gosta de experimentar novos sabores.",
      },
      {
        texto: "Acarajé, tapioca, carne de sol e frutos do mar",
        afirmacao: "Você tem paladar para sabores autênticos e tradicionais brasileiros.",
      },
    ],
  },
  {
    enunciado: "2. Como você prefere passar suas férias?",
    alternativas: [
      {
        texto: "Visitando museus, teatros e explorando a vida urbana",
        afirmacao: "Você é uma pessoa urbana que valoriza cultura e entretenimento.",
      },
      {
        texto: "Relaxando na praia, fazendo trilhas e curtindo a natureza",
        afirmacao: "Você se conecta com a natureza e prefere ambientes mais tranquilos.",
      },
    ],
  },
  {
    enunciado: "3. Qual clima é ideal para você?",
    alternativas: [
      {
        texto: "Clima variado, com estações bem definidas",
        afirmacao: "Você gosta de mudanças e se adapta bem a diferentes temperaturas.",
      },
      {
        texto: "Calor tropical o ano todo, com sol e brisa do mar",
        afirmacao: "Você é uma pessoa calorosa que adora o clima quente brasileiro.",
      },
    ],
  },
  {
    enunciado: "4. Que tipo de música mais combina com você?",
    alternativas: [
      {
        texto: "Rock, pop, eletrônica e estilos internacionais",
        afirmacao: "Você tem gosto musical eclético e acompanha tendências globais.",
      },
      {
        texto: "Forró, axé, samba e música popular brasileira",
        afirmacao: "Você tem o ritmo brasileiro no sangue e adora nossa música raiz.",
      },
    ],
  },
  {
    enunciado: "5. Como você vê o ritmo de vida ideal?",
    alternativas: [
      {
        texto: "Agitado, com muitas oportunidades e sempre algo acontecendo",
        afirmacao: "Você é dinâmico e gosta da energia das grandes cidades.",
      },
      {
        texto: "Mais tranquilo, com tempo para família e momentos de lazer",
        afirmacao: "Você valoriza a qualidade de vida e os relacionamentos pessoais.",
      },
    ],
  },
]

let atual = 0
let historiaFinal = ""
let contadorA = 0
let contadorB = 0

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado()
    return
  }
  const perguntaAtual = perguntas[atual]
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = ""

  for (let i = 0; i < perguntaAtual.alternativas.length; i++) {
    const alternativa = perguntaAtual.alternativas[i]
    const botao = document.createElement("button")
    botao.textContent = alternativa.texto
    botao.addEventListener("click", () => respostaSelecionada(alternativa, i))
    caixaAlternativas.appendChild(botao)
  }
}

function respostaSelecionada(opcao, indice) {
  historiaFinal += opcao.afirmacao + " "
  if (indice === 0) {
    contadorA++
  } else {
    contadorB++
  }
  atual++
  mostraPergunta()
}

function mostraResultado() {
  caixaPerguntas.textContent = "Sua região brasileira:"
  let regiao = ""

  if (contadorA > contadorB) {
    regiao =
      "\n\n🏙️ Região Sudeste – O Coração Urbano do Brasil\nVocê tem o perfil cosmopolita do Sudeste! Gosta da agitação de São Paulo, do charme do Rio de Janeiro e da diversidade cultural da região. Você aprecia oportunidades, inovação e a mistura de tradição com modernidade. Aqui você encontra de tudo: cultura, gastronomia internacional, negócios e muito movimento!"
  } else if (contadorB > contadorA) {
    regiao =
      "\n\n🏖️ Região Nordeste – A Alma Alegre do Brasil\nVocê tem o coração nordestino! Adora o calor humano da região, as praias paradisíacas, a cultura rica e a culinária saborosa. Você valoriza as tradições, a música brasileira e o jeitinho acolhedor do povo nordestino. Aqui você encontra alegria, autenticidade e a verdadeira essência brasileira!"
  } else {
    regiao =
      "\n\n🌿 Região Sul – A Tradição Organizada do Brasil\nVocê combina com o Sul do Brasil! Aprecia a organização, as tradições bem preservadas e a qualidade de vida da região. Você gosta do clima mais ameno, da influência europeia na cultura e da tranquilidade das cidades sulistas. Aqui você encontra equilíbrio entre progresso e tradição!"
  }

  textoResultado.textContent = historiaFinal.trim() + regiao
  caixaAlternativas.textContent = ""
}

mostraPergunta()
