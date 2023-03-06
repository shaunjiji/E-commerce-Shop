import { data } from "./data.js";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {
  const [products, setProducts] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);

  const { mainImage } = products[value];

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <article>
          <img src={mainImage} alt="" className="w-full rounded-2xl"></img>

          <ul className="flex item-center justify-start gap-5 flex-wrap mt-5">
            {products.map((product, index) => (
              <li
                key={product.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={product.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Sneaker Company</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div>
            <ul>
              <li>$125.00</li>
              <li>50%</li>
            </ul>
            <p>
              <s>$250</s>
            </p>
          </div>
          <div>
            <ul>
              <li>
                <img src={minus} alt=""></img>
              </li>
              <li>
                <img src={amount} alt=""></img>
              </li>
              <li>
                <img src={plus} alt=""></img>
              </li>
            </ul>
            <button>
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
