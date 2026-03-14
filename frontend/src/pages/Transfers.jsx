function Transfers() {
  return (
    <div>

      <h1>Internal Transfers</h1>

      <button className="add-btn">Create Transfer</button>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>From</th>
            <th>To</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Steel Rod</td>
            <td>Main Warehouse</td>
            <td>Rack A</td>
            <td>20</td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}

export default Transfers