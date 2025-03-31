import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import NavIcons from "../NavIcons/NavIcons";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = e => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-[#0A0F1E] shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto py-2.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Mission Name */}
          <div>
            <span className="text-gray-300 hover:text-white transition-colors">
              Mission Name
            </span>
          </div>

          {/* Search Bar */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
          />

          {/* NavIcons */}
          <NavIcons />
        </div>
      </nav>
    </header>
  );
};

export default Header;
