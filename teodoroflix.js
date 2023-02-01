alert('Olá, apresento para vocês 9 filmes/séries para assistirem!')

var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/2/28/Black_Panther_2018.jpg", "https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg", "https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg", "https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpg", "https://cinearaujo.com.br/filmes/filme3232_cp.jpg", "https://http2.mlstatic.com/D_NQ_NP_868940-MLA51656531129_092022-O.jpg", "https://http2.mlstatic.com/D_NQ_NP_951114-MLB47711026952_092021-O.jpg", "https://www.claquete.com/fotos/filmes/poster/14830_medio.jpg"];

var nomeFilmes = ["Pantera Negra: Wakanda Forever", "Os Vingadores", "Doutor Estranho no Multiverso da Loucura", "Thor: Amor & Trovão", "Avatar: O caminho da água", "Avatar", "Superman", "Shazam: Fúria dos Deuses"]

var i = 0
while(i < listaFilmes.length) {
  if (listaFilmes[i].endsWith("jpg")) 
  {
      document.write('<div class="filmes">');
      document.write("<img src=" + listaFilmes[i] + ">");
      document.write('<p class="nomeFilmes">' + nomeFilmes[i] + "</p>");
      document.write("</div>");
    i++;
  }
}
