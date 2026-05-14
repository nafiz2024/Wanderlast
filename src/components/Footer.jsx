const Footer = () => {
  return (
    <footer className="bg-black px-6 py-14 text-gray-400 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Wanderlust
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="mb-3 tracking-wide text-white">NEWSLETTER</h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex items-center bg-gray-800 px-4 py-3">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <span className="text-lg text-white">&rarr;</span>
            </div>
          </div>

          <div>
            <h3 className="mb-3 tracking-wide text-white">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">Destinations</li>
              <li className="cursor-pointer hover:text-white">My Bookings</li>
              <li className="cursor-pointer hover:text-white">My Profile</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 tracking-wide text-white">SUPPORT</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-white">Help Center</li>
              <li className="cursor-pointer hover:text-white">
                Terms of Service
              </li>
              <li className="cursor-pointer hover:text-white">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 tracking-wide text-white">CONTACT US</h3>
            <ul className="space-y-2">
              <li>786 901 1622</li>
              <li>info@wandarland.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row md:items-center">
          <p className="text-sm">&copy; 2026 Wanderlust. All rights reserved.</p>

          <div className="mt-1 flex gap-5 text-lg text-white md:mt-0">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
