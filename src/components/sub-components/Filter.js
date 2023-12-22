import React from "react";

function Filter({ type, value, additionalText, setFilters, filters }) {
  const updateFilter = (type, value) => {
    let key = type.toLowerCase();
    const updatedFilters = filters.map((filter) => {
      if (Object.keys(filter)[0] === key) {
        let index = filter[key].indexOf(value);
        if (index >= 0) {
          filter[key].splice(index, 1);
          return { [key]: [...filter[key]] };
        }
        return { [key]: [...filter[key], value] };
      }
      return filter;
    });
    setFilters(updatedFilters);
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold text-sm">{type}</h3>
      <div className="flex flex-col">
        {value.map((v, index) => (
          <label key={index} className="flex gap-2 cursor-pointer">
            <input type="checkbox" onChange={(e) => updateFilter(type, v)} />
            {additionalText && additionalText}
            {v}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filter;
