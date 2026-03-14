function Warehouse() {
  return (
    <div>

      <h1>Warehouses</h1>

      <button className="add-btn">Add Warehouse</button>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Main Warehouse</td>
            <td>Building A</td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}

export default Warehouse