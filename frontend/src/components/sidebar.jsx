import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>CoreInventory</h2>

      <nav>

        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/receipts">Receipts</Link>
        <Link to="/deliveries">Deliveries</Link>
        <Link to="/transfers">Transfers</Link>
        <Link to="/adjustments">Adjustments</Link>
        <Link to="/warehouse">Warehouse</Link>
        <Link to="/history">Move History</Link>
        <Link to="/profile">Profile</Link>

      </nav>

    </div>
  )
}

export default Sidebar