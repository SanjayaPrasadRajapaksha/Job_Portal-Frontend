import { Route, Routes } from "react-router-dom";
import AdministrationOffice from "../pages/Categories/AdministrationOffice";
import AgricultureEnvironment from "../pages/Categories/AgricultureEnvironment";
import ArtsDesign from "../pages/Categories/ArtsDesign";
import AutomotiveServices from "../pages/Categories/AutomotiveServices";
import ConstructionRealEstate from "../pages/Categories/ConstructionRealEstate";
import CustomerService from "../pages/Categories/CustomerService";
import EducationTraining from "../pages/Categories/EducationTraining";
import EnergyUtilities from "../pages/Categories/EnergyUtilities";
import FinanceAccounting from "../pages/Categories/FinanceAccounting";
import GovernmentService from "../pages/Categories/GovernmentService";
import HardwareTechnicalSupport from "../pages/Categories/HardwareTechnicalSupport";
import HealthcareNursing from "../pages/Categories/HealthcareNursing";
import HospitalityTourism from "../pages/Categories/HospitalityTourism";
import HumanResources from "../pages/Categories/HumanResources";
import LegalCompliance from "../pages/Categories/LegalCompliance";
import LogisticsSupplyChain from "../pages/Categories/LogisticsSupplyChain";
import ManufacturingProduction from "../pages/Categories/ManufacturingProduction";
import MechanicalCivilEngineering from "../pages/Categories/MechanicalCivilEngineering";
import NGOSocialWork from "../pages/Categories/NGOSocialWork";
import Other from "../pages/Categories/Other";
import RetailFashion from "../pages/Categories/RetailFashion";
import SalesMarketing from "../pages/Categories/SalesMarketing";
import ScienceRD from "../pages/Categories/ScienceRD";
import SkilledTrades from "../pages/Categories/SkilledTrades";
import SoftwareDevelopment from "../pages/Categories/SoftwareDevelopment";
import SportsRecreation from "../pages/Categories/SportsRecreation";
import Telecommunications from "../pages/Categories/Telecommunications";

export default function CategoryRoutes() {
  return (
    <Routes>
      <Route path="/categories/software-development" element={<SoftwareDevelopment />} />
      <Route path="/categories/hardware-technical-support" element={<HardwareTechnicalSupport />} />
      <Route path="/categories/mechanical-civil-engineering" element={<MechanicalCivilEngineering />} />
      <Route path="/categories/healthcare-nursing" element={<HealthcareNursing />} />
      <Route path="/categories/finance-accounting" element={<FinanceAccounting />} />
      <Route path="/categories/sales-marketing" element={<SalesMarketing />} />
      <Route path="/categories/human-resources" element={<HumanResources />} />
      <Route path="/categories/administration-office" element={<AdministrationOffice />} />
      <Route path="/categories/customer-service" element={<CustomerService />} />
      <Route path="/categories/education-training" element={<EducationTraining />} />
      <Route path="/categories/legal-compliance" element={<LegalCompliance />} />
      <Route path="/categories/construction-real-estate" element={<ConstructionRealEstate />} />
      <Route path="/categories/manufacturing-production" element={<ManufacturingProduction />} />
      <Route path="/categories/logistics-supply-chain" element={<LogisticsSupplyChain />} />
      <Route path="/categories/retail-fashion" element={<RetailFashion />} />
      <Route path="/categories/hospitality-tourism" element={<HospitalityTourism />} />
      <Route path="/categories/science-rd" element={<ScienceRD />} />
      <Route path="/categories/arts-design" element={<ArtsDesign />} />
      <Route path="/categories/government-service" element={<GovernmentService />} />
      <Route path="/categories/ngo-social-work" element={<NGOSocialWork />} />
      <Route path="/categories/skilled-trades" element={<SkilledTrades />} />
      <Route path="/categories/telecommunications" element={<Telecommunications />} />
      <Route path="/categories/agriculture-environment" element={<AgricultureEnvironment />} />
      <Route path="/categories/automotive-services" element={<AutomotiveServices />} />
      <Route path="/categories/energy-utilities" element={<EnergyUtilities />} />
      <Route path="/categories/sports-recreation" element={<SportsRecreation />} />
      <Route path="/categories/other" element={<Other />} />
    </Routes>
  );
}
