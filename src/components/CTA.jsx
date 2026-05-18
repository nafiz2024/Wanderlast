
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="px-4 pb-18 sm:px-6 lg:px-8">
      <div
        className="relative mx-auto flex min-h-[220px] max-w-[1220px] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-12 text-center sm:min-h-[280px] sm:px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8, 18, 22, 0.52), rgba(8, 18, 22, 0.52)), url('/assets/CTA.png')",
        }}
      >
        <div className="relative z-10 max-w-[780px]">
          <h2 className="text-[32px] leading-none font-light tracking-[-0.045em] text-white sm:text-[52px]">
            Ready To Start Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[13px] text-white/80 sm:text-[15px]">
            Join thousands of travelers who have discovered the world with us
          </p>

          <Link
            href="/destination"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.05em] text-[#161616] transition-colors hover:bg-[#f3f3f3]"
          >
            <span>Book Your Trip Today</span>
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
