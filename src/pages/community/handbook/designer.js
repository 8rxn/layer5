import React from "react";

import SEO from "../../../components/seo";
import Designers from "../../../sections/Community/Handbook/designer";
import Footer from "../../../sections/General/Footer";


const Faq = ({ location }) => {
  return (
    <>
      <Designers />
      <Footer location={location} />
    </>
  );
};
export default Faq;
export const Head = () => {
  return  <SEO title="Designer Program" description="Join the Meshery project website redesign and video-based content creation initiative to showcase your skills and build your portfolio in collaboration with the team." />;
};