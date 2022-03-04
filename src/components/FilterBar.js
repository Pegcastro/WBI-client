import { useEffect, useState } from "react";
import moment from "moment";
import "./FilterBar.css";

const FilterBar = ({
  data,
  setFilteredData,
  brands,
  models,
  dates,
  stores,
}) => {
  const [text, setText] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [date, setDate] = useState("");
  const [store, setStore] = useState("");

  // Listens to changes on every filter
  useEffect(() => {
    const changedData = data.filter((item) => {
      if (
        (item.brand.toLowerCase().includes(text.toLowerCase()) ||
          item.model.toLowerCase().includes(text.toLowerCase()) ||
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.store.toLowerCase().includes(text.toLowerCase())) &&
        item.brand.toLowerCase().includes(brand.toLowerCase()) &&
        item.model.toLowerCase().includes(model.toLowerCase()) &&
        item.date.includes(date) &&
        item.store.toLowerCase().includes(store.toLowerCase())
      ) {
        return item;
      }
    });

    setFilteredData(changedData);
  }, [brand, model, text, date, store]);

  // Handling the brand Select changes
  const brandChangeHandler = (e) => {
    const { value } = e.target;
    setBrand(value || "");
  };

  // Handling the model Select changes
  const modelChangeHandler = (e) => {
    const { value } = e.target;
    setModel(value || "");
  };

  // Handling the text input changes
  const textChangeHandler = (e) => {
    const { value } = e.target;
    setText(value || "");
  };

  // Handling the date Select changes
  const dateChangeHandler = (e) => {
    const { value } = e.target;
    setDate(value || "");
  };

  // Handling the store Select changes
  const storeChangeHandler = (e) => {
    const { value } = e.target;
    setStore(value || "");
  };

  return (
    <div className="filter-container">
      <div className="text-input">
        <label htmlFor="textSearch" style={{ padding: "1em" }}>
          Text Search
        </label>
        <input
          type="text"
          className="form-control"
          id="text"
          value={text}
          onChange={textChangeHandler}
        />
      </div>

      <div className="select-container">
        <div className="select-input-container">
          <label htmlFor="selectInput" style={{ padding: "1em" }}>
            Brands
          </label>
          <select
            className="select-input"
            id="brand"
            onChange={brandChangeHandler}
          >
            <option value="">All</option>
            {brands.map((brand) => (
              <option value={brand} key={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="select-input-container">
          <label htmlFor="selectInput" style={{ padding: "1em" }}>
            Models
          </label>
          <select
            className="select-input"
            id="model"
            onChange={modelChangeHandler}
          >
            <option value="">All</option>
            {models.map((model) => (
              <option value={model} key={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div className="select-input-container">
          <label htmlFor="selectInput" style={{ padding: "1em" }}>
            Launch Dates
          </label>
          <select
            className="select-input"
            id="date"
            onChange={dateChangeHandler}
          >
            <option value="">All</option>
            {dates.map((date) => (
              <option value={date} key={date}>
                {new Date(date).toLocaleDateString()}
              </option>
            ))}
          </select>
        </div>

        <div className="select-input-container">
          <label htmlFor="selectInput" style={{ padding: "1em" }}>
            Stores
          </label>
          <select
            className="select-input"
            id="date"
            onChange={storeChangeHandler}
          >
            <option value="">All</option>
            {stores.map((store) => (
              <option value={store} key={store}>
                {store}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
