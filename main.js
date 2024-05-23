let imagemPersonagem = window.document.getElementById("personagem-grande");
let nomePersonagem = window.document.getElementById("nome-personagem");
let descricaoPersonagem = window.document.getElementById("descricao-personagem");
let cardMenor = window.document.getElementsByTagName("img");

function entrouCiclope() {
    for (let i = 1; i <= 8; i++) {
        cardMenor[i].removeAttribute("class");
    }
    cardMenor[1].setAttribute("class", "selecionado");
    imagemPersonagem.setAttribute("src", "./src/imagens/card-ciclope.png");
    nomePersonagem.innerHTML = "Ciclope";    
    descricaoPersonagem.innerHTML = "Ele tem o poder de disparar rajadas ópticas carregadas de energia cinética. Em decorrência de um acidente que sofreu quando criança, não consegue controlá-las, o que mudou ao adquirir seu visor emblemático de quartzo-rubi.";
}

function entrouJeanGrey() {
    for (let i = 1; i <= 8; i++) {
        cardMenor[i].removeAttribute("class");
    }
    cardMenor[2].setAttribute("class", "selecionado");
    imagemPersonagem.setAttribute("src", "./src/imagens/card-jean-grey.png")
    nomePersonagem.innerHTML = "Jean Grey";    
    descricaoPersonagem.innerHTML = "Uma telepata nível ômega, assim como telecinética, Jean Grey apresenta um potencial incalculável para telepatia e já se tornou hospedeira da entidade cósmica Fênix, que detém controle sobre o ciclo de vida e morte de todas as coisas.";
}

function entrouLinceNegra() {
    for (let i = 1; i <= 8; i++) {
        cardMenor[i].removeAttribute("class");
    }
    cardMenor[3].setAttribute("class", "selecionado");
    imagemPersonagem.setAttribute("src", "./src/imagens/card-lince-negra.png")
    nomePersonagem.innerHTML = "Lince Negra";    
    descricaoPersonagem.innerHTML = "Kitty Pride carrega consigo o seu fiel companheiro Lockheed, seu espírito de heroísmo e o poder de atravessar qualquer objeto e superfície, seja de natureza orgânica ou tecnológica, podendo ainda incapacitar Sentinelas ao atravessá-los.";
}

function entrouWolverine() {
    for (let i = 1; i <= 8; i++) {
        cardMenor[i].removeAttribute("class");
    }
    cardMenor[4].setAttribute("class", "selecionado");
    imagemPersonagem.setAttribute("src", "./src/imagens/card-wolverine.png")
    nomePersonagem.innerHTML = "Wolverine";    
    descricaoPersonagem.innerHTML = "Logan tem a capacidade de se curar de qualquer ferimento, sentidos aguçados como os de um predador alfa e longas garras ósseas extremamente afiadas, que mais tarde se tornaram poderosas lâminas de Adamantium capazes de cortar tudo.";
}

function entrouNoturno() {
    for (let i = 1; i <= 8; i++) {
        cardMenor[i].removeAttribute("class");
    }
    cardMenor[5].setAttribute("class", "selecionado");
    imagemPersonagem.setAttribute("src", "./src/imagens/card-noturno.png")
    nomePersonagem.innerHTML = "Noturno";    
    descricaoPersonagem.innerHTML = "Sua mutação o permite se teleportar para qualquer lugar que desejar, sendo ainda um exímio acrobata e espadachim. Não deixe que sua aparência o engane, Kurt Wagner tem um coração dócil e muito gentil.";
}

function entrouTempestade() {
    for (let i = 1; i <= 8; i++) {
        cardMenor[i].removeAttribute("class");
    }
    cardMenor[6].setAttribute("class", "selecionado");
    imagemPersonagem.setAttribute("src", "./src/imagens/card-tempestade.png")
    nomePersonagem.innerHTML = "Tempestade";    
    descricaoPersonagem.innerHTML = "Capaz de manipular o clima como bem entender, Ororo gera temíveis tempestades carregadas de relâmpagos, tornados ou nevascas. Sua manipulação climática se estende até mesmo às tempestades cósmicas, conferindo à sua mutação o nível ômega.";
}

function entrouVampira() {
    for (let i = 1; i <= 8; i++) {
        cardMenor[i].removeAttribute("class");
    }
    cardMenor[7].setAttribute("class", "selecionado");
    imagemPersonagem.setAttribute("src", "./src/imagens/card-vampira.png")
    nomePersonagem.innerHTML = "Vampira";    
    descricaoPersonagem.innerHTML = "Sua mutação a permite roubar o poder e as memórias de qualquer um que tocar, tornando sua vítima inconsciente no processo e replicando suas habilidades com maestria.";
}

function entrouMagneto() {
    for (let i = 1; i <= 8; i++) {
        cardMenor[i].removeAttribute("class");
    }
    cardMenor[8].setAttribute("class", "selecionado");
    imagemPersonagem.setAttribute("src", "./src/imagens/card-magneto.png")
    nomePersonagem.innerHTML = "Magneto";    
    descricaoPersonagem.innerHTML = "Erik Lensherr é dotado da capacidade de manipular o metal livremente, seja o ferro contido no sangue de seu alvo, um prédio com toneladas de vigas de ferro ou o campo magnético do planeta Terra.";
}

