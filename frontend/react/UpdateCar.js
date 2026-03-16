const { useState } = React;

function UpdateCar(){

  const [row,setRow] = useState(null)
  const [formContainer,setFormContainer] = useState(null)

  const [make,setMake] = useState("")
  const [model,setModel] = useState("")
  const [year,setYear] = useState("")
  const [price,setPrice] = useState("")
  const [status,setStatus] = useState("")

  window.updateCar = function(button){

    const r = button.parentElement.parentElement
    const cells = r.querySelectorAll("td")

    setRow(r)
    setMake(cells[0].innerText)
    setModel(cells[1].innerText)
    setYear(cells[2].innerText)
    setPrice(cells[3].innerText.replace("$",""))
    setStatus(cells[4].innerText)

    const newRow = document.createElement("tr")

    const td = document.createElement("td")
    td.colSpan = 6

    newRow.appendChild(td)

    r.after(newRow)

    setFormContainer(td)
  }

  function handleUpdate(){

    const cells = row.querySelectorAll("td")

    cells[0].innerText = make
    cells[1].innerText = model
    cells[2].innerText = year
    cells[3].innerText = "$"+price
    cells[4].innerText = status

    formContainer.parentElement.remove()

    setFormContainer(null)
  }

  if(!formContainer) return null

  return ReactDOM.createPortal(

    <div className="react-form">

      <h3>Update Car</h3>

      <input value={make} onChange={(e)=>setMake(e.target.value)} />
      <input value={model} onChange={(e)=>setModel(e.target.value)} />
      <input value={year} onChange={(e)=>setYear(e.target.value)} />
      <input value={price} onChange={(e)=>setPrice(e.target.value)} />

      <select value={status} onChange={(e)=>setStatus(e.target.value)}>
        <option>Available</option>
        <option>Sold</option>
      </select>

      <button onClick={handleUpdate}>
        Save
      </button>

    </div>,

    formContainer

  )

}