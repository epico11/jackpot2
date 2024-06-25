function atribuirValores(){

    // var elementos = ['🗿', '🗽','😂'];
    // var imageElement = document.getElementById('imagem');
    // var newImagePath = [];

    //const playNote = (note) => {
        const audio = new Audio("./audios/clickbutton.mp3");
        audio.play();
    //}
    //playNote();

    var fotos = ["imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg", "imgs/img4.jpg"];

    let contadorClickAtt = parseInt(document.getElementById("contClicks").value) + 1;
    document.getElementById("contClicks").value = contadorClickAtt;

    for(i=1; i<4; i++){
        //document.getElementById("icone"+i).value = elementos[Math.floor(Math.random() * 3)]
        //aleatorio[i] = elementos[Math.floor(Math.random()*7)];
        //var newImagePath = fotos[Math.floor(Math.random() * 3)];

        document.getElementById('imagem'+i).setAttribute("src", fotos[Math.floor(Math.random() * 4)]);
    }

    var at1 = document.getElementById('imagem'+1).getAttribute("src");
    var at2 = document.getElementById('imagem'+2).getAttribute("src");
    var at3 = document.getElementById('imagem'+3).getAttribute("src");

    if(at1 === at2 && at2 === at3){
        let contadorWinsAtt = parseInt(document.getElementById("contWins").value) + 1;
        document.getElementById("contWins").value = contadorWinsAtt;
        const audio = new Audio("./audios/win.mp3");
        audio.play();
    }    

    //imageElement.setAttribute("src", newImagePath);
}

