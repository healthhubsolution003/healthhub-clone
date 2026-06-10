import { useState, useEffect } from "react";
import "./Products.css";
import QuoteModal from "../components/QuoteModal";



const enrichProduct = (product) => {
  return {
    ...product,
    cardImage: product.image || null,
    subproducts: (product.subproducts || []).map((sub) => ({
      ...sub,
      image: sub.image || null,
    })),
  };
};

// ─── Component ─────────────────────────────────────────────────────────────────
const Products = () => {
  const [products, setProducts]           = useState([]);
  const [categories, setCategories]       = useState(["All"]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery]     = useState("");
  const [viewMode, setViewMode]           = useState("grid");
  const [modalProduct, setModalProduct]   = useState(null);
  const [quoteProduct, setQuoteProduct]   = useState(null);
  const [selectedSubproduct, setSelectedSubproduct] = useState(null);
  const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);

  // ── Fetch products from MongoDB ──────────────────────────────────────────────
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
       const res = await fetch("https://healthhub-backend-f9g1.onrender.com/api/products");
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();

        // Enrich each product with local images
        const enriched = data.map(enrichProduct);
        setProducts(enriched);

        // Build category list from returned data
        const catNames = [...new Set(
          enriched.map((p) => p.category?.name || p.category || "")
        )].filter(Boolean);
        setCategories(["All", ...catNames]);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Could not load products. Please make sure the backend is running.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ── Filter logic ─────────────────────────────────────────────────────────────
  const getCategoryName = (p) => p.category?.name || p.category || "";
const addToCart = (item) => {
  setCart((prev) => {
    const existing = prev.find((c) => c.name === item.name);
    if (existing) {
      return prev.map((c) => c.name === item.name ? { ...c, qty: c.qty + 1 } : c);
    }
    return [...prev, { ...item, qty: 1 }];
  });
};

const openWhatsApp = (productName) => {
  const msg = `Hi, I'm interested in *${productName}*. Please share more details.`;
  window.open(`https://wa.me/918347480205?text=${encodeURIComponent(msg)}`, "_blank");
};

