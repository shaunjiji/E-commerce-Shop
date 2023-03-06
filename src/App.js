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
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
            Sneaker Company
          </h2>
          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-slate-600 mb-10 leading-relax">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-wrap items-center justify-between">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>
            <p className="text-slate-600 text-sm">
              <s>$250</s>
            </p>
          </div>
          <div className="mt-10">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow">
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
            <div className="text-center mx-auto block">
              <button className="flex items-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5">
                <AiOutlineShoppingCart /> Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
