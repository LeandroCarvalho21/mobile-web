const imagens = ["../../img/img-1.jpg", "../../img/img-5.jpg", "../../img/img-6.jpg"];
//                         0                    1                             2                               

let index = 0; //começa na primeira imagem
const banner = document.getElementById("banner");

function trocarImagem() {
    index++; //Vai para proxima imagem 

    if (index >= imagens.length) {
        index = 0; //se passou do ultimo , volta para primeira  

    }
    banner.src = imagens[index]
}


setInterval(trocarImagem, 3000);
