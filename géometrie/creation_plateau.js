table = document.querySelector("table")
locationPiece=1;
for (let a = 0; a < 4; a++) {
    tr = document.createElement("tr")
    for (let b = 0; b < 4; b++) {
        tr.innerHTML+=`<th><div id='locP${locationPiece}' class='emplacement_piece'></div></th>`;
        locationPiece++;
    }
    table.appendChild(tr);
}