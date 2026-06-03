import { useState, useEffect } from "react";

const ProductsManager = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "", description: "", category: "", image: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    const res = await fetch("https://healthhub-backend-f9g1.onrender.com/api/categories");
    const data = await res.json();
    setCategories(data);
  };

  const fetchProducts = async () => {
    const res = await fetch("https://healthhub-backend-f9g1.onrender.com/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleCreate = async () => {
    if (!form.name || !form.category) 
      return setMessage("Name and category are required.");
    setLoading(true);
    try {
      const res = await fetch("https://healthhub-backend-f9g1.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage("✅ Product created successfully!");
        setForm({ name: "", description: "", category: "", image: "" });
        fetchProducts();
      } else {
        setMessage("❌ Failed to create product.");
      }
    } catch {
      setMessage("❌ Server error.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await fetch(`https://healthhub-backend-f9g1.onrender.com/api/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProducts();
  };

  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0f2137", marginBottom: 24 }}>
        Products Manager
      </h2>

      {/* Create Product Form */}
      <div style={{
        background: "white", borderRadius: 12, padding: 24,
        marginBottom: 28, boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
      }}>
        <h3 style={{ marginBottom: 16, color: "#0f2137" }}>Add New Product</h3>
        {message && (
          <div style={{
            padding: "10px 16px", borderRadius: 8, marginBottom: 16,
            background: message.includes("✅") ? "#f0fff4" : "#fff0f0",
            color: message.includes("✅") ? "#27ae60" : "#c0392b",
            fontSize: 14
          }}>{message}</div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            placeholder="Product Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />
          <input
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            style={inputStyle}
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            style={inputStyle}
          >
            <option value="">Select Category *</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
          <input
            placeholder="Image URL (paste image link)"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            style={inputStyle}
          />
          {form.image && (
            <img src={form.image} alt="preview"
              style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8 }} />
          )}
          <button onClick={handleCreate} disabled={loading} style={btnStyle}>
            {loading ? "Creating..." : "+ Add Product"}
          </button>
        </div>
      </div>

      {/* Products List */}
      <div style={{
        background: "white", borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8fafc" }}>
              <th style={thStyle}>Image</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={tdStyle}>
                  {product.image ? (
                    <img src={product.image} alt={product.name}
                      style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 6 }} />
                  ) : (
                    <div style={{
                      width: 60, height: 40, background: "#f0f4f8",
                      borderRadius: 6, display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 20
                    }}>🏥</div>
                  )}
                </td>
                <td style={{ ...tdStyle, fontWeight: 600 }}>{product.name}</td>
                <td style={tdStyle}>{product.category?.name || "—"}</td>
                <td style={{ ...tdStyle, color: "#888" }}>{product.description || "—"}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleDelete(product._id)}
                    style={{
                      background: "#fff0f0", color: "#c0392b",
                      border: "none", borderRadius: 6,
                      padding: "6px 14px", cursor: "pointer", fontSize: 13
                    }}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <div style={{ padding: 48, textAlign: "center", color: "#aaa" }}>
            No products yet. Add one above!
          </div>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "12px 16px", border: "1px solid #ddd",
  borderRadius: 8, fontSize: 15, outline: "none", fontFamily: "inherit"
};

const btnStyle = {
  background: "#0f2137", color: "white", padding: 13,
  border: "none", borderRadius: 8, fontSize: 15,
  fontWeight: 600, cursor: "pointer", marginTop: 4
};

const thStyle = {
  padding: "14px 16px", textAlign: "left",
  fontSize: 12, fontWeight: 600, color: "#888",
  textTransform: "uppercase", borderBottom: "1px solid #eee"
};

const tdStyle = { padding: "14px 16px", fontSize: 14 };

export default ProductsManager;