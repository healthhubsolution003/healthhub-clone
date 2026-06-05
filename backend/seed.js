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
        { name: "Cervical Orthosis (Philadelphia)", description: "Rigid cervical orthosis" },
        { name: "Cervical Collar Soft with Support", description: "Soft collar with support" },
        { name: "Cervical Collar Soft (Firm Density)", description: "Firm density soft collar" },
        { name: "Cervical Collar (Hard Adjustable)", description: "Hard adjustable collar" },
        { name: "Abdominal Support 9\"/22.5cm", description: "Abdominal support belt" },
        { name: "Lumbo Sacral Belt", description: "Standard lumbo sacral belt" },
        { name: "Posture Corrector", description: "Posture correction brace" },
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
        { name: "Universal Shoulder Immobilizer", description: "CH, UNI, SPL sizes" },
        { name: "Elastic Shoulder Immobilizer", description: "S, M, L, XL, XXL sizes" },
        { name: "Clavicle Brace", description: "CH, S, M, L, XL, XXL sizes" },
        { name: "Arm Sling Pouch (Baggy)", description: "CH, S, M, L, XL, XXL sizes" },
        { name: "Cast Shoes", description: "CH, S, M, L, XL sizes" },
        { name: "Humerus Brace", description: "Universal size" },
        { name: "Heel Off-loading Shoes", description: "S, M, L, XL sizes" },
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
        { name: "Knee Brace/Immobilizer Long Type 19\"/48cm", description: "S, M, L, XL, XXL sizes" },
        { name: "Elastic Knee Support", description: "S, M, L, XL, XXL sizes" },
        { name: "Knee Cap Soft (Pair)", description: "S, M, L, XL, XXL sizes" },
        { name: "Knee Cap Open Patella", description: "S, M, L, XL, XXL sizes" },
        { name: "Knee Cap Rigid Hinged (Nylon Hinges)", description: "S, M, L, XL, XXL sizes" },
        { name: "R.O.M Knee Brace 18\"/46cm", description: "Universal size" },
        { name: "Functional Knee Support", description: "S, M, L, XL, XXL sizes" },
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
        { name: "Ankle Binder", description: "S, M, L, XL sizes" },
        { name: "Anklet (Pair)", description: "S, M, L, XL, XXL sizes" },
        { name: "Foot Drop Splint Right/Left with Liner", description: "CH, S, M, L, XL sizes" },
        { name: "Ankle Brace", description: "CH, S, M, L, XL sizes" },
        { name: "Air Ankle Splint", description: "Universal size" },
        { name: "Foot Walker Boot with Airway", description: "S, M, L sizes" },
        { name: "R.O.M Foot Walker Boot", description: "S, M, L sizes" },
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
        { name: "Medical Compression Stockings Thigh High Class-I", description: "S,M,L,XL,XXL" },
        { name: "Anti-Embolism Stockings/DVT Thigh High", description: "S,M,L,XL,XXL" },
        { name: "Arthritis Compression Gloves", description: "S,M,L,XL" },
        { name: "Graduated Compression Socks (Pair)", description: "S,M,L,XL" },
        { name: "Varicose Vein Stockings Classic (Pair)", description: "S,M,L,XL,XXL" },
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
        { name: "Abdominal Support", description: "Core abdominal support" },
        { name: "Lumbo Sacral Support", description: "Lower back support" },
        { name: "Weight Lifting Belt", description: "Gym weight lifting belt" },
        { name: "Knee Support (Pair)", description: "Active knee support pair" },
        { name: "Wrist Wrap with Thumb Loop (Pair)", description: "Wrist wrap & thumb loop" },
        { name: "Ankle Support With Strap", description: "Ankle support with strap" },
        { name: "Yoga Mat TPE", description: "Eco-friendly TPE yoga mat" },
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
        { name: "Cervical Orthosis Philadelphia (Child)", description: "Paediatric cervical support" },
        { name: "Clavicle Brace (Child)", description: "Paediatric clavicle brace" },
        { name: "Arm Sling Pouch (Child)", description: "Comfortable arm sling" },
        { name: "Foot Drop Splint (Child)", description: "Foot drop correction splint" },
        { name: "Knee Brace Immobilizer (Child)", description: "Knee immobilizer brace" },
        { name: "Flat Foot Insole Paediatric (Child)", description: "Flat foot correction insole" },
        { name: "Pavlik Harness", description: "Hip dysplasia harness" },
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
        { name: "Cock-Up ForeArm Splint (Ambidextrous)", description: "S,M,L" },
        { name: "Wrist Brace with Double Lock", description: "UNIVERSAL" },
        { name: "Tennis Elbow Support", description: "UNIVERSAL" },
        { name: "Thumb Spica Splint", description: "UNIVERSAL" },
        { name: "R.O.M Elbow Brace (Right/Left)", description: "UNIVERSAL" },
        { name: "Tennis Elbow Brace with Silicone Pad", description: "S,M,L" },
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
        { name: "Cervical Pillow Round", description: "UNIVERSAL" },
        { name: "Cervical Pillow Memory Foam", description: "UNIVERSAL" },
        { name: "Tailbone Support Coccyx Cushion", description: "UNIVERSAL" },
        { name: "Hot & Cold Pack", description: "M/L" },
        { name: "Sam Band Resistance Band", description: "O/G/B" },
        { name: "Hand Gripper", description: "UNIVERSAL" },
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
        { name: "Walking Stick Soft Top Handle", description: "UNIVERSAL" },
        { name: "Elbow Crutch Adjustable", description: "UNIVERSAL" },
        { name: "Walker Invalid's HD", description: "UNIVERSAL" },
        { name: "Wheelchair Standard", description: "UNIVERSAL" },
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