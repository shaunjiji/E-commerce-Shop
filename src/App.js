import { data } from "./data.js";
import { useState } from "react";
import logo from "./images/logo.svg";

function Navbar() {
  return;
  <>
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
          <button></button>
        </li>
        <li>
          <img src={avatar} alt="" />
        </li>
      </ul>
    </div>
  </>;
}

function App() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <h1>{data.length}</h1>
    </>
  );
}

export default App;
