import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar"

import Dashboard from "./pages/dashboard"
import Products from "./pages/products"
import Receipts from "./pages/Receipts"
import Deliveries from "./pages/Deliveries"
import Transfers from "./pages/Transfers"
import Adjustments from "./pages/Adjustments"
import Warehouse from "./pages/Warehouse"
import MoveHistory from "./pages/MoveHistory"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <Sidebar />

        <div className="content">

          <Routes>

            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/receipts" element={<Receipts />} />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/adjustments" element={<Adjustments />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/history" element={<MoveHistory />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App