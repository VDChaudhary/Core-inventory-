import { useEffect, useState } from "react"

function Dashboard(){

const [data,setData] = useState({
totalProducts:0,
lowStockItems:0,
totalStock:0
})

const loadDashboard = async ()=>{

const res = await fetch("http://localhost:5000/dashboard")
const json = await res.json()

setData(json)

}

useEffect(()=>{
loadDashboard()
},[])

return(

<div>

<h1>Dashboard</h1>

<div style={{
display:"flex",
gap:"20px",
marginTop:"20px"
}}>

<div style={{
background:"#f5f5f5",
padding:"20px",
borderRadius:"8px",
width:"200px"
}}>

<h3>Total Products</h3>
<p style={{fontSize:"22px"}}>{data.totalProducts}</p>

</div>


<div style={{
background:"#f5f5f5",
padding:"20px",
borderRadius:"8px",
width:"200px"
}}>

<h3>Low Stock</h3>
<p style={{fontSize:"22px"}}>{data.lowStockItems}</p>

</div>


<div style={{
background:"#f5f5f5",
padding:"20px",
borderRadius:"8px",
width:"200px"
}}>

<h3>Total Stock</h3>
<p style={{fontSize:"22px"}}>{data.totalStock}</p>

</div>

</div>

</div>

)

}

export default Dashboard