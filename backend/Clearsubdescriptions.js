const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://healthhubadmin:Ky2UHSF2xzPGfC7j@healthhub-cluster.unzpab5.mongodb.net/healthhub?retryWrites=true&w=majority";

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
        desc: String,
        image: String,
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

async function run() {
  await mongoose.connect(MONGO_URI);
  console.log("✅ Connected to MongoDB");

  const products = await Product.find();
  let totalUpdated = 0;

  for (const product of products) {
    let changed = false;
    product.subproducts.forEach((sub) => {
      if (sub.description || sub.desc) {
        sub.description = "";
        sub.desc = "";
        changed = true;
      }
    });
    if (changed) {
      await product.save();
      console.log(`✅ Cleared descriptions for: ${product.name}`);
      totalUpdated++;
    }
  }

  console.log(`\n🎉 Done! Cleared descriptions in ${totalUpdated} products.`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});