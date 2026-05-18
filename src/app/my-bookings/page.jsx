import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { FiCalendar, FiEye, FiMapPin, FiTrash2 } from "react-icons/fi";
import { auth } from "@/lib/auth";
import { getBookingsByUserId } from "@/lib/data";
import { DeleteBooking } from "@/components/DeleteBooking";

const formatDepartureDate = (value) => {
  if (!value) {
    return "Date not selected";
  }

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Date not selected";
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getStatusMeta = (booking, index) => {
  const rawStatus = booking?.status?.toLowerCase();

  if (rawStatus === "pending" || index % 3 === 2) {
    return {
      label: "Pending",
      className: "bg-[#fff4df] text-[#f59e0b]",
    };
  }

  return {
    label: "Confirmed",
    className: "bg-[#e9faef] text-[#2ca95f]",
  };
};

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const myBookings = user?.id ? await getBookingsByUserId(user.id) : [];

  return (
    <section className="bg-[#fbfbfb] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <header>
          <h1 className="text-[32px] leading-none font-light tracking-[-0.045em] text-[#161616] sm:text-[44px]">
            My Bookings
          </h1>
          <p className="mt-3 text-[13px] text-[#7b7b7b] sm:text-[14px]">
            Manage and view your upcoming travel plans
          </p>
        </header>

        {myBookings?.length ? (
          <div className="mt-8 space-y-3">
            {myBookings.map((booking, index) => {
              const statusMeta = getStatusMeta(booking, index);

              return (
                <article
                  key={booking._id || `${booking.destinationId}-${index}`}
                  className="border border-[#ececec] bg-white p-3 shadow-[0_3px_10px_rgba(15,23,42,0.03)] sm:p-4"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <div className="relative h-[180px] w-full overflow-hidden bg-[#eef2f5] sm:h-[220px] md:h-[150px] md:w-[250px]">
                      <Image
                        src={booking.imageUrl || "/assets/destinations/image1.png"}
                        alt={booking.destinationName || "Booked destination"}
                        fill
                        sizes="(max-width: 767px) 100vw, 250px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div className="min-w-0">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${statusMeta.className}`}
                        >
                          {statusMeta.label}
                        </span>

                        <h2 className="mt-2 text-[24px] leading-none font-light tracking-[-0.04em] text-[#161616] sm:text-[28px]">
                          {booking.destinationName || "Untitled Destination"}
                        </h2>

                        <div className="mt-4 space-y-2 text-[12px] text-[#747474]">
                          <p className="flex items-center gap-2">
                            <FiCalendar className="h-3.5 w-3.5" />
                            <span>
                              Departure: {formatDepartureDate(booking.departureDate)}
                            </span>
                          </p>
                          <p className="flex items-center gap-2">
                            <FiMapPin className="h-3.5 w-3.5" />
                            <span>
                              Booking ID: {booking._id || booking.destinationId || "N/A"}
                            </span>
                          </p>
                        </div>

                        <p className="mt-4 text-[20px] font-semibold text-[#12a6cc]">
                          ${booking.price || "1299"}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-start gap-2 md:justify-end">
                        <DeleteBooking bookingId={booking._id} />
                        <Link
                          href={booking.destinationId ? `/destination/${booking.destinationId}` : "#"}
                          className="inline-flex h-10 items-center justify-center gap-2 bg-[#1ca7ca] px-5 text-[12px] font-medium text-white transition-colors hover:bg-[#1595b5]"
                        >
                          <FiEye className="h-3.5 w-3.5" />
                          <span>View</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 border border-dashed border-[#d9e1e7] bg-white px-6 py-14 text-center">
            <h2 className="text-[24px] font-light tracking-[-0.03em] text-[#1c1c1c]">
              No bookings yet
            </h2>
            <p className="mt-3 text-[14px] text-[#7d7d7d]">
              Your booked trips will appear here once you confirm a destination.
            </p>
            <Link
              href="/destination"
              className="mt-6 inline-flex h-11 items-center justify-center bg-[#1ca7ca] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#1595b5]"
            >
              Explore Destinations
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookings;
