// création des emplacements du plateau
table = document.querySelector("table")
locationPiece=0;
for (let a = 0; a < 4; a++) {
    tr = document.createElement("tr")
    for (let b = 0; b < 4; b++) {
        tr.innerHTML+=`<th><div id='locP${locationPiece}' class='emplacement_piece'></div></th>`;
        locationPiece++;
    }
    table.appendChild(tr);
}

//définition des propriétés des pièces
var couleurs=["blanc","noir"];
var formes=["carre","rond"];
var tailles=["grand","petit"];
var trous=["plein","trou"];
var piece;
var pieces=document.getElementById("pieces")
var mode="expert";

function rejouer(){
    //supression des pièces déja créees
    for (let i=0;i<16;i++){
        document.querySelector(`#p${i}`).parentElement.remove();
    }
    jouer();
}

function jouer(){
    //remplissage du header
    document.querySelector("#centre_header").innerHTML='\
        <div id="pseudo">Joueur 1</div> \
        <div id="action">Choisis une pièce</div> \
    ';
    document.querySelector("#mode_jeu").innerHTML = `mode ${mode}`;
    document.querySelector("#pseudo").style.color="yellow";

    //création des pièces
    piece=0;
    couleurs.forEach(couleur => {
        formes.forEach(forme => {
            tailles.forEach(taille => {
                trous.forEach(trou => {
                    pieces.querySelector(`#pieces_${couleur}`).innerHTML+=`\ 
                        <div class="pion">\
                            <div id='p${piece}' class='${taille} ${forme} ${couleur} ${trou}'></div>\
                        </div>\
                    `;
                    if (trou=="trou"){
                        document.querySelector(`#p${piece}`).innerHTML='<div class="trou_rond"></div>';  
                    }
                    piece+=1;
                });
            });
        });
    });
    animation();
}


