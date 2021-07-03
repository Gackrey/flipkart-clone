import { Product } from "./Product";
import { useCart } from "../Context/CartContext";
import { getSortedData, filterData } from "./DataFilter";
export function ProductListing() {
  const { Products, sortBy, filterSize, filterBrand, filterSex } = useCart();
  const getSorted = getSortedData(sortBy, Products);
  const getFiltered = filterData(filterSize, filterBrand, filterSex, getSorted);
  return (
    <div>
      <div className="all-prod">
        {getFiltered.length > 0 ? (
          getFiltered.map((prod) => (
            <Product
              name={prod.name}
              Image={prod.Image}
              original_price={prod.original_price}
              discount={prod.discount}
              Overall_Price={prod.Overall_Price}
              sizes={prod.sizes}
              brand={prod.brand}
              Ideal_for={prod.Ideal_for}
            />
          ))
        ) : (
          <h1>No products found</h1>
        )}
      </div>
    </div>
  );
}
