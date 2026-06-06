const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Category = require("./models/Category");
const Product = require("./models/Product");

const connectDB = require("./config/db");

const seedData = [
  {
    category: { name: "Feminine Hygiene Care", description: "Premium feminine hygiene and wellness essentials.", image: "" },
    product: {
      name: "Feminine Hygiene Care",
      brand: "Dreamease",
      description: "Premium feminine hygiene and wellness essentials.",
      subproducts: [
        { name: "Disposable Period Panty", description: "Comfortable & leak-proof" },
        { name: "Sanitary Pads Ultra Soft XL with Wings", description: "Ultra soft, XL with wings" },
        { name: "Panty Liners (155mm & 185mm)", description: "Available in 155mm & 185mm" },
        { name: "Menstrual Cup (Small, Medium & Large)", description: "Small, Medium & Large sizes" },
        { name: "Intimate Wash Natural Sulfate Free", description: "Natural, sulfate free formula" },
        { name: "Period Relax & Relief Cream", description: "Soothing relief cream" },
        { name: "Pregnancy Test Kit", description: "Fast & accurate results" },
      ]
    }
  },
  {
    category: { name: "Baby Care", description: "Dermatologically safe baby hygiene products.", image: "" },
    product: {
      name: "Baby Care",
      brand: "Dreamease",
      description: "Dermatologically safe baby hygiene products.",
      subproducts: [
        { name: "Baby Diapers Pant Style (NB, S, M, L & XL)", description: "Soft & gentle on baby skin" },
        { name: "Baby Wipes Regular 99% Water Based", description: "99% water based, hypoallergenic" },
        { name: "Baby Wipes Honey", description: "Gentle honey formula" },
      ]
    }
  },
  {
    category: { name: "Adult Incontinence", description: "Comfort-focused adult care and protection solutions.", image: "" },
    product: {
      name: "Adult Incontinence",
      brand: "Dreamease",
      description: "Comfort-focused adult care and protection solutions.",
      subproducts: [
        { name: "Adult Pant Diaper Standard (M, L & XL)", description: "Comfortable standard fit" },
        { name: "Adult Pant Diaper Premium (M, L & XL)", description: "Premium protection & comfort" },
        { name: "Adult Tape Diaper Premium (M, L & XL)", description: "Secure tape closure" },
        { name: "Underpad Sheet Regular", description: "Absorbent regular underpad" },
        { name: "Underpad Sheet with Sticking Release Tape", description: "With sticking release tape" },
      ]
    }
  },


  {
    category: { name: "Medical Disposables / Surgical", description: "Hospital-grade disposable and surgical products.", image: "" },
    product: {
      name: "Medical Disposables / Surgical",
      brand: "Aurum Care",
      description: "Hospital-grade disposable and surgical products.",
      subproducts: [
  { name: "Au-Fix Infusion Set (Classic & Ultra)", description: "Classic & Ultra variants" },
  { name: "Au-Safe Disposable Syringes", description: "Safe single-use syringes" },
  { name: "Au-Flon IV Cannula", description: "Smooth IV cannula insertion" },
  { name: "Scalp Vein Set", description: "Precision scalp vein set" },
  { name: "Urine Bag (Classic, Premium, Superior & with Urometer)", description: "Multiple variants available" },
  { name: "2-Way Foley Balloon Catheter", description: "2-way balloon catheter" },
  { name: "Oxygen Mask", description: "Standard oxygen delivery mask" },
  { name: "Nebulizer Mask", description: "For nebulization therapy" },
  { name: "Au-Care Surgical Gloves", description: "Sterile surgical gloves" },
]
    }
  },
  {
    category: { name: "Wound Care & Cotton", description: "Cotton, gauze, bandages and wound care essentials.", image: "" },
    product: {
      name: "Wound Care & Cotton",
      brand: "Wellness Surgical / Kramson",
      description: "Cotton, gauze, bandages and wound care essentials.",
      subproducts: [
  { name: "Absorbent Cotton (Wellness Surgical)", description: "Premium absorbent cotton" },
  { name: "Absorbent Cotton (Kramson)", description: "Premium absorbent cotton" },
  { name: "Roller Bandage", description: "Standard roller bandage" },
  { name: "Gauze Than / Bandage Than", description: "Gauze cloth bandage roll" },
  { name: "Crepe Bandage", description: "Standard crepe bandage" },
  { name: "Premium Crepe Bandage", description: "Premium crepe bandage" },
  { name: "Microporous Paper Tape", description: "Gentle microporous tape" },
  { name: "Cannula Fixer", description: "Secure cannula fixation" },
  { name: "Gauze Swabs (Sterile)", description: "Sterile gauze swabs" },
  { name: "Elastic Adhesive Bandage", description: "Elastic adhesive bandage" },
  { name: "POP Bandages (Plaster Of Paris)", description: "Plaster of paris bandage" },
]
    }
  },
  {
    category: { name: "Orthopaedic Supports & Braces", description: "Orthopaedic rehabilitation and support products.", image: "" },
    product: {
      name: "Orthopaedic Supports & Braces",
      brand: "Samson",
      description: "Orthopaedic rehabilitation and support products.",
      subproducts: [
  { name: "Cervical Orthosis (Philadelphia)", description: "CH,S,M,L,XL" },
  { name: "Cervical Collar Soft with Support", description: "S,M,L,XL" },
  { name: "Cervical Collar Soft (Firm Density)", description: "S,M,L,XL" },
  { name: "Cervical Collar (Hard Adjustable)", description: "S,M,L,XL" },
  { name: "Abdominal Support 9\"/22.5cm", description: "S,M,L,XL,XXL" },
  { name: "Tummy Trimmer/Abdominal Support 8\"/20cm", description: "S,M,L,XL,XXL" },
  { name: "Abdominal Belt", description: "S,M,L,XL,XXL" },
  { name: "Ash-Brace (Hyper Extension Brace)", description: "UNIVERSAL" },
  { name: "Hernia Belt", description: "UNIVERSAL,SPL" },
  { name: "Scrotal Support", description: "UNIVERSAL,SPL" },
  { name: "Pelvic Binder", description: "S,M,L,XL,XXL" },
  { name: "Rib-Belt", description: "S,M,L,XL,XXL" },
  { name: "Chest Binder", description: "S,M,L,XL,XXL" },
  { name: "Abdominal Corset (AB-Core)", description: "S,M,L,XL,XXL" },
  { name: "Hip Corset (Mini Shaper)", description: "S,M,L,XL,XXL" },
  { name: "Thigh Corset (Smart Shaper)", description: "S,M,L,XL,XXL" },
  { name: "Contoured Lumbo Sacral Support", description: "S,M,L,XL,XXL" },
  { name: "Contoured Lumbo Sacral Support Eco", description: "S,M,L,XL,XXL" },
  { name: "Lumbo Sacral Belt (Lumbomed) (Neoprene)", description: "UNIVERSAL,SPL" },
  { name: "Lumbo Sacral Belt", description: "S,M,L,XL" },
  { name: "Lumbo Sacral Belt (Double Support)", description: "S,M,L,XL,XXL" },
  { name: "Lumbo Sacral Belt (Double Support)", description: "S,M,L,XL,XXL" },
  { name: "Lumbo-Corset", description: "UNIVERSAL,SPL" },
  { name: "Taylor's Brace", description: "UNIVERSAL,SPL" },
  { name: "Lumbo Sacral Belt (Double Support) (Black)", description: "S,M,L,XL,XXL" },
  { name: "Contoured Lumbo Sacral Support (Black)", description: "S,M,L,XL,XXL" },
  { name: "Lumbo Lacepull Brace", description: "S,M,L,XL,XXL" },
  { name: "Posture Support (Sleek)", description: "S,M,L,XL,XXL" },
  { name: "Posture Corrector", description: "CH,S,M,L,XL" },
  { name: "Lacepull LS Belt", description: "S,M,L,XL,XXL" },
]
    }
  },
  {
    category: { name: "Fracture Aids", description: "Immobilization and fracture management products.", image: "" },
    product: {
      name: "Fracture Aids",
      brand: "Samson",
      description: "Immobilization and fracture management products.",
      subproducts: [
  { name: "Universal Shoulder Immobilizer", description: "CH,UNI,SPL" },
  { name: "Elastic Shoulder Immobilizer", description: "S,M,L,XL,XXL" },
  { name: "Shoulder Support", description: "UNIVERSAL,SPL" },
  { name: "Clavicle Brace", description: "CH,S,M,L,XL,XXL" },
  { name: "Arm Sling Pouch (Baggy)", description: "CH,S,M,L,XL,XXL" },
  { name: "Pouch Arm Sling (Tropical)", description: "CH,S,M,L,XL,XXL" },
  { name: "Arm Immobilizer (Adjustable)", description: "UNIVERSAL" },
  { name: "Cast Shoes", description: "CH,S,M,L,XL" },
  { name: "Cast Cover Arm", description: "UNIVERSAL" },
  { name: "Cast Cover Leg", description: "UNIVERSAL" },
  { name: "Shoulder Abduction Pillow", description: "UNIVERSAL" },
  { name: "Arm Sling Strap", description: "UNIVERSAL" },
  { name: "Humerus Brace", description: "UNIVERSAL" },
  { name: "Heel Of-loading Shoes", description: "S,M,L,XL" },
  { name: "ForeFoot Of-loading Shoes", description: "S,M,L,XL" },
]
    }
  },
  {
    category: { name: "Knee Support / Braces", description: "Comprehensive knee support and bracing solutions.", image: "" },
    product: {
      name: "Knee Support / Braces",
      brand: "Samson",
      description: "Comprehensive knee support and bracing solutions.",
      subproducts: [
  { name: "Knee Brace/Immobilizer Long Type 19\"/48cm", description: "S,M,L,XL,XXL" },
  { name: "Knee Brace/Immobilizer Short Type 14\"/36cm", description: "CH,S,M,L,XL,XXL" },
  { name: "Elastic Knee Support", description: "S,M,L,XL,XXL" },
  { name: "Knee Brace/Immobilizer Long Type 22\"/56cm", description: "S,M,L,XL,XXL" },
  { name: "Knee Cap Soft (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Knee Cap (Open Patella)", description: "S,M,L,XL,XXL" },
  { name: "Knee Cap Rigid Hinged (Nylon Hinges)", description: "S,M,L,XL,XXL" },
  { name: "Knee Cap Hinged (Aluminium Hinges)", description: "S,M,L,XL,XXL" },
  { name: "Knee Cap Hinged with Patella Gel Pad", description: "S,M,L,XL,XXL" },
  { name: "Knee Cap with Patella Ring (Single)", description: "S,M,L,XL,XXL" },
  { name: "Knee Support Hinged Dry-Tex", description: "S,M,L,XL,XXL" },
  { name: "R.O.M Knee Brace 18\"/46cm", description: "UNIVERSAL" },
  { name: "Knee Support (Dry-Tex)", description: "UNIVERSAL,SPL" },
  { name: "Knee Cap Furo (Pair)", description: "S,M,L,XL,XXL" },
  { name: "R.O.M Knee Brace Height Adjustable", description: "UNIVERSAL" },
  { name: "Gel Knee Cushion (For Prayers) (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Functional Knee Support", description: "S,M,L,XL,XXL" },
]
    }
  },
  {
    category: { name: "Ankle Support / Braces", description: "Ankle support, braces and splints for all needs.", image: "" },
    product: {
      name: "Ankle Support / Braces",
      brand: "Samson",
      description: "Ankle support, braces and splints for all needs.",
      subproducts: [
  { name: "Ankle Binder", description: "S,M,L,XL" },
  { name: "Anklet (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Foot Drop Splint (Right/Left) (With Liner)", description: "CH,S,M,L,XL" },
  { name: "Ankle Splint", description: "UNIVERSAL" },
  { name: "Ankle Brace", description: "CH,S,M,L,XL" },
  { name: "PF Night Splint", description: "S,M,L" },
  { name: "Dorsal Night Splint", description: "S,M,L,XL" },
  { name: "Ankle Support with Binder", description: "S,M,L,XL,XXL" },
  { name: "Air Ankle Splint", description: "UNIVERSAL" },
  { name: "Gel Ankle Splint", description: "UNIVERSAL" },
  { name: "Foot Walker Boot (with Airway)", description: "S,M,L" },
  { name: "R.O.M Foot Walker Boot", description: "S,M,L" },
  { name: "Foot Walker Boot Short (with Airway)", description: "CH,S,M,L" },
  { name: "Anklet (Furo) (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Anklet with Silicone Pad (Single)", description: "S,M,L,XL,XXL" },
]
    }
  },
  {
    category: { name: "Thigh & Calf Support / Varicose Vein Compression Stockings", description: "Compression supports and medical stockings.", image: "" },
    product: {
      name: "Thigh & Calf Support / Varicose Vein Compression Stockings",
      brand: "Samson",
      description: "Compression supports and medical stockings for circulation care.",
      subproducts: [
  { name: "Thigh Support (Pair)", description: "S,M,L,XL,XXL sizes" },
  { name: "Calf Support (Pair)", description: "S,M,L,XL,XXXL sizes" },
  { name: "Medical Compression Stockings Thigh High Class-II AG (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Medical Compression Stockings Knee High Class-II AD (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Anti-Embolism Stockings/DVT Thigh High AG (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Arthritis Compression Gloves", description: "S,M,L,XL" },
  { name: "Lymphedema Arm Sleeve (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Graduated Compression Socks (Pair)", description: "S,M,L,XL" },
  { name: "Graduated Compression Socks (Ankle Size) (Pair)", description: "UNIVERSAL" },
  { name: "Medical Compression Stockings Thigh High Class-I AG (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Medical Compression Stockings Knee High Class-I AD (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Varicose Vein Stockings Classic (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Varicose Vein Stockings Below Knee Classic (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Compression Garment Face Open Hood", description: "UNIVERSAL,SPL" },
      ]
    }
  },
  {
    category: { name: "Surgical Dressing", description: "Professional surgical dressing products.", image: "" },
    product: {
      name: "Surgical Dressing",
      brand: "Samson",
      description: "Professional surgical dressing products.",
      subproducts: [
  { name: "Kinesiology Therapeutic Tape", description: "Therapeutic kinesiology tape" },
  { name: "SAM CREPE Cotton Crepe Bandage", description: "Cotton crepe bandage" },
  { name: "SAM PLAST Elastic Adhesive Bandage", description: "Elastic adhesive bandage" },
  { name: "SAM FIX Cannula Fixator", description: "Secure cannula fixation" },
]
    }
  },
  {
    category: { name: "Sport Gear", description: "Sports supports and gym protection products.", image: "" },
    product: {
      name: "Sport Gear",
      brand: "Samson Sport",
      description: "Sports supports and gym protection products.",
      subproducts: [
  { name: "Abdominal Support", description: "UNIVERSAL,SPL" },
  { name: "Lumbo Sacral Support (With Silicon Pad)", description: "UNIVERSAL,SPL" },
  { name: "Weight Lifting Belt", description: "S,M,L,XL,XXL,3XL" },
  { name: "Knee Support (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Knee Support (Neoprene)", description: "UNIVERSAL" },
  { name: "Knee Support With Strap", description: "S,M,L,XL,XXL" },
  { name: "Weight Lifting Knee Strap (Pair)", description: "UNIVERSAL" },
  { name: "Wrist Wrap With Thumb Loop (Pair)", description: "UNIVERSAL" },
  { name: "Wrist Support With Thumb Loop (Neoprene) (Pair)", description: "UNIVERSAL" },
  { name: "Tennis Elbow / Golf Support", description: "UNIVERSAL" },
  { name: "Elbow Support With Strap", description: "S,M,L,XL,XXL" },
  { name: "Ankle Support With Strap", description: "S,M,L,XL,XXL" },
  { name: "Ankle Support (Neoprene)", description: "UNIVERSAL" },
  { name: "Shoulder Support", description: "UNIVERSAL,SPL" },
  { name: "Finger Support (Pack Of 10)", description: "UNIVERSAL" },
  { name: "Samgrip Gym Gloves", description: "S,M,L,XL" },
  { name: "Yoga Mat TPE", description: "6mm" },
  { name: "Dual Patella Support", description: "UNIVERSAL" },
  { name: "Knee Pad", description: "S,M,L,XL,XXL" },
  { name: "Knee Support Copper Fit (Pair)", description: "S,M,L,XL,XXL" },
]
    }
  },
  {
    category: { name: "Junior / Paediatric Range", description: "Healthcare and orthopaedic products for children.", image: "" },
    product: {
      name: "Junior / Paediatric Range",
      brand: "Samson Junior",
      description: "Healthcare and orthopaedic products for children.",
      subproducts: [
  { name: "Cervical Orthosis (Philadelphia)", description: "CH" },
  { name: "Cervical Collar Soft (Firm Density)", description: "CH" },
  { name: "Universal Shoulder Immobilizer", description: "CH" },
  { name: "Clavicle Brace", description: "CH" },
  { name: "Arm Sling Pouch", description: "CH" },
  { name: "Foot Drop Splint (R/L) with Liner", description: "CH" },
  { name: "Ankle Brace", description: "CH" },
  { name: "Foot Walker Boot Short (with Airway)", description: "CH" },
  { name: "Wrist Splint (Ambidextrous)", description: "CH" },
  { name: "Thumb Spica Splint", description: "CH" },
  { name: "Knee Brace / Immobilizer (Short Type)", description: "CH" },
  { name: "Knee Wrap Hinged", description: "CH" },
  { name: "Skin Traction Set (PUF Liner)", description: "CH" },
  { name: "Arch Support (PU Gel) (Pair)", description: "CH" },
  { name: "Flat Foot Insole Paediatric (Pair)", description: "CH" },
  { name: "Pavlik Harness", description: "S,M,L" },
]
    }
  },
  {
    category: { name: "Wrist & Forearm Support / Splints", description: "Supportive wrist, forearm, elbow and thumb braces.", image: "" },
    product: {
      name: "Wrist & Forearm Support / Splints",
      brand: "Samson",
      description: "Supportive wrist, forearm, elbow and thumb braces.",
     subproducts: [
  { name: "Wrist Splint (Ambidextrous)", description: "CH,S,M,L,XL" },
  { name: "Cock-Up (Wrist & ForeArm Splint) (Ambidextrous)", description: "S,M,L,XL" },
  { name: "Forearm Splint", description: "UNIVERSAL" },
  { name: "Wrist Brace with Double Lock", description: "UNIVERSAL" },
  { name: "Wrist Brace with Thumb Support", description: "UNIVERSAL" },
  { name: "Tennis Elbow Support", description: "UNIVERSAL" },
  { name: "Thumb Spica Splint", description: "UNIVERSAL" },
  { name: "Hand Resting Splint (Left/Right)", description: "UNIVERSAL" },
  { name: "Wrist Thumb Brace with Silicone Pad (Pair)", description: "S,L" },
  { name: "Palm Brace", description: "S,M,L,XL" },
  { name: "Wrist Splint with Thumb", description: "S,M,L,XL" },
  { name: "Elbow Support with Strap", description: "S,M,L,XL" },
  { name: "R.O.M Elbow Brace (Right/Left)", description: "UNIVERSAL" },
  { name: "Tourniquet", description: "S,M,L" },
  { name: "Tennis Elbow Support (Furo) (Pair)", description: "S,M,L,XL,XXL" },
  { name: "Tennis Elbow Brace with Silicone Pad", description: "S,M,L,XL" },
]
    }
  },
 
  {
    category: { name: "Finger Splints", description: "Finger protection and rehabilitation splints.", image: "" },
    product: {
      name: "Finger Splints",
      brand: "Samson",
      description: "Finger protection and rehabilitation splints.",
      subproducts: [
        { name: "Finger Cot", description: "S,M,L" },
        { name: "Finger Extension Splint", description: "S,M,L" },
        { name: "Mallet Finger Splint", description: "UNIVERSAL" },
      ]
    }
  },

  {
    category: { name: "Physiotherapy & Rehabilitation", description: "Recovery, rehabilitation and physiotherapy aids.", image: "" },
    product: {
      name: "Physiotherapy & Rehabilitation",
      brand: "Samson",
      description: "Recovery, rehabilitation and physiotherapy aids.",
      subproducts: [
  { name: "Cervical Pillow (Round)", description: "UNIVERSAL" },
  { name: "Cervical Pillow (Regular)", description: "UNIVERSAL" },
  { name: "Cervical Pillow (Contoured)", description: "UNIVERSAL" },
  { name: "Cervical Pillow (Memory Foam)", description: "UNIVERSAL" },
  { name: "Cervical Pillow (Travel)", description: "UNIVERSAL" },
  { name: "Tailbone Support (Coccyx Cushion)", description: "UNIVERSAL" },
  { name: "Lumbo-Back Rest (Moulded Foam)", description: "UNIVERSAL" },
  { name: "Ring Seat Pillow", description: "UNIVERSAL" },
  { name: "Coccyx Cushion Seat", description: "UNIVERSAL" },
  { name: "Hospital Back Rest (Patient Bed Back Support)", description: "UNIVERSAL" },
  { name: "Anatomic Pillow", description: "UNIVERSAL" },
  { name: "Lumbo Back Rest (Short)", description: "UNIVERSAL" },
  { name: "Knee Rest Pillow", description: "UNIVERSAL" },
  { name: "Foot Rest Pillow", description: "UNIVERSAL" },
  { name: "Neck Corrector & Relaxer", description: "UNIVERSAL" },
  { name: "Weight Cuff", description: "1/2 Kg, 1 Kg, 2 Kg" },
  { name: "Exercising Gel Ball (TPR) Egg Shape", description: "LIGHT,HEAVY" },
  { name: "Exercising Ball (PU)", description: "UNIVERSAL" },
  { name: "Hot & Cold Pack", description: "M/L" },
  { name: "Sam Band (Resistance Band)", description: "O/G/B" },
  { name: "Hip Resistance Band", description: "UNIVERSAL" },
  { name: "Ice Bag", description: "UNIVERSAL" },
  { name: "Cool Pack", description: "S/L" },
  { name: "Hot & Cold Eye Mask", description: "UNIVERSAL" },
  { name: "Cool Eyes", description: "UNIVERSAL" },
  { name: "Hand Gripper", description: "UNIVERSAL" },
  { name: "Adjustable Hand Gripper", description: "UNIVERSAL" },
  { name: "Wrist & Arm Exerciser", description: "UNIVERSAL" },
  { name: "Piano Finger Exerciser", description: "UNIVERSAL" },
  { name: "Silicone Finger Exerciser", description: "UNIVERSAL" },
  { name: "Gel Exercise Ball (Round Shape)", description: "UNIVERSAL" },
  { name: "Anti Burst Gym Ball", description: "UNIVERSAL" },
]
    }
  },
  {
    category: { name: "Walking Aids & Mobility", description: "Mobility assistance and rehabilitation equipment.", image: "" },
    product: {
      name: "Walking Aids & Mobility",
      brand: "Samson",
      description: "Mobility assistance and rehabilitation equipment.",
      subproducts: [
  { name: "Commode Stool", description: "UNIVERSAL" },
  { name: "Commode Chair", description: "UNIVERSAL" },
  { name: "Walking Stick (Soft Top Handle)", description: "UNIVERSAL" },
  { name: "Foldable Stick", description: "UNIVERSAL" },
  { name: "Quadra Stick", description: "UNIVERSAL" },
  { name: "Elbow Crutch Adjustable", description: "UNIVERSAL" },
  { name: "Walker Invalids's (HD)", description: "UNIVERSAL" },
  { name: "Walker Invalid's Front Wheel (HD)", description: "UNIVERSAL" },
  { name: "Axillary Crutch (Pair)", description: "UNIVERSAL" },
  { name: "Walking Stick Quadripod", description: "UNIVERSAL" },
  { name: "Wheel Chair", description: "UNIVERSAL" },
  { name: "Wheel Chair with Commode", description: "UNIVERSAL" },
  { name: "Electric Wheel Chair", description: "UNIVERSAL" },
  { name: "Spirometer", description: "UNIVERSAL" },
  { name: "Nebuliser", description: "UNIVERSAL" },
  { name: "Heating Pad Ortho", description: "REGULAR/XL" },
  { name: "Ortho Healing Gel AG", description: "UNIVERSAL" },
  { name: "Air Mattress", description: "UNIVERSAL" },
]
    }
  },
];

const seed = async () => {
  await connectDB();

  console.log("🌱 Starting seed...");

  // Clear existing data
  await Category.deleteMany({});
  await Product.deleteMany({});
  console.log("🗑️ Cleared existing categories and products");

  for (const item of seedData) {
    // Create category
    const category = await Category.create(item.category);
    console.log(`✅ Created category: ${category.name}`);

    // Create product under that category
    await Product.create({
      ...item.product,
      category: category._id,
    });
    console.log(`📦 Created product: ${item.product.name}`);
  }

  console.log("🎉 Seed completed successfully!");
  process.exit(0);
};

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});