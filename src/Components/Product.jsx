export function Product({
  name,
  Image,
  original_price,
  discount,
  Overall_Price,
  sizes,
  brand,
  Ideal_for
}) {
  return (
    <div className="card">
      <img className="image" src={Image} alt="product" />
      <h2 className="brand_name">{brand}</h2>
      <p>{name}</p>
      <div className="prices">
        <h3>₹{Overall_Price}</h3>
        <span className="original-price"> ₹{Math.floor(original_price)}</span>
        <span className="discount">{discount}% off</span>
      </div>
      <div className="flex">
        <h4 className="brand_name">Size: </h4>
        <span>{sizes.map((size) => size + ",")}</span>
      </div>
      <div className="flex">
        <h4 className="brand_name">For: </h4>
        {Ideal_for === "M" ? (
          <span>Men</span>
        ) : Ideal_for === "F" ? (
          <span>Women</span>
        ) : (
          <span>Unisex</span>
        )}
      </div>
    </div>
  );
}
