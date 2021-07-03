export function getSortedData(sortBy, Products) {
  if (sortBy.length > 1) {
    if (sortBy === "HIGH_TO_LOW") {
      const updatedProducts = [...Products].sort(
        (a, b) => b["Overall_Price"] - a["Overall_Price"]
      );
      return updatedProducts;
    } else {
      const updatedProducts = [...Products].sort(
        (a, b) => a["Overall_Price"] - b["Overall_Price"]
      );
      return updatedProducts;
    }
  } else return Products;
}
export function filterData(filterSize, filterBrand, filterSex, Products) {
  let updatedProducts = [];
  if (filterBrand.length > 0) {
    updatedProducts = [...Products].filter((prod) =>
      filterBrand.includes(prod.brand)
    );
  }
  if (filterSex.length > 0) {
    updatedProducts = [...Products].filter((prod) =>
      filterSex.includes(prod.Ideal_for)
    );
  }
  if (filterSize.length > 0) {
    updatedProducts = [...Products].filter((product) => {
      let flag = false;
      filterSize.forEach((size) => {
        if (product.sizes.includes(size)) {
          flag = true;
        }
      });
      return flag;
    });
  }
  if (
    filterSex.length === 0 &&
    filterBrand.length === 0 &&
    filterSize.length === 0
  )
    return Products;
  return updatedProducts;
}
