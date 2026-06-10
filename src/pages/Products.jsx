import { useState, useEffect } from "react";
import "./Products.css";
import QuoteModal from "../components/QuoteModal";

const BASE = "https://res.cloudinary.com/dukoegkdj/image/upload/f_auto/";

const hygiene = "https://res.cloudinary.com/dukoegkdj/image/upload/hygiene_m9nfo9.jpg";
const baby = "https://res.cloudinary.com/dukoegkdj/image/upload/baby_makiwy.jpg";
const orthopedic = "https://res.cloudinary.com/dukoegkdj/image/upload/orthopedic_yrp6jt.jpg";
const physiotherapy = "https://res.cloudinary.com/dukoegkdj/image/upload/physiotherapy_apvpzc.jpg";
const surgical = "https://res.cloudinary.com/dukoegkdj/image/upload/surgical_fqd4me.jpg";
const woundcare = "https://res.cloudinary.com/dukoegkdj/image/upload/woundcare_cotton_yrnf4r.jpg";
const orthopaedicbraces = "https://res.cloudinary.com/dukoegkdj/image/upload/Orthopaedic_Supports_Braces_zku1ia.png";
const fractureaids = "https://res.cloudinary.com/dukoegkdj/image/upload/fractureaids_dlwjmt.jpg";
const walkingaids = "https://res.cloudinary.com/dukoegkdj/image/upload/walkingaids_xqf4kz.jpg";
const thighcalf = "https://res.cloudinary.com/dukoegkdj/image/upload/Thigh_Calf_Support_kl00oz.png";
const surgicaldressing = "https://res.cloudinary.com/dukoegkdj/image/upload/surgicaldressing_qqmbs6.jpg";
const sportgear = "https://res.cloudinary.com/dukoegkdj/image/upload/sportgear_ktv6z6.png";
const last = "https://res.cloudinary.com/dukoegkdj/image/upload/last_rzezcf.png";
const wrist = "https://res.cloudinary.com/dukoegkdj/image/upload/wrist_oe4zra.png";
const fingersplints = "https://res.cloudinary.com/dukoegkdj/image/upload/finger_splints_c3oiub.png";
const adultincontinence = "https://res.cloudinary.com/dukoegkdj/image/upload/adultincontinence_dekld4.png";
const BASE = "https://res.cloudinary.com/dukoegkdj/image/upload/";

// Category 1 - Feminine Hygiene
const sub1 = BASE + "1.1_gftlgj";
const sub2 = BASE + "1.2_tqzkos";
const sub3 = BASE + "1.3_dyuoa9";
const sub4 = BASE + "1.4_vdaqes";
const sub5 = BASE + "1.5_clpfay";
const sub6 = BASE + "1.6_wrrjnc";
const sub7 = BASE + "1.7_hp3dd1";

// Category 2 - Baby Care
const sub21 = BASE + "2.1_jf0ii9";
const sub22 = BASE + "2.2_tis2io";
const sub23 = BASE + "2.3_jlzleq";

// Category 3 - Adult Incontinence
const sub31 = BASE + "3.1_pw68o6";
const sub32 = BASE + "3.2_f63erh";
const sub33 = BASE + "3.3_rfaa5x";
const sub34 = BASE + "3.4_cxgsnh";
const sub35 = BASE + "3.5_iu8uzf";

// Category 5 - Medical Disposables / Surgical
const sub51 = BASE + "5.1_xsdvcz";
const sub52 = BASE + "5.2_f4lhs0";
const sub53 = BASE + "5.3_tlqwt2";
const sub54 = BASE + "5.4_as706h";
const sub55 = BASE + "5.5_sszvha";
const sub56 = BASE + "5.6_xgrdqh";
const sub57 = BASE + "5.7_kbzupw";
const sub58 = BASE + "5.8_vyrjny";
const sub59 = BASE + "5.9_lfcm7p";
const sub510 = BASE + "5.10_ly5jwr";
const sub511 = BASE + "5.11_cvni1r";
const sub512 = BASE + "5.11_cvni1r";
const sub513 = BASE + "5.11_cvni1r";

// Category 6 - Wound Care
const sub61 = BASE + "6.1_sazkb1";
const sub62 = BASE + "6.2_cwxgwn";
const sub63 = BASE + "6.3_l0rkak";
const sub64 = BASE + "6.4_blgghk";
const sub65 = BASE + "6.5_m6adnt";
const sub66 = BASE + "6.6_dnxntx";
const sub67 = BASE + "6.7_kmcsmv";
const sub68 = BASE + "6.8_lqasnw";
const sub69 = BASE + "6.9_quokxy";
const sub610 = BASE + "6.10_msggpr";
const sub611 = BASE + "6.11_luyqkk";
const sub612 = BASE + "6.12_l1qxl3";

