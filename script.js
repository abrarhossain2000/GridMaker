let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() {
    alert("Clicked Add Row");
}

// Adds a column
function addC() {
    alert("Clicked Add Col");
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

//click on a single cell, changing its color to the currently selected color
var table = document.getElementById("grid") //gets the grid
var cells = table.getElementsByTagName("td"); //gets the cells of the grid

//for each of cell, add an event listener of 'click' & change the color of the cell when clicked on.
for(var i = 0; i < cells.length; ++i){
    cells[i].addEventListener("click", function(evt){
        targetCell = evt.target;
        colorSelected = document.getElementById("selectedID").value;
        targetCell.style.backgroundColor = colorSelected;
    });
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