var tbl = document.getElementById("grid"); 
var rowNum = tbl.rows.length;
var colNum = tbl.rows[0].cells.length;
let colorSelected;

//click on a single cell, changing its color to the currently selected color

//TABLE
var cellsInTable = tbl.getElementsByTagName("td"); //gets the cells of the grid

// for each of cell, add an event listener of 'click' & change the color of the cell when clicked on.
for(var i = 0; i < cellsInTable.length; ++i){
    cellsInTable[i].addEventListener("click", function(evt){
        targetCell = evt.target;
        colorSelected = document.getElementById("selectedID").value;
        targetCell.style.backgroundColor = colorSelected;
    });
}

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
 
    testingrow = document.createElement("tr");
    for (i = 0; i < tbl.rows[0].cells.length; i++) 
    { 
        // createCell = (row.insertCell(i), i, 'row'); 
        testingcell = document.createElement("td");
        setCell(testingcell);
        testingrow.appendChild(testingcell);
    }
    tbl.appendChild(testingrow);
    rowNum++;
}

// Adds a column
function addC() 
{ 
    totalRows = document.getElementsByTagName("tr");
    for (i = 0; i < tbl.rows.length; i++) 
    { 
        // createCell= (tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col'); 
        testingcell = document.createElement("td");
        setCell(testingcell);
        totalRows[i].appendChild(testingcell);
    }
    colNum++
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
    // select all the table cells
    let tableCell = document.getElementsByTagName("td");

    // clear every cell
    for (let i = 0; i < tableCell.length; i++) {
        tableCell[i].style.backgroundColor = "white";
    }
}

function fillU() {
    // select all uncolored cells (white cells)
    let uncoloredCells = [];
    let tableCell = document.getElementsByTagName("td");
    for (let i = 0; i < tableCell.length; i++) {
        if (tableCell[i].style.backgroundColor == "white") {
            uncoloredCells.push(tableCell[i]);
        }
    }

    //fills every uncolored cell with the selected color
    for (let i = 0; i < uncoloredCells.length; i++){
        uncoloredCells[i].style.backgroundColor = colorSelected; 
    }
}