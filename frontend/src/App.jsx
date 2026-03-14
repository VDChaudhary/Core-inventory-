import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Dashboard from "./pages/dashboard"
import Products from "./pages/products"
import Receipts from "./pages/Receipts"
import Deliveries from "./pages/Deliveries"
import MoveHistory from "./pages/MoveHistory"
import Warehouse from "./pages/Warehouse"
import Transfers from "./pages/Transfers"
import Adjustments from "./pages/Adjustments"
import Profile from "./pages/Profile"

function App() {

return (

<BrowserRouter>

<div style={{display:"flex"}}>

{/* Sidebar */}
<div style={{
width:"220px",
background:"#1f2937",
color:"white",
minHeight:"100vh",
padding:"20px"
}}>

<h2>CoreInventory</h2>

<div style={{marginTop:"20px",display:"flex",flexDirection:"column",gap:"10px"}}>

<Link to="/" style={{color:"white"}}>Dashboard</Link>
<Link to="/products" style={{color:"white"}}>Products</Link>
<Link to="/receipts" style={{color:"white"}}>Receipts</Link>
<Link to="/deliveries" style={{color:"white"}}>Deliveries</Link>
<Link to="/transfers" style={{color:"white"}}>Transfers</Link>
<Link to="/adjustments" style={{color:"white"}}>Adjustments</Link>
<Link to="/warehouse" style={{color:"white"}}>Warehouse</Link>
<Link to="/movehistory" style={{color:"white"}}>Move History</Link>
<Link to="/profile" style={{color:"white"}}>Profile</Link>

</div>

</div>

{/* Page Content */}
<div style={{flex:1,padding:"30px"}}>

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/receipts" element={<Receipts/>}/>
<Route path="/deliveries" element={<Deliveries/>}/>
<Route path="/transfers" element={<Transfers/>}/>
<Route path="/adjustments" element={<Adjustments/>}/>
<Route path="/warehouse" element={<Warehouse/>}/>
<Route path="/movehistory" element={<MoveHistory/>}/>
<Route path="/profile" element={<Profile/>}/>

</Routes>

</div>

</div>

</BrowserRouter>

)

}

export default App