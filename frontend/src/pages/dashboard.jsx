function Dashboard() {
  return (
    <div>

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Products</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Low Stock</h3>
          <p>8</p>
        </div>

        <div className="card">
          <h3>Pending Receipts</h3>
          <p>3</p>
        </div>

        <div className="card">
          <h3>Pending Deliveries</h3>
          <p>5</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;