import { useEffect,useState } from "react"

function Deliveries(){

const [products,setProducts] = useState([])
const [deliveries,setDeliveries] = useState([])
const [productId,setProductId] = useState("")
const [quantity,setQuantity] = useState(1)

const loadProducts = async ()=>{

const res = await fetch("http://localhost:5000/products")
const data = await res.json()

setProducts(data)

}

const loadDeliveries = async ()=>{

const res = await fetch("http://localhost:5000/deliveries")
const data = await res.json()

setDeliveries(data)

}

const createDelivery = async ()=>{

await fetch("http://localhost:5000/deliveries",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
productId,
quantity
})

})

loadDeliveries()

}

useEffect(()=>{
loadProducts()
loadDeliveries()
},[])

return(

<div>

<h1>Deliveries</h1>

<select onChange={(e)=>setProductId(e.target.value)}>

<option>Select Product</option>

{products.map(p=>(
<option value={p._id}>{p.name}</option>
))}

</select>

<input
type="number"
value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
/>

<button onClick={createDelivery}>Create Delivery</button>

<table border="1">

<thead>
<tr>
<th>Product</th>
<th>Quantity</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{deliveries.map(d=>(
<tr key={d._id}>
<td>{d.productName}</td>
<td>-{d.quantity}</td>
<td>{new Date(d.date).toLocaleString()}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Deliveries