table = document.querySelector("table")
for (let a = 0; a < 4; a++) {
    tr = document.createElement("tr")
    for (let b = 0; b < 4; b++) {
        tr.innerHTML+="<th><div class='emplacement_piece'></div></th>";
    }
    table.appendChild(tr);
}