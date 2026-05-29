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
  { name: "Baby Diapers Pant Style (NB, S, M, L & XL)", image: sub21, desc: "Soft & gentle on baby skin",contain: true },
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
  { name: "Adult Pant Diaper Standard (M, L & XL)", image: sub31, desc: "Comfortable standard fit" ,contain: true},
  { name: "Adult Pant Diaper Premium (M, L & XL)", image: sub32, desc: "Premium protection & comfort" ,contain: true},
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
  { name: "Au-Fix Infusion Set (Classic & Ultra)", image: sub51, desc: "Classic & Ultra variants" },
  { name: "Au-Safe Disposable Syringes", image: sub52, desc: "Safe single-use syringes" },
  { name: "Au-Flon IV Cannula", image: sub53, desc: "Smooth IV cannula insertion" },
  { name: "Scalp Vein Set", image: sub54, desc: "Precision scalp vein set" },
  { name: "Urine Bag (Classic, Premium, Superior & with Urometer)", image: sub55, desc: "Multiple variants available" },
  { name: "2-Way Foley Balloon Catheter", image: sub56, desc: "2-way balloon catheter" },
  { name: "Oxygen Mask", image: sub57, desc: "Standard oxygen delivery mask" },
  { name: "Nebulizer Mask", image: sub58, desc: "For nebulization therapy" },
  { name: "Nasal Cannula", image: sub59, desc: "Comfortable nasal oxygen delivery" },
  { name: "High Oxygen Concentration Mask", image: sub510, desc: "High concentration oxygen mask" ,contain: true },
  { name: "Au-Care Surgical Gloves", image: sub511, desc: "Sterile surgical gloves" },
  { name: "Au-Pore Microporous Paper Tape", image: sub512, desc: "Gentle microporous tape" , contain: true },
  { name: "Au-Plast Elastic Adhesive Bandage", image: sub513, desc: "Elastic adhesive bandage" },
],

  },
  {
    id: 6,
    brand: "Wellness Surgical / Kramson",
    category: "Wound Care & Cotton",
    image: woundcare,
    desc: "Cotton, gauze, bandages and wound care essentials.",
    subproducts: [
  { name: "Absorbent Cotton Wellness Surgical", image: sub61, desc: "Premium absorbent cotton" },
  { name: "Absorbent Cotton Kramson", image: sub62, desc: "Premium absorbent cotton" },
  { name: "Zigzag Cotton", image: sub63, desc: "Zigzag cut cotton rolls",contain: true },
  { name: "Roller Bandage / Rolled Gauze", image: sub64, desc: "Standard roller bandage" },
  { name: "Gauze Cloth / Bandage Than Roll", image: sub65, desc: "Gauze cloth bandage roll" },
  { name: "Crepe Bandage (Standard & Premium)", image: sub66, desc: "Standard & Premium variants",contain: true },
  { name: "POP Bandage Kramson", image: sub67, desc: "Plaster of paris bandage" },
  { name: "Gauze Swabs Sterile Kramson", image: sub68, desc: "Sterile gauze swabs" },
  { name: "Elastic Adhesive Bandage Kramson", image: sub69, desc: "Elastic adhesive bandage",contain: true },
  { name: "Cannula Fixer Kramson", image: sub610, desc: "Secure cannula fixation",contain: true },
  { name: "Microporous Paper Tape Wellness Surgical", image: sub611, desc: "Gentle microporous tape" ,contain: true},
  { name: "Roller Bandage Kramson", image: sub612, desc: "Kramson roller bandage" },
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
  { name: "Abdominal Support", image: sub131, desc: "Core abdominal support" },
  { name: "Lumbo Sacral Support", image: sub132, desc: "Lower back support" },
  { name: "Weight Lifting Belt", image: sub133, desc: "Gym weight lifting belt" },
  { name: "Knee Support (Pair)", image: sub134, desc: "Active knee support pair" },
  { name: "Knee Support (Neoprene)", image: sub135, desc: "Neoprene knee support" },
  { name: "Knee Support with Strap", image: sub136, desc: "Knee support with strap" },
  { name: "Weight Lifting Knee Strap (Pair)", image: sub137, desc: "Knee strap for lifting" },
  { name: "Wrist Wrap with Thumb Loop (Pair)", image: sub138, desc: "Wrist wrap & thumb loop" },
  { name: "Wrist Support with Thumb Loop Neoprene (Pair)", image: sub139, desc: "Neoprene wrist support" },
  { name: "Tennis Elbow / Golf Support", image: sub1310, desc: "Elbow pain relief support" },
  { name: "Elbow Support With Strap", image: sub1311, desc: "Elbow support with strap" },
  { name: "Ankle Support With Strap", image: sub1312, desc: "Ankle support with strap" },
  { name: "Ankle Support (Neoprene)", image: sub1313, desc: "Neoprene ankle support" },
  { name: "Shoulder Support", image: sub1314, desc: "Shoulder compression support" },
  { name: "Finger Support", image: sub1315, desc: "Protective finger support" },
  { name: "Samgrip Gym Gloves", image: sub1316, desc: "Grip gym gloves" },
  { name: "Yoga Mat TPE", image: sub1317, desc: "Eco-friendly TPE yoga mat" },
  { name: "Dual Patella Support", image: sub1318, desc: "Dual patella knee support" },
  { name: "Knee Pad", image: sub1319, desc: "Protective knee pad" },
  { name: "Knee Support Copper Fit (Pair)", image: sub1320, desc: "Copper fit knee support" },
],
  },
  {
    id: 14,
    brand: "Samson Junior",
    category: "Junior / Paediatric Range",
     image: last,
    desc: "Healthcare and orthopaedic products for children.",
    subproducts: [
  { name: "Cervical Orthosis Philadelphia (Child)", image: sub141, desc: "Paediatric cervical support" },
  { name: "Cervical Collar Soft Firm Density (Child)", image: sub142, desc: "Soft firm density collar" },
  { name: "Universal Shoulder Immobilizer (Child)", image: sub143, desc: "Universal shoulder support" },
  { name: "Clavicle Brace (Child)", image: sub144, desc: "Paediatric clavicle brace" },
  { name: "Arm Sling Pouch (Child)", image: sub145, desc: "Comfortable arm sling" },
  { name: "Foot Drop Splint (Child)", image: sub146, desc: "Foot drop correction splint" },
  { name: "Ankle Brace (Child)", image: sub147, desc: "Paediatric ankle support" },
  { name: "Foot Walker Boot Short (Child)", image: sub148, desc: "Short foot walker boot" },
  { name: "Wrist Splint (Child)", image: sub149, desc: "Paediatric wrist splint" },
  { name: "Thumb Spica Splint (Child)", image: sub1410, desc: "Thumb spica support" },
  { name: "Knee Brace Immobilizer (Child)", image: sub1411, desc: "Knee immobilizer brace" },
  { name: "Knee Wrap Hinged (Child)", image: sub1412, desc: "Hinged knee wrap" },
  { name: "Skin Traction Set (Child)", image: sub1413, desc: "Paediatric skin traction" },
  { name: "Arch Support PU Gel (Child)", image: sub1414, desc: "PU gel arch support" },
  { name: "Flat Foot Insole Paediatric (Child)", image: sub1415, desc: "Flat foot correction insole" },
  { name: "Pavlik Harness", image: sub1416, desc: "Hip dysplasia harness" },
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
  className={`modal-subproduct-img ${item.contain ? "modal-subproduct-img-contain" : ""}`}
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
