import "./styles.css";
import { ProductListing, Filters } from "./Components";
export default function App() {
  return (
    <div className="App">
      <h1>Flipkart Clone</h1>
      <div className="main-page">
        <Filters />
        <ProductListing />
      </div>
    </div>
  );
}
