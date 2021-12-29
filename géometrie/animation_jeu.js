mode="expert";

for (let piece=0;piece<16;piece++){
    document.querySelector(`#p${piece}`).addEventListener('click',function(){
        if ( ( !document.querySelector("header > .pion") ) && ( document.querySelector(`#pieces #p${piece}`) ) ){
            console.log(document.querySelector("header > .pion"));
            document.querySelector("header").append(this.parentElement); 
            document.querySelector("#action").innerHTML="Place la pièce";
            if (document.querySelector("#pseudo").innerHTML=="Joueur 1"){
                document.querySelector("#pseudo").innerHTML="Joueur 2";
                document.querySelector("#pseudo").style.color="blue";
            } else {
                document.querySelector("#pseudo").innerHTML="Joueur 1";
                document.querySelector("#pseudo").style.color="yellow";
            }
        }
    });
}

for (let locationPiece=0;locationPiece<16;locationPiece++){
    document.querySelector(`#locP${locationPiece}`).addEventListener('click',function(){
        if (document.querySelector("header > .pion") && getProperties_piece(locationPiece)==false){
            console.log(document.querySelector(`#locP${locationPiece}`))
            document.querySelector(`#locP${locationPiece}`).append(document.querySelector("header > .pion"));
            document.querySelector("#action").innerHTML="Choisis une pièce";
            if ( ( isWinLines(locationPiece) ) || ( isWinSquares(locationPiece) ) ){
                document.querySelector("#pseudo").innerHTML+=", tu as gagné, bravo !";
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

function showWinLine(a,b,c){
    for (let i = a ; i<b ; i+=c){
        document.querySelector(`#locP${i} > .pion > div`).style.border="0.7vmin solid red";
    }
}

//montre le carré de 2 par 2 avec i le coin haut-gauche en mettant des bordures rouges sur les pièces
function showWinSquare(i){
    document.querySelector(`#locP${i} > .pion > div`).style.border="0.7vmin solid red";
    document.querySelector(`#locP${i+1} > .pion > div`).style.border="0.7vmin solid red";
    document.querySelector(`#locP${i+4} > .pion > div`).style.border="0.7vmin solid red";
    document.querySelector(`#locP${i+5} > .pion > div`).style.border="0.7vmin solid red";
}

//regarde le carré de 2 par 2 avec i le coin haut-gauche
function lookWinSquare(i){
    let points_communs=getProperties_piece(i); 
    points_communs=compare(points_communs,getProperties_piece(i+1));
    points_communs=compare(points_communs,getProperties_piece(i+4));
    points_communs=compare(points_communs,getProperties_piece(i+5));
    if (present(points_communs)){showWinSquare(i);return true;}  
    return false;    

}

function lookWinLine(a,b,c){
    let points_communs=getProperties_piece(a);
    for (let i = a+c ; ((i<b) && present(points_communs)) ; i+=c){
        points_communs=compare(points_communs,getProperties_piece(i));
    }
    if (present(points_communs)){showWinLine(a,b,c);return true;}  
    return false;
}

function isWinSquares(locP){
    let win;

    //regarde le carré avec locP le coin haut-gauche
    if ( (locP%4 < 3) && (Math.floor(locP/4) < 3) ){
        win=lookWinSquare(locP);
        if (win){return true;}
    }

    //regarde le carré avec locP le coin haut-droit
    if ( (locP%4 > 0) && (Math.floor(locP/4) < 3) ){
        win=lookWinSquare(locP-1);
        if (win){return true;}
    }

    //regarde le carré avec locP le coin bas-gauche
    if ( (locP%4 < 3) && (Math.floor(locP/4) > 0) ){
        win=lookWinSquare(locP-4);
        if (win){return true;}
    }

    //regarde le carré avec locP le coin bas-droite
    if ( (locP%4 > 0) && (Math.floor(locP/4) < 3) ){
        win=lookWinSquare(locP-5);
        if (win){return true;}
    }
} 

function isWinLines(locP){
    //regarde sur la rangée horizontale
    let r=Math.floor(locP/4)*4;
    let win=lookWinLine(r,(r+4),1);
    if (win){return true;}

    // regarde sur la rangée verticale
    win=lookWinLine((locP%4),16,4);
    if (win){return true;}

    if (locP%5==0){
        //regarde sur la diagonale ↘
        win=lookWinLine(0,16,5);
        if (win){return true;}

    } else if (locP%3==0){
        // regarde sur la diagonale ↙
        win=lookWinLine(3,13,3);
        if (win){return true;}
    }
    return false;
}

function isWin(locP){
    if ( isWinLines(locP) ){return true;}
    if (mode=="expert"){
        if ( isWinSquares(locP) ){return true;}
    }
    return false;
}