import "./styles.css";
import { useEffect, useState } from "react";

const PAGE_SIZE = 10;
export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    // console.log(data);
    if (data && data.products) setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products", products);

  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / PAGE_SIZE)
      setPage(selectedPage);
  };
  return (
    <div className="App">
      {products.length > 0 && (
        <div className="products">
          {products
            .slice(page * PAGE_SIZE - PAGE_SIZE, page * PAGE_SIZE)
            .map((prod) => {
              return (
                <div key={prod.id} className="product-details">
                  <div>
                    <img
                      className="product-image"
                      width={100}
                      height={100}
                      src={prod.thumbnail}
                      alt={prod.title}
                    />
                  </div>
                  <span>{prod.title}</span>
                </div>
              );
            })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectedPageHandler(page - 1)}>◀️</span>
          {[...Array(products.length / PAGE_SIZE)].map((_, i) => {
            return (
              <span
                onClick={() => selectedPageHandler(i + 1)}
                key={i}
                className={page === i + 1 ? "page-selected" : ""}
              >
                {i + 1}
              </span>
            );
          })}
          <span onClick={() => selectedPageHandler(page + 1)}>▶️</span>
        </div>
      )}
    </div>
  );
}
