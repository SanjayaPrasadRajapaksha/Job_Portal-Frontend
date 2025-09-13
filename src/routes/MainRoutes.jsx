import { Route, Routes } from "react-router-dom";


import Company from "../pages/Company/Company";
import Contact from "../pages/Contact/Contact";
import NewJobPost from "../pages/JobPost/NewJobPost";
import Reviews from "../pages/Reviews/Reviews";

import AccountingAuditFinance from "../pages/Categories/AccountingAuditFinance";
import AdministrationOfficeSupport from "../pages/Categories/AdministrationOfficeSupport";
import AgricultureDairyEnvironment from "../pages/Categories/AgricultureDairyEnvironment";
import AllCategories from "../pages/Categories/AllCategories";
import ApparelClothingTextiles from "../pages/Categories/ApparelClothingTextiles";
import BankingInsurance from "../pages/Categories/BankingInsurance";
import BPOKPOOutsourcing from "../pages/Categories/BPOKPOOutsourcing";
import CivilConstructionArchitecture from "../pages/Categories/CivilConstructionArchitecture";
import CorporateManagementAnalysis from "../pages/Categories/CorporateManagementAnalysis";
import CustomerPublicRelations from "../pages/Categories/CustomerPublicRelations";
import EducationTeachingTraining from "../pages/Categories/EducationTeachingTraining";
import EngMechanicalElectricalAuto from "../pages/Categories/EngMechanicalElectricalAuto";
import FashionBeautyLifestyle from "../pages/Categories/FashionBeautyLifestyle";
import HealthcareMedicalNursing from "../pages/Categories/HealthcareMedicalNursing";
import HospitalityFoodBeverage from "../pages/Categories/HospitalityFoodBeverage";
import HumanResourcesTraining from "../pages/Categories/HumanResourcesTraining";
import ImportsExportsTrading from "../pages/Categories/ImportsExportsTrading";
import InternationalDevelopmentNGOs from "../pages/Categories/InternationalDevelopmentNGOs";
import ITInfrastructureNetworking from "../pages/Categories/ITInfrastructureNetworking";
import ITSoftwareDevelopment from "../pages/Categories/ITSoftwareDevelopment";
import LegalCompliance from "../pages/Categories/LegalCompliance";
import LogisticsSupplyChainTransport from "../pages/Categories/LogisticsSupplyChainTransport";
import ManufacturingProduction from "../pages/Categories/ManufacturingProduction";
import MediaAdvertisingCommunications from "../pages/Categories/MediaAdvertisingCommunications";
import QualityAssuranceSupervision from "../pages/Categories/QualityAssuranceSupervision";
import ResearchScienceRD from "../pages/Categories/ResearchScienceRD";
import SalesMarketingMerchandising from "../pages/Categories/SalesMarketingMerchandising";
import SecuritySafety from "../pages/Categories/SecuritySafety";
import SoftwareDevelopment from "../pages/Categories/SoftwareDevelopment";
import SportsFitnessRecreation from "../pages/Categories/SportsFitnessRecreation";
import TelecomsComTechnology from "../pages/Categories/TelecomsComTechnology";
import TravelTourismTicketing from "../pages/Categories/TravelTourismTicketing";


function MainRoutes() {
  return (
    <Routes>
      {/* Redirect root to all categories */}
      <Route path="/" element={<AllCategories />} />

      <Route path="/s" element={<SoftwareDevelopment />} />
  <Route path="/post/new" element={<NewJobPost />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/reviews" element={<Reviews />} />
  <Route path="/company" element={<Company />} />

  {/* Category Routes */}
  <Route path="/categories/accounting-audit-finance" element={<AccountingAuditFinance />} />
  <Route path="/categories/administration-office-support" element={<AdministrationOfficeSupport />} />
  <Route path="/categories/agriculture-dairy-environment" element={<AgricultureDairyEnvironment />} />
  <Route path="/categories/apparel-clothing-textiles" element={<ApparelClothingTextiles />} />
  <Route path="/categories/banking-insurance" element={<BankingInsurance />} />
  <Route path="/categories/bpo-kpo-outsourcing" element={<BPOKPOOutsourcing />} />
  <Route path="/categories/civil-construction-architecture" element={<CivilConstructionArchitecture />} />
  <Route path="/categories/corporate-management-analysis" element={<CorporateManagementAnalysis />} />
  <Route path="/categories/customer-public-relations" element={<CustomerPublicRelations />} />
  <Route path="/categories/education-teaching-training" element={<EducationTeachingTraining />} />
  <Route path="/categories/eng-mechanical-electrical-auto" element={<EngMechanicalElectricalAuto />} />
  <Route path="/categories/fashion-beauty-lifestyle" element={<FashionBeautyLifestyle />} />
  <Route path="/categories/healthcare-medical-nursing" element={<HealthcareMedicalNursing />} />
  <Route path="/categories/hospitality-food-beverage" element={<HospitalityFoodBeverage />} />
  <Route path="/categories/human-resources-training" element={<HumanResourcesTraining />} />
  <Route path="/categories/imports-exports-trading" element={<ImportsExportsTrading />} />
  <Route path="/categories/international-development-ngos" element={<InternationalDevelopmentNGOs />} />
  <Route path="/categories/it-infrastructure-networking" element={<ITInfrastructureNetworking />} />
  <Route path="/categories/it-software-development" element={<ITSoftwareDevelopment />} />
  <Route path="/categories/legal-compliance" element={<LegalCompliance />} />
  <Route path="/categories/logistics-supply-chain-transport" element={<LogisticsSupplyChainTransport />} />
  <Route path="/categories/manufacturing-production" element={<ManufacturingProduction />} />
  <Route path="/categories/media-advertising-communications" element={<MediaAdvertisingCommunications />} />
  <Route path="/categories/quality-assurance-supervision" element={<QualityAssuranceSupervision />} />
  <Route path="/categories/research-science-rd" element={<ResearchScienceRD />} />
  <Route path="/categories/sales-marketing-merchandising" element={<SalesMarketingMerchandising />} />
  <Route path="/categories/security-safety" element={<SecuritySafety />} />
  <Route path="/categories/sports-fitness-recreation" element={<SportsFitnessRecreation />} />
  <Route path="/categories/telecoms-com-technology" element={<TelecomsComTechnology />} />
  <Route path="/categories/travel-tourism-ticketing" element={<TravelTourismTicketing />} />
  <Route path="/categories/all-categories" element={<AllCategories />} />

    </Routes>
  );
}

export default MainRoutes;
