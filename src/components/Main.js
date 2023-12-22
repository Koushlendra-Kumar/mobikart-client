import Card from "./sub-components/Card";
import { FilterAltOutlined } from "@mui/icons-material";

function Main({ setShowFilters, products }) {
  return (
    <div className="w-full">
      <div className="lg:hidden md:hidden w-full ml-6 mt-2 flex justify-start items-center">
        <button onClick={(e) => setShowFilters(true)}>
          <FilterAltOutlined /> Filters
        </button>
      </div>

      {products.length > 0 &&
        products.map((product, index) => <Card key={index} {...product} />)}
    </div>
  );
}

export default Main;
