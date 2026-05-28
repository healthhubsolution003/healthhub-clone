import React, { useState } from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    category: "Feminine Hygiene Care",
    desc: "Premium feminine hygiene and wellness essentials.",

    subproducts: [
      {
        name: "Disposable Period Panty",
      },

      {
        name: "Sanitary Pads Ultra Soft XL with Wings",
      },

      {
        name: "Panty Liners",
        sizes: ["155mm", "185mm"],
      },

      {
        name: "Menstrual Cup",
        sizes: ["Small", "Medium", "Large"],
        colors: ["Pink", "Purple"],
      },

      {
        name: "Intimate Wash Natural Sulfate Free",
      },

      {
        name: "Period Relax & Relief Cream",
      },

      {
        name: "Pregnancy Test Kit",
      },
    ],
  },

  {
    id: 2,
    category: "Baby Care",
    desc: "Dermatologically safe baby hygiene products.",

    subproducts: [
      {
        name: "Baby Diapers Pant Style",
        sizes: ["NB", "S", "M", "L", "XL"],
      },

      {
        name: "Baby Wipes",
        variants: [
          "Regular 99% Water Based",
          "Honey",
        ],
      },
    ],
  },

  {
    id: 3,
    category: "Adult Incontinence",
    desc: "Comfort-focused adult care and protection solutions.",

    subproducts: [
      {
        name: "Adult Pant Diaper Standard",
        sizes: ["M", "L", "XL"],
      },

      {
        name: "Adult Pant Diaper Premium",
        sizes: ["M", "L", "XL"],
      },

      {
        name: "Adult Tape Diaper Premium",
        sizes: ["M", "L", "XL"],
      },

      {
        name: "Underpad Sheet",
        variants: [
          "Regular",
          "With Sticking Release Tape",
        ],
      },
    ],
  },

  {
    id: 4,
    category: "Women's Wellness",
    desc: "Daily wellness gummies and nutrition support.",

    subproducts: [
      {
        name: "UTI Defence Gummies",
      },

      {
        name: "Iron Gummies",
      },

      {
        name: "Calcium & Vitamin-D Gummies",
      },

      {
        name: "Multivitamin & Minerals Gummies",
      },
    ],
  },

  {
    id: 5,
    category: "Medical Disposables / Surgical",
    desc: "Hospital-grade disposable and surgical products.",

    subproducts: [
      {
        name: "Au-Fix Infusion Set",
        variants: [
          "Classic",
          "Ultra with Air Vent",
        ],
      },

      {
        name: "Au-Safe Disposable Syringes",
        sizes: ["2ml", "3ml", "5ml", "10ml"],
      },

      {
        name: "Au-Flon IV Cannula",
        sizes: [
          "18G",
          "20G",
          "22G",
          "24G",
          "26G",
        ],
      },

      {
        name: "Scalp Vein Set",
        sizes: ["22G", "23G", "24G"],
      },

      {
        name: "Urine Bag",
        variants: [
          "Classic",
          "Premium",
          "Superior",
          "With Urometer",
        ],
      },

      {
        name: "2-Way Foley Balloon Catheter",
        sizes: ["6FR to 20FR"],
      },

      {
        name: "Oxygen Mask",
      },

      {
        name: "Nebulizer Mask",
      },

      {
        name: "Nasal Cannula",
      },

      {
        name: "High Oxygen Concentration Mask",
      },

      {
        name: "Au-Care Surgical Gloves",
        sizes: ['6.5"', '7"', '7.5"'],
      },

      {
        name: "Au-Pore Microporous Paper Tape",
        sizes: ["5.1m", "9.1m"],
      },

      {
        name: "Au-Plast Elastic Adhesive Bandage",
      },
    ],
  },
];

const categories = [
  "All",
  ...new Set(products.map((p) => p.category)),
];

const Products = () => {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const [viewMode, setViewMode] =
    useState("grid");

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const filtered = products.filter((p) => {

    const matchCat =
      activeCategory === "All" ||
      p.category === activeCategory;

    const query = searchQuery.toLowerCase();

    const matchSearch =
      searchQuery.trim() === "" ||

      p.category.toLowerCase().includes(query) ||

      p.desc.toLowerCase().includes(query) ||

      p.subproducts.some((item) =>
        item.name.toLowerCase().includes(query)
      );

    return matchCat && matchSearch;
  });

  return (
    <div className="products-page">

      <section className="products-hero">

        <p className="products-eyebrow">
          CATALOG
        </p>

        <h1 className="products-title">
          Our complete{" "}

          <span className="products-title-accent">
            healthcare product range
          </span>

        </h1>

        <p className="products-subtitle">
          Browse our extensive range of medical,
          surgical, orthopedic, rehabilitation and
          wellness products.
        </p>

      </section>

      <section className="products-controls">

        <div className="search-bar">

          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search categories or products..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
          />

          <div className="view-toggles">

            <button
              className={`view-btn ${
                viewMode === "grid"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setViewMode("grid")
              }
            >
              ⬜
            </button>

            <button
              className={`view-btn ${
                viewMode === "list"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setViewMode("list")
              }
            >
              ☰
            </button>

          </div>
        </div>

        <div className="category-pills">

          {categories.map((cat) => (

            <button
              key={cat}
              className={`pill ${
                activeCategory === cat
                  ? "pill-active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(cat)
              }
            >
              {cat}
            </button>

          ))}

        </div>
      </section>

      <section className="products-grid-section">

        <div
          className={`products-grid ${
            viewMode === "list"
              ? "products-list"
              : ""
          }`}
        >

          {filtered.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-card-img placeholder-card">

                <div className="placeholder-icon">
                  🏥
                </div>

              </div>

              <div className="product-card-body">

                <p className="product-category-name">
                  {product.category}
                </p>

                <p className="product-card-desc">
                  {product.desc}
                </p>

                <div className="product-card-footer">

                  <button
                    className="btn-view-details"
                    onClick={() =>
                      setSelectedProduct(product)
                    }
                  >
                    View Details →
                  </button>

                  <button
                    className="btn-quote-icon"
                    title="Request Quote"
                  >
                    💬
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {filtered.length === 0 && (

          <div className="no-results">
            No products found.
          </div>

        )}

      </section>

      {selectedProduct && (

        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedProduct(null)
          }
        >

          <div
            className="modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <h2>
                {selectedProduct.category}
              </h2>

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedProduct(null)
                }
              >
                ✕
              </button>

            </div>

            <div className="modal-products">

              {selectedProduct.subproducts.map(
                (item, index) => (

                  <div
                    className="modal-product-item"
                    key={index}
                  >

                    <h4>{item.name}</h4>

                    {item.sizes && (
                      <p>
                        <strong>Sizes:</strong>{" "}
                        {item.sizes.join(", ")}
                      </p>
                    )}

                    {item.colors && (
                      <p>
                        <strong>Colors:</strong>{" "}
                        {item.colors.join(", ")}
                      </p>
                    )}

                    {item.variants && (
                      <p>
                        <strong>Variants:</strong>{" "}
                        {item.variants.join(", ")}
                      </p>
                    )}

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Products;