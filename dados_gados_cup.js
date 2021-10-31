
const formulario = document.querySelector('.formulario');
const avisoDeInscricao = document.querySelector('.aviso_de_inscricao');

function avisoInscricao() { 
  formulario.classList.remove('ativado');
  avisoDeInscricao.classList.add('ativado');
  console.log("enviou")
};


async function fetchDadosTimes() {
  try {
      const response = await fetch('https://dodos-api-times.herokuapp.com/')
      const data = await response.json()
      var dadosTimesGadosCup = data['values']
      imprimirtimes(dadosTimesGadosCup)
      inscricaoFechada(dadosTimesGadosCup)
  } catch (error) {
    console.log(error)
  }
}

fetchDadosTimes()

function imprimirtimes(dadosTimesGadosCup) {
    var div = document.querySelector('.conteiner_times')
    div.innerHTML = ""

    if (dadosTimesGadosCup == undefined) {
      div.innerHTML="Nenhum time confirmado para a Gado's Cup no momento !"
    }

    for (var x = 0; x < dadosTimesGadosCup.length; x++) {
      var timesGadosCup = dadosTimesGadosCup[x]

      let tagUl = document.createElement('ul')

      let tagDiv = document.createElement('div')
      let tagH2 = document.createElement('h2')
      let tagH3 = document.createElement('h3')

      let tagLi1 = document.createElement('li')
      let tagImgJG = document.createElement('img')
      let tagSpan1 = document.createElement('span')
      let taP1 = document.createElement('p')
      
      let tagLi2 = document.createElement('li')
      let tagImgTOP = document.createElement('img')
      let tagSpan2 = document.createElement('span')
      let taP2 = document.createElement('p')

      let tagLi3 = document.createElement('li')
      let tagImgMID = document.createElement('img')
      let tagSpan3 = document.createElement('span')
      let taP3 = document.createElement('p')

      let tagLi4 = document.createElement('li')
      let tagImgADC = document.createElement('img')
      let tagSpan4 = document.createElement('span')
      let taP4 = document.createElement('p')

      let tagLi5 = document.createElement('li')
      let tagImgSUP = document.createElement('img')
      let tagSpan5 = document.createElement('span')
      let taP5 = document.createElement('p')

      let tagLi6 = document.createElement('li')
      let tagImgRESERV = document.createElement('img')
      let tagSpan6 = document.createElement('span')
      let taP6 = document.createElement('p')


      tagH2.innerHTML = x  + 1 + '°'
      tagH3.innerHTML = timesGadosCup[0]
      taP1.innerHTML = timesGadosCup[1]
      taP2.innerHTML = timesGadosCup[2]
      taP3.innerHTML = timesGadosCup[3]
      taP4.innerHTML = timesGadosCup[4]
      taP5.innerHTML = timesGadosCup[5]
      taP6.innerHTML = timesGadosCup[6]

      tagUl.classList.add('time')
      tagDiv.classList.add('titulo_time')
      tagLi1.classList.add('sem-border')

      tagImgJG.src = 'imagens/icon-jg.png'
      tagImgTOP.src = 'imagens/icon-top.png'
      tagImgMID.src = 'imagens/icon-mid.png'
      tagImgADC.src = 'imagens/icon-adc.png'
      tagImgSUP.src = 'imagens/icon-sup.png'
      tagImgRESERV.src = 'imagens/icon-reserva.png'


      tagDiv.appendChild(tagH2)
      tagDiv.appendChild(tagH3)

      tagLi1.appendChild(tagImgJG)
      tagLi1.appendChild(tagSpan1)
      tagLi1.appendChild(taP1)

      tagLi2.appendChild(tagImgTOP)
      tagLi2.appendChild(tagSpan2)
      tagLi2.appendChild(taP2)

      tagLi3.appendChild(tagImgMID)
      tagLi3.appendChild(tagSpan3)
      tagLi3.appendChild(taP3)

      tagLi4.appendChild(tagImgADC)
      tagLi4.appendChild(tagSpan4)
      tagLi4.appendChild(taP4)

      tagLi5.appendChild(tagImgSUP)
      tagLi5.appendChild(tagSpan5)
      tagLi5.appendChild(taP5)

      tagLi6.appendChild(tagImgRESERV)
      tagLi6.appendChild(tagSpan6)
      tagLi6.appendChild(taP6)

      tagUl.appendChild(tagDiv)
      tagUl.appendChild(tagLi1)
      tagUl.appendChild(tagLi2)
      tagUl.appendChild(tagLi3)
      tagUl.appendChild(tagLi4)
      tagUl.appendChild(tagLi5)
      tagUl.appendChild(tagLi6)
      div.appendChild(tagUl)
  }

};

const inscricaoEncerrada = document.querySelector('.inscricao_encerrada');

function inscricaoFechada(dadosTimesGadosCup) {
  if (dadosTimesGadosCup.length >= 8){
    formulario.classList.remove('ativado');
    avisoDeInscricao.classList.remove('ativado');
    inscricaoEncerrada.classList.add('ativado');
  }
}