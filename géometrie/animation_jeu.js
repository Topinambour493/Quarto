pieces=[];
for (piece=1;piece<=16;piece++){
    document.querySelector(`#p${piece}`).addEventListener('click',function(){
        this.style.border="2px solid red";
        console.log(this.id);
    });
}

locationPiece=1;
for (locationPiece=1;locationPiece<=16;locationPiece++){
    document.querySelector(`#locP${locationPiece}`).addEventListener('click',function(){
        this.style.border="2px solid red";
        console.log(this.id);

    });
}