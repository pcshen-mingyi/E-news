import Link from "next/link";
import AuthButton from "./AuthButton";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import MobileSearchOverlay from "./MobileSearchOverlay";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-teal">AI E-News</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <NavLinks />
            <SearchBar />
            <AuthButton />
          </div>

          {/* Mobile: search + auth + hamburger menu */}
          <div className="md:hidden flex items-center gap-1">
            <MobileSearchOverlay />
            <AuthButton />
            <NavLinks mobile />
          </div>
        </div>
      </div>
    </nav>
  );
}
