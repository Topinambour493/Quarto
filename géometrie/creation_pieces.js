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
                    if (forme=="rond"){
                        document.querySelector(`#p${piece}`).innerHTML='<div class="trou_rond"></div>';  
                    } else {
                        document.querySelector(`#p${piece}`).innerHTML='<div class="trou_carre"></div>';  
                    }
                    if (couleur=="vert_fonce"){
                        document.querySelector(`#p${piece}`).childNodes[0].className+=" vert";
                    } else {
                        document.querySelector(`#p${piece}`).childNodes[0].className+=" violet";
                    }
                }
                piece+=1;
            });
        });
    });
});





