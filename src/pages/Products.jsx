import { useState, useEffect } from "react";
import "./Products.css";
import QuoteModal from "../components/QuoteModal";

import physiotherapy from "../assets/physiotherapy.jpg";
import adultincontinence from "../assets/adultincontinence.png";

import walkingaids from "../assets/walkingaids.jpeg";
import sportgear from "../assets/sportgear.png";
import last from "../assets/last.png";
import hygiene from "../assets/hygiene.jpg";
import baby from "../assets/baby.jpg";
import fractureaids from "../assets/fractureaids.JPG";
import orthopedic from "../assets/orthopedic.jpg";
import surgical from "../assets/surgical.jpg";
import surgicaldressing from "../assets/surgicaldressing.JPG";
import woundcare from "../assets/woundcare&cotton.jpeg";

import sub1 from "../assets/1.1.jpg";
import sub2 from "../assets/1.2.jpg";
import sub3 from "../assets/1.3.jpeg";
import sub4 from "../assets/1.4.jpg";
import sub5 from "../assets/1.5.jpg";
import sub6 from "../assets/1.6.jpg";
import sub7 from "../assets/1.7.jpeg";

import sub21 from "../assets/2.1.jpg";
import sub22 from "../assets/2.2.jpeg";
import sub23 from "../assets/2.3.jpg";
import sub31 from "../assets/3.1.png";
import sub32 from "../assets/3.2.png";
import sub33 from "../assets/3.3.jpeg";
import sub34 from "../assets/3.4.jpg";
import sub35 from "../assets/3.5.jpg";
import sub51 from "../assets/5.1.jpeg";
import sub52 from "../assets/5.2.jpg";
import sub53 from "../assets/5.3.jpeg";
import sub54 from "../assets/5.4.jpg";
import sub55 from "../assets/5.5.jpg";
import sub56 from "../assets/5.6.jpg";
import sub57 from "../assets/5.7.jpeg";
import sub58 from "../assets/5.8.jpeg";
import sub59 from "../assets/5.9.jpg";
import sub510 from "../assets/5.10.png";
import sub511 from "../assets/5.11.jpeg";
import sub512 from "../assets/5.12.png";
import sub513 from "../assets/5.13.jpeg";
import sub61 from "../assets/6.1.png";
import sub62 from "../assets/6.2.png";
import sub63 from "../assets/6.3.jpg";
import sub64 from "../assets/6.4.png";
import sub65 from "../assets/6.5.png";
import sub66 from "../assets/6.6.png";
import sub67 from "../assets/6.7.jpg";
import sub68 from "../assets/6.8.jpeg";
import sub69 from "../assets/6.9.jpg";
import sub610 from "../assets/6.10.jpeg";
import sub611 from "../assets/6.11.png";
import sub612 from "../assets/6.12.png";
import sub71 from "../assets/7.1.png";
import sub72 from "../assets/7.2.png";
import sub73 from "../assets/7.3.png";
import sub74 from "../assets/7.4.png";
import sub75 from "../assets/7.5.png";
import sub76 from "../assets/7.6.png";
import sub77 from "../assets/7.7.png";
import sub78 from "../assets/7.8.png";
import sub79 from "../assets/7.9.png";
import sub710 from "../assets/7.10.png";
import sub711 from "../assets/7.11.png";
import sub712 from "../assets/7.12.png";
import sub713 from "../assets/7.13.png";
import sub714 from "../assets/7.14.png";
import sub715 from "../assets/7.15.png";
import sub716 from "../assets/7.16.png";
import sub717 from "../assets/7.17.png";
import sub718 from "../assets/7.18.png";
import sub719 from "../assets/7.19.png";
import sub720 from "../assets/7.20.png";
import sub721 from "../assets/7.21.png";
import sub722 from "../assets/7.22.png";
import sub723 from "../assets/7.23.png";
import sub724 from "../assets/7.24.png";
import sub725 from "../assets/7.25.png";
import sub726 from "../assets/7.26.png";
import sub727 from "../assets/7.27.png";
import sub728 from "../assets/7.28.png";
import sub729 from "../assets/7.29.png";
import sub730 from "../assets/7.30.png";
import sub81 from "../assets/8.1.png";
import sub82 from "../assets/8.2.png";
import sub83 from "../assets/8.3.png";
import sub84 from "../assets/8.4.png";
import sub85 from "../assets/8.5.png";
import sub86 from "../assets/8.6.png";
import sub87 from "../assets/8.7.png";
import sub88 from "../assets/8.8.png";
import sub89 from "../assets/8.9.png";
import sub810 from "../assets/8.10.png";
import sub811 from "../assets/8.11.png";
import sub812 from "../assets/8.12.png";
import sub813 from "../assets/8.13.png";
import sub814 from "../assets/8.14.png";
import sub815 from "../assets/8.15.png";
import sub91 from "../assets/9.1.png";
import sub92 from "../assets/9.2.png";
import sub93 from "../assets/9.3.png";
import sub94 from "../assets/9.4.png";
import sub95 from "../assets/9.5.png";
import sub96 from "../assets/9.6.png";
import sub97 from "../assets/9.7.png";
import sub98 from "../assets/9.8.png";
import sub99 from "../assets/9.9.png";
import sub910 from "../assets/9.10.png";
import sub911 from "../assets/9.11.png";
import sub912 from "../assets/9.12.png";
import sub913 from "../assets/9.13.png";
import sub914 from "../assets/9.14.png";
import sub915 from "../assets/9.15.png";
import sub916 from "../assets/9.16.png";
import sub917 from "../assets/9.17.png";
import sub101 from "../assets/10.1.png";
import sub102 from "../assets/10.2.png";
import sub103 from "../assets/10.3.png";
import sub104 from "../assets/10.4.png";
import sub105 from "../assets/10.5.png";
import sub106 from "../assets/10.6.png";
import sub107 from "../assets/10.7.png";
import sub108 from "../assets/10.8.png";
import sub109 from "../assets/10.9.png";
import sub1010 from "../assets/10.10.png";
import sub1011 from "../assets/10.11.png";
import sub1012 from "../assets/10.12.png";
import sub1013 from "../assets/10.13.png";
import sub1014 from "../assets/10.14.png";
import sub1015 from "../assets/10.15.png";
import sub111 from "../assets/11.1.png";
import sub112 from "../assets/11.2.png";
import sub113 from "../assets/11.3.png";
import sub114 from "../assets/11.4.png";
import sub115 from "../assets/11.5.png";
import sub116 from "../assets/11.6.png";
import sub117 from "../assets/11.7.png";
import sub118 from "../assets/11.8.png";
import sub119 from "../assets/11.9.png";
import sub1110 from "../assets/11.10.png";
import sub1111 from "../assets/11.11.png";
import sub1112 from "../assets/11.12.png";
import sub1113 from "../assets/11.13.png";
import sub1114 from "../assets/11.14.png";
import sub121 from "../assets/12.1.png";
import sub122 from "../assets/12.2.png";
import sub123 from "../assets/12.3.png";
import sub124 from "../assets/12.4.png";
import sub125 from "../assets/12.5.png";
import sub126 from "../assets/12.6.png";
import sub127 from "../assets/12.7.png";
import sub128 from "../assets/12.8.png";
import sub131 from "../assets/13.1.png";
import sub132 from "../assets/13.2.png";
import sub133 from "../assets/13.3.png";
import sub134 from "../assets/13.4.png";
import sub135 from "../assets/13.5.png";
import sub136 from "../assets/13.6.png";
import sub137 from "../assets/13.7.png";
import sub138 from "../assets/13.8.png";
import sub139 from "../assets/13.9.png";
import sub1310 from "../assets/13.10.png";
import sub1311 from "../assets/13.11.png";
import sub1312 from "../assets/13.12.png";
import sub1313 from "../assets/13.13.png";
import sub1314 from "../assets/13.14.png";
import sub1315 from "../assets/13.15.png";
import sub1316 from "../assets/13.16.png";
import sub1317 from "../assets/13.17.png";
import sub1318 from "../assets/13.18.png";
import sub1319 from "../assets/13.19.png";
import sub1320 from "../assets/13.20.png";
import sub141 from "../assets/14.1.png";
import sub142 from "../assets/14.2.png";
import sub143 from "../assets/14.3.png";
import sub144 from "../assets/14.4.png";
import sub145 from "../assets/14.5.png";
import sub146 from "../assets/14.6.png";
import sub147 from "../assets/14.7.png";
import sub148 from "../assets/14.8.png";
import sub149 from "../assets/14.9.png";
import sub1410 from "../assets/14.10.png";
import sub1411 from "../assets/14.11.png";
import sub1412 from "../assets/14.12.png";
import sub1413 from "../assets/14.13.png";
import sub1414 from "../assets/14.14.png";
import sub1415 from "../assets/14.15.png";
import sub1416 from "../assets/14.16.png";
import sub151 from "../assets/15.1.png";
import sub152 from "../assets/15.2.png";
import sub153 from "../assets/15.3.png";
import sub154 from "../assets/15.4.png";
import sub155 from "../assets/15.5.png";
import sub156 from "../assets/15.6.png";
import sub157 from "../assets/15.7.png";
import sub158 from "../assets/15.8.png";
import sub159 from "../assets/15.9.png";
import sub1510 from "../assets/15.10.png";
import sub1511 from "../assets/15.11.png";
import sub1512 from "../assets/15.12.png";
import sub1513 from "../assets/15.13.png";
import sub1514 from "../assets/15.14.png";
import sub1515 from "../assets/15.15.png";
import sub1516 from "../assets/15.16.png";


