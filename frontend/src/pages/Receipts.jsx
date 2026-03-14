function Receipts() {
  return (
    <div>

      <h1>Receipts (Incoming Stock)</h1>

      <button className="add-btn">Create Receipt</button>

      <table>

        <thead>
          <tr>
            <th>Supplier</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>ABC Steel</td>
            <td>Steel Rod</td>
            <td>50</td>
            <td>Done</td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}

export default Receipts