// Category 7 - Orthopaedic Supports & Braces
const sub71 = BASE + "7.1_h0dpcq";
const sub72 = BASE + "7.2_gna6f1";
const sub73 = BASE + "7.3_wwpygz";
const sub74 = BASE + "7.4_go6kwe";
const sub75 = BASE + "7.5_gbpewo";
const sub76 = BASE + "7.6_ycan6b";
const sub77 = BASE + "7.7_o3c9tc";
const sub78 = BASE + "7.8_rrz4ax";
const sub79 = BASE + "7.9_fgk0zn";
const sub710 = BASE + "7.10_bnzep9";
const sub711 = BASE + "7.11_bqzcnj";
const sub712 = BASE + "7.12_phgbxi";
const sub713 = BASE + "7.13_jfsmq4";
const sub714 = BASE + "7.14_d1jfdb";
const sub715 = BASE + "7.15_hxjan1";
const sub716 = BASE + "7.16_xlf6ls";
const sub717 = BASE + "7.17_cwe8ja";
const sub718 = BASE + "7.18_uxegtr";
const sub719 = BASE + "7.19_wqfh6b";
const sub720 = BASE + "7.20_b79bjo";
const sub721 = BASE + "7.21_qko2sb";
const sub722 = BASE + "7.22_ukfpgg";
const sub723 = BASE + "7.23_chhnhr";
const sub724 = BASE + "7.24_sfs6ui";
const sub725 = BASE + "7.25_kue2hc";
const sub726 = BASE + "7.26_d2ahp9";
const sub727 = BASE + "7.27_pgiu8a";
const sub728 = BASE + "7.28_e73lic";
const sub729 = BASE + "7.29_tjql6a";
const sub730 = BASE + "7.30_zgwisb";

// Category 8 - Fracture Aids
const sub81 = BASE + "8.1_ugsoxi";
const sub82 = BASE + "8.2_znhkgy";
const sub83 = BASE + "8.3_gfbevt";
const sub84 = BASE + "8.4_wxtzdr";
const sub85 = BASE + "8.5_ygsssl";
const sub86 = BASE + "8.6_yoanpq";
const sub87 = BASE + "8.7_qwcy4t";
const sub88 = BASE + "8.8_uthpt8";
const sub89 = BASE + "8.9_qk2gaw";
const sub810 = BASE + "8.10_x7wxne";
const sub811 = BASE + "8.11_dbkh9u";
const sub812 = BASE + "8.12_sfzcz4";
const sub813 = BASE + "8.13_alyuce";
const sub814 = BASE + "8.14_wzwpf4";
const sub815 = BASE + "8.15_xqdbts";

// Category 9 - Knee Support
const sub91 = BASE + "9.1_az7rgu";
const sub92 = BASE + "9.2_efhal5";
const sub93 = BASE + "9.3_pycdgj";
const sub94 = BASE + "9.4_mgbd8r";
const sub95 = BASE + "9.5_jcne98";
const sub96 = BASE + "9.6_pf2nrd";
const sub97 = BASE + "9.7_vqkp6n";
const sub98 = BASE + "9.8_d2bgtu";
const sub99 = BASE + "9.9_czx3gl";
const sub910 = BASE + "9.10_optmtq";
const sub911 = BASE + "9.11_t0ud6c";
const sub912 = BASE + "9.12_aw2fl3";
const sub913 = BASE + "9.13_vtwatu";
const sub914 = BASE + "9.14_oqp0cc";
const sub915 = BASE + "9.15_p8bbzx";
const sub916 = BASE + "9.16_v1dy2j";
const sub917 = BASE + "9.17_ah8dzg";

// Category 10 - Ankle Support
const sub101 = BASE + "10.1_hyutlb";
const sub102 = BASE + "10.2_j0yeuw";
const sub103 = BASE + "10.3_af6k17";
const sub104 = BASE + "10.4_waninu";
const sub105 = BASE + "10.5_i5j5rk";
const sub106 = BASE + "10.6_pkidvy";
const sub107 = BASE + "10.7_dlowbf";
const sub108 = BASE + "10.8_mostae";
const sub109 = BASE + "10.9_enuvgw";
const sub1010 = BASE + "10.10_xsjb65";
const sub1011 = BASE + "10.11_fwnf1w";
const sub1012 = BASE + "10.12_d5zgj7";
const sub1013 = BASE + "10.13_ntp3e5";
const sub1014 = BASE + "10.14_qubqgg";
const sub1015 = BASE + "10.15_mqejrb";