import sub171 from "../assets/17.1.png";
import sub172 from "../assets/17.2.png";
import sub173 from "../assets/17.3.png";



import sub201 from "../assets/20.1.png";
import sub202 from "../assets/20.2.png";
import sub203 from "../assets/20.3.png";
import sub204 from "../assets/20.4.png";
import sub205 from "../assets/20.5.png";
import sub206 from "../assets/20.6.png";
import sub207 from "../assets/20.7.png";
import sub208 from "../assets/20.8.png";
import sub209 from "../assets/20.9.png";
import sub2010 from "../assets/20.10.png";
import sub2011 from "../assets/20.11.png";
import sub2012 from "../assets/20.12.png";
import sub2013 from "../assets/20.13.png";
import sub2014 from "../assets/20.14.png";
import sub2015 from "../assets/20.15.png";
import sub2016 from "../assets/20.16.png";
import sub2017 from "../assets/20.17.png";
import sub2018 from "../assets/20.18.png";
import sub2019 from "../assets/20.19.png";
import sub2020 from "../assets/20.20.png";
import sub2021 from "../assets/20.21.png";
import sub2022 from "../assets/20.22.png";
import sub2023 from "../assets/20.23.png";
import sub2024 from "../assets/20.24.png";
import sub2025 from "../assets/20.25.png";
import sub2026 from "../assets/20.26.png";
import sub2027 from "../assets/20.27.png";
import sub2028 from "../assets/20.28.png";
import sub2029 from "../assets/20.29.png";
import sub2030 from "../assets/20.30.png";
import sub2031 from "../assets/20.31.png";
import sub2032 from "../assets/20.32.png";
import sub211 from "../assets/21.1.png";
import sub212 from "../assets/21.2.png";
import sub213 from "../assets/21.3.png";
import sub214 from "../assets/21.4.png";
import sub215 from "../assets/21.5.png";
import sub216 from "../assets/21.6.png";
import sub217 from "../assets/21.7.png";
import sub218 from "../assets/21.8.png";
import sub219 from "../assets/21.9.png";
import sub2110 from "../assets/21.10.png";
import sub2111 from "../assets/21.11.png";
import sub2112 from "../assets/21.12.png";
import sub2113 from "../assets/21.13.png";
import sub2114 from "../assets/21.14.png";
import sub2115 from "../assets/21.15.png";
import sub2116 from "../assets/21.16.png";
import sub2117 from "../assets/21.17.png";
import sub2118 from "../assets/21.18.png";

