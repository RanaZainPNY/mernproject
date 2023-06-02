import React, { useEffect, useState } from "react";
import axios from "axios";

const Producttable = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEdit = (product) => {
    console.log("Edit Clicked", product._id)
    setSelectedProduct(product);    
    setShowEditForm(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/product/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Product List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: "100px" }}
                  />
                </td>
                <td>
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button
                    className="bg-danger"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        {showEditForm && (
          <div className="modal">
            <div className="modal-content">
              <h2>Edit Product</h2>
              {/* Edit form */}
              <h1>Use Edit Form</h1>               
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Producttable;
