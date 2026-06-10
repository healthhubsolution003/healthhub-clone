import { useState, useEffect } from "react";

const API = "https://healthhub-backend-f9g1.onrender.com/api";

const CategoriesManager = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Category form
  const [catForm, setCatForm] = useState({ name: "", description: "", image: "" });
  const [editCatId, setEditCatId] = useState(null);
  const [catLoading, setCatLoading] = useState(false);
  const [catMessage, setCatMessage] = useState("");

  // Product form
  const [expandedCat, setExpandedCat] = useState(null);
  const [prodForm, setProdForm] = useState({ name: "", description: "", image: "", category: "" });
  const [editProdId, setEditProdId] = useState(null);
  const [prodLoading, setProdLoading] = useState(false);
  const [prodMessage, setProdMessage] = useState("");

  // Subproduct form
  const [expandedProd, setExpandedProd] = useState(null);
  const [subForm, setSubForm] = useState({ name: "", desc: "", image: "" });
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
      if (res.ok) { setCatMessage(editCatId ? "✅ Category updated!" : "✅ Category created!"); resetCatForm(); fetchAll(); }
      else setCatMessage("❌ Failed. Please try again.");
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

  // ── Product CRUD ─────────────────────────────────────────────────────────────
  const resetProdForm = (catId) => { setProdForm({ name: "", description: "", image: "", category: catId || "" }); setEditProdId(null); setProdMessage(""); };

  const handleProdSubmit = async (catId) => {
    if (!prodForm.name) return setProdMessage("Product name is required.");
    setProdLoading(true);
    try {
      const url = editProdId ? `${API}/products/${editProdId}` : `${API}/products`;
      const res = await fetch(url, {
        method: editProdId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...prodForm, category: catId }),
      });
      if (res.ok) { setProdMessage(editProdId ? "✅ Updated!" : "✅ Created!"); resetProdForm(catId); fetchAll(); }
      else setProdMessage("❌ Failed.");
    } catch { setProdMessage("❌ Server error."); }
    setProdLoading(false);
  };

  const handleProdEdit = (prod, catId) => {
    setEditProdId(prod._id);
    setProdForm({ name: prod.name, description: prod.description || "", image: prod.image || "", category: catId });
    setExpandedProd(null);
  };

  const handleProdDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await fetch(`${API}/products/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
    fetchAll();
  };

  // ── Subproduct CRUD ───────────────────────────────────────────────────────────
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
    setSubForm({ name: "", desc: "", image: "" });
    setEditSubIndex(null);
    setSubLoading(false);
    fetchAll();
  };

  const handleDeleteSubproduct = async (product, index) => {
    if (!window.confirm("Delete this subproduct?")) return;
    const updatedSubs = product.subproducts.filter((_, i) => i !== index);
    await fetch(`${API}/products/${product._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...product, subproducts: updatedSubs, category: product.category?._id || product.category }),
    });
    fetchAll();
  };

  const handleEditSubproduct = (sub, index) => {
    setSubForm({ name: sub.name, desc: sub.desc || "", image: sub.image || "" });
    setEditSubIndex(index);
  };

  const getProductsForCategory = (catId) => products.filter((p) => (p.category?._id || p.category) === catId);

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
        const catProducts = getProductsForCategory(cat._id);
        const isExpanded = expandedCat === cat._id;

        return (
          <div key={cat._id} style={{ ...cardStyle, padding: 0, overflow: "hidden", marginBottom: 16 }}>
            {/* Category Row */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px",
              background: isExpanded ? "#f0fdf4" : "white", borderBottom: isExpanded ? "1px solid #bbf7d0" : "none", cursor: "pointer" }}
              onClick={() => { setExpandedCat(isExpanded ? null : cat._id); resetProdForm(cat._id); }}>
              {cat.image
                ? <img src={cat.image} alt={cat.name} style={{ width: 56, height: 40, objectFit: "cover", borderRadius: 8, flexShrink: 0 }} />
                : <div style={{ ...placeholderStyle, flexShrink: 0 }}>🏥</div>}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#0f2137" }}>{cat.name}</div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{cat.description || "—"}</div>
              </div>
              <div style={{ fontSize: 12, color: "#16a34a", fontWeight: 600, marginRight: 8 }}>
                {catProducts.length} product{catProducts.length !== 1 ? "s" : ""}
              </div>
              <div style={{ display: "flex", gap: 8 }} onClick={(e) => e.stopPropagation()}>
                <button onClick={() => handleCatEdit(cat)} style={editBtnStyle}>Edit</button>
                <button onClick={() => handleCatDelete(cat._id)} style={deleteBtnStyle}>Delete</button>
              </div>
              <span style={{ fontSize: 18, color: "#16a34a" }}>{isExpanded ? "▲" : "▼"}</span>
            </div>

            {/* Expanded: Products */}
            {isExpanded && (
              <div style={{ padding: "16px 20px", background: "#f8fffe" }}>

                {/* Add/Edit Product Form */}
                <div style={{ background: "white", borderRadius: 10, padding: 16, marginBottom: 16, border: "1px solid #e8edf2" }}>
                  <h4 style={{ marginBottom: 12, color: "#0f2137", fontSize: 14 }}>
                    {editProdId ? "✏️ Edit Product" : "➕ Add Product to this Category"}
                  </h4>
                  {prodMessage && <div style={msgStyle(prodMessage)}>{prodMessage}</div>}
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <input placeholder="Product Name *" value={prodForm.name}
                      onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })}
                      style={{ ...inputStyle, flex: 1, minWidth: 200 }} />
                    <input placeholder="Description" value={prodForm.description}
                      onChange={(e) => setProdForm({ ...prodForm, description: e.target.value })}
                      style={{ ...inputStyle, flex: 1, minWidth: 200 }} />
                    <input placeholder="Image URL (Cloudinary)" value={prodForm.image}
                      onChange={(e) => setProdForm({ ...prodForm, image: e.target.value })}
                      style={{ ...inputStyle, flex: 1, minWidth: 200 }} />
                    <button onClick={() => handleProdSubmit(cat._id)} disabled={prodLoading}
                      style={{ ...btnStyle, padding: "12px 20px", fontSize: 14 }}>
                      {prodLoading ? "..." : editProdId ? "💾 Update" : "+ Add Product"}
                    </button>
                    {editProdId && (
                      <button onClick={() => resetProdForm(cat._id)} style={{ ...cancelBtnStyle, padding: "12px 16px", fontSize: 14 }}>Cancel</button>
                    )}
                  </div>
                  {prodForm.image && <img src={prodForm.image} alt="preview" style={{ width: 80, height: 56, objectFit: "cover", borderRadius: 6, marginTop: 10 }} />}
                </div>

                {/* Products List */}
                {catProducts.length === 0
                  ? <p style={{ color: "#aaa", fontSize: 13, padding: "8px 0" }}>No products yet. Add one above.</p>
                  : catProducts.map((product) => {
                    const isProdExpanded = expandedProd === product._id;
                    return (
                      <div key={product._id} style={{ background: "white", borderRadius: 10, marginBottom: 12, border: "1px solid #e8edf2", overflow: "hidden" }}>
                        {/* Product Row */}
                        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
                          background: isProdExpanded ? "#eff6ff" : "white",
                          borderBottom: isProdExpanded ? "1px solid #bfdbfe" : "none", cursor: "pointer" }}
                          onClick={() => { setExpandedProd(isProdExpanded ? null : product._id); setSubForm({ name: "", desc: "", image: "" }); setEditSubIndex(null); }}>
                          {product.image
                            ? <img src={product.image} alt={product.name} style={{ width: 48, height: 36, objectFit: "cover", borderRadius: 6, flexShrink: 0 }} />
                            : <div style={{ width: 48, height: 36, background: "#f0f4f8", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🏥</div>}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600, fontSize: 14, color: "#0f2137" }}>{product.name}</div>
                            <div style={{ fontSize: 12, color: "#888" }}>{product.description || "—"}</div>
                          </div>
                          <div style={{ fontSize: 11, color: "#2563eb", fontWeight: 600, marginRight: 8 }}>
                            {product.subproducts?.length || 0} subproduct{(product.subproducts?.length || 0) !== 1 ? "s" : ""}
                          </div>
                          <div style={{ display: "flex", gap: 6 }} onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => { handleProdEdit(product, cat._id); setExpandedCat(cat._id); }}
                              style={{ ...editBtnStyle, fontSize: 11, padding: "4px 10px" }}>Edit</button>
                            <button onClick={() => handleProdDelete(product._id)}
                              style={{ ...deleteBtnStyle, fontSize: 11, padding: "4px 10px" }}>Delete</button>
                          </div>
                          <span style={{ fontSize: 14, color: "#2563eb" }}>{isProdExpanded ? "▲" : "▼"}</span>
                        </div>

                        {/* Subproducts Panel */}
                        {isProdExpanded && (
                          <div style={{ padding: "12px 16px", background: "#f8faff" }}>
                            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                              <input placeholder="Subproduct name *" value={subForm.name}
                                onChange={(e) => setSubForm({ ...subForm, name: e.target.value })}
                                style={{ ...inputStyle, flex: 1, minWidth: 160, fontSize: 13, padding: "8px 12px" }} />
                              <input placeholder="Description (optional)" value={subForm.desc}
                                onChange={(e) => setSubForm({ ...subForm, desc: e.target.value })}
                                style={{ ...inputStyle, flex: 1, minWidth: 160, fontSize: 13, padding: "8px 12px" }} />
                              <input placeholder="Image URL (Cloudinary)" value={subForm.image}
                                onChange={(e) => setSubForm({ ...subForm, image: e.target.value })}
                                style={{ ...inputStyle, flex: 1, minWidth: 160, fontSize: 13, padding: "8px 12px" }} />
                              <button onClick={() => handleAddSubproduct(product)} disabled={subLoading}
                                style={{ ...btnStyle, padding: "8px 16px", fontSize: 13 }}>
                                {subLoading ? "..." : editSubIndex !== null ? "💾 Update" : "+ Add"}
                              </button>
                              {editSubIndex !== null && (
                                <button onClick={() => { setSubForm({ name: "", desc: "", image: "" }); setEditSubIndex(null); }}
                                  style={{ ...cancelBtnStyle, padding: "8px 12px", fontSize: 13 }}>Cancel</button>
                              )}
                            </div>
                            {(product.subproducts || []).length === 0
                              ? <p style={{ color: "#aaa", fontSize: 12 }}>No subproducts yet.</p>
                              : (
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                  <thead>
                                    <tr style={{ background: "#e8f0fe" }}>
                                      <th style={{ ...thStyle, fontSize: 10 }}>#</th>
                                      <th style={{ ...thStyle, fontSize: 10 }}>Image</th>
                                      <th style={{ ...thStyle, fontSize: 10 }}>Name</th>
                                      <th style={{ ...thStyle, fontSize: 10 }}>Description</th>
                                      <th style={{ ...thStyle, fontSize: 10 }}>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {product.subproducts.map((sub, i) => (
                                      <tr key={i} style={{ borderBottom: "1px solid #e8edf2", background: editSubIndex === i ? "#fffbea" : "white" }}>
                                        <td style={{ ...tdStyle, fontSize: 12, color: "#888" }}>{i + 1}</td>
                                        <td style={tdStyle}>
                                          {sub.image
                                            ? <img src={sub.image} alt={sub.name} style={{ width: 36, height: 36, objectFit: "cover", borderRadius: 4 }} />
                                            : <span style={{ color: "#aaa", fontSize: 11 }}>No image</span>}
                                        </td>
                                        <td style={{ ...tdStyle, fontWeight: 600, fontSize: 12 }}>{sub.name}</td>
                                        <td style={{ ...tdStyle, color: "#888", fontSize: 12 }}>{sub.desc || "—"}</td>
                                        <td style={tdStyle}>
                                          <div style={{ display: "flex", gap: 4 }}>
                                            <button onClick={() => handleEditSubproduct(sub, i)}
                                              style={{ ...editBtnStyle, fontSize: 11, padding: "3px 8px" }}>Edit</button>
                                            <button onClick={() => handleDeleteSubproduct(product, i)}
                                              style={{ ...deleteBtnStyle, fontSize: 11, padding: "3px 8px" }}>Delete</button>
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
const thStyle = { padding: "10px 12px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "#888", textTransform: "uppercase", borderBottom: "1px solid #eee" };
const tdStyle = { padding: "10px 12px", fontSize: 13 };
const placeholderStyle = { width: 56, height: 40, background: "#f0f4f8", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 };
const msgStyle = (msg) => ({ padding: "10px 16px", borderRadius: 8, marginBottom: 12, background: msg.includes("✅") ? "#f0fff4" : "#fff0f0", color: msg.includes("✅") ? "#27ae60" : "#c0392b", fontSize: 14 });

export default CategoriesManager;
