var couleurs=["vert_fonce","violet_fonce"];
var formes=["carre","rond"];
var tailles=["grand","petit"];
var trous=["plein","trou"];
var piece=1;
var pieces=document.getElementById("pieces")

couleurs.forEach(couleur => {
    formes.forEach(forme => {
        tailles.forEach(taille => {
            trous.forEach(trou => {
                pieces.innerHTML+=`\ 
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





