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

// sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() {
    alert("Clicked Fill All");
}

function clearAll() {
    alert("Clicked Clear All");
}

function fillU() {
    alert("Clicked Fill All Uncolored");
}