const checkoutWhatsApp = () => {
  const lines = cart.map((c) => `• ${c.name} (Qty: ${c.qty})`).join("\n");
  const msg = `Hi, I'd like to order the following products:\n\n${lines}\n\nPlease share more details.`;
  window.open(`https://wa.me/918347480205?text=${encodeURIComponent(msg)}`, "_blank");
};
  const filtered = products.filter((p) => {
    const catName = getCategoryName(p);
    const matchCat = activeCategory === "All" || catName === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      q === "" ||
      p.name?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      catName.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  // ── Render ───────────────────────────────────────────────────────────────────
  
return (
  <div className="products-page">
    {/* ── Full Screen Detail View ── */}
    {modalProduct ? (
      <div className="detail-view">
        <div className="detail-header">
          <button className="btn-back" onClick={() => setModalProduct(null)}>
            ← Back
          </button>
          <div className="detail-header-info">
            <p className="modal-eyebrow">{getCategoryName(modalProduct)}</p>
            <h2>{modalProduct.name}</h2>
            <p className="modal-desc">{modalProduct.description || modalProduct.desc}</p>
          </div>
        </div>

        <div className="detail-products">
          <h4 className="modal-products-heading">Products Included</h4>
          <ul className="modal-subproducts-list">
            {(modalProduct.subproducts || []).map((item, index) => (
             <li key={index} className="modal-subproduct-item" onClick={() => setSelectedSubproduct(item)}>
                  <div className="modal-subproduct-img-wrap">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`modal-subproduct-img ${item.contain ? "modal-subproduct-img-contain" : ""}`}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="modal-subproduct-emoji"
                    style={{ display: item.image ? "none" : "flex" }}
                  >
                    🏥
                  </div>
                </div>
                <p className="modal-subproduct-name">
                  {typeof item === "object" ? item.name : item}
                </p>
                {item.desc && (
                  <p className="modal-subproduct-desc">{item.desc}</p>
                )}

               <div className="subproduct-actions">
  {cart.find((c) => c.name === item.name) ? (
    <div className="qty-control" onClick={(e) => e.stopPropagation()}>
      <button onClick={() => setCart(prev => {
        const existing = prev.find(c => c.name === item.name);
        if (existing.qty === 1) return prev.filter(c => c.name !== item.name);
        return prev.map(c => c.name === item.name ? { ...c, qty: c.qty - 1 } : c);
      })}>−</button>
      <span>{cart.find((c) => c.name === item.name).qty}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  ) : (
    <button className="btn-add-bag" onClick={(e) => { e.stopPropagation(); addToCart(item); }}>
      + Add to Bag
    </button>
  )}
  <button className="btn-whatsapp" onClick={(e) => { e.stopPropagation(); openWhatsApp(item.name); }}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.135 1.527 5.882L.057 23.5l5.752-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.502-5.19-1.383l-.371-.22-3.814.999 1.018-3.714-.242-.383A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  </button>
</div>


              </li>
            ))}
          </ul>
          {selectedSubproduct && (
  <div className="subproduct-popup-overlay" onClick={() => setSelectedSubproduct(null)}>
    <div className="subproduct-popup" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setSelectedSubproduct(null)}>✕</button>
      <p className="modal-eyebrow">Product Details</p>
      <h3>{selectedSubproduct.name}</h3>
      <p className="modal-desc">{selectedSubproduct.desc || selectedSubproduct.description}</p>
    </div>
  </div>
)}

        </div>
      </div>
    ) : (
      <>
        <section className="products-hero">
          <p className="products-eyebrow">CATALOG</p>
          <h1 className="products-title">
            Our complete{" "}
            <span className="products-title-accent">healthcare product range</span>
          </h1>
          <p className="products-subtitle">
            Browse our extensive range of medical, surgical, orthopedic,
            rehabilitation and wellness products.
          </p>
        </section>

        <section className="products-controls">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search categories or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="view-toggles">
              <button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                ⬜
              </button>
              <button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
              >
                ☰
              </button>
            </div>
          </div>

          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pill ${activeCategory === cat ? "pill-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="products-grid-section">
          {loading && (
            <div className="loading-state">
              <div className="loading-spinner" />
              <p>Loading products...</p>
            </div>
          )}
          {error && !loading && (
            <div className="error-state">
              <p>⚠️ {error}</p>
            </div>
          )}
          {!loading && !error && (
            <div className={`products-grid ${viewMode === "list" ? "products-list" : ""}`}>
              {filtered.map((product) => (
                <div className="product-card" key={product._id}>
                  <div className="product-card-img placeholder-card">
                    {product.cardImage ? (
                      <img
                        src={product.cardImage}
                        alt={getCategoryName(product)}
                        className="product-image"
                      />
                    ) : product.image ? (
                      <img
                        src={product.image}
                        alt={getCategoryName(product)}
                        className="product-image"
                      />
                    ) : (
                      <div className="placeholder-icon">🏥</div>
                    )}
                  </div>
                  <div className="product-card-body">
                    <p className="product-category-name">
                      {getCategoryName(product)}
                    </p>
                    <p className="product-card-desc">
                      {product.description || product.desc}
                    </p>
                    <div className="product-card-footer">
                      <button
                        className="btn-view-details"
                        onClick={() => {
                          setModalProduct(product);
                          window.scrollTo(0, 0);
                        }}
                      >
                        View Details →
                      </button>
                      <button
                        className="btn-quote-icon"
                        onClick={() => setQuoteProduct(product)}
                      >
                        💬
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!loading && !error && filtered.length === 0 && (
            <div className="no-results">No products found.</div>
          )}
        </section>
      </>
    )}

{/* Floating Cart Button */}
{cart.length > 0 && (
  <button className="btn-cart-float" onClick={() => setShowCart(true)}>
    🛒 {cart.reduce((a, c) => a + c.qty, 0)}
  </button>
)}

{/* Cart Panel */}
{showCart && (
  <div className="cart-overlay" onClick={() => setShowCart(false)}>
    <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
      <div className="cart-header">
        <h3>Your Bag</h3>
        <button className="modal-close" onClick={() => setShowCart(false)}>✕</button>
      </div>
      <ul className="cart-list">
        {cart.map((c, i) => (
          <li key={i} className="cart-item">
            <span className="cart-item-name">{c.name}</span>
            <div className="cart-item-qty">
              <button onClick={() => setCart(prev => prev.map(x => x.name === c.name ? { ...x, qty: Math.max(1, x.qty - 1) } : x))}>−</button>
              <span>{c.qty}</span>
              <button onClick={() => setCart(prev => prev.map(x => x.name === c.name ? { ...x, qty: x.qty + 1 } : x))}>+</button>
              <button className="cart-item-remove" onClick={() => setCart(prev => prev.filter(x => x.name !== c.name))}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn-checkout" onClick={checkoutWhatsApp}>
        Checkout via WhatsApp 
      </button>
    </div>
  </div>
)}

    {quoteProduct && (
      <QuoteModal
        product={quoteProduct}
        onClose={() => setQuoteProduct(null)}
      />
    )}
  </div>
);
};

export default Products;