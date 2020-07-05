const deck = [
    {
        "id": "Raze",
        "name": "Raze.png",
        "src": "Assets/images/deck-jogo-1/Raze.png",
        "value": "1"
    },
    {
        "id": "Sova",
        "name": "Sova.png",
        "src": "Assets/images/deck-jogo-1/Sova.png",
        "value": "2"
    },
    {
        "id": "Jett",
        "name": "Jett.png",
        "src": "Assets/images/deck-jogo-1/Jett.png",
        "value": "3"
    },
    {
        "id": "Phoenix",
        "name": "Phoenix.png",
        "src": "Assets/images/deck-jogo-1/Phoenix.png",
        "value": "4"
    },
    {
        "id": "Sage",
        "name": "Sage.png",
        "src": "Assets/images/deck-jogo-1/Sage.png",
        "value": "5"
    },
    {
        "id": "Viper",
        "name": "Viper.png",
        "src": "Assets/images/deck-jogo-1/Viper.png",
        "value": "6"
    },
    {
        "id": "Cypher",
        "name": "Cypher.png",
        "src": "Assets/images/deck-jogo-1/Cypher.png",
        "value": "7"
    },
    {
        "id": "Brimstone",
        "name": "Brimstone.png",
        "src": "Assets/images/deck-jogo-1/Brimstone.png",
        "value": "8"
    },
    {
        "id": "Breach",
        "name": "Breach.png",
        "src": "Assets/images/deck-jogo-1/Breach.png",
        "value": "9"
    },
    {
        "id": "Omen",
        "name": "Omen.png",
        "src": "Assets/images/deck-jogo-1/Omen.png",
        "value": "10"
    },
    {
        "id": "Reyna",
        "name": "Reyna.png",
        "src": "Assets/images/deck-jogo-1/Reyna.png",
        "value": "11"
    },
    {
        "id": "Bear",
        "name": "Bear.gif",
        "src": "Assets/images/deck-jogo-1/Bear.gif",
        "value": "12"
    },
    {
        "id": "Raze1",
        "name": "Raze.png",
        "src": "Assets/images/deck-jogo-1/Raze.png",
        "value": "1"
    },
    {
        "id": "Sova1",
        "name": "Sova.png",
        "src": "Assets/images/deck-jogo-1/Sova.png",
        "value": "2"
    },
    {
        "id": "Jett1",
        "name": "Jett.png",
        "src": "Assets/images/deck-jogo-1/Jett.png",
        "value": "3"
    },
    {
        "id": "Phoenix1",
        "name": "Phoenix.png",
        "src": "Assets/images/deck-jogo-1/Phoenix.png",
        "value": "4"
    },
    {
        "id": "Sage1",
        "name": "Sage.png",
        "src": "Assets/images/deck-jogo-1/Sage.png",
        "value": "5"
    },
    {
        "id": "Viper1",
        "name": "Viper.png",
        "src": "Assets/images/deck-jogo-1/Viper.png",
        "value": "6"
    },
    {
        "id": "Cypher1",
        "name": "Cypher.png",
        "src": "Assets/images/deck-jogo-1/Cypher.png",
        "value": "7"
    },
    {
        "id": "Brimstone1",
        "name": "Brimstone.png",
        "src": "Assets/images/deck-jogo-1/Brimstone.png",
        "value": "8"
    },
    {
        "id": "Breach1",
        "name": "Breach.png",
        "src": "Assets/images/deck-jogo-1/Breach.png",
        "value": "9"
    },
    {
        "id": "Omen1",
        "name": "Omen.png",
        "src": "Assets/images/deck-jogo-1/Omen.png",
        "value": "10"
    },
    {
        "id": "Reyna1",
        "name": "Reyna.png",
        "src": "Assets/images/deck-jogo-1/Reyna.png",
        "value": "11"
    },
    {
        "id": "Bear1",
        "name": "Bear.gif",
        "src": "Assets/images/deck-jogo-1/Bear.gif",
        "value": "12"
    }
]

//Variáveis

var jogo = document.getElementById("jogo-da-memoria")
var divCard
var img

deck.forEach( carta => {
    divCard = document.createElement("div")
    divCard.setAttribute("id", carta.id)
    divCard.setAttribute("class", "card")
    divCard.setAttribute("onclick", "minha_funcao()")
    
    //Frente das cartas (oculto)
    tagImg = document.createElement("img")
    tagImg.setAttribute("src", carta.src)
    tagImg.setAttribute("alt", carta.name)
    tagImg.style.display = "none"
    divCard.appendChild(tagImg)

    //Verso das cartas (visível)
    tagImg = document.createElement("img")
    tagImg.setAttribute("src", "Assets/images/deck-jogo-1/back.png")
    tagImg.setAttribute("alt", "verso")
    tagImg.style.display = "block"
    divCard.appendChild(tagImg)

    jogo.appendChild(divCard)
})

function minha_funcao() {
    var card = document.getElementById(event.currentTarget.id)

    for(var i = 0; i < card.children.length; i++)
    {
        if(card.children[i].style.display == "none") //Apaga o elemento na tela 
        { 
          card.children[i].style.display = "block" //Mostra o elemento na tela
          continue
        }  
        if(card.children[i].style.display == "block") 
        { 
          card.children[i].style.display = "none"
          continue
        }
    }  

    // card.style.visibility = "hidden" //Tornando a carta invisível
    pontuar(++pontuacao)
}

var record = localStorage.getItem("record");
if (record == null) {
    record = 0
}

var pontuacao = 0

function pontuar(pontos) {
    var spanPontuacao = document.getElementById("pontuacao")
    spanPontuacao.innerHTML = pontos

    if (pontos > record) {
        record = pontos
        localStorage.setItem("record", record);
    }

    var spanRecord = document.getElementById("record")
    spanRecord.innerHTML = record
}

pontuar(pontuacao)

function reset() {
    for(var i = 0; i < jogo.children.length; i++){
        var carta = jogo.children[i]

        //Para cada imagem da carta, frente e verso
        for( var j = 0; j < carta.children.length; j++)
        {
          if(carta.children[j].getAttribute("alt") == "verso")
          {
            carta.children[j].style.display = "block"
          }
          else{
            carta.children[j].style.display = "none"
          }
        }
    }

    pontuacao = 0
    pontuar(pontuacao)
}

function hide(){

name = deck.document.getElementsByName("Raze", "Raze1").value

    if(name == name){
        card.style.visibility = "hidden";
    }
}

hide()