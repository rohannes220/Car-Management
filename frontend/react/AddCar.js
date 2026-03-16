const { useState } = React;

function AddCar(){

  const [showForm,setShowForm] = useState(false);
  const [make,setMake] = useState("");
  const [model,setModel] = useState("");
  const [year,setYear] = useState("");
  const [price,setPrice] = useState("");

  function handleSubmit(){

    const table = document.querySelector("tbody");

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${make}</td>
      <td>${model}</td>
      <td>${year}</td>
      <td>$${price}</td>
      <td>Available</td>
      <td>
        <button onclick="updateCar(this)">Update</button>
        <button onclick="deleteRow(this)">Delete</button>
      </td>
    `;

    table.appendChild(row);

    setMake("");
    setModel("");
    setYear("");
    setPrice("");
    setShowForm(false);
  }

  return(

    <div>

      <button onClick={()=>setShowForm(!showForm)}>
        Add Car
      </button>

      {showForm && (

        <div className="react-form">

          <input placeholder="Make" value={make} onChange={(e)=>setMake(e.target.value)} />
          <input placeholder="Model" value={model} onChange={(e)=>setModel(e.target.value)} />
          <input placeholder="Year" value={year} onChange={(e)=>setYear(e.target.value)} />
          <input placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />

          <button onClick={handleSubmit}>Submit</button>

        </div>

      )}

    </div>

  );
}