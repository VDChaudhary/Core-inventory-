function Deliveries() {
  return (
    <div>

      <h1>Delivery Orders</h1>

      <button className="add-btn">Create Delivery</button>

      <table>

        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>XYZ Furniture</td>
            <td>Chair</td>
            <td>10</td>
            <td>Ready</td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}

export default Deliveries