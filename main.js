const list_nav = document.querySelectorAll('.list_nav');
function activeLink(){
    list_nav.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list_nav.forEach((item) => 
item.addEventListener('click', activeLink));

const bntMobile = document.getElementById('bnt_mobile');

function toggleMenu() {
const nav = document.getElementById('menu_navegacao');
nav.classList.toggle('active')
}

bntMobile.addEventListener('click', toggleMenu);





var listaMvpSubwars = [ 
  {
    Numero: '1',
    NickName: 'Lucas/Nagato',
    data: '15/10',
    Partida: '1º '
  },
  {
    Numero: '2',
    NickName: 'FuracaoKatarina',
    data: '15/10',
    Partida: '1º '
  }
 ]
imprimir()

/*
function infoMvp(Numero, NickName, data, Partida) {
    var infoMvp = {
      Numero: Numero,
      NickName: NickName,
      data: data,
      Partida: Partida
    }
     return infoMvp;
}
*/
function imprimir() {
      var div = document.querySelector('.jogadores_mvp_subwars')
      div.innerHTML = ""
    
      for (var x = 0; x < listaMvpSubwars.length; x++) {
        let tagLi = document.createElement('li')
        let tagH5 = document.createElement('h5')
        let tagH6 = document.createElement('h6')

        tagH5.innerHTML = listaMvpSubwars[x].Numero
        tagH6.innerHTML = listaMvpSubwars[x].NickName + "<span>|</span>" + listaMvpSubwars[x].data + "<span>|</span>" + listaMvpSubwars[x].Partida
        
        tagLi.appendChild(tagH5)
        tagLi.appendChild(tagH6)
        div.appendChild(tagLi)
    }
}

var numeroDeJogadores = listaMvpSubwars.length;
numeroDeJogadoresMvp.innerHTML=numeroDeJogadores;

function sortearNumero(){
    numeroAleatorio=Math.floor(Math.random()*numeroDeJogadores + 1);
    console.log(numeroAleatorio)
    resultado.innerHTML=numeroAleatorio
}





var listaPreiados = [ ]
listaPreiados.push(infoPremiado("a_hela","Gift card 30$","15/10/2021","Sub Wars"))
listaPreiados.push(infoPremiado("a_kasterborous","Skin AOV","14/10/2021","Meta 3"))
listaPreiados.push(infoPremiado("xIbson_","Skin AOV","14/10/2021","Meta 2"))
listaPreiados.push(infoPremiado("ropture","Gift card 15$","14/10/2021","Meta 1"))
imprimirPremiados()

function infoPremiado(nickName, Premiacao, data, MeioDeGanho) {
    var infoPremiado = {
      nickName: nickName,
      Premiacao: Premiacao,
      data: data,
      MeioDeGanho: MeioDeGanho
    }
     return infoPremiado;
}

function imprimirPremiados() {
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

    for (var x = 0; x < listaPreiados.length; x++) {
      let tagTr = document.createElement('tr')
      
      let tagTd1 = document.createElement('td')
      let tagTd2 = document.createElement('td')
      let tagTd3 = document.createElement('td')
      let tagTd4 = document.createElement('td')

      tagTd1.innerHTML = listaPreiados[x].nickName
      tagTd2.innerHTML = listaPreiados[x].Premiacao
      tagTd3.innerHTML = listaPreiados[x].data
      tagTd4.innerHTML = listaPreiados[x].MeioDeGanho

      tagTd3.classList.add('tela_480')
      tagTd4.classList.add('tela_600')
      
      tagTr.appendChild(tagTd1)
      tagTr.appendChild(tagTd2)
      tagTr.appendChild(tagTd3)
      tagTr.appendChild(tagTd4)
      
      div.appendChild(tagTr)
  }

}