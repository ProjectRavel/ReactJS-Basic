import { useState } from "react";
import Product from "../components/Fragment/Product";
import ProductData from "../assets/ProductData/ProductData";
import NavigationProduct from "../components/Elements/navigation/navigationProducts";
import Counter from "../components/Fragment/Counter";
import DataTable from "./dataTablePage";

function ProductPages() {
  const [cart, setCart] = useState([
    
  ]);

  const HandleAddToCart = (productName) => {
    setCart([
      ...cart,
      {
        name: productName.title,
        qty: 1,
        price: productName.price
      }
    ])
  }

  return (
    <>
      <NavigationProduct />
      <div className="mx-auto py-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ProductData.map((product) => (
            <Product key={product.id}>
              <Product.image src={product.image} />
              <Product.body
                Title={product.title}
                brand={product.brand}
                price={product.price}
                onClick={() => HandleAddToCart(product)}
              >
                {product.desc}
              </Product.body>
            </Product>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-72">
        <Counter />
      </div>
      <DataTable items={cart} />
    </>
  );
}

export default ProductPages;
