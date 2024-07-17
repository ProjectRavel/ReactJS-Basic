import { useEffect, useState } from "react";
import Product from "../components/Fragment/Products";
import NavigationProduct from "../components/Elements/navigation/navigationProducts";
import { getProduct } from "../services/product.service";

function ProductPages() {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart;
  });

  const [products, setproducts] = useState([])

  const HandleAddToCart = (itemProduct) => {
    const existingItem = cart.find((item) => item.name === itemProduct.title);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === itemProduct.title
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          name: itemProduct.title,
          price: itemProduct.price,
          qty: 1,
        },
      ]);
    }
  };


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart.length);
  }, [cart]);


  useEffect(() => {
    getProduct(data => {
      setproducts(data)
    })
  }, [])

  console.log(products)

  return (
    <>
      <NavigationProduct />
      <div className="mx-auto py-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id}>
              <Product.image src={product.image} id={product.id} />
              <Product.body
                Title={product.title}
                brand={product.category}
                price={product.price}
                onClick={() => HandleAddToCart(product)}
              >
                {product.description}
              </Product.body>
            </Product>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-72"></div>
    </>
  );
}

export default ProductPages;
