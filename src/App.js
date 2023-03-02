import { data } from "./data.js";
import { useState } from "react";
import Navbar from "./components/Navbar.js";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <Navbar />
      <section>
        <img src={mainImage} alt=""></img>
        {products.map((product) => (
          <ul key={product.id}>
            <img src={product.thumbnail} alt="" />
          </ul>
        ))}
      </section>
    </>
  );
}

export default App;
