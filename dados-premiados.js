
async function fetchDadosSubWars() {
    try {
        const response = await fetch('https://dodos-api-mvps-sub-wars.herokuapp.com/')
        const data = await response.json()
        var dadosMvpSubwars = data['values']
        imprimir(dadosMvpSubwars)
    } catch (error) {
      console.log(error)
    }
}

fetchDadosSubWars()

function imprimir(dadosMvpSubwars) {
      var div = document.querySelector('.jogadores_mvp_subwars')
      div.innerHTML = ""

      const postMVPsSubWars = document.querySelector('.post_MVPsSubWars');
      if (dadosMvpSubwars == undefined){
        postMVPsSubWars.classList.remove('ativado');
      }
    
      for (var x = 0; x < dadosMvpSubwars.length; x++) {
        var listaMvpSubwars = dadosMvpSubwars[x]

        let tagLi = document.createElement('li')
        let tagH5 = document.createElement('h5')
        let tagH6 = document.createElement('h6')

        tagH5.innerHTML = x + 1 +'°'
        tagH6.innerHTML = listaMvpSubwars[0] + "<span>|</span>" + listaMvpSubwars[1] + "<span>|</span>" + listaMvpSubwars[2]
        
        tagLi.appendChild(tagH5)
        tagLi.appendChild(tagH6)
        div.appendChild(tagLi)
    }
    

    var mes = dadosMvpSubwars[0].slice(4);
    subWarsMes.innerHTML=mes;

    numeroDeJogadores = dadosMvpSubwars.length;
    numeroDeJogadoresMvp.innerHTML=numeroDeJogadores;
}

function sortearNumero(){
    numeroAleatorio=Math.floor(Math.random()*numeroDeJogadores + 1);
    console.log(numeroAleatorio)
    resultado.innerHTML=numeroAleatorio
}  






/* funcao para pegar os dados da planilha premiados */
async function fetchDadosPreiados() {
  try {
      const response = await fetch('https://dodos-api-ganhadores.herokuapp.com/')
      const data = await response.json()
      var dadosPreiados = data['values'].slice(0).reverse()
      imprimirPremiados(dadosPreiados)
  } catch (error) {
    console.log(error)
  }
}

fetchDadosPreiados()

function imprimirPremiados(dadosPreiados) {
    var div = document.querySelector('.jogadoresPremiados')
    div.innerHTML = ""

    let tagTr1 = document.createElement('tr')

    let tagTh1 = document.createElement('th')
    let tagTh2 = document.createElement('th')
    let tagTh3 = document.createElement('th')
    let tagTh4 = document.createElement('th')

    tagTh1.innerHTML = "Nick do ganhador"
    tagTh2.innerHTML = "Premiação + valor"
    tagTh3.innerHTML = "Data"
    tagTh4.innerHTML = "Meio de ganho"

    tagTh3.classList.add('tela_480')
    tagTh4.classList.add('tela_600')

    tagTr1.appendChild(tagTh1)
    tagTr1.appendChild(tagTh2)
    tagTr1.appendChild(tagTh3)
    tagTr1.appendChild(tagTh4)

    div.appendChild(tagTr1)

    for (var x = 0; x < dadosPreiados.length; x++) {
      var listaPreiados = dadosPreiados[x]

      let tagTr = document.createElement('tr')
      
      let tagTd1 = document.createElement('td')
      let tagTd2 = document.createElement('td')
      let tagTd3 = document.createElement('td')
      let tagTd4 = document.createElement('td')

      tagTd1.innerHTML = listaPreiados[0]
      tagTd2.innerHTML = listaPreiados[1]
      tagTd3.innerHTML = listaPreiados[2]
      tagTd4.innerHTML = listaPreiados[3]

      tagTd3.classList.add('tela_480')
      tagTd4.classList.add('tela_600')
      
      tagTr.appendChild(tagTd1)
      tagTr.appendChild(tagTd2)
      tagTr.appendChild(tagTd3)
      tagTr.appendChild(tagTd4)
      
      div.appendChild(tagTr)
  }

}