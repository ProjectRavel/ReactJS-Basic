import { useEffect, useState } from "react";
import Product from "../components/Fragment/Products";
import NavigationProduct from "../components/Elements/navigation/navigationProducts";
import { getProduct } from "../services/product.service";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

function ProductPages() {
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setproducts(data);
    });
  }, []);

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
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      name: product.title,
                      price: product.price,
                      qty: 1,
                    })
                  )
                }
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
