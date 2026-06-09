import React from "react";
import "./About.css";
import warehouseImg from "../assets/a.jpg";

const About = () => {
  return (
    <div className="about-page">

      {/* ── Hero Section ── */}
      <section className="about-hero">
        <p className="about-eyebrow">ABOUT HEALTHHUB SOLUTION</p>
        <h1 className="about-hero-title">
          A modern distributor<br />
          for India's healthcare<br />
          ecosystem.
        </h1>
        <p className="about-hero-desc">
          Founded with a simple mission — make high-quality medical and healthcare
          products accessible to every hospital, clinic, pharmacy and household in the
          country.
        </p>
      </section>

      {/* ── Distribution Built on Trust ── */}
      <section className="about-trust">
        <div className="about-trust-img">
          <img src={warehouseImg} alt="HealthHub Warehouse" />
        </div>
        <div className="about-trust-content">
          <h2>Distribution built on trust.</h2>
          <p>
            From orthopedic supports and surgical disposables to baby and adult
            care, we partner only with manufacturers who meet stringent quality
            standards — so the products you receive are always the ones you can
            rely on.
          </p>
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <span className="stat-number">9+</span>
              <span className="stat-label">CATEGORIES</span>
            </div>
            <div className="about-stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">PRODUCTS</span>
            </div>
            <div className="about-stat-card">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">B2B CLIENTS</span>
            </div>
            <div className="about-stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">QUALITY VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="about-story">
        <div className="about-story-content">
          <p className="about-eyebrow">OUR STORY</p>
          <h2>Built from the ground up for India's healthcare needs.</h2>
          <p>
            HealthHub Solution was founded by a team of healthcare distribution
            veterans who saw firsthand the gap between quality manufacturers and
            the clinics, hospitals, and households that needed their products.
          </p>
          <p>
            We set out to build a distribution company that prioritised
            reliability, quality, and trust above all else. Today, we serve over
            1,200 B2B clients across India, providing them with the medical
            supplies they need to deliver better care.
          </p>
        </div>
        <div className="about-story-values">
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              Make high-quality healthcare products accessible to every medical
              facility and household across India.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To be India's most trusted healthcare distribution partner, known
              for reliability, quality, and exceptional service.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">⭐</div>
            <h3>Our Values</h3>
            <p>
              Quality, integrity, and partnership guide every decision we make
              and every relationship we build.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Partner With Us ── */}
      <section className="about-why">
        <p className="about-eyebrow">WHY PARTNER WITH US</p>
        <h2>Everything you need from a healthcare distributor.</h2>
        <div className="about-why-grid">
          <div className="why-card">
            <div className="why-icon">✓</div>
            <h3>Quality Assured</h3>
            <p>
              Every product in our catalogue meets strict quality standards. We
              vet all manufacturers before onboarding them.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🚚</div>
            <h3>Reliable Supply Chain</h3>
            <p>
              Consistent stock availability and timely deliveries so you never
              face shortages when it matters most.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">💰</div>
            <h3>Competitive Pricing</h3>
            <p>
              Direct manufacturer relationships mean better prices for you,
              with volume discounts for wholesale partners.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🤝</div>
            <h3>Dedicated Support</h3>
            <p>
              Our team is available to assist with orders, queries, and
              after-sales support every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <div className="about-cta-text">
            <h2>Ready to partner with us?</h2>
            <p>
              Join over 1,200 healthcare businesses that trust HealthHub Solution
              for their medical supply needs.
            </p>
          </div>
          <div className="about-cta-buttons">
            <a href="/contact" className="btn-cta-primary">Get a Quote</a>
            <a href="/wholesale" className="btn-cta-secondary">Wholesale Info</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
