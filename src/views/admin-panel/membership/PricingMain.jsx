// project-imports
import { pricingPlans } from 'data/membership';
import Pricing from 'sections/admin-panel/membership/Pricing';

// =============================|| MEMBERSHIP - PRICING ||============================== //

export default function PricingMainPage() {
  return <Pricing data={pricingPlans} />;
}
