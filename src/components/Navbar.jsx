import Image from "next/image";
import logo from "@/../public/assets/Wanderlast.png";
import Link from "next/link";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="font-medium hover:text-[#15A1BF] focus:text-[#15A1BF]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/destination"
          className="font-medium hover:text-[#15A1BF] focus:text-[#15A1BF]"
        >
          Destinations
        </Link>
      </li>
      <li>
        <Link
          href="/myBookings"
          className="font-medium hover:text-[#15A1BF] focus:text-[#15A1BF]"
        >
          My Bookings
        </Link>
      </li>
      <li>
        <Link
          href="/add-destination"
          className="font-medium hover:text-[#15A1BF] focus:text-[#15A1BF]"
        >
          Admin
        </Link>
      </li>
    </>
  );

  const accountLinks = (
    <>
      <li>
        <Link
          href="/profile"
          className="font-medium hover:text-[#15A1BF] focus:text-[#15A1BF]"
        >
          Profile
        </Link>
      </li>
      <li>
        <Link
          href="/signin"
          className="font-medium hover:text-[#15A1BF] focus:text-[#15A1BF]"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          href="/signup"
          className="font-medium hover:text-[#15A1BF] focus:text-[#15A1BF]"
        >
          Register
        </Link>
      </li>
    </>
  );

  const mobileNavLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/destination">Destinations</Link>
      </li>
      <li>
        <Link href="/contact">My Bookings</Link>
      </li>
      <li>
        <Link href="/add-destination">Admin</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
    </>
  );

  return (
    <div className="p-3 sm:p-4">
      <div className="max-lg:collapse w-full rounded-md bg-white text-[#0C0B0B] shadow-sm">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar min-h-[68px] px-4 sm:px-6">
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-4 xl:gap-5">{navLinks}</ul>
          </div>
          <div className="navbar-start lg:hidden">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost h-10 min-h-10 w-10 p-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="navbar-center lg:flex-1">
            <Link href="/">
              <Image
                src={logo}
                alt="Wanderlast Logo"
                width={162}
                height={24}
                className="h-auto w-[128px] sm:w-[152px] lg:w-[162px]"
              />
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-4 xl:gap-5">{accountLinks}</ul>
          </div>
          <div className="navbar-end lg:hidden"></div>
        </div>

        <div className="collapse-content z-1 border-t border-[#f1f1f1] px-4 pb-4 pt-2 lg:hidden">
          <ul className="menu flex gap-1 text-[14px]">{mobileNavLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
