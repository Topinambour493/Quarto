for (let piece=0;piece<16;piece++){
    document.querySelector(`#p${piece}`).addEventListener('click',function(){
        if (!document.querySelector("#centre_header > .pion")){
            centre_header.append(this.parentElement); 
            document.querySelector("#centre_header > #action").innerHTML="Place la pièce";
            if (document.querySelector("#centre_header > #pseudo").innerHTML=="Joueur 1"){
                document.querySelector("#centre_header > #pseudo").innerHTML="Joueur 2";
            } else {
                document.querySelector("#centre_header > #pseudo").innerHTML="Joueur 1";
            }
        }
    });
}

for (let locationPiece=0;locationPiece<16;locationPiece++){
    document.querySelector(`#locP${locationPiece}`).addEventListener('click',function(){
        if (document.querySelector("#centre_header > .pion") && getProperties_piece(locationPiece)==false){
            console.log(document.querySelector(`#locP${locationPiece}`))
            document.querySelector(`#locP${locationPiece}`).append(document.querySelector("#centre_header > .pion"));
            document.querySelector("#centre_header > #action").innerHTML="Choisis une pièce";
            if (isWin(locationPiece)){
                document.querySelector("#centre_header > #pseudo").innerHTML+=", tu as gagné, bravo !";
            }
        }
    });
}

// renvoit les propriétés de la piece présente dans l'emplacement i, si il n'y pas de pièce, renvoit false
function getProperties_piece(i){
    let emplacement_piece=document.querySelector(`#locP${i}`);
    if (!emplacement_piece.querySelector(".pion")){return false;}
    return emplacement_piece.querySelector(".pion > div").className.split(' ');
}

//renvoit false si il n'y a pas de points communs, sinon renvoit les points communs
function compare(points_communs,properties_piece){
    if (properties_piece==false){return false;}
    if (points_communs==false){return false;}
    for (let i=0;i<4;i++){
        if (properties_piece[i] != points_communs[i]){
            points_communs.splice(i,1,false);
        }
    }
    console.log(points_communs);
    return points_communs;
}

// renvoit true si il y a au moins un point commun
function present(points_communs){
    if (points_communs==false){return false;}
    for (let i=0 ; i<points_communs.length ; i++){
        if (points_communs[i]!=false){
            return true;
        }
    }
    return false;
}

function showWin(a,b,c){
    for (let i = a ; i<b ; i+=c){
        document.querySelector(`#locP${i} > .pion > div`).style.border="0.7vmin solid red";
    }
}

function lookWin(a,b,c){
    let points_communs=getProperties_piece(a);
    for (let i = a+c ; ((i<b) && present(points_communs)) ; i+=c){
        points_communs=compare(points_communs,getProperties_piece(i));
    }
    if (present(points_communs)){showWin(a,b,c);return true;}  
    return false;
}

function isWin(locP){
    //regarde sur la rangée horizontale
    let r=Math.floor(locP/4)*4;
    let win=lookWin(r,(r+4),1);
    if (win){return true;}

    // regarde sur la rangée verticale
    win=lookWin((locP%4),16,4);
    if (win){return true;}

    if (locP%5==0){
        //regarde sur la diagonale ↘
        win=lookWin(0,16,5);
        if (win){return true;}

    } else if (locP%3==0){
        // regarde sur la diagonale ↙
        win=lookWin(3,13,3);
        if (win){return true;}
    }
    return false;
}