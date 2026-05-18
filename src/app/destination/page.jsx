import { getDestinationsData } from "@/lib/data";
import DestinationCatalog from "@/components/DestinationCatalog";

export default async function DestinationPage() {
  const destinations = await getDestinationsData();

  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-7">
          <h1 className="text-[34px] leading-[1.15] font-normal tracking-[-0.03em] text-[#1f1f1f] sm:text-[46px]">
            Explore All Destinations
          </h1>
          <p className="mt-3 text-sm text-[#8a8a8a] sm:text-[15px]">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        <DestinationCatalog destinations={destinations} />
      </div>
    </section>
  );
}
