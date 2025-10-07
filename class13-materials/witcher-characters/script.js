let geralt = document.querySelector('#geralt');
let yennefer = document.querySelector('#yennefer');
let triss = document.querySelector('#triss');
let ciri = document.querySelector('#ciri');
let jaskier = document.querySelector('#jaskier');
let roach = document.querySelector('#roach');

let pickGeralt = document.querySelector('#pickGeralt');
let pickYennefer = document.querySelector('#pickYennefer');
let pickTriss = document.querySelector('#pickTriss');
let pickCiri = document.querySelector('#pickCiri');
let pickJaskier = document.querySelector('#pickJaskier');
let pickRoach = document.querySelector('#pickRoach');

let goBackBtn = document.querySelector('.goBack');

//to click the character choice
pickGeralt.addEventListener('click', showGeralt);
pickYennefer.addEventListener('click', showYennefer);
pickTriss.addEventListener('click', showTriss);
pickCiri.addEventListener('click', showCiri);
pickJaskier.addEventListener('click', showJaskier);
pickRoach.addEventListener('click', showRoach);

goBackBtn.addEventListener('click', showAllCharacters);

//show image of selected character
function showGeralt() {
    geralt.classList.toggle('hidden');
    yennefer.classList.add('hidden');
    triss.classList.add('hidden');
    ciri.classList.add('hidden');
    jaskier.classList.add('hidden');
    roach.classList.add('hidden');

    //change background color when picked 
    pickGeralt.style.backgroundColor = "#FF564D";

    //hide other names when geralt is picked
    pickYennefer.style.display = 'none';
    pickCiri.style.display = 'none';
    pickTriss.style.display = 'none';
    pickJaskier.style.display = 'none';
    pickRoach.style.display = 'none';

    //show button when all characters are removed
    goBackBtn.style.display = "block";
}

function showYennefer() {
    yennefer.classList.toggle('hidden');
    geralt.classList.add('hidden');
    triss.classList.add('hidden');
    ciri.classList.add('hidden');
    jaskier.classList.add('hidden');
    roach.classList.add('hidden');

    //change background color when picked 
    pickYennefer.style.backgroundColor = "#CB8AED";

    //hide other names when yennefer is picked
    pickGeralt.style.display = 'none';
    pickCiri.style.display = 'none';
    pickTriss.style.display = 'none';
    pickJaskier.style.display = 'none';
    pickRoach.style.display = 'none';

    //show button when all characters are removed
    goBackBtn.style.display = "block";
}

function showTriss() {
    triss.classList.toggle('hidden');
    geralt.classList.add('hidden');
    yennefer.classList.add('hidden');
    ciri.classList.add('hidden');
    jaskier.classList.add('hidden');
    roach.classList.add('hidden');

    //change background color when picked 
    pickTriss.style.backgroundColor = "#FFA363";

    //hide other names when Triss is picked
    pickYennefer.style.display = 'none';
    pickCiri.style.display = 'none';
    pickGeralt.style.display = 'none';
    pickJaskier.style.display = 'none';
    pickRoach.style.display = 'none';

    //show button when all characters are removed
    goBackBtn.style.display = "block";

}

function showCiri() {
    ciri.classList.toggle('hidden');
    geralt.classList.add('hidden');
    triss.classList.add('hidden');
    yennefer.classList.add('hidden');
    jaskier.classList.add('hidden');
    roach.classList.add('hidden');

    //change background color when picked 
    pickCiri.style.backgroundColor = "#B0DAFF";

    //hide other names when Ciri is picked
    pickYennefer.style.display = 'none';
    pickGeralt.style.display = 'none';
    pickTriss.style.display = 'none';
    pickJaskier.style.display = 'none';
    pickRoach.style.display = 'none';

    //show button when all characters are removed
    goBackBtn.style.display = "block";

}

function showJaskier() {
    jaskier.classList.toggle('hidden');
    geralt.classList.add('hidden');
    triss.classList.add('hidden');
    ciri.classList.add('hidden');
    roach.classList.add('hidden');
    yennefer.classList.add('hidden');

    //change background color when picked 
    pickJaskier.style.backgroundColor = "#FFB0FB";

    //hide other names when Jaskier is picked
    pickYennefer.style.display = 'none';
    pickCiri.style.display = 'none';
    pickTriss.style.display = 'none';
    pickGeralt.style.display = 'none';
    pickRoach.style.display = 'none';

    //show button when all characters are removed
    goBackBtn.style.display = "block";

}

function showRoach() {
    roach.classList.toggle('hidden');
    geralt.classList.add('hidden');
    triss.classList.add('hidden');
    ciri.classList.add('hidden');
    jaskier.classList.add('hidden');
    yennefer.classList.add('hidden');

    //change background color when picked 
    pickRoach.style.backgroundColor = "#7BD17B";

    //hide other names when Roach is picked
    pickYennefer.style.display = 'none';
    pickCiri.style.display = 'none';
    pickTriss.style.display = 'none';
    pickJaskier.style.display = 'none';
    pickGeralt.style.display = 'none';

    //show button when all characters are removed
    goBackBtn.style.display = "block";

}

function showAllCharacters() {
    pickGeralt.style.display = 'block';
    pickYennefer.style.display = 'block';
    pickTriss.style.display = 'block';
    pickCiri.style.display = 'block';
    pickJaskier.style.display = 'block';
    pickRoach.style.display = 'block';

    goBackBtn.style.display = 'none';

    pickGeralt.style.backgroundColor = "";
    pickYennefer.style.backgroundColor = "";
    pickTriss.style.backgroundColor = "";
    pickCiri.style.backgroundColor = "";
    pickJaskier.style.backgroundColor = "";
    pickRoach.style.backgroundColor = "";

    geralt.classList.add('hidden');
    yennefer.classList.add('hidden');
    triss.classList.add('hidden');
    ciri.classList.add('hidden');
    jaskier.classList.add('hidden');
    roach.classList.add('hidden');
}

