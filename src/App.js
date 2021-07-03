import "./styles.css";
import { ProductListing, Filters, Nav } from "./Components";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-page">
        <Filters />
        <ProductListing />
      </div>
    </div>
  );
}
