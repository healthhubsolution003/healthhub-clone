import React, { useState } from "react";
import "./Products.css";
import "./Products.css";

import adultincontinence from "../assets/adultincontinence.png";
import womenswellness from "../assets/womenswellness.png";
import tractionkit from "../assets/tractionkit.png";
import walkingaids from "../assets/walkingaids.jpeg";
import sportgear from "../assets/sportgear.png";
import last from "../assets/last.png";
import hygiene from "../assets/hygiene.jpg";
import baby from "../assets/baby.jpg";
import fractureaids from "../assets/fractureaids.JPG";
import orthopedic from "../assets/orthopedic.jpg";
import physiotherapy from "../assets/physiotherapy.jpg";
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
import sub41 from "../assets/4.1.jpg";
import sub42 from "../assets/4.2.jpg";
import sub43 from "../assets/4.3.jpg";
import sub44 from "../assets/4.4.jpeg";
import sub21 from "../assets/2.1.jpg";
import sub22 from "../assets/2.2.jpg";
import sub23 from "../assets/2.3.jpg";
import sub31 from "../assets/3.1.png";
import sub32 from "../assets/3.2.png";
import sub33 from "../assets/3.3.jpg";
import sub34 from "../assets/3.4.jpg";
import sub35 from "../assets/3.5.jpg";

