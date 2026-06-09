import { useState, useEffect } from "react";

const API = "https://healthhub-backend-f9g1.onrender.com/api";

const CategoriesManager = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", image: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => { fetchCategories(); }, []);

  const fetchCategories = async () => {
    const res = await fetch(`${API}/categories`);
    const data = await res.json();
    setCategories(data);
  };

  const resetForm = () => {
    setForm({ name: "", description: "", image: "" });
    setEditId(null);
    setMessage("");
  };

  const handleSubmit = async () => {
    if (!form.name) return setMessage("Category name is required.");
    setLoading(true);
    try {
      const url = editId ? `${API}/categories/${editId}` : `${API}/categories`;
      const method = editId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage(editId ? "✅ Category updated!" : "✅ Category created!");
        resetForm();
        fetchCategories();
      } else {
        setMessage("❌ Failed. Please try again.");
      }
    } catch {
      setMessage("❌ Server error.");
    }
    setLoading(false);
  };

  const handleEdit = (cat) => {
    setEditId(cat._id);
    setForm({ name: cat.name, description: cat.description || "", image: cat.image || "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category? This may affect linked products.")) return;
    await fetch(`${API}/categories/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchCategories();
  };

  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0f2137", marginBottom: 24 }}>
        Categories Manager
      </h2>

      {/* Form */}
      <div style={cardStyle}>
        <h3 style={{ marginBottom: 16, color: "#0f2137" }}>
          {editId ? "✏️ Edit Category" : "Create New Category"}
        </h3>
        {message && (
          <div style={{
            padding: "10px 16px", borderRadius: 8, marginBottom: 16,
            background: message.includes("✅") ? "#f0fff4" : "#fff0f0",
            color: message.includes("✅") ? "#27ae60" : "#c0392b", fontSize: 14
          }}>{message}</div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input placeholder="Category Name *" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
          <input placeholder="Description" value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })} style={inputStyle} />
          <input placeholder="Image URL (optional)" value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })} style={inputStyle} />
          {form.image && (
            <img src={form.image} alt="preview"
              style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8 }} />
          )}
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={handleSubmit} disabled={loading} style={btnStyle}>
              {loading ? "Saving..." : editId ? "💾 Update Category" : "+ Create Category"}
            </button>
            {editId && (
              <button onClick={resetForm} style={cancelBtnStyle}>Cancel</button>
            )}
          </div>
        </div>
      </div>

      {/* List */}
      <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8fafc" }}>
              <th style={thStyle}>Image</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id} style={{ borderBottom: "1px solid #f0f0f0",
                background: editId === cat._id ? "#fffbea" : "white" }}>
                <td style={tdStyle}>
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name}
                      style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 6 }} />
                  ) : (
                    <div style={placeholderStyle}>🏥</div>
                  )}
                </td>
                <td style={{ ...tdStyle, fontWeight: 600 }}>{cat.name}</td>
                <td style={{ ...tdStyle, color: "#888" }}>{cat.description || "—"}</td>
                <td style={tdStyle}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => handleEdit(cat)} style={editBtnStyle}>Edit</button>
                    <button onClick={() => handleDelete(cat._id)} style={deleteBtnStyle}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {categories.length === 0 && (
          <div style={{ padding: 48, textAlign: "center", color: "#aaa" }}>
            No categories yet. Create one above!
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
  border: "none", borderRadius: 8, fontSize: 15,
  fontWeight: 600, cursor: "pointer"
};
const cancelBtnStyle = {
  background: "#f1f5f9", color: "#374151", padding: "13px 24px",
  border: "none", borderRadius: 8, fontSize: 15,
  fontWeight: 600, cursor: "pointer"
};
const editBtnStyle = {
  background: "#eff6ff", color: "#2563eb", border: "none",
  borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600
};
const deleteBtnStyle = {
  background: "#fff0f0", color: "#c0392b", border: "none",
  borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600
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

export default CategoriesManager;
