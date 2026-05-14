import Navbar from "@/components/Navbar";

const searchFields = [
  {
    title: "Location",
    value: "Address, City or Zip",
  },
  {
    title: "Date/Duration",
    value: "Anytime/3 Days",
  },
  {
    title: "Budget",
    value: "$0-$3000",
  },
  {
    title: "People",
    value: "5-10",
  },
];

const Banner = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(12, 23, 26, 0.34), rgba(12, 23, 26, 0.34)), url('/assets/Banner.png')",
      }}
    >
      <div className="absolute inset-x-0 top-0 z-20 pt-4">
        <Navbar />
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-1 items-center justify-center px-6 pb-20 pt-32 text-center sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div className="max-w-[1160px]">
          <h1 className="text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-[72px]">
            Discover Your
            <br />
            Next Adventure
          </h1>

          <p className="mx-auto mt-5 max-w-[1120px] text-lg font-normal text-white sm:text-2xl">
            Explore breathtaking destinations and create unforgettable
            memories with our curated travel experiences.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <button className="min-w-[148px] bg-[#12b7ee] px-6 py-3 text-xl font-medium uppercase text-white transition-colors hover:bg-[#0ea6d8]">
              Explore Now
            </button>

            <button className="min-w-[181px] bg-white/35 px-6 py-3 text-xl font-medium uppercase text-white backdrop-blur-[1px] transition-colors hover:bg-white/45">
              View Destination
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white/30 backdrop-blur-[2px]">
        <div className="grid min-h-[72px] w-full grid-cols-1 sm:grid-cols-[1.2fr_1.1fr_1fr_1fr_auto]">
          {searchFields.map((field) => (
            <div
              key={field.title}
              className="flex min-h-[72px] flex-col justify-center border-b border-white/25 px-3 py-2 text-left last:border-b-0 sm:border-r sm:border-b-0 sm:border-white/30"
            >
              <h3 className="text-[14px] font-medium leading-5 text-white">
                {field.title}
              </h3>
              <p className="text-[14px] leading-5 text-white">{field.value}</p>
            </div>
          ))}

          <button className="flex min-h-[72px] items-center justify-center bg-[#14b7ec] px-6 text-[16px] font-medium text-white transition-colors hover:bg-[#0ea6d8]">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
