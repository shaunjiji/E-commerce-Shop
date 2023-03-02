import React from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="" />
          <nav>
            <ul className="flex items-center justify-start gap-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex items-center justify-start gap-4">
            <li>
              <button>
                <AiOutlineShoppingCart />
              </button>
            </li>
            <li>
              <img className="w-12" src={avatar} alt="" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
