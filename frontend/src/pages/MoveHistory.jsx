import { useEffect, useState } from "react"

function MoveHistory(){

const [history,setHistory] = useState([])

const loadHistory = async () => {

const res = await fetch("http://localhost:5000/movehistory")

const data = await res.json()

setHistory(data)

}

useEffect(()=>{
loadHistory()
},[])

return(

<div>

<h1>Move History</h1>

<table border="1">

<thead>

<tr>
<th>Type</th>
<th>Product</th>
<th>Quantity</th>
<th>Date</th>
</tr>

</thead>

<tbody>

{history.map((h,index)=>(
<tr key={index}>

<td>{h.type}</td>

<td>{h.product}</td>

<td>
{h.type === "Receipt" ? "+" : "-"}
{h.quantity}
</td>

<td>
{new Date(h.date).toLocaleString()}
</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default MoveHistory