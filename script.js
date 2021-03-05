let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() 
{ 
    var tbl = document.getElementById("grid"); 
    row = tbl.insertRow(tbl.rows.length); 
    for (i = 0; i < tbl.rows[0].cells.length; i++) 
    { 
        createCell = (row.insertCell(i), i, 'row'); 
    }
}

// Adds a column
function addC() 
{ 
    var tbl = document.getElementById('grid'); 
    for (i = 0; i < tbl.rows.length; i++) 
    { 
        createCell= (tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col'); 
    }
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

<<<<<<< HEAD

=======
>>>>>>> 1f00d0338f0cb41e7ef3ce6ede5724bfa83ca556
function selected() {
    colorSelected = document.getElementById("selectedID").value;
}

function fill() {
    // alert("Clicked Fill All");
    var x = document.getElementsByTagName("td");
    console.log(x);
    for( var i = 0; i < x.length; i++){
        x[i].style.backgroundColor = colorSelected; 
    }
<<<<<<< HEAD
}
=======
>>>>>>> 1f00d0338f0cb41e7ef3ce6ede5724bfa83ca556

function clearAll() {
    alert("Clicked Clear All");
}

function fillU() {
    alert("Clicked Fill All Uncolored");
}