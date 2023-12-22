import React from "react";
import Filter from "./sub-components/Filter";
import { Close } from "@mui/icons-material";

function Sidebar({ showFilters, setShowFilters, filters, setFilters }) {
  return (
    <div
      className={`${
        showFilters ? "absolute top-14 z-30 pb-4 pr-4 bg-white" : "hidden"
      }  md:block lg:block w-fit border-r top-0 pl-8 md:pr-8 lg:pr-16`}
    >
      <div
        className="lg:hidden md:hidden flex w-full justify-end items-center pr-4 cursor-pointer"
        onClick={(e) => setShowFilters(false)}
      >
        <Close />
      </div>
      <Filter
        type={"Price"}
        value={[100, 500, 1000, 1500, 2000]}
        additionalText={"< $"}
        filters={filters}
        setFilters={setFilters}
      />
      <Filter
        type={"Brand"}
        value={["Apple", "Samsung", "OnePlus", "Google"]}
        filters={filters}
        setFilters={setFilters}
      />
      <Filter
        type={"Memory"}
        value={["64GB", "128GB", "256GB", "512GB"]}
        filters={filters}
        setFilters={setFilters}
      />
      <Filter
        type={"Processor"}
        value={["Snapdragon 888", "Google Tensor", "A16 Bionic", "Exynos 990"]}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}

export default Sidebar;
