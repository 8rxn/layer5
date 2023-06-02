import React from "react";

import SEO from "../../../components/seo";
import Footer from "../../../sections/General/Footer";
import GithubActionsPage from "../../../sections/Github-actions";
const Actions = ({ location }) => {
  return (
    <>
      <GithubActionsPage />
      <Footer location={location} />
    </>
  );
};
export default Actions;
export const Head = () => {
  return (
    <SEO
      title="Github Actions"
      description="Using SMP specs on your CI/CD pipelines with Meshery's GitHub Actions and MeshMap GitHub Action."
      image="/images/meshery-logo-dark-text.png"
    />
  );
};
