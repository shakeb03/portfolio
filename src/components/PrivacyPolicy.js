import React from "react";

const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy" className="container" style={{ paddingTop: 60, color: "var(--lightest-slate)", fontFamily: "NTR, sans-serif" }}>
      <h1 className="title">Privacy Policy</h1>
      <p className="intro">
        Welcome to the RefuLink Canada. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
      </p>

      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
        </p>
      </section>

      <section id="information-we-collect">
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Email Address</li>
          <li>Full Name</li>
        </ul>
      </section>

      <section id="how-we-use-your-information">
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To create and manage your user account.</li>
          <li>To provide you with updates and resources regarding refugee information in Canada.</li>
          <li>To allow you to edit your profile information and manage your account, including the ability to disable your account if needed.</li>
        </ul>
      </section>

      <section id="data-storage-and-security">
        <h2>4. Data Storage and Security</h2>
        <p>
          We use Firebase Database to store your personal information securely. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section id="disclosure-of-your-information">
        <h2>5. Disclosure of Your Information</h2>
        <p>
          We do not share, sell, rent, or trade your personal information with third parties. Your data is stored securely and is not accessible by any third-party services.
        </p>
      </section>

      <section id="data-retention">
        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account is active or as needed to provide you with our services. If you choose to disable your account, your information will be retained for a reasonable period as required by applicable laws.
        </p>
      </section>

      <section id="your-rights">
        <h2>7. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information at any time.
        </p>
      </section>

      <section id="changes-to-this-privacy-policy">
        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;