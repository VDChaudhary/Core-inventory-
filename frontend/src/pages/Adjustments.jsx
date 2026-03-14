function Adjustments() {
  return (
    <div>

      <h1>Inventory Adjustments</h1>

      <button className="add-btn">New Adjustment</button>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>Location</th>
            <th>Counted Qty</th>
            <th>Difference</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Steel Rod</td>
            <td>Rack A</td>
            <td>97</td>
            <td>-3</td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}

export default Adjustments