// ─── Local image map: category name → { cardImage, subproductImages[] } ───────
// This is the KEY to keeping local images while data comes from MongoDB.
// When MongoDB returns a product, we look up its category name here to get images.
const LOCAL_IMAGE_MAP = {
  "Feminine Hygiene Care": {
    cardImage: hygiene,
    subImages: [sub1, sub2, sub3, sub4, sub5, sub6, sub7],
  },
  "Baby Care": {
    cardImage: baby,
    subImages: [sub21, sub22, sub23],
  },
  "Adult Incontinence": {
    cardImage: adultincontinence,
    subImages: [sub31, sub32, sub33, sub34, sub35],
  },
  
  "Medical Disposables / Surgical": {
    cardImage: surgical,
    subImages: [sub51, sub52, sub53, sub54, sub55, sub56, sub57, sub58, sub511],
  },
  "Wound Care & Cotton": {
    cardImage: woundcare,
    subImages: [sub61, sub62, sub64, sub65, sub66, sub67, sub68, sub69, sub610, sub611, sub612],
  },
  "Orthopaedic Supports & Braces": {
    cardImage: orthopedic,
    subImages: [sub71, sub72, sub73, sub74, sub75, sub76, sub77, sub78, sub79, sub710, sub711, sub712, sub713, sub714, sub715, sub716, sub717, sub718, sub719, sub720, sub721, sub722, sub723, sub724, sub725, sub726, sub727, sub728, sub729, sub730],
  },
  "Fracture Aids": {
    cardImage: fractureaids,
    subImages: [sub81, sub82, sub83, sub84, sub85, sub86, sub87, sub88, sub89, sub810, sub811, sub812, sub813, sub814, sub815],
  },
  "Knee Support / Braces": {
    cardImage: orthopedic,
    subImages: [sub91, sub92, sub93, sub94, sub95, sub96, sub97, sub98, sub99, sub910, sub911, sub912, sub913, sub914, sub915, sub916, sub917],
  },
  "Ankle Support / Braces": {
    cardImage: walkingaids,
    subImages: [sub101, sub102, sub103, sub104, sub105, sub106, sub107, sub108, sub109, sub1010, sub1011, sub1012, sub1013, sub1014, sub1015],
  },
  "Thigh & Calf Support / Varicose Vein Compression Stockings": {
    cardImage: orthopedic,
    subImages: [sub111, sub112, sub113, sub114, sub115, sub116, sub117, sub118, sub119, sub1110, sub1111, sub1112, sub1113, sub1114],
  },
  "Surgical Dressing": {
    cardImage: surgicaldressing,
subImages: [sub124, sub125, sub126, sub127, sub128],
  },
  "Sport Gear": {
    cardImage: sportgear,
    subImages: [sub131, sub132, sub133, sub134, sub135, sub136, sub137, sub138, sub139, sub1310, sub1311, sub1312, sub1313, sub1314, sub1315, sub1316, sub1317, sub1318, sub1319, sub1320],
  },
  "Junior / Paediatric Range": {
    cardImage: last,
    subImages: [sub141, sub142, sub143, sub144, sub145, sub146, sub147, sub148, sub149, sub1410, sub1411, sub1412, sub1413, sub1414, sub1415, sub1416],
  },
  "Wrist & Forearm Support / Splints": {
    cardImage: orthopedic,
    subImages: [sub151, sub152, sub153, sub154, sub155, sub156, sub157, sub158, sub159, sub1510, sub1511, sub1512, sub1513, sub1514, sub1515, sub1516],
  },
  "Traction Kits": {
    cardImage: orthopedic,
    subImages: [sub161, sub162, sub163, sub164, sub165, sub166, sub167, sub168, sub169, sub1610],
  },
  "Finger Splints": {
    cardImage: orthopedic,
    subImages: [sub171, sub172, sub173],
  },
  "Neoprene Support / Braces": {
    cardImage: orthopedic,
    subImages: [sub181, sub182, sub183, sub184, sub185, sub186, sub187, sub188, sub189, sub1810, sub1811, sub1812, sub1813, sub1814, sub1815, sub1816],
  },
 
  "Physiotherapy & Rehabilitation": {
    cardImage: physiotherapy,
    subImages: [sub201, sub202, sub203, sub204, sub205, sub206, sub207, sub208, sub209, sub2010, sub2011, sub2012, sub2013, sub2014, sub2015, sub2016, sub2017, sub2018, sub2019, sub2020, sub2021, sub2022, sub2023, sub2024, sub2025, sub2026, sub2027, sub2028, sub2029, sub2030, sub2031, sub2032],
  },
  "Walking Aids & Mobility": {
    cardImage: walkingaids,
    subImages: [sub211, sub212, sub213, sub214, sub215, sub216, sub217, sub218, sub219, sub2110, sub2111, sub2112, sub2113, sub2114, sub2115, sub2116, sub2117, sub2118],
  },
};

