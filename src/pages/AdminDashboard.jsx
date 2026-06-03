import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import CategoriesManager from "./CategoriesManager";
import ProductsManager from "./ProductsManager";

const AdminDashboard = () => {
  const [tab, setTab] = useState("leads");
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) { 
      navigate("/admin"); 
      return; 
    }
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await fetch("https://healthhub-backend-f9g1.onrender.com/api/leads", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 401) {
      localStorage.removeItem("adminToken");
      navigate("/admin");
      return;
    }
    const data = await res.json();
    setLeads(data);
  };

  const updateStatus = async (id, status) => {
    await fetch(`https://healthhub-backend-f9g1.onrender.com
/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status }),
    });
    fetchLeads();
  };

  const logout = () => { localStorage.removeItem("adminToken"); navigate("/admin"); };

  const statusColor = { new: "#e74c3c", contacted: "#f39c12", closed: "#27ae60" };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-logo">🏥 HealthHub</div>
        <nav>
          <button className={tab === "leads" ? "active" : ""} onClick={() => setTab("leads")}>
            📋 Leads & Inquiries
          </button>
          <button className={tab === "categories" ? "active" : ""} onClick={() => setTab("categories")}>
            🗂️ Categories
          </button>
          <button className={tab === "products" ? "active" : ""} onClick={() => setTab("products")}>
            📦 Products
          </button>
        </nav>
        <button className="admin-logout" onClick={logout}>Logout</button>
      </aside>

      <main className="admin-main">
        {tab === "leads" && (
          <div>
            <div className="admin-section-header">
              <h2>Leads & Inquiries</h2>
              <span className="admin-badge">{leads.filter(l => l.status === "new").length} new</span>
            </div>
            <div className="leads-stats">
              <div className="stat-card"><span>{leads.length}</span><p>Total</p></div>
              <div className="stat-card new"><span>{leads.filter(l=>l.status==="new").length}</span><p>New</p></div>
              <div className="stat-card contacted"><span>{leads.filter(l=>l.status==="contacted").length}</span><p>Contacted</p></div>
              <div className="stat-card closed"><span>{leads.filter(l=>l.status==="closed").length}</span><p>Closed</p></div>
            </div>
            <div className="leads-table-wrap">
              <table className="leads-table">
                <thead>
                  <tr>
                    <th>Name</th><th>Phone</th><th>Email</th>
                    <th>Product Interest</th><th>Message</th>
                    <th>Date</th><th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead._id}>
                      <td>{lead.name}</td>
                      <td><a href={`tel:${lead.phone}`}>{lead.phone}</a></td>
                      <td>{lead.email || "—"}</td>
                      <td>{lead.productInterest || "—"}</td>
                      <td className="lead-message">{lead.message || "—"}</td>
                      <td>{new Date(lead.createdAt).toLocaleDateString("en-IN")}</td>
                      <td>
                        <select
                          value={lead.status}
                          style={{ color: statusColor[lead.status] }}
                          onChange={(e) => updateStatus(lead._id, e.target.value)}
                        >
                          <option value="new">🔴 New</option>
                          <option value="contacted">🟡 Contacted</option>
                          <option value="closed">🟢 Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {leads.length === 0 && <div className="no-leads">No inquiries yet.</div>}
            </div>
          </div>
        )}

        {tab === "categories" && (
  <CategoriesManager token={token} />
)}

        {tab === "products" && (
  <ProductsManager token={token} />
)}
      </main>
    </div>
  );
};

export default AdminDashboard;