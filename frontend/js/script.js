function deleteRow(button){

    let row = button.parentNode.parentNode;

    row.remove();

}

function totalCars(){

let rows = document.querySelectorAll("tbody tr");

document.getElementById("result").innerText =
"Total Cars: " + rows.length;

}

function totalAvailable(){

let rows = document.querySelectorAll("tbody tr");

let count = 0;

rows.forEach(row => {

let status = row.children[4].innerText;

if(status === "Available"){
count++;
}

});

document.getElementById("result").innerText =
"Total Available Cars: " + count;

}

function totalSold(){

let rows = document.querySelectorAll("tbody tr");

let count = 0;

rows.forEach(row => {

let status = row.children[4].innerText;

if(status === "Sold"){
count++;
}

});

document.getElementById("result").innerText =
"Total Sold Cars: " + count;

}