const enrichProduct = (product) => {
  const catName = product.category?.name || product.category || "";
  const localData = LOCAL_IMAGE_MAP[catName] || {};
  const enrichedSubproducts = (product.subproducts || []).map((sub, i) => ({
    ...sub,
    image: localData.subImages?.[i] || null,
  }));
  return {
    ...product,
    cardImage: localData.cardImage || null,
    subproducts: enrichedSubproducts,
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
        {/* Loading state */}
        {loading && (
          <div className="loading-state">
            <div className="loading-spinner" />
            <p>Loading products...</p>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="error-state">
            <p>⚠️ {error}</p>
          </div>
        )}

        {/* Products grid */}
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
                    // Fallback: if admin added a URL image via admin panel
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
                      onClick={() => setModalProduct(product)}
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

      {/* ── Details Modal ─────────────────────────────────────────────────────── */}
      {modalProduct && (
        <div className="modal-overlay" onClick={() => setModalProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="modal-eyebrow">{getCategoryName(modalProduct)}</p>
                <h2>{modalProduct.name}</h2>
                <p className="modal-desc">
                  {modalProduct.description || modalProduct.desc}
                </p>
              </div>
              <button className="modal-close" onClick={() => setModalProduct(null)}>
                ✕
              </button>
            </div>

            <div className="modal-products">
              <h4 className="modal-products-heading">Products Included</h4>
              <ul className="modal-subproducts-list">
                {(modalProduct.subproducts || []).map((item, index) => (
                  <li key={index} className="modal-subproduct-item">
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
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ── Quote Modal ───────────────────────────────────────────────────────── */}
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