// Category 11 - Thigh & Calf
const sub111 = BASE + "11.1_r9sa1c";
const sub112 = BASE + "11.2_vmssew";
const sub113 = BASE + "11.3_pbiuuh";
const sub114 = BASE + "11.4_k9ura7";
const sub115 = BASE + "11.5_marxaj";
const sub116 = BASE + "11.6_dnmjx0";
const sub117 = BASE + "11.7_xzklcz";
const sub118 = BASE + "11.8_sobveg";
const sub119 = BASE + "11.9_knoiij";
const sub1110 = BASE + "11.10_chimve";
const sub1111 = BASE + "11.11_ymo0ev";
const sub1112 = BASE + "11.12_sa22xf";
const sub1113 = BASE + "11.13_syaeuo";
const sub1114 = BASE + "11.14_t592mw";

// Category 12 - Surgical Dressing
const sub121 = BASE + "12.1_hyutlb";
const sub122 = BASE + "12.2_znhkgy";
const sub123 = BASE + "12.3_aaaemt";
const sub124 = BASE + "12.4_xl2blm";
const sub125 = BASE + "12.5_jifbp6";
const sub126 = BASE + "12.6_uehcu9";
const sub127 = BASE + "12.7_idrxsq";
const sub128 = BASE + "12.8_km5ayz";

// Category 13 - Sport Gear
const sub131 = BASE + "13.1_yv9rxq";
const sub132 = BASE + "13.2_fowigq";
const sub133 = BASE + "13.3_cnms1v";
const sub134 = BASE + "13.4_igfbkm";
const sub135 = BASE + "13.5_wmm93t";
const sub136 = BASE + "13.6_jawwi1";
const sub137 = BASE + "13.7_t939ce";
const sub138 = BASE + "13.8_wadt0y";
const sub139 = BASE + "13.9_tmxmpm";
const sub1310 = BASE + "13.10_o2oh7r";
const sub1311 = BASE + "13.11_dsggvp";
const sub1312 = BASE + "13.12_r3aggz";
const sub1313 = BASE + "13.13_estinv";
const sub1314 = BASE + "13.14_huthay";
const sub1315 = BASE + "13.15_qjp7jj";
const sub1316 = BASE + "13.16_md6ccu";
const sub1317 = BASE + "13.17_vsdkgm";
const sub1318 = BASE + "13.18_vkz3vt";
const sub1319 = BASE + "13.19_zqvnbi";
const sub1320 = BASE + "13.20_o2oh7r";

// Category 14 - Junior / Paediatric
const sub141 = BASE + "14.1_nxkoby";
const sub142 = BASE + "14.2_m93lsx";
const sub143 = BASE + "14.3_rmsrtd";
const sub144 = BASE + "14.4_ck1bcf";
const sub145 = BASE + "14.5_ggqyoz";
const sub146 = BASE + "14.6_wwmmcx";
const sub147 = BASE + "14.7_gmsqdu";
const sub148 = BASE + "14.8_wd7lcy";
const sub149 = BASE + "14.9_oxvxw5";
const sub1410 = BASE + "14.10_ceg89h";
const sub1411 = BASE + "14.11_eiuask";
const sub1412 = BASE + "14.12_hl9im0";
const sub1413 = BASE + "14.13_ttyexe";
const sub1414 = BASE + "14.14_aj9dg4";
const sub1415 = BASE + "14.15_jpoy7n";
const sub1416 = BASE + "14.16_zkmunb";

// Category 15 - Wrist & Forearm
const sub151 = BASE + "15.1_wkectm";
const sub152 = BASE + "15.2_yd1asl";
const sub153 = BASE + "15.3_n5v0cu";
const sub154 = BASE + "15.4_fafdwe";
const sub155 = BASE + "15.5_mdiot3";
const sub156 = BASE + "15.6_yihawx";
const sub157 = BASE + "15.7_rm8kgt";
const sub158 = BASE + "15.8_kzoeo8";
const sub159 = BASE + "15.9_oynbqf";
const sub1510 = BASE + "15.10_lin4ea";
const sub1511 = BASE + "15.11_rwx93s";
const sub1512 = BASE + "15.12_cwpm9o";
const sub1513 = BASE + "15.13_lxx6lu";
const sub1514 = BASE + "15.14_u2z1zz";
const sub1515 = BASE + "15.15_fvgrby";
const sub1516 = BASE + "15.16_fgnx8d";

