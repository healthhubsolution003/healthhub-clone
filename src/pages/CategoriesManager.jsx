import { useState, useEffect } from "react";

const CategoriesManager = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:5001/api/categories");
    const data = await res.json();
    setCategories(data);
  };

  const handleCreate = async () => {
    if (!name) return setMessage("Category name is required.");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, description, image: imageUrl }),
      });
      if (res.ok) {
        setMessage("✅ Category created successfully!");
        setName("");
        setDescription("");
        setImageUrl("");
        fetchCategories();
      } else {
        setMessage("❌ Failed to create category.");
      }
    } catch {
      setMessage("❌ Server error.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    await fetch(`http://localhost:5001/api/categories/${id}`, {
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

      {/* Create Category Form */}
      <div style={{
        background: "white", borderRadius: 12, padding: 24,
        marginBottom: 28, boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
      }}>
        <h3 style={{ marginBottom: 16, color: "#0f2137" }}>Create New Category</h3>
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
            placeholder="Category Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Image URL (paste image link)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={inputStyle}
          />
          {imageUrl && (
            <img src={imageUrl} alt="preview"
              style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8 }} />
          )}
          <button onClick={handleCreate} disabled={loading} style={btnStyle}>
            {loading ? "Creating..." : "+ Create Category"}
          </button>
        </div>
      </div>

      {/* Categories List */}
      <div style={{
        background: "white", borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden"
      }}>
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
              <tr key={cat._id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={tdStyle}>
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name}
                      style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 6 }} />
                  ) : (
                    <div style={{
                      width: 60, height: 40, background: "#f0f4f8",
                      borderRadius: 6, display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 20
                    }}>🏥</div>
                  )}
                </td>
                <td style={{ ...tdStyle, fontWeight: 600 }}>{cat.name}</td>
                <td style={{ ...tdStyle, color: "#888" }}>{cat.description || "—"}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleDelete(cat._id)}
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
        {categories.length === 0 && (
          <div style={{ padding: 48, textAlign: "center", color: "#aaa" }}>
            No categories yet. Create one above!
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

export default CategoriesManager;