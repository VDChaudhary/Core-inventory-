import { useEffect,useState } from "react"

function Receipts(){

const [products,setProducts] = useState([])
const [receipts,setReceipts] = useState([])
const [productId,setProductId] = useState("")
const [quantity,setQuantity] = useState(1)

const loadProducts = async ()=>{

const res = await fetch("http://localhost:5000/products")
const data = await res.json()

setProducts(data)

}

const loadReceipts = async ()=>{

const res = await fetch("http://localhost:5000/receipts")
const data = await res.json()

setReceipts(data)

}

const createReceipt = async ()=>{

await fetch("http://localhost:5000/receipts",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
productId,
quantity
})

})

loadReceipts()

}

useEffect(()=>{
loadProducts()
loadReceipts()
},[])

return(

<div>

<h1>Receipts</h1>

<select onChange={(e)=>setProductId(e.target.value)}>

<option>Select Product</option>

{products.map(p=>(
<option key={p._id} value={p._id}>{p.name}</option>))}

</select>

<input
type="number"
value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
/>

<button onClick={createReceipt}>Create Receipt</button>

<table border="1">

<thead>
<tr>
<th>Product</th>
<th>Quantity</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{receipts.map(r=>(
<tr key={r._id}>
<td>{r.productName}</td>
<td>+{r.quantity}</td>
<td>{new Date(r.date).toLocaleString()}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Receipts