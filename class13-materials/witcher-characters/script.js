let geralt = document.querySelector('#geralt');
let yennefer = document.querySelector('#yennefer');
let triss = document.querySelector('#triss');
let ciri = document.querySelector('#ciri');
let jaskier = document.querySelector('#jaskier');
let roach = document.querySelector('#roach');

//to click the character choice
document.querySelector('#pickGeralt').addEventListener('click', showGeralt);
document.querySelector('#pickYennefer').addEventListener('click', showYennefer);
document.querySelector('#pickTriss').addEventListener('click', showTriss);
document.querySelector('#pickCiri').addEventListener('click', showCiri);
document.querySelector('#pickJaskier').addEventListener('click', showJaskier);
document.querySelector('#pickRoach').addEventListener('click', showRoach);

//show image of selected character
function showGeralt() {
    geralt.classList.toggle('hidden');
    yennefer.classList.add('hidden');
    triss.classList.add('hidden');
    ciri.classList.add('hidden');
    jaskier.classList.add('hidden');
    roach.classList.add('hidden');

    document.querySelector('#pickGeralt').style.backgroundColor = "#FF564D";
    document.querySelector('#pickYennefer').style.backgroundColor = "";
    document.querySelector('#pickTriss').style.backgroundColor = "";
    document.querySelector('#pickCiri').style.backgroundColor = "";
    document.querySelector('#pickJaskier').style.backgroundColor = "";
    document.querySelector('#pickRoach').style.backgroundColor = "";

}

function showYennefer() {
    yennefer.classList.toggle('hidden');
    geralt.classList.add('hidden');
    triss.classList.add('hidden');
    ciri.classList.add('hidden');
    jaskier.classList.add('hidden');
    roach.classList.add('hidden');

    document.querySelector('#pickYennefer').style.backgroundColor = "#CB8AED";
    document.querySelector('#pickGeralt').style.backgroundColor = "";
    document.querySelector('#pickTriss').style.backgroundColor = "";
    document.querySelector('#pickCiri').style.backgroundColor = "";
    document.querySelector('#pickJaskier').style.backgroundColor = "";
    document.querySelector('#pickRoach').style.backgroundColor = "";
}

function showTriss() {
    triss.classList.toggle('hidden');
    geralt.classList.add('hidden');
    yennefer.classList.add('hidden');
    ciri.classList.add('hidden');
    jaskier.classList.add('hidden');
    roach.classList.add('hidden');

    document.querySelector('#pickTriss').style.backgroundColor = "#FFA363";
    document.querySelector('#pickYennefer').style.backgroundColor = "";
    document.querySelector('#pickGeralt').style.backgroundColor = "";
    document.querySelector('#pickCiri').style.backgroundColor = "";
    document.querySelector('#pickJaskier').style.backgroundColor = "";
    document.querySelector('#pickRoach').style.backgroundColor = "";
}

function showCiri() {
    ciri.classList.toggle('hidden');
    geralt.classList.add('hidden');
    triss.classList.add('hidden');
    yennefer.classList.add('hidden');
    jaskier.classList.add('hidden');
    roach.classList.add('hidden');

    document.querySelector('#pickCiri').style.backgroundColor = "#B0DAFF";
    document.querySelector('#pickYennefer').style.backgroundColor = "";
    document.querySelector('#pickTriss').style.backgroundColor = "";
    document.querySelector('#pickGeralt').style.backgroundColor = "";
    document.querySelector('#pickJaskier').style.backgroundColor = "";
    document.querySelector('#pickRoach').style.backgroundColor = "";
}

function showJaskier() {
    jaskier.classList.toggle('hidden');
    geralt.classList.add('hidden');
    triss.classList.add('hidden');
    ciri.classList.add('hidden');
    yennefer.classList.add('hidden');
    roach.classList.add('hidden');

    document.querySelector('#pickJaskier').style.backgroundColor = "#FFB0FB";
    document.querySelector('#pickYennefer').style.backgroundColor = "";
    document.querySelector('#pickTriss').style.backgroundColor = "";
    document.querySelector('#pickCiri').style.backgroundColor = "";
    document.querySelector('#pickGeralt').style.backgroundColor = "";
    document.querySelector('#pickRoach').style.backgroundColor = "";
}

function showRoach() {
    roach.classList.toggle('hidden');
    geralt.classList.add('hidden');
    triss.classList.add('hidden');
    ciri.classList.add('hidden');
    jaskier.classList.add('hidden');
    yennefer.classList.add('hidden');

    document.querySelector('#pickRoach').style.backgroundColor = "#7BD17B";
    document.querySelector('#pickYennefer').style.backgroundColor = "";
    document.querySelector('#pickTriss').style.backgroundColor = "";
    document.querySelector('#pickCiri').style.backgroundColor = "";
    document.querySelector('#pickJaskier').style.backgroundColor = "";
    document.querySelector('#pickGeralt').style.backgroundColor = "";
}