const products = [
 
  {
  id: 1,
  brand: "Dreamease",
  category: "Feminine Hygiene Care",
  image: hygiene,
  desc: "Premium feminine hygiene and wellness essentials.",
 subproducts: [
  { name: "Disposable Period Panty", image: sub1, desc: "Comfortable & leak-proof" },
  { name: "Sanitary Pads Ultra Soft XL with Wings", image: sub2, desc: "Ultra soft, XL with wings" },
  { name: "Panty Liners (155mm & 185mm)", image: sub3, desc: "Available in 155mm & 185mm" },
  { name: "Menstrual Cup (Small, Medium & Large)", image: sub4, desc: "Small, Medium & Large sizes" },
  { name: "Intimate Wash Natural Sulfate Free", image: sub5, desc: "Natural, sulfate free formula" },
  { name: "Period Relax & Relief Cream", image: sub6, desc: "Soothing relief cream" },
  { name: "Pregnancy Test Kit", image: sub7, desc: "Fast & accurate results" },
],
},


  {
    id: 2,
    brand: "Dreamease",
    category: "Baby Care",
    image: baby,
    desc: "Dermatologically safe baby hygiene products.",
    subproducts: [
  { name: "Baby Diapers Pant Style (NB, S, M, L & XL)", image: sub21, desc: "Soft & gentle on baby skin" },
  { name: "Baby Wipes Regular 99% Water Based", image: sub22, desc: "99% water based, hypoallergenic" },
  { name: "Baby Wipes Honey", image: sub23, desc: "Gentle honey formula" },
],
  },
  {
    id: 3,
    brand: "Dreamease",
    category: "Adult Incontinence",
    image: adultincontinence,
    desc: "Comfort-focused adult care and protection solutions.",
    subproducts: [
  { name: "Adult Pant Diaper Standard (M, L & XL)", image: sub31, desc: "Comfortable standard fit" },
  { name: "Adult Pant Diaper Premium (M, L & XL)", image: sub32, desc: "Premium protection & comfort" },
  { name: "Adult Tape Diaper Premium (M, L & XL)", image: sub33, desc: "Secure tape closure" },
  { name: "Underpad Sheet Regular", image: sub34, desc: "Absorbent regular underpad" },
  { name: "Underpad Sheet with Sticking Release Tape", image: sub35, desc: "With sticking release tape" },
],
  },

  {
  id: 4,
  brand: "Dreamease",
  category: "Women's Wellness",
  image: womenswellness,
  desc: "Daily wellness gummies and nutrition support.",
  subproducts: [
    { name: "UTI Defence Gummies", image: sub41, desc: "Urinary tract defence support" },
    { name: "Iron Gummies", image: sub42, desc: "Daily iron supplement" },
    { name: "Calcium & Vitamin-D Gummies", image: sub43, desc: "Bone strength support" },
    { name: "Multivitamin & Minerals Gummies", image: sub44, desc: "Complete daily nutrition" },
  ],
},


  {
    id: 5,
    brand: "Aurum Care",
    category: "Medical Disposables / Surgical",
    image: surgical,
    desc: "Hospital-grade disposable and surgical products.",
    subproducts: [
      "Au-Fix Infusion Set (Classic & Ultra)",
      "Au-Safe Disposable Syringes",
      "Au-Flon IV Cannula",
      "Scalp Vein Set",
      "Urine Bag (Classic, Premium, Superior & with Urometer)",
      "2-Way Foley Balloon Catheter",
      "Oxygen Mask",
      "Nebulizer Mask",
      "Nasal Cannula",
      "High Oxygen Concentration Mask",
      "Au-Care Surgical Gloves",
      "Au-Pore Microporous Paper Tape",
      "Au-Plast Elastic Adhesive Bandage",
    ],
  },
  {
    id: 6,
    brand: "Wellness Surgical / Kramson",
    category: "Wound Care & Cotton",
    image: woundcare,
    desc: "Cotton, gauze, bandages and wound care essentials.",
    subproducts: [
      "Absorbent Cotton (Wellness Surgical & Kramson)",
      "Zigzag Cotton",
      "Roller Bandage / Rolled Gauze",
      "Gauze Cloth / Bandage Than Roll",
      "Crepe Bandage (Standard & Premium)",
      "POP Bandage Kramson",
      "Gauze Swabs Sterile Kramson",
      "Elastic Adhesive Bandage Kramson",
      "Cannula Fixer Kramson",
      "Microporous Paper Tape Wellness Surgical",
    ],
  },
  {
    id: 7,
    brand: "Samson",
    category: "Orthopaedic Supports & Braces",
    image: orthopedic,
    desc: "Orthopaedic rehabilitation and support products.",
    subproducts: [
      "Cervical Orthosis Philadelphia",
      "Cervical Collar (Soft with Support, Soft Firm Density & Hard Adjustable)",
      "Contoured Lumbo Sacral Support",
      "Lumbo Sacral Belt",
      "Lumbo Corset",
      "Taylor's Brace",
      "Posture Corrector",
      "Abdominal Belt",
      "Hernia Belt",
      "Pelvic Binder",
      "Chest Binder",
      "Rib Belt",
      "Knee Brace Immobilizer",
      "Elastic Knee Support",
      "Knee Cap Hinged",
      "ROM Knee Brace",
      "Functional Knee Support",
      "Ankle Brace",
      "Foot Walker Boot",
      "Air Ankle Splint",
      "Shoulder Support",
      "Clavicle Brace",
      "Wrist Splint",
      "Thumb Spica Splint",
      "ROM Elbow Brace",
      "Compression Stockings",
      "Varicose Vein Stockings",
      "Abdominal Binder",
      "Hip Brace",
      "Foot Care Supports",
      "Finger Splints",
    ],
  },
  {
    id: 8,
    brand: "Samson",
    category: "Fracture Aids",
    image: fractureaids,
    desc: "Immobilization and fracture management products.",
    subproducts: [
      "Shoulder Immobilizer (Universal & Elastic)",
      "Shoulder Support",
      "Clavicle Brace",
      "Arm Sling Pouch (Baggy & Tropical)",
      "Arm Immobilizer Adjustable",
      "Cast Shoes",
      "Cast Cover (Arm & Leg)",
      "Shoulder Abduction Pillow",
      "Arm Sling Strap",
      "Humerus Brace",
      "Off-loading Shoes (Heel & Forefoot)",
    ],
  },
  {
    id: 9,
    brand: "Samson",
    category: "Traction Kits",
    image: tractionkit,
    desc: "Professional traction systems and accessories.",
    subproducts: [
      "Cervical Traction Head Halter",
      "Cervical Traction Kit (Sitting & Sleeping)",
      "Pelvic Traction Belt",
      "Pelvic Traction Kit",
      "Traction Pulley Bracket",
      "Traction Weight Bag",
      "Skin Traction Set PUF Liner",
      "Leg Traction Brace",
      "Ankle Traction Belt",
    ],
  },
  {
    id: 10,
    brand: "Samson",
    category: "Physiotherapy & Rehabilitation",
      image: physiotherapy,
    desc: "Recovery, rehabilitation and physiotherapy aids.",
    subproducts: [
      "Cervical Pillow",
      "Tailbone Support Coccyx Cushion",
      "Lumbo Back Rest",
      "Ring Seat Pillow",
      "Knee Rest Pillow",
      "Foot Rest Pillow",
      "Neck Corrector & Relaxer",
      "Weight Cuff",
      "Resistance Band",
      "Hot & Cold Pack",
      "Ice Bag",
      "Hand Gripper",
      "Wrist & Arm Exerciser",
      "Anti Burst Gym Ball",
      "Spirometer",
      "Nebuliser",
      "Heating Pad Ortho",
      "Ortho Heating Gel Bag Electric",
      "Air Mattress",
    ],
  },
  {
    id: 11,
    brand: "Samson",
    category: "Walking Aids & Mobility",
    image: walkingaids,
    desc: "Mobility assistance and rehabilitation equipment.",
    subproducts: [
      "Commode (Stool & Chair)",
      "Walking Stick (Standard, Foldable & Quadra)",
      "Elbow Crutch Adjustable",
      "Walker Invalid's (HD & Front Wheel HD)",
      "Axillary Crutch Pair",
      "Walking Stick Quadripod",
      "Wheelchair (Standard, with Commode & Electric)",
    ],
  },
  {
    id: 12,
    brand: "Samson",
    category: "Surgical Dressing",
      image: surgicaldressing,
    desc: "Professional surgical dressing products.",
    subproducts: [
      "SAM POP Plaster of Paris Bandage",
      "SAM PORE Microporous Paper Tape (5m & 9m)",
      "Kinesiology Therapeutic Tape",
      "SAM CREPE Cotton Crepe Bandage",
      "SAM NETT Stockinette",
      "SAM PLAST Elastic Adhesive Bandage",
      "SAM FIX Cannula Fixator",
      "CAST PAD Soft Roll",
    ],
  },
  {
    id: 13,
    brand: "Samson Sport",
    category: "Sport Gear",
     image: sportgear,
    desc: "Sports supports and gym protection products.",
    subproducts: [
      "Abdominal Support",
      "Lumbo Sacral Support",
      "Weight Lifting Belt",
      "Knee Support",
      "Wrist Wrap with Thumb Loop",
      "Tennis Elbow Support",
      "Ankle Support",
      "Shoulder Support",
      "Samgrip Gym Gloves",
      "Yoga Mat TPE",
      "Dual Patella Support",
      "Knee Pad",
    ],
  },
  {
    id: 14,
    brand: "Samson Junior",
    category: "Junior / Paediatric Range",
     image: last,
    desc: "Healthcare and orthopaedic products for children.",
    subproducts: [
      "Cervical Orthosis Philadelphia (Child)",
      "Cervical Collar Soft Firm Density (Child)",
      "Universal Shoulder Immobilizer (Child)",
      "Clavicle Brace (Child)",
      "Arm Sling Pouch (Child)",
      "Foot Drop Splint (Child)",
      "Ankle Brace (Child)",
      "Foot Walker Boot Short (Child)",
      "Wrist Splint (Child)",
      "Thumb Spica Splint (Child)",
      "Knee Brace Immobilizer (Child)",
      "Knee Wrap Hinged (Child)",
      "Skin Traction Set (Child)",
      "Arch Support PU Gel (Child)",
      "Flat Foot Insole Paediatric (Child)",
      "Pavlik Harness",
    ],
  },
];

