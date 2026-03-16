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

function loadCars(){

  fetch("../collections/cars.json")
    .then(response => response.json())
    .then(data => {

      const table = document.getElementById("car-table-body");

      table.innerHTML = "";

      data.forEach(car => {

        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${car.make}</td>
          <td>${car.model}</td>
          <td>${car.year}</td>
          <td>$${car.price}</td>
          <td>${car.status}</td>
          <td>
            <button onclick="updateCar(this)">Update</button>
            <button onclick="deleteRow(this)">Delete</button>
          </td>
        `;

        table.appendChild(row);

      });

    })
    .catch(error => console.log("Error loading cars:", error));

}

function saveUpdate(button){

    const formRow = button.closest("tr")
    const row = formRow.previousElementSibling

    const cells = row.querySelectorAll("td")

    cells[0].innerText = document.getElementById("editMake").value
    cells[1].innerText = document.getElementById("editModel").value
    cells[2].innerText = document.getElementById("editYear").value
    cells[3].innerText = "$" + document.getElementById("editPrice").value

    formRow.remove()

}

document.addEventListener("DOMContentLoaded", loadCars);