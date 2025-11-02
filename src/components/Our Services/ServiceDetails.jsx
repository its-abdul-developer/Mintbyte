import { useParams } from "react-router-dom";
import MutualFund from "./MutualFund";
import StockTrading from "./StockTrading";
import PMS from "./PMS";
import Alternative from "./Alternative";
import NPS from "./NPS";
import Auxillaryofferings from "./Auxillaryofferings";
import EstatePlaning from "./EstatePlaning";
import LoanProduct from "./LoanProduct";
import Insurance from "./Insurance";


const ServiceDetails = () => {
  const { slug } = useParams();

  switch (slug) {
    case "mutual-fund":
      return <MutualFund />;
    case "stock-trading":
      return <StockTrading />;
    case "portfolio-management":
      return <PMS />;
    case "alternative-investment":
      return <Alternative />;
    case "nps":
      return <NPS />;
    case "estate-planing":
      return <EstatePlaning />;
    case "loan-product":
      return <LoanProduct />;
    case "insurance":
      return <Insurance />;
    case "auxillary-offerings":
      return <Auxillaryofferings/>;
    default:
      return <h1>Service Not Found</h1>;
  }
};

export default ServiceDetails;
