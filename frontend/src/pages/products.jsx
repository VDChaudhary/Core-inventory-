import {useState,useEffect} from "react"

function Products(){

const [products,setProducts] = useState([])

const [name,setName] = useState("")
const [sku,setSku] = useState("")
const [category,setCategory] = useState("")
const [stock,setStock] = useState("")

useEffect(()=>{
fetchProducts()
},[])

const fetchProducts = async ()=>{

const res = await fetch("http://localhost:5000/products")
const data = await res.json()

setProducts(data)

}

const addProduct = async ()=>{

await fetch("http://localhost:5000/products",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
sku,
category,
stock:Number(stock)
})

})

fetchProducts()

}

return(

<div>

<h1>Products</h1>

<input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
<input placeholder="SKU" onChange={(e)=>setSku(e.target.value)} />
<input placeholder="Category" onChange={(e)=>setCategory(e.target.value)} />
<input placeholder="Stock" onChange={(e)=>setStock(e.target.value)} />

<button onClick={addProduct}>Add Product</button>

<table border="1">

<thead>
<tr>
<th>Name</th>
<th>SKU</th>
<th>Category</th>
<th>Stock</th>
</tr>
</thead>

<tbody>

{products.map(p=>(

<tr key={p._id}>

<td>{p.name}</td>
<td>{p.sku}</td>
<td>{p.category}</td>
<td>{p.stock}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default Products