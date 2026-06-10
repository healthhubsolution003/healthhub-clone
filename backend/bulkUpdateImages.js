const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://healthhubadmin:Ky2UHSF2xzPGfC7j@healthhub-cluster.unzpab5.mongodb.net/healthhub?retryWrites=true&w=majority";

const BASE = "https://res.cloudinary.com/dukoegkdj/image/upload/f_auto/";

// ── Exact category name → ordered subproduct image URLs ──────────────────────
// Order must match the order subproducts appear in MongoDB (same as admin panel)
const IMAGE_MAP = {
  "Feminine Hygiene Care": [
    BASE + "1.1_gftlgj",
    BASE + "1.2_tqzkos",
    BASE + "1.3_dyuoa9",
    BASE + "1.4_vdaqes",
    BASE + "1.5_clpfay",
    BASE + "1.6_wrrjnc",
    BASE + "1.7_hp3dd1",
  ],
  "Baby Care": [
    BASE + "2.1_jf0ii9",
    BASE + "2.2_tis2io",
    BASE + "2.3_jlzleq",
  ],
  "Adult Incontinence": [
    BASE + "3.1_pw68o6",
    BASE + "3.2_f63erh",
    BASE + "3.3_rfaa5x",
    BASE + "3.4_cxgsnh",
    BASE + "3.5_iu8uzf",
  ],
  "Medical Disposables / Surgical": [
    BASE + "5.1_xsdvcz",
    BASE + "5.2_f4lhs0",
    BASE + "5.3_tlqwt2",
    BASE + "5.4_as706h",
    BASE + "5.5_sszvha",
    BASE + "5.6_xgrdqh",
    BASE + "5.7_kbzupw",
    BASE + "5.8_vyrjny",
    BASE + "5.9_lfcm7p",
    BASE + "5.10_ly5jwr",
    BASE + "5.11_cvni1r",
  ],
  "Wound Care & Cotton": [
    BASE + "6.1_sazkb1",
    BASE + "6.2_cwxgwn",
    BASE + "6.4_blgghk",
    BASE + "6.5_m6adnt",
    BASE + "6.6_dnxntx",
    BASE + "6.7_kmcsmv",
    BASE + "6.12_l1qxl3",
    BASE + "6.11_luyqkk",
    BASE + "6.9_quokxy",
    BASE + "6.10_msggpr",
    BASE + "6.8_lqasnw",
  ],
  "Orthopaedic Supports & Braces": [
    BASE + "7.1_h0dpcq",
    BASE + "7.2_gna6f1",
    BASE + "7.3_wwpygz",
    BASE + "7.4_go6kwe",
    BASE + "7.5_gbpewo",
    BASE + "7.6_ycan6b",
    BASE + "7.7_o3c9tc",
    BASE + "7.8_rrz4ax",
    BASE + "7.9_fgk0zn",
    BASE + "7.10_bnzep9",
    BASE + "7.11_bqzcnj",
    BASE + "7.12_phgbxi",
    BASE + "7.13_jfsmq4",
    BASE + "7.14_d1jfdb",
    BASE + "7.15_hxjan1",
    BASE + "7.16_xlf6ls",
    BASE + "7.17_cwe8ja",
    BASE + "7.18_uxegtr",
    BASE + "7.19_wqfh6b",
    BASE + "7.20_b79bjo",
    BASE + "7.21_qko2sb",
    BASE + "7.22_ukfpgg",
    BASE + "7.23_chhnhr",
    BASE + "7.24_sfs6ui",
    BASE + "7.25_kue2hc",
    BASE + "7.26_d2ahp9",
    BASE + "7.27_pgiu8a",
    BASE + "7.28_e73lic",
    BASE + "7.29_tjql6a",
    BASE + "7.30_zgwisb",
  ],
  "Fracture Aids": [
    BASE + "8.1_ugsoxi",
    BASE + "8.2_znhkgy",
    BASE + "8.3_gfbevt",
    BASE + "8.4_wxtzdr",
    BASE + "8.5_ygsssl",
    BASE + "8.6_yoanpq",
    BASE + "8.7_qwcy4t",
    BASE + "8.8_uthpt8",
    BASE + "8.9_qk2gaw",
    BASE + "8.10_x7wxne",
    BASE + "8.11_dbkh9u",
    BASE + "8.12_sfzcz4",
    BASE + "8.13_alyuce",
    BASE + "8.14_wzwpf4",
    BASE + "8.15_xqdbts",
  ],
  "Knee Support / Braces": [
    BASE + "9.1_az7rgu",
    BASE + "9.2_efhal5",
    BASE + "9.3_pycdgj",
    BASE + "9.4_mgbd8r",
    BASE + "9.5_jcne98",
    BASE + "9.6_pf2nrd",
    BASE + "9.7_vqkp6n",
    BASE + "9.8_d2bgtu",
    BASE + "9.9_czx3gl",
    BASE + "9.10_optmtq",
    BASE + "9.11_t0ud6c",
    BASE + "9.12_aw2fl3",
    BASE + "9.13_vtwatu",
    BASE + "9.14_oqp0cc",
    BASE + "9.15_p8bbzx",
    BASE + "9.16_v1dy2j",
    BASE + "9.17_ah8dzg",
  ],
  "Ankle Support / Braces": [
    BASE + "10.1_hyutlb",
    BASE + "10.2_j0yeuw",
    BASE + "10.3_af6k17",
    BASE + "10.4_waninu",
    BASE + "10.5_i5j5rk",
    BASE + "10.6_pkidvy",
    BASE + "10.7_dlowbf",
    BASE + "10.8_mostae",
    BASE + "10.9_enuvgw",
    BASE + "10.10_xsjb65",
    BASE + "10.11_fwnf1w",
    BASE + "10.12_d5zgj7",
    BASE + "10.13_ntp3e5",
    BASE + "10.14_qubqgg",
    BASE + "10.15_mqejrb",
  ],
  "Thigh & Calf Support / Varicose Vein Compression Stockings": [
    BASE + "11.1_r9sa1c",
    BASE + "11.2_vmssew",
    BASE + "11.3_pbiuuh",
    BASE + "11.4_k9ura7",
    BASE + "11.5_marxaj",
    BASE + "11.6_dnmjx0",
    BASE + "11.7_xzklcz",
    BASE + "11.8_sobveg",
    BASE + "11.9_knoiij",
    BASE + "11.10_chimve",
    BASE + "11.11_ymo0ev",
    BASE + "11.12_sa22xf",
    BASE + "11.13_syaeuo",
    BASE + "11.14_t592mw",
  ],
  "Surgical Dressing": [
    BASE + "12.3_aaaemt",
    BASE + "12.4_xl2blm",
    BASE + "12.5_jifbp6",
    BASE + "12.6_uehcu9",
  ],
  "Sport Gear": [
    BASE + "13.1_yv9rxq",
    BASE + "13.2_fowigq",
    BASE + "13.3_cnms1v",
    BASE + "13.4_igfbkm",
    BASE + "13.5_wmm93t",
    BASE + "13.6_jawwi1",
    BASE + "13.7_t939ce",
    BASE + "13.8_wadt0y",
    BASE + "13.9_tmxmpm",
    BASE + "13.10_o2oh7r",
    BASE + "13.11_dsggvp",
    BASE + "13.12_r3aggz",
    BASE + "13.13_estinv",
    BASE + "13.14_huthay",
    BASE + "13.15_qjp7jj",
    BASE + "13.16_md6ccu",
    BASE + "13.17_vsdkgm",
    BASE + "13.18_vkz3vt",
    BASE + "13.19_zqvnbi",
    BASE + "13.20_o2oh7r",
  ],
  "Junior / Paediatric Range": [
    BASE + "14.1_nxkoby",
    BASE + "14.2_m93lsx",
    BASE + "14.3_rmsrtd",
    BASE + "14.4_ck1bcf",
    BASE + "14.5_ggqyoz",
    BASE + "14.6_wwmmcx",
    BASE + "14.7_gmsqdu",
    BASE + "14.8_wd7lcy",
    BASE + "14.9_oxvxw5",
    BASE + "14.10_ceg89h",
    BASE + "14.11_eiuask",
    BASE + "14.12_hl9im0",
    BASE + "14.13_ttyexe",
    BASE + "14.14_aj9dg4",
    BASE + "14.15_jpoy7n",
    BASE + "14.16_zkmunb",
  ],
  "Wrist & Forearm Support / Splints": [
    BASE + "15.1_wkectm",
    BASE + "15.2_yd1asl",
    BASE + "15.3_n5v0cu",
    BASE + "15.4_fafdwe",
    BASE + "15.5_mdiot3",
    BASE + "15.6_yihawx",
    BASE + "15.7_rm8kgt",
    BASE + "15.8_kzoeo8",
    BASE + "15.9_oynbqf",
    BASE + "15.10_lin4ea",
    BASE + "15.11_rwx93s",
    BASE + "15.12_cwpm9o",
    BASE + "15.13_lxx6lu",
    BASE + "15.14_u2z1zz",
    BASE + "15.15_fvgrby",
    BASE + "15.16_fgnx8d",
  ],
  "Finger Splints": [
    BASE + "17.1_s6tcic",
    BASE + "17.2_dbyzyw",
    BASE + "17.3_cvemgu",
  ],
  "Physiotherapy & Rehabilitation": [
    BASE + "20.1_v4cyyl",
    BASE + "20.2_xmft3a",
    BASE + "20.3_mvt2n7",
    BASE + "20.4_d9wgk2",
    BASE + "20.5_fycazd",
    BASE + "20.6_fut7ns",
    BASE + "20.7_idrxsq",
    BASE + "20.8_km5ayz",
    BASE + "20.9_tvlpgn",
    BASE + "20.10_aegjra",
    BASE + "20.11_oi1j8p",
    BASE + "20.12_ddxttu",
    BASE + "20.13_ttxdnc",
    BASE + "20.14_qlywdl",
    BASE + "20.15_fjfhtk",
    BASE + "20.16_lvdqmd",
    BASE + "20.17_wksrvc",
    BASE + "20.18_nmzavd",
    BASE + "20.19_amvbrr",
    BASE + "20.20_mm24x0",
    BASE + "20.21_jmnhvn",
    BASE + "20.22_fcszwu",
    BASE + "20.23_pigngq",
    BASE + "20.24_xceixz",
    BASE + "20.25_uorhh5",
    BASE + "20.26_rldrdu",
    BASE + "20.27_mglbt3",
    BASE + "20.28_b3puiq",
    BASE + "20.29_grrsrq",
    BASE + "20.30_qiuzdn",
    BASE + "20.31_qezqbw",
    BASE + "20.32_pks7l2",
  ],
  "Walking Aids & Mobility": [
    BASE + "21.1_v3lkrd",
    BASE + "21.2_vpabez",
    BASE + "21.3_sinltf",
    BASE + "21.4_ijjmkr",
    BASE + "21.5_ezgfhl",
    BASE + "21.6_g4izxu",
    BASE + "21.7_wmlfkx",
    BASE + "21.8_qcaoc5",
    BASE + "21.9_ju3lhv",
    BASE + "21.10_pj8k18",
    BASE + "21.11_lvnmya",
    BASE + "21.12_n55khl",
    BASE + "21.13_pgjeaq",
    BASE + "21.14_ymyhbe",
    BASE + "21.15_viwdpe",
    BASE + "21.16_aolka3",
    BASE + "21.17_b0newx",
    BASE + "21.18_klwnff",
  ],
};

