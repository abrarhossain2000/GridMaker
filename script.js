var tbl = document.getElementById("grid"); 
var rowNum = 1;
var colNum = 1;
let colorSelected;

//click on a single cell, changing its color to the currently selected color

//Set cell attributees
function setCell(cell){
    cell.style.backgroundColor = "white"; //default white background

    //add eventlistener of click & change color
    cell.addEventListener("click", function(evt){
        targetCell = evt.target;
        colorSelected = document.getElementById("selectedID").value;
        targetCell.style.backgroundColor = colorSelected;
    });
}

//Adds a row
function addR() 
{ 
    var row = document.createElement("tr"); //create a new element for row
    for (i = 0; i < colNum; i++) 
    { 
        let cell = document.createElement("td"); //create a new element for cell
        setCell(cell); // set the cell attribtutes
        row.appendChild(cell); //sets the cell as the last child
    }
    tbl.appendChild(row); //append the row as the last child
    rowNum++; //increase the row number
}

// Adds a column
function addC() 
{ 
    colNum++; //increase the column number

    //for each row
    for (i = 0; i < rowNum; i++) 
    { 
        var row = document.getElementsByTagName("tr")[i]; //each row
        var columnCell = document.createElement("td"); //create a new element 
        setCell(columnCell); //set the cell attributes
        row.appendChild(columnCell); //add the column cell to the row
    }
    tbl.appendChild(row); //add the row with the new column cell to the table.
}

// Removes a row
function removeR() {
    rowNum--;
    // gets first tr tag then removes it
    var row = document.body.getElementsByTagName("tr")[0];
    row.remove();
}

// Removes a column
function removeC() {
    colNum--;
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