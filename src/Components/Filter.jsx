import { useCart } from "../Context/CartContext";
export function Filters() {
  const { dispatch } = useCart();
  return (
    <div className="filters">
      <p
        className="clear-filters"
        onClick={() => {
          dispatch({ type: "CLEAR_FILTERS" });
          document
            .querySelectorAll('input[type="radio" i]')
            .forEach((node) => (node.checked = false));
          document
            .querySelectorAll('input[type="checkbox" i]')
            .forEach((node) => (node.checked = false));
        }}
      >
        Clear Filters
      </p>
      <h2>SORT</h2>
      <label>
        <input
          type="radio"
          name="price"
          value="High to Low"
          onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
        />
        <span>High to Low</span>
      </label>
      <label>
        <input
          type="radio"
          name="price"
          value="Low to High"
          onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
        />
        <span>Low to High</span>
      </label>
      <h2>FILTER</h2>
      <h3>Size</h3>
      <label>
        <input
          type="checkbox"
          name="S"
          value="S"
          onChange={() => dispatch({ type: "FILTER_SIZE", payload: "S" })}
        />
        <span>S</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="M"
          value="M"
          onChange={() => dispatch({ type: "FILTER_SIZE", payload: "M" })}
        />
        <span>M</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="L"
          value="L"
          onChange={() => dispatch({ type: "FILTER_SIZE", payload: "L" })}
        />
        <span>L</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="XL"
          value="XL"
          onChange={() => dispatch({ type: "FILTER_SIZE", payload: "XL" })}
        />
        <span>XL</span>
      </label>
      <h3>Brand</h3>
      <label>
        <input
          type="checkbox"
          name="Louis Philippe"
          value=""
          onChange={() =>
            dispatch({ type: "FILTER_BRAND", payload: "Louis Philippe" })
          }
        />
        <span>Louis Philippe</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="FastColors"
          value="FastColors"
          onChange={() =>
            dispatch({ type: "FILTER_BRAND", payload: "FastColors" })
          }
        />
        <span>FastColors</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="Seven Rocks"
          value="Seven Rocks"
          onChange={() =>
            dispatch({ type: "FILTER_BRAND", payload: "Seven Rocks" })
          }
        />
        <span>Seven Rocks</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="METRONAUT"
          value="METRONAUT"
          onChange={() =>
            dispatch({ type: "FILTER_BRAND", payload: "METRONAUT" })
          }
        />
        <span>METRONAUT</span>
      </label>
      <h3>Ideal For</h3>
      <label>
        <input
          type="checkbox"
          name="Men"
          value="Men"
          onChange={() => dispatch({ type: "FILTER_SEX", payload: "M" })}
        />
        <span>Men</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="Women"
          value="Women"
          onChange={() => dispatch({ type: "FILTER_SEX", payload: "F" })}
        />
        <span>Women</span>
      </label>
    </div>
  );
}
