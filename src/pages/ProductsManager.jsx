import { useState, useEffect } from "react";

const API = "https://healthhub-backend-f9g1.onrender.com/api";

const ProductsManager = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", category: "", image: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Subproducts state
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [subForm, setSubForm] = useState({ name: "", desc: "" });
  const [subLoading, setSubLoading] = useState(false);
  const [editSubIndex, setEditSubIndex] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    const res = await fetch(`${API}/categories`);
    const data = await res.json();
    setCategories(data);
  };

  const fetchProducts = async () => {
    const res = await fetch(`${API}/products`);
    const data = await res.json();
    setProducts(data);
  };

  const resetForm = () => {
    setForm({ name: "", description: "", category: "", image: "" });
    setEditId(null);
    setMessage("");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.category) return setMessage("Name and category are required.");
    setLoading(true);
    try {
      const url = editId ? `${API}/products/${editId}` : `${API}/products`;
      const method = editId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage(editId ? "✅ Product updated!" : "✅ Product created!");
        resetForm();
        fetchProducts();
      } else {
        setMessage("❌ Failed. Please try again.");
      }
    } catch {
      setMessage("❌ Server error.");
    }
    setLoading(false);
  };

  const handleEdit = (product) => {
    setEditId(product._id);
    setForm({
      name: product.name,
      description: product.description || "",
      category: product.category?._id || product.category || "",
      image: product.image || "",
    });
    setExpandedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await fetch(`${API}/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProducts();
  };

  // ── Subproducts ──────────────────────────────────────────────────────────────

  const toggleExpand = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
    setSubForm({ name: "", desc: "" });
    setEditSubIndex(null);
  };

  const handleAddSubproduct = async (product) => {
    if (!subForm.name) return;
    setSubLoading(true);
    const updatedSubs = editSubIndex !== null
      ? product.subproducts.map((s, i) => i === editSubIndex ? subForm : s)
      : [...(product.subproducts || []), subForm];

    await fetch(`${API}/products/${product._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...product, subproducts: updatedSubs, category: product.category?._id || product.category }),
    });
    setSubForm({ name: "", desc: "" });
    setEditSubIndex(null);
    setSubLoading(false);
    fetchProducts();
  };

  const handleDeleteSubproduct = async (product, index) => {
    if (!window.confirm("Delete this subproduct?")) return;
    const updatedSubs = product.subproducts.filter((_, i) => i !== index);
    await fetch(`${API}/products/${product._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...product, subproducts: updatedSubs, category: product.category?._id || product.category }),
    });
    fetchProducts();
  };

  const handleEditSubproduct = (sub, index) => {
    setSubForm({ name: sub.name, desc: sub.desc || "" });
    setEditSubIndex(index);
  };

  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0f2137", marginBottom: 24 }}>
        Products Manager
      </h2>

      {/* Product Form */}
      <div style={cardStyle}>
        <h3 style={{ marginBottom: 16, color: "#0f2137" }}>
          {editId ? "✏️ Edit Product" : "Add New Product"}
        </h3>
        {message && (
          <div style={{
            padding: "10px 16px", borderRadius: 8, marginBottom: 16,
            background: message.includes("✅") ? "#f0fff4" : "#fff0f0",
            color: message.includes("✅") ? "#27ae60" : "#c0392b", fontSize: 14
          }}>{message}</div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input placeholder="Product Name *" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
          <input placeholder="Description" value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })} style={inputStyle} />
          <select value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })} style={inputStyle}>
            <option value="">Select Category *</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
          <input placeholder="Image URL (optional)" value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })} style={inputStyle} />
          {form.image && (
            <img src={form.image} alt="preview"
              style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8 }} />
          )}
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={handleSubmit} disabled={loading} style={btnStyle}>
              {loading ? "Saving..." : editId ? "💾 Update Product" : "+ Add Product"}
            </button>
            {editId && (
              <button onClick={resetForm} style={cancelBtnStyle}>Cancel</button>
            )}
          </div>
        </div>
      </div>

      {/* Products List */}
      <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8fafc" }}>
              <th style={thStyle}>Image</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Subproducts</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <>
                <tr key={product._id} style={{
                  borderBottom: expandedProduct === product._id ? "none" : "1px solid #f0f0f0",
                  background: editId === product._id ? "#fffbea" : "white"
                }}>
                  <td style={tdStyle}>
                    {product.image ? (
                      <img src={product.image} alt={product.name}
                        style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 6 }} />
                    ) : (
                      <div style={placeholderStyle}>🏥</div>
                    )}
                  </td>
                  <td style={{ ...tdStyle, fontWeight: 600 }}>{product.name}</td>
                  <td style={tdStyle}>{product.category?.name || "—"}</td>
                  <td style={{ ...tdStyle, color: "#888", maxWidth: 200 }}>{product.description || "—"}</td>
                  <td style={tdStyle}>
                    <button onClick={() => toggleExpand(product._id)} style={subBtnStyle}>
                      {expandedProduct === product._id ? "▲ Hide" : `▼ Subproducts (${product.subproducts?.length || 0})`}
                    </button>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => handleEdit(product)} style={editBtnStyle}>Edit</button>
                      <button onClick={() => handleDelete(product._id)} style={deleteBtnStyle}>Delete</button>
                    </div>
                  </td>
                </tr>

                {/* Subproducts Panel */}
                {expandedProduct === product._id && (
                  <tr key={`${product._id}-sub`}>
                    <td colSpan={6} style={{ padding: "0 16px 16px 16px", background: "#f8fafc", borderBottom: "1px solid #f0f0f0" }}>
                      <div style={{ padding: 16, background: "white", borderRadius: 10, border: "1px solid #e8edf2" }}>
                        <h4 style={{ marginBottom: 12, color: "#0f2137", fontSize: 15 }}>
                          📦 Subproducts for: {product.name}
                        </h4>

                        {/* Subproduct add/edit form */}
                        <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                          <input
                            placeholder="Subproduct name *"
                            value={subForm.name}
                            onChange={(e) => setSubForm({ ...subForm, name: e.target.value })}
                            style={{ ...inputStyle, flex: 1, minWidth: 200 }}
                          />
                          <input
                            placeholder="Short description (optional)"
                            value={subForm.desc}
                            onChange={(e) => setSubForm({ ...subForm, desc: e.target.value })}
                            style={{ ...inputStyle, flex: 1, minWidth: 200 }}
                          />
                          <button
                            onClick={() => handleAddSubproduct(product)}
                            disabled={subLoading}
                            style={{ ...btnStyle, padding: "12px 20px", fontSize: 14 }}
                          >
                            {subLoading ? "..." : editSubIndex !== null ? "💾 Update" : "+ Add"}
                          </button>
                          {editSubIndex !== null && (
                            <button onClick={() => { setSubForm({ name: "", desc: "" }); setEditSubIndex(null); }}
                              style={{ ...cancelBtnStyle, padding: "12px 16px", fontSize: 14 }}>
                              Cancel
                            </button>
                          )}
                        </div>

                        {/* Subproducts list */}
                        {(product.subproducts || []).length === 0 ? (
                          <p style={{ color: "#aaa", fontSize: 13 }}>No subproducts yet. Add one above.</p>
                        ) : (
                          <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                              <tr style={{ background: "#f1f5f9" }}>
                                <th style={{ ...thStyle, fontSize: 11 }}>#</th>
                                <th style={{ ...thStyle, fontSize: 11 }}>Name</th>
                                <th style={{ ...thStyle, fontSize: 11 }}>Description</th>
                                <th style={{ ...thStyle, fontSize: 11 }}>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {product.subproducts.map((sub, i) => (
                                <tr key={i} style={{ borderBottom: "1px solid #f0f0f0",
                                  background: editSubIndex === i ? "#fffbea" : "white" }}>
                                  <td style={{ ...tdStyle, color: "#888", fontSize: 13 }}>{i + 1}</td>
                                  <td style={{ ...tdStyle, fontWeight: 600, fontSize: 13 }}>{sub.name}</td>
                                  <td style={{ ...tdStyle, color: "#888", fontSize: 13 }}>{sub.desc || "—"}</td>
                                  <td style={tdStyle}>
                                    <div style={{ display: "flex", gap: 6 }}>
                                      <button onClick={() => handleEditSubproduct(sub, i)} style={{ ...editBtnStyle, fontSize: 12, padding: "4px 10px" }}>Edit</button>
                                      <button onClick={() => handleDeleteSubproduct(product, i)} style={{ ...deleteBtnStyle, fontSize: 12, padding: "4px 10px" }}>Delete</button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </>
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

const cardStyle = {
  background: "white", borderRadius: 12, padding: 24,
  marginBottom: 28, boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
};
const inputStyle = {
  padding: "12px 16px", border: "1px solid #ddd",
  borderRadius: 8, fontSize: 15, outline: "none", fontFamily: "inherit"
};
const btnStyle = {
  background: "#0f2137", color: "white", padding: "13px 24px",
  border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer"
};
const cancelBtnStyle = {
  background: "#f1f5f9", color: "#374151", padding: "13px 24px",
  border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer"
};
const editBtnStyle = {
  background: "#eff6ff", color: "#2563eb", border: "none",
  borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600
};
const deleteBtnStyle = {
  background: "#fff0f0", color: "#c0392b", border: "none",
  borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600
};
const subBtnStyle = {
  background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0",
  borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600
};
const thStyle = {
  padding: "14px 16px", textAlign: "left", fontSize: 12,
  fontWeight: 600, color: "#888", textTransform: "uppercase", borderBottom: "1px solid #eee"
};
const tdStyle = { padding: "14px 16px", fontSize: 14 };
const placeholderStyle = {
  width: 60, height: 40, background: "#f0f4f8", borderRadius: 6,
  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20
};

export default ProductsManager;
