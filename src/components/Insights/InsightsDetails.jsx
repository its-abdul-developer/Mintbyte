import React from "react";
import MarketAnalysis from "../Insights/MarketAnalysis";
import FiniancialAwareness from "./FiniancialAwareness";
import { useParams } from "react-router-dom";
import Blogs from "./Blogs";
const InsightsDetails = () => {
  const { slug } = useParams();

  switch (slug) {
    case "market-analysis":
      return <MarketAnalysis />;
    case "finiancial-awareness":
      return <FiniancialAwareness />;
    case "blogs":
      return <Blogs />;

    default:
  }
  return <h1>Service Not Found</h1>;
};

export default InsightsDetails;
