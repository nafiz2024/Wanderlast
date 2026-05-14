import {
  FiChevronDown,
} from "react-icons/fi";
import { getDestinationsData } from "@/lib/data";
import DestinationCard from "@/components/DestinationCard";

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

        <div className="grid gap-0 sm:grid-cols-2 xl:grid-cols-3">
          {["CATEGORY", "PRICE RANGE", "SORT BY"].map((label, index) => (
            <button
              key={label}
              type="button"
              className={`flex h-[46px] items-center justify-between border border-[#d9d9d9] bg-white px-4 text-left text-[12px] font-normal tracking-[0.01em] text-[#8c8c8c] ${
                index > 0 ? "sm:border-l-0 xl:border-l-0" : ""
              }`}
            >
              <span>{label}</span>
              <FiChevronDown className="h-4 w-4 text-[#9a9a9a]" />
            </button>
          ))}
        </div>

        <p className="mt-3 text-[13px] text-[#7b7b7b]">
          Showing {destinations.length} destinations
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          <DestinationCard destinations={destinations} />
        </div>
      </div>
    </section>
  );
}
