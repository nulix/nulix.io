"use client";

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setResult("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", "af4c6257-af5e-4b71-a5fb-4e0469eff901");
    formData.append("subject", "New demo request - NULIX");
    formData.append("from_name", "NULIX Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Request sent successfully. We'll get back to you soon.");
        form.reset();
      } else {
        console.error("Web3Forms error:", data);
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Failed to send demo request:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="panel form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          <span>Email</span>
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Company</span>
          <input name="company" type="text" required placeholder="Acme Robotics" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Fleet size</span>
          <select name="fleetSize" required>
            <option value="">Select...</option>
            <option value="1-25">1-25</option>
            <option value="26-100">26-100</option>
            <option value="101-1000">101-1000</option>
            <option value="1000+">1000+</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Use case</span>
          <textarea name="use_case" rows={4} placeholder="Yocto gateways, need staged rollouts + rollback..."></textarea>
        </label>
      </div>
      <button className="btn btn-primary demo-btn" type="submit">Request demo</button>
      {result && <p className="muted" style={{ marginTop: 12, fontSize: 14 }}>{result}</p>}
    </form>
  );
}
