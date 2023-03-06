import { data } from "./data.js";
import { useState } from "react";
import Navbar from "./components/Navbar.js";

function App() {
  const [products, setProducts] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <article>
          <img src={mainImage} alt="" className="w-9/12 rounded-2xl"></img>

          <ul className="flex item-center justify-start gap-5 flex-wrap mt-5">
            {products.map((product, index) => (
              <li
                key={product.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } border-2 rounded-2xl overflow-hidden`}
              >
                <img src={product.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h1>Lorem ipsum dolor sit amet</h1>
        </article>
      </section>
    </>
  );
}

export default App;
