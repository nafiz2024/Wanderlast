import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import ChooseWanderlust from "@/components/ChooseWanderlust";
import ClientReview from "@/components/ClientReview";
import FeaturedDestinations from "@/components/FeaturedDestinations";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedDestinations />
      <ChooseWanderlust />
      <ClientReview />
      <CTA />
    </div>
  );
}
