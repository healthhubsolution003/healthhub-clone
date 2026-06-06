import { useState } from "react";
import "./QuoteModal.css";

const QuoteModal = ({ product, onClose }) => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.phone) return alert("Name and phone are required.");
    setLoading(true);
    try {
      await fetch("https://healthhub-backend-f9g1.onrender.com/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          productInterest: product?.category
        }),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="quote-overlay" onClick={onClose}>
      <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quote-close" onClick={onClose}>✕</button>

        {submitted ? (
          <div className="quote-success">
            <div className="quote-success-icon">✅</div>
            <h3>Inquiry Submitted!</h3>
            <p>We'll get back to you shortly.</p>
            <button className="quote-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2 className="quote-title">Request a Quote</h2>
            {product && (
              <p className="quote-product-name">
  For: <strong>{product.category?.name || product.category}</strong>
</p>
            )}
            <div className="quote-form">
              <input
                name="name"
                placeholder="Your Name *"
                value={form.name}
                onChange={handleChange}
              />
              <input
                name="phone"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message / Quantity / Size..."
                value={form.message}
                onChange={handleChange}
                rows={3}
              />
              <button
                className="quote-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;