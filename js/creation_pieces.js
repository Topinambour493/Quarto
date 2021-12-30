var couleurs=["blanc","noir"];
var formes=["carre","rond"];
var tailles=["grand","petit"];
var trous=["plein","trou"];
var piece=0;
var pieces=document.getElementById("pieces")
var rejouer=0;

if (rejouer){
    for (let i=0;i<16;i++){
        pieces.querySelector(`#p${i}`).parentElement.remove();
    }
}

couleurs.forEach(couleur => {
    formes.forEach(forme => {
        tailles.forEach(taille => {
            trous.forEach(trou => {
                console.log(pieces.querySelector(`#pieces_${couleur}`));
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

document.querySelector("#centre_header").innerHTML='\
    <div id="pseudo">Joueur 1</div> \
    <div id="action">Choisis une pièce</div> \
';





