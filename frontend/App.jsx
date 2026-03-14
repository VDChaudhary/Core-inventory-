import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
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

import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main App */}
        <Route path="/*" element={
          <div className="container">

            <Sidebar />

            <div className="content">

              <Routes>

                <Route path="/dashboard" element={<Dashboard />} />
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
        } />

      </Routes>

    </BrowserRouter>
  )
}

export default App