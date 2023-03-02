import { data } from "./data.js";
import { useState } from "react";
import logo from "./images/logo.svg";
import avatar from "./images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400">
        <div>
          <img src={logo} alt="" />
          <nav>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul>
            <li>
              <button>
                <AiOutlineShoppingCart />
              </button>
            </li>
            <li>
              <img src={avatar} alt="" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

function App() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
