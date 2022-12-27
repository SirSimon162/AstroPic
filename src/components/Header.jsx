import React from "react";
import { Link } from "react-router-dom";
import { SiStarship } from "react-icons/si";
import ToggleTheme from "./ToggleTheme";

function Header({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral-focus text-neutral-contents overflow-none">
      <div className="container">
        <div className="flex-none px-2">
          <SiStarship className="inline text-3xl pr-2" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
