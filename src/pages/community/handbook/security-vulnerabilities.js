import React from "react";

import SEO from "../../../components/seo";
import SecurityVulnerabilitiesPage from "../../../sections/Community/Handbook/security-vulnerabilities";
import Footer from "../../../sections/General/Footer";


const SecurtyVulnerabilities = ({ location }) => {
  return (
    <>
      <SecurityVulnerabilitiesPage />
      <Footer location={location} />

    </>
  );
};
export default SecurtyVulnerabilities;
export const Head = () => {
  return <SEO title="Securty Vulnerabilities" description="Reporting a vulnerability" />;
};