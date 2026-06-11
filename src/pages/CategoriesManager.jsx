import { useState, useEffect } from "react";

const API = "https://healthhub-backend-f9g1.onrender.com/api";

const CategoriesManager = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [expandedCat, setExpandedCat] = useState(null);

  // Category form
  const [catForm, setCatForm] = useState({ name: "", description: "", image: "" });
  const [editCatId, setEditCatId] = useState(null);
  const [catLoading, setCatLoading] = useState(false);
  const [catMessage, setCatMessage] = useState("");

  // Subproduct form
  const [subForm, setSubForm] = useState({ name: "", description: "", image: "" });
  const [editSubIndex, setEditSubIndex] = useState(null);
  const [subLoading, setSubLoading] = useState(false);

  useEffect(() => { fetchAll(); }, []);

  const fetchAll = async () => {
    const [catRes, prodRes] = await Promise.all([
      fetch(`${API}/categories`),
      fetch(`${API}/products`),
    ]);
    setCategories(await catRes.json());
    setProducts(await prodRes.json());
  };

  // Get the first product for a category (where subproducts are stored)
  const getProductForCategory = (catId) =>
    products.find((p) => String(p.category?._id || p.category) === String(catId));

  // ── Category CRUD ─────────────────────────────────────────────────────────────
  const resetCatForm = () => { setCatForm({ name: "", description: "", image: "" }); setEditCatId(null); setCatMessage(""); };

  const handleCatSubmit = async () => {
    if (!catForm.name) return setCatMessage("Category name is required.");
    setCatLoading(true);
    try {
      const url = editCatId ? `${API}/categories/${editCatId}` : `${API}/categories`;
      const res = await fetch(url, {
        method: editCatId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(catForm),
      });
      if (res.ok) { setCatMessage(editCatId ? "✅ Updated!" : "✅ Created!"); resetCatForm(); fetchAll(); }
      else setCatMessage("❌ Failed.");
    } catch { setCatMessage("❌ Server error."); }
    setCatLoading(false);
  };

  const handleCatEdit = (cat) => {
    setEditCatId(cat._id);
    setCatForm({ name: cat.name, description: cat.description || "", image: cat.image || "" });
    setExpandedCat(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCatDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    await fetch(`${API}/categories/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
    fetchAll();
  };

  // ── Subproduct CRUD ───────────────────────────────────────────────────────────
  const handleAddSubproduct = async (catId) => {
    if (!subForm.name) return;
    setSubLoading(true);
    const product = getProductForCategory(catId);
    if (!product) {
      // No product exists yet for this category — create one first
      const res = await fetch(`${API}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ name: categories.find(c => c._id === catId)?.name, category: catId, subproducts: [subForm] }),
      });
      if (res.ok) { setSubForm({ name: "", desc: "", image: "" }); setEditSubIndex(null); fetchAll(); }
    } else {
      const updatedSubs = editSubIndex !== null
        ? product.subproducts.map((s, i) => i === editSubIndex ? subForm : s)
        : [...(product.subproducts || []), subForm];
      await fetch(`${API}/products/${product._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...product, subproducts: updatedSubs, category: product.category?._id || product.category }),
      });
      setSubForm({ name: "", desc: "", image: "" });
      setEditSubIndex(null);
      fetchAll();
    }
    setSubLoading(false);
  };

  const handleDeleteSubproduct = async (catId, index) => {
    if (!window.confirm("Delete this subproduct?")) return;
    const product = getProductForCategory(catId);
    if (!product) return;
    const updatedSubs = product.subproducts.filter((_, i) => i !== index);
    await fetch(`${API}/products/${product._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...product, subproducts: updatedSubs, category: product.category?._id || product.category }),
    });
    fetchAll();
  };

  const handleEditSubproduct = (sub, index) => {
    setSubForm({ name: sub.name, description: sub.description || sub.desc || "", image: sub.image || "" });
    setEditSubIndex(index);
  };

  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0f2137", marginBottom: 24 }}>
        Categories & Products Manager
      </h2>

      {/* ── Category Form ── */}
      <div style={cardStyle}>
        <h3 style={{ marginBottom: 16, color: "#0f2137" }}>
          {editCatId ? "✏️ Edit Category" : "➕ Create New Category"}
        </h3>
        {catMessage && <div style={msgStyle(catMessage)}>{catMessage}</div>}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input placeholder="Category Name *" value={catForm.name}
            onChange={(e) => setCatForm({ ...catForm, name: e.target.value })} style={inputStyle} />
          <input placeholder="Description" value={catForm.description}
            onChange={(e) => setCatForm({ ...catForm, description: e.target.value })} style={inputStyle} />
          <input placeholder="Image URL (Cloudinary)" value={catForm.image}
            onChange={(e) => setCatForm({ ...catForm, image: e.target.value })} style={inputStyle} />
          {catForm.image && <img src={catForm.image} alt="preview" style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8 }} />}
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={handleCatSubmit} disabled={catLoading} style={btnStyle}>
              {catLoading ? "Saving..." : editCatId ? "💾 Update Category" : "+ Create Category"}
            </button>
            {editCatId && <button onClick={resetCatForm} style={cancelBtnStyle}>Cancel</button>}
          </div>
        </div>
      </div>

      {/* ── Categories List ── */}
      {categories.map((cat) => {
        const product = getProductForCategory(cat._id);
        const subproducts = product?.subproducts || [];
        const isExpanded = expandedCat === cat._id;

        return (
          <div key={cat._id} style={{ ...cardStyle, padding: 0, overflow: "hidden", marginBottom: 16 }}>
            {/* Category Row */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px",
              background: isExpanded ? "#f0fdf4" : "white",
              borderBottom: isExpanded ? "1px solid #bbf7d0" : "none", cursor: "pointer" }}
              onClick={() => { setExpandedCat(isExpanded ? null : cat._id); setSubForm({ name: "", desc: "", image: "" }); setEditSubIndex(null); }}>
              {cat.image
                ? <img src={cat.image} alt={cat.name} style={{ width: 56, height: 40, objectFit: "cover", borderRadius: 8, flexShrink: 0 }} />
                : <div style={{ ...placeholderStyle, flexShrink: 0 }}>🏥</div>}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#0f2137" }}>{cat.name}</div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{cat.description || "—"}</div>
              </div>
              <div style={{ fontSize: 12, color: "#16a34a", fontWeight: 600, marginRight: 8 }}>
                {subproducts.length} subproduct{subproducts.length !== 1 ? "s" : ""}
              </div>
              <div style={{ display: "flex", gap: 8 }} onClick={(e) => e.stopPropagation()}>
                <button onClick={() => handleCatEdit(cat)} style={editBtnStyle}>Edit</button>
                <button onClick={() => handleCatDelete(cat._id)} style={deleteBtnStyle}>Delete</button>
              </div>
              <span style={{ fontSize: 18, color: "#16a34a" }}>{isExpanded ? "▲" : "▼"}</span>
            </div>

            {/* Expanded: Subproducts directly */}
            {isExpanded && (
              <div style={{ padding: "16px 20px", background: "#f8fffe" }}>

                {/* Subproduct Form */}
                <div style={{ background: "white", borderRadius: 10, padding: 16, marginBottom: 16, border: "1px solid #e8edf2" }}>
                  <h4 style={{ marginBottom: 12, color: "#0f2137", fontSize: 14 }}>
                    {editSubIndex !== null ? "✏️ Edit Subproduct" : "➕ Add Subproduct"}
                  </h4>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <input placeholder="Subproduct name *" value={subForm.name}
                      onChange={(e) => setSubForm({ ...subForm, name: e.target.value })}
                      style={{ ...inputStyle, flex: 1, minWidth: 160 }} />
                    <textarea placeholder="Description (optional) — press Enter for each new point"
  value={subForm.desc}
  onChange={(e) => setSubForm({ ...subForm, desc: e.target.value })}
  style={{ ...inputStyle, flex: 1, minWidth: 160, height: 80, resize: "vertical" }} />
                    <input placeholder="Image URL (Cloudinary)" value={subForm.image}
                      onChange={(e) => setSubForm({ ...subForm, image: e.target.value })}
                      style={{ ...inputStyle, flex: 1, minWidth: 160 }} />
                    <button onClick={() => handleAddSubproduct(cat._id)} disabled={subLoading}
                      style={{ ...btnStyle, padding: "12px 20px", fontSize: 14 }}>
                      {subLoading ? "..." : editSubIndex !== null ? "💾 Update" : "+ Add"}
                    </button>
                    {editSubIndex !== null && (
                      <button onClick={() => { setSubForm({ name: "", desc: "", image: "" }); setEditSubIndex(null); }}
                        style={{ ...cancelBtnStyle, padding: "12px 16px", fontSize: 14 }}>Cancel</button>
                    )}
                  </div>
                  {subForm.image && <img src={subForm.image} alt="preview" style={{ width: 80, height: 56, objectFit: "cover", borderRadius: 6, marginTop: 10 }} />}
                </div>

                {/* Subproducts Table */}
                {subproducts.length === 0
                  ? <p style={{ color: "#aaa", fontSize: 13 }}>No subproducts yet. Add one above.</p>
                  : (
                    <table style={{ width: "100%", borderCollapse: "collapse", background: "white", borderRadius: 10, overflow: "hidden" }}>
                      <thead>
                        <tr style={{ background: "#f1f5f9" }}>
                          <th style={thStyle}>#</th>
                          <th style={thStyle}>Image</th>
                          <th style={thStyle}>Name</th>
                          <th style={thStyle}>Description</th>
                          <th style={thStyle}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subproducts.map((sub, i) => (
                          <tr key={i} style={{ borderBottom: "1px solid #f0f0f0", background: editSubIndex === i ? "#fffbea" : "white" }}>
                            <td style={{ ...tdStyle, color: "#888" }}>{i + 1}</td>
                            <td style={tdStyle}>
                              {sub.image
                                ? <img src={sub.image} alt={sub.name} style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 6 }} />
                                : <span style={{ color: "#aaa", fontSize: 12 }}>No image</span>}
                            </td>
                            <td style={{ ...tdStyle, fontWeight: 600 }}>{sub.name}</td>
                            <td style={{ ...tdStyle, color: "#888" }}>{sub.description || sub.desc || "—"}</td>
                            <td style={tdStyle}>
                              <div style={{ display: "flex", gap: 6 }}>
                                <button onClick={() => handleEditSubproduct(sub, i)} style={editBtnStyle}>Edit</button>
                                <button onClick={() => handleDeleteSubproduct(cat._id, i)} style={deleteBtnStyle}>Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const cardStyle = { background: "white", borderRadius: 12, padding: 24, marginBottom: 28, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" };
const inputStyle = { padding: "12px 16px", border: "1px solid #ddd", borderRadius: 8, fontSize: 15, outline: "none", fontFamily: "inherit" };
const btnStyle = { background: "#0f2137", color: "white", padding: "13px 24px", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" };
const cancelBtnStyle = { background: "#f1f5f9", color: "#374151", padding: "13px 24px", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" };
const editBtnStyle = { background: "#eff6ff", color: "#2563eb", border: "none", borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600 };
const deleteBtnStyle = { background: "#fff0f0", color: "#c0392b", border: "none", borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600 };
const thStyle = { padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "#888", textTransform: "uppercase", borderBottom: "1px solid #eee" };
const tdStyle = { padding: "12px 16px", fontSize: 14 };
const placeholderStyle = { width: 56, height: 40, background: "#f0f4f8", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 };
const msgStyle = (msg) => ({ padding: "10px 16px", borderRadius: 8, marginBottom: 12, background: msg.includes("✅") ? "#f0fff4" : "#fff0f0", color: msg.includes("✅") ? "#27ae60" : "#c0392b", fontSize: 14 });

export default CategoriesManager;
