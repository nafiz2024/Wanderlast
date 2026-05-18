import { getDestinationsData } from "@/lib/data";
import FeaturedDestinationsSlider from "@/components/FeaturedDestinationsSlider";

const FeaturedDestinations = async () => {
  const destinations = await getDestinationsData();

  return <FeaturedDestinationsSlider destinations={destinations} />;
};

export default FeaturedDestinations;
