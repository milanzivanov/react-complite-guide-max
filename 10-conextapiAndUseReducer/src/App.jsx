import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";

import { CartContextProvider } from "./store/shopping-cart-context.jsx";

function App() {
  return (
    // <CartContext.Provider>code hire...</CartContext.Provider> for old versions of the React
    <CartContextProvider>
      <Header />
      {/* component composition */}
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