// Category 17 - Finger Splints
const sub171 = BASE + "17.1_s6tcic";
const sub172 = BASE + "17.2_dbyzyw";
const sub173 = BASE + "17.3_cvemgu";

// Category 20 - Physiotherapy
const sub201 = BASE + "20.1_v4cyyl";
const sub202 = BASE + "20.2_xmft3a";
const sub203 = BASE + "20.3_mvt2n7";
const sub204 = BASE + "20.4_d9wgk2";
const sub205 = BASE + "20.5_fycazd";
const sub206 = BASE + "20.6_fut7ns";
const sub207 = BASE + "20.7_idrxsq";
const sub208 = BASE + "20.8_km5ayz";
const sub209 = BASE + "20.9_tvlpgn";
const sub2010 = BASE + "20.10_aegjra";
const sub2011 = BASE + "20.11_oi1j8p";
const sub2012 = BASE + "20.12_ddxttu";
const sub2013 = BASE + "20.13_ttxdnc";
const sub2014 = BASE + "20.14_qlywdl";
const sub2015 = BASE + "20.15_fjfhtk";
const sub2016 = BASE + "20.16_lvdqmd";
const sub2017 = BASE + "20.17_wksrvc";
const sub2018 = BASE + "20.18_nmzavd";
const sub2019 = BASE + "20.19_amvbrr";
const sub2020 = BASE + "20.20_mm24x0";
const sub2021 = BASE + "20.21_jmnhvn";
const sub2022 = BASE + "20.22_fcszwu";
const sub2023 = BASE + "20.23_pigngq";
const sub2024 = BASE + "20.24_xceixz";
const sub2025 = BASE + "20.25_uorhh5";
const sub2026 = BASE + "20.26_rldrdu";
const sub2027 = BASE + "20.27_mglbt3";
const sub2028 = BASE + "20.28_b3puiq";
const sub2029 = BASE + "20.29_grrsrq";
const sub2030 = BASE + "20.30_qiuzdn";
const sub2031 = BASE + "20.31_qezqbw";
const sub2032 = BASE + "20.32_pks7l2";

// Category 21 - Walking Aids
const sub211 = BASE + "21.1_v3lkrd";
const sub212 = BASE + "21.2_vpabez";
const sub213 = BASE + "21.3_sinltf";
const sub214 = BASE + "21.4_ijjmkr";
const sub215 = BASE + "21.5_ezgfhl";
const sub216 = BASE + "21.6_g4izxu";
const sub217 = BASE + "21.7_wmlfkx";
const sub218 = BASE + "21.8_qcaoc5";
const sub219 = BASE + "21.9_ju3lhv";
const sub2110 = BASE + "21.10_pj8k18";
const sub2111 = BASE + "21.11_lvnmya";
const sub2112 = BASE + "21.12_n55khl";
const sub2113 = BASE + "21.13_pgjeaq";
const sub2114 = BASE + "21.14_ymyhbe";
const sub2115 = BASE + "21.15_viwdpe";
const sub2116 = BASE + "21.16_aolka3";
const sub2117 = BASE + "21.17_b0newx";
const sub2118 = BASE + "21.18_klwnff";


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
    subImages: [sub61, sub62, sub64, sub65, sub66, sub67, sub612,sub611, sub69,sub610, sub68],
  },
  "Orthopaedic Supports & Braces": {
    cardImage: orthopaedicbraces,
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
    cardImage: thighcalf,
    subImages: [sub111, sub112, sub113, sub114, sub115, sub116, sub117, sub118, sub119, sub1110, sub1111, sub1112, sub1113, sub1114],
  },
 "Surgical Dressing": {
  cardImage: surgicaldressing,
  subImages: [sub123, sub124, sub125, sub126],
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
    cardImage: wrist,
    subImages: [sub151, sub152, sub153, sub154, sub155, sub156, sub157, sub158, sub159, sub1510, sub1511, sub1512, sub1513, sub1514, sub1515, sub1516],
  },
  
  "Finger Splints": {
    cardImage: fingersplints,
    subImages: [sub171, sub172, sub173],
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
      <p className="modal-desc">{selectedSubproduct.description}</p>
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