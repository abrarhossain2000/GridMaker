var tbl = document.getElementById("grid"); 
var rowNum = 1;
var colNum = 1;
let colorSelected;

//click on a single cell, changing its color to the currently selected color

//NEW ELEMENTS OF TABLE
function setCell(cell){
    cell.addEventListener("click", function(evt){
        targetCell = evt.target;
        colorSelected = document.getElementById("selectedID").value;
        targetCell.style.backgroundColor = colorSelected;
    });
}

//Adds a row
function addR() 
{ 
    // row = tbl.insertRow(tbl.rows.length);
 
    var row = document.createElement("tr");
    for (i = 0; i < colNum; i++) 
    { 
        // createCell = (row.insertCell(i), i, 'row'); 
        let cell = document.createElement("td");
        setCell(cell);
        row.appendChild(cell);
    }
    tbl.appendChild(row);
    rowNum++;
}

// Adds a column
function addC() 
{ 
    // totalRows = document.getElementsByTagName("tr");
    colNum++;
    for (i = 0; i < rowNum; i++) 
    { 
        // createCell= (tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col'); 
        var cell = document.getElementsByTagName("tr")[i];
        var column = document.createElement("td");
        setCell(column);
        cell.appendChild(column);
    }
    // colNum++;
    tbl.appendChild(cell);
}

// Removes a row
function removeR() {
    // gets first tr tag then removes it
    var row = document.body.getElementsByTagName("tr")[0];
    row.remove();
}

// Removes a column
function removeC() {
    // gets every tr tag and stores it in row
    var row = document.body.getElementsByTagName("tr");

    // removes cell at index 0 in each row
    var i = 0;  
    for (var j = 0; j < row.length; j++) { 
        row[j].deleteCell(i); 
    }
}

//select a color from a dropdown menu of colors
function selected() {
    colorSelected = document.getElementById("selectedID").value; //sets the colorSelected
}

//fill all cells with the currently selected color
function fill() {
    //gets td tag
    var x = document.getElementsByTagName("td");

    //fills every cell with the colorSelected
    for( var i = 0; i < x.length; i++){
        x[i].style.backgroundColor = colorSelected; 
    }
}

function clearAll() {
    alert("Clicked Clear All");
}

function fillU() {
    alert("Clicked Fill All Uncolored");
}