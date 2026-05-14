import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCalendar,
  FiCheck,
  FiEdit2,
  FiMapPin,
  FiStar,
  FiX,
} from "react-icons/fi";
import { getDestinationById } from "@/lib/data";
import { EditDestinationModal } from "@/components/EditDestinationModal";
import { DeleteDestinationCard } from "@/components/DeleteDestinationCard";

const getDurationText = (duration) => {
  const numericDuration = Number(duration);

  if (!Number.isNaN(numericDuration) && numericDuration > 0) {
    return `${numericDuration} Days / ${Math.max(numericDuration - 1, 0)} Nights`;
  }

  return duration || "Flexible stay";
};

const formatDepartureDate = (date) => {
  if (!date) {
    return "Date to be announced";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};

const DestinationsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const destination = await getDestinationById(id);

  return (
    <section className="bg-white px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/destination"
            className="inline-flex items-center gap-2 text-[13px] text-[#7f7f7f] transition-colors hover:text-[#1f1f1f]"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Destinations</span>
          </Link>

          <div className="flex items-center gap-3">
            <EditDestinationModal destination={destination} />
            <DeleteDestinationCard destination={destination} />
          </div>
        </div>

        <div className="relative mt-7 aspect-[2.1/1] overflow-hidden bg-[#eef2f5]">
          <Image
            src={destination.imageUrl}
            alt={destination.destinationName || "Destination image"}
            fill
            priority
            quality={100}
            unoptimized
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 90vw, 1160px"
            className="object-cover"
          />
        </div>

        <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_310px]">
          <div>
            <div className="flex items-center gap-1.5 text-[12px] text-[#8e8e8e]">
              <FiMapPin className="h-3.5 w-3.5" />
              <span>{destination.country || "Unknown"}</span>
            </div>

            <h1 className="mt-3 text-[40px] leading-[1.04] font-extralight tracking-[-0.045em] text-[#1f1f1f] sm:text-[56px]">
              {destination.destinationName || "Untitled Destination"}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-[#6d6d6d]">
              <div className="flex items-center gap-1.5">
                <FiStar className="h-3.5 w-3.5 fill-[#16a34a] text-[#16a34a]" />
                <span className="font-semibold text-[#1f1f1f]">4.9</span>
                <span>(234 reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCalendar className="h-3.5 w-3.5 text-[#1f1f1f]" />
                <span className="font-medium text-[#1f1f1f]">
                  {getDurationText(destination.duration)}
                </span>
              </div>
            </div>

            <div className="mt-11">
              <h2 className="text-[22px] font-medium tracking-[-0.03em] text-[#1f1f1f]">
                Overview
              </h2>
              <p className="mt-4 max-w-[720px] text-[13px] leading-7 text-[#777777]">
                {destination.description ||
                  "No description available for this destination yet."}
              </p>
            </div>
          </div>

          <aside className="h-fit border border-[#ececec] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <p className="text-[11px] text-[#9a9a9a]">Starting from</p>
            <p className="mt-2 text-[38px] leading-none font-bold text-[#19a7c6]">
              ${destination.price || "0"}
            </p>
            <p className="mt-1 text-[12px] text-[#8d8d8d]">per person</p>

            <div className="mt-6 border border-[#e6e6e6] bg-[#fafafa] px-4 py-3.5 text-[13px] text-[#686868]">
              {formatDepartureDate(destination.departureDate)}
            </div>

            <Link
              href="/myBookings"
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 bg-[#24a3bd] text-[13px] font-bold text-white transition-colors hover:bg-[#1f94ac]"
            >
              <span>Book Now</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <div className="mt-6 space-y-3 text-[12px] text-[#7a7a7a]">
              <div className="flex items-start gap-2">
                <FiCheck className="mt-0.5 h-3.5 w-3.5 text-[#2fb36d]" />
                <span>Free cancellation up to 7 days</span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheck className="mt-0.5 h-3.5 w-3.5 text-[#2fb36d]" />
                <span>Travel insurance included</span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheck className="mt-0.5 h-3.5 w-3.5 text-[#2fb36d]" />
                <span>24/7 customer support</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default DestinationsDetailsPage;
