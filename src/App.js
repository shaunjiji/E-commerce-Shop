import { data } from "./data.js";
import { useState } from "react";
import Navbar from "./components/Navbar.js";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
