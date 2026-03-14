function Products() {
  return (
    <div>

      <h1>Products</h1>

      <button className="add-btn">Add Product</button>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Steel Rod</td>
            <td>ST001</td>
            <td>Raw Material</td>
            <td>100</td>
          </tr>

          <tr>
            <td>Chair</td>
            <td>CH002</td>
            <td>Furniture</td>
            <td>40</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Products;