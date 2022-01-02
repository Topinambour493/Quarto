var joueur1={"couleur":"","pseudo":"Joueur 1"};
var joueur2={"couleur":"","pseudo":"Joueur 2"};
var joueurs=[joueur1,joueur2];


document.querySelector(`#pseudoJ1`).focus()
joueur1["couleur"]=document.querySelector('#couleurJ1').value;
document.querySelector("#pseudoJ1").style.color=`${joueur1["couleur"]}`;
joueur2["couleur"]=document.querySelector('#couleurJ2').value;
document.querySelector("#pseudoJ2").style.color=`${joueur2["couleur"]}`;

// création des emplacements du plateau
table = document.querySelector("table")
locationPiece=0;
for (let a = 0; a < 4; a++) {
    tr = document.createElement("tr")
    for (let b = 0; b < 4; b++) {
        tr.innerHTML+=`<th><div id='locP${locationPiece}' class='emplacement_piece centre'></div></th>`;
        locationPiece++;
    }
    table.appendChild(tr);
}

function rejouer(){
    //supression des pièces déja créees
    for (let i=0;i<16;i++){
        document.querySelector(`#p${i}`).parentElement.remove();
    }
    if (document.querySelector("#quarto")){
        document.querySelector("#quarto").remove();
    }
    jouer();
}

function jouer(){
    var couleurs=["blanc","noir"];
    var formes=["carre","rond"];
    var tailles=["grand","petit"];
    var trous=["plein","trou"];
    var piece;
    var pieces=document.getElementById("pieces")

    //remplissage du header
    let premierJoueur=joueurs[Math.floor(Math.random() * 2)];
    document.querySelector("#centre_header").innerHTML=`\
        <div id="pseudo">${premierJoueur["pseudo"]}</div> \
        <div id="action">Choisis une pièce</div> \
    `;
    document.querySelector("#pseudo").style.color=`${premierJoueur["couleur"]}`;
    document.querySelector("#mode_jeu").innerHTML = `mode ${mode}`;

    //création des pièces
    piece=0;
    couleurs.forEach(couleur => {
        formes.forEach(forme => {
            tailles.forEach(taille => {
                trous.forEach(trou => {
                    pieces.querySelector(`#pieces_${couleur}`).innerHTML+=`\ 
                        <div class="pion centre">\
                            <div id='p${piece}' class='${taille} ${forme} ${couleur} ${trou}'></div>\
                        </div>\
                    `;
                    if (trou=="trou"){
                        document.querySelector(`#p${piece}`).className+=' centre'; 
                        document.querySelector(`#p${piece}`).innerHTML='<div class="trou_rond"></div>';  
                    }
                    piece+=1;
                });
            });
        });
    });
    unlockJeu();
    animation();
}


