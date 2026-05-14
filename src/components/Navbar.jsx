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
          href="/destinations"
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
          href="/admin"
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
          href="/login"
          className="font-medium hover:text-[#15A1BF] focus:text-[#15A1BF]"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          href="/register"
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
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
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
    <div className="px-4">
      <div className="max-lg:collapse bg-white text-[#0C0B0B] shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar px-6">
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-5">{navLinks}</ul>
          </div>
          <div className="navbar-center">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
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
            <Link href="/">
              <Image
                src={logo}
                alt="Wanderlast Logo"
                width={162}
                height={24}
                className="mr-2"
              />
            </Link>
          </div>
          <div className="navbar-end  hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-5">{accountLinks}</ul>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu flex gap-5">{mobileNavLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