const categories = ["All", ...new Set(products.map((p) => p.category))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [modalProduct, setModalProduct] = useState(null);

  const filtered = products.filter((p) => {
    const matchCat =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
  searchQuery.trim() === "" ||
  p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
  p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
  p.subproducts.some((item) =>
    (typeof item === "object" ? item.name : item)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
return matchCat && matchSearch;
  });

  return (
    <div className="products-page">
      <section className="products-hero">
        <p className="products-eyebrow">CATALOG</p>
        <h1 className="products-title">
          Our complete{" "}
          <span className="products-title-accent">
            healthcare product range
          </span>
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
        <div
          className={`products-grid ${
            viewMode === "list" ? "products-list" : ""
          }`}
        >
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-card-img placeholder-card">
  {product.image ? (
    <img
      src={product.image}
      alt={product.category}
      className="product-image"
    />
  ) : (
    <div className="placeholder-icon">🏥</div>
  )}
</div>

              <div className="product-card-body">
                <p className="product-category-name">{product.category}</p>
                <p className="product-card-desc">{product.desc}</p>

                <div className="product-card-footer">
                  <button
                    className="btn-view-details"
                    onClick={() => setModalProduct(product)}
                  >
                    View Details →
                  </button>
                  <button className="btn-quote-icon" title="Request Quote">
                    💬
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">No products found.</div>
        )}
      </section>

      {/* MODAL */}
      {modalProduct && (
        <div
          className="modal-overlay"
          onClick={() => setModalProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <p className="modal-eyebrow">{modalProduct.brand}</p>
                <h2>{modalProduct.category}</h2>
                <p className="modal-desc">{modalProduct.desc}</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setModalProduct(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-products">
              <h4 className="modal-products-heading">Products Included</h4>
            <ul className="modal-subproducts-list">
  {modalProduct.subproducts.map((item, index) => (
    <li key={index} className="modal-subproduct-item">
      {typeof item === "object" && item.image && (
        <div className="modal-subproduct-img-wrap">
          <img
            src={item.image}
            alt={item.name}
            className="modal-subproduct-img"
          />
        </div>
      )}
      <p className="modal-subproduct-name">
        {typeof item === "object" ? item.name : item}
      </p>
      {typeof item === "object" && item.desc && (
        <p className="modal-subproduct-desc">{item.desc}</p>
      )}
    </li>
  ))}
</ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