// ── Schema (must match your Product.js model) ─────────────────────────────────
const productSchema = new mongoose.Schema(
  {
    name: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    description: String,
    price: Number,
    image: String,
    featured: Boolean,
    subproducts: [
      {
        name: String,
        description: String,
        image: String,
      },
    ],
  },
  { timestamps: true }
);

const categorySchema = new mongoose.Schema({ name: String });

const Product = mongoose.model("Product", productSchema);
const Category = mongoose.model("Category", categorySchema);

// ── Main ──────────────────────────────────────────────────────────────────────
async function run() {
  await mongoose.connect(MONGO_URI);
  console.log("✅ Connected to MongoDB");

  let totalUpdated = 0;
  let totalSkipped = 0;

  for (const [categoryName, imageUrls] of Object.entries(IMAGE_MAP)) {
    // Find the category document by name
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      console.log(`⚠️  Category not found: "${categoryName}" — skipping`);
      totalSkipped++;
      continue;
    }

    // Find the product that belongs to this category
    const product = await Product.findOne({ category: category._id });
    if (!product) {
      console.log(`⚠️  Product not found for category: "${categoryName}" — skipping`);
      totalSkipped++;
      continue;
    }

    // Assign images by position (index)
    let changed = false;
    product.subproducts.forEach((sub, i) => {
      if (imageUrls[i]) {
        sub.image = imageUrls[i];
        changed = true;
      }
    });

    if (changed) {
      await product.save();
      console.log(`✅ Updated "${categoryName}" — ${product.subproducts.length} subproducts`);
      totalUpdated++;
    } else {
      console.log(`ℹ️  No changes for "${categoryName}"`);
    }
  }

  console.log(`\n🎉 Done! Updated: ${totalUpdated} products, Skipped: ${totalSkipped}`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});