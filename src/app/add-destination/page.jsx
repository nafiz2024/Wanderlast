"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiCalendar, FiChevronDown, FiPlus, FiX } from "react-icons/fi";
import Navbar from "@/components/Navbar";

const inputClassName =
  "h-11 w-full border border-[#e7edf3] bg-[#f7fafc] px-3.5 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#a4adba] focus:border-[#15A1BF] focus:bg-white";

const AddDestinationPage = () => {
  const departureDateRef = useRef(null);
  const router = useRouter();

  const handleOpenDatePicker = () => {
    if (!departureDateRef.current) {
      return;
    }

    departureDateRef.current.showPicker?.();
    departureDateRef.current.focus();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const res = await fetch("http://localhost:5000/destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destination),
    });

    if (!res.ok) {
      throw new Error(`Failed to add destination: ${res.status}`);
    }

    router.push("/destination");
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-9"
      style={{
        backgroundImage:
          "linear-gradient(rgba(12, 23, 26, 0.34), rgba(12, 23, 26, 0.34)), url('/assets/Banner.png')",
      }}
    >
      <div className="absolute inset-x-0 top-0 z-20">
        <Navbar />
      </div>

      <div className="mx-auto max-w-[1240px]">
        <h1 className="pt-24 text-[28px] font-normal tracking-tight text-white sm:text-[32px] md:pt-28 md:text-[36px]">
          Add New Travel Package
        </h1>

        <div className="mx-auto mt-10 max-w-[684px] border border-[#ececec] bg-white px-4 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:mt-14 sm:px-7 sm:py-7 md:px-8">
          <form onSubmit={onSubmit} className="space-y-4.5">
            <div>
              <label
                htmlFor="destinationName"
                className="mb-2 block text-[11px] font-medium tracking-tight text-[#111827]"
              >
                Destination Name
              </label>
              <input
                id="destinationName"
                name="destinationName"
                type="text"
                placeholder="Bali Paradise"
                className={inputClassName}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-[11px] font-medium tracking-tight text-[#111827]"
                >
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Indonesia"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-[11px] font-medium tracking-tight text-[#111827]"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    defaultValue=""
                    className={`${inputClassName} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Beach
                    </option>
                    <option value="beach">Beach</option>
                    <option value="mountain">Mountain</option>
                    <option value="city">City</option>
                    <option value="adventure">Adventure</option>
                    <option value="cultural">Cultural</option>
                    <option value="luxury">Luxury</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#9aa4b2]">
                    <FiChevronDown className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-[11px] font-medium tracking-tight text-[#111827]"
                >
                  Price (USD)
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="e.g., 1299"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="mb-2 block text-[11px] font-medium tracking-tight text-[#111827]"
                >
                  Duration
                </label>
                <input
                  id="duration"
                  name="duration"
                  type="text"
                  placeholder="e.g., 7 Days/6 Nights"
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="departureDate"
                className="mb-2 block text-[11px] font-medium tracking-tight text-[#111827]"
              >
                Departure Date
              </label>
              <div className="relative">
                <input
                  id="departureDate"
                  ref={departureDateRef}
                  name="departureDate"
                  type="date"
                  className={`${inputClassName} pr-11`}
                />
                <button
                  type="button"
                  aria-label="Open calendar"
                  onClick={handleOpenDatePicker}
                  className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-[#9aa4b2] transition-colors hover:text-[#15A1BF]"
                >
                  <FiCalendar className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="imageUrl"
                className="mb-2 block text-[11px] font-medium tracking-tight text-[#111827]"
              >
                Image URL
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-[11px] font-medium tracking-tight text-[#111827]"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe the travel experience..."
                className="h-36 w-full resize-none border border-[#e7edf3] bg-[#f7fafc] px-3.5 py-3 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#a4adba] focus:border-[#15A1BF] focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap justify-end gap-3 pt-3">
              <Link
                href="/"
                className="inline-flex h-10 items-center justify-center gap-1.5 border border-[#ff9e9e] px-4 text-xs font-medium text-[#f25a5a] transition-colors hover:bg-[#fff5f5]"
              >
                <FiX className="h-3.5 w-3.5" />
                Cancel
              </Link>
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center gap-1.5 bg-[#15A1BF] px-4 text-xs font-medium text-white transition-colors hover:bg-[#1189a3]"
              >
                <FiPlus className="h-3.5 w-3.5" />
                Add Travel Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDestinationPage;
