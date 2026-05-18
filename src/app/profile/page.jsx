import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { FiArrowUpRight, FiCamera, FiGlobe, FiMapPin } from "react-icons/fi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { LuPlane } from "react-icons/lu";
import { auth } from "@/lib/auth";
import { getBookingsByUserId } from "@/lib/data";

const formatMemberSince = (value) => {
  if (!value) {
    return "Recently joined";
  }

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Recently joined";
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const getCountriesVisited = (bookings) =>
  new Set(
    bookings
      .map((booking) => booking?.country?.trim())
      .filter(Boolean),
  ).size;

const getUpcomingTrips = (bookings) => {
  const now = new Date();

  return bookings.filter((booking) => {
    if (!booking?.departureDate) {
      return false;
    }

    const departureDate = new Date(booking.departureDate);

    if (Number.isNaN(departureDate.getTime())) {
      return false;
    }

    return departureDate >= now;
  }).length;
};

const getTotalSpent = (bookings) =>
  bookings.reduce((total, booking) => {
    const price = Number(booking?.price);

    if (Number.isNaN(price)) {
      return total;
    }

    return total + price;
  }, 0);

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const getInitials = (name) =>
  name
    ?.split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("") || "U";

const statCardClassName =
  "border border-[#ececec] bg-white px-4 py-4 shadow-[0_3px_10px_rgba(15,23,42,0.03)]";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const bookings = user?.id ? await getBookingsByUserId(user.id) : [];
  const totalBookings = bookings.length;
  const countriesVisited = getCountriesVisited(bookings);
  const upcomingTrips = getUpcomingTrips(bookings);
  const totalSpent = getTotalSpent(bookings);

  return (
    <section className="bg-[#fbfbfb] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <header>
          <h1 className="text-[32px] leading-none font-light tracking-[-0.045em] text-[#161616] sm:text-[44px]">
            My Profile
          </h1>
          <p className="mt-3 text-[13px] text-[#7b7b7b] sm:text-[14px]">
            Manage your account settings and travel preferences
          </p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
          <article className="border border-[#ececec] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "Profile avatar"}
                    width={96}
                    height={96}
                    unoptimized
                    className="h-24 w-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1ca7ca] text-[28px] font-semibold text-white">
                    {getInitials(user?.name)}
                  </div>
                )}
                <span className="absolute right-0 bottom-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1ca7ca] text-white shadow-[0_8px_18px_rgba(28,167,202,0.28)]">
                  <FiCamera className="h-3.5 w-3.5" />
                </span>
              </div>

              <h2 className="mt-4 text-[23px] leading-none font-light tracking-[-0.04em] text-[#1a1a1a]">
                {user?.name || "Guest User"}
              </h2>

              <p className="mt-2 flex items-center gap-1.5 text-[12px] text-[#7a7a7a]">
                <FiMapPin className="h-3.5 w-3.5" />
                <span>San Francisco, CA</span>
              </p>
            </div>

            <div className="mt-6 space-y-3 border-t border-[#f0f0f0] pt-5 text-[12px] text-[#757575]">
              <div className="flex items-center justify-between gap-3">
                <span>Member since</span>
                <span className="font-semibold text-[#202020]">
                  {formatMemberSince(user?.createdAt)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Nationality</span>
                <span className="font-semibold text-[#202020]">
                  {countriesVisited ? `${countriesVisited} Countries` : "Traveler"}
                </span>
              </div>
            </div>

            <Link
              href="#"
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 bg-[#1ca7ca] px-4 text-[12px] font-medium text-white transition-colors hover:bg-[#1798b7]"
            >
              <FiCamera className="h-3.5 w-3.5" />
              <span>Edit Profile</span>
            </Link>
          </article>

          <section>
            <h2 className="text-[18px] font-medium tracking-[-0.03em] text-[#1d1d1d]">
              Travel Statistics
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <article className={statCardClassName}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] text-[#8b8b8b]">Total Bookings</p>
                    <p className="mt-3 text-[24px] leading-none font-semibold text-[#1d1d1d]">
                      {totalBookings}
                    </p>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f9fd] text-[#1ca7ca]">
                    <LuPlane className="h-5 w-5" />
                  </span>
                </div>
              </article>

              <article className={statCardClassName}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] text-[#8b8b8b]">Countries Visited</p>
                    <p className="mt-3 text-[24px] leading-none font-semibold text-[#1d1d1d]">
                      {countriesVisited}
                    </p>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e9faef] text-[#2ca95f]">
                    <FiGlobe className="h-5 w-5" />
                  </span>
                </div>
              </article>

              <article className={statCardClassName}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] text-[#8b8b8b]">Upcoming Trips</p>
                    <p className="mt-3 text-[24px] leading-none font-semibold text-[#1d1d1d]">
                      {upcomingTrips}
                    </p>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1df] text-[#f59e0b]">
                    <FiArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </article>

              <article className={statCardClassName}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] text-[#8b8b8b]">Total Spent</p>
                    <p className="mt-3 text-[24px] leading-none font-semibold text-[#1d1d1d]">
                      {formatCurrency(totalSpent)}
                    </p>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ffe7fb] text-[#d946ef]">
                    <HiOutlineCurrencyDollar className="h-5 w-5" />
                  </span>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
