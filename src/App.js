import "./App.css";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {

  return (
    <div>
      <h2>Context API in ReactJS</h2>
      <div style={{ display: "flex" }} >

        <Product name="MacBook Pro" price={100000} />
        <Product name="Pendrive" price={4000} />
        <Product name="Smartphone" price={10000} />
      </div>
      <div style={{ margin: "10px" }}>
        <h2>Below is you cart</h2>
        <Cart />
      </div>
    </div>
  );
}

export default App;
