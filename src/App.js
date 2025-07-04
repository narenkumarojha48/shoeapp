import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
const url = "https://fakestoreapi.com/products";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  function addTocart(cart) {
    setCart((prev) => [...prev, { ...cart, quantity: 1 }]);
  }
  function removeFromcart(id) {
    setCart((prev) => prev.filter((prod) => prod.id !== id));
  }
  function updateQuantityCart(id, updateType) {
    let newitem = cart.map((itm) => {
      if (itm.id === id) {
        if (updateType === "INC") {
          return { ...itm, quantity: itm.quantity + 1 };
        }
        if (updateType === "DEC") return { ...itm, quantity: itm.quantity - 1 };
      }
      return itm;
    });
    setCart(newitem);
  }
  console.log(cart);
  return (
    <div className="App">
      <section>
        <NavBar />
      </section>
      <main className="main">
        <section className="productlist">
          <ProductList
            products={products}
            addTocart={addTocart}
            removeFromcart={removeFromcart}
          />
        </section>
        <section className="cartcontainer">
          <Cart
            cart={cart}
            removeFromcart={removeFromcart}
            updateQuantityCart={updateQuantityCart}
            totalPrice={totalPrice}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
