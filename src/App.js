import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState([
    { price: [] },
    { brand: [] },
    { memory: [] },
    { processor: [] },
  ]);

  useEffect(() => {
    const makeQueryString = () => {
      let queryString = "";
      filters.forEach((filter) => {
        let key = Object.keys(filter)[0];
        let values = filter[key];
        if (values.length > 0) {
          queryString += key;
          queryString += "=";
          queryString += values.join();
          queryString += "&";
        }
      });
      return queryString.substring(0, queryString.length - 1);
    };
    console.log(makeQueryString());
    axios
      .get(`https://mobikart-webdevkoushal.up.railway.app/products?${makeQueryString()}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [filters]);

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          filters={filters}
          setFilters={setFilters}
        />
        <Main setShowFilters={setShowFilters} products={products} />
      </div>
    </div>
  );
}

export default App;
