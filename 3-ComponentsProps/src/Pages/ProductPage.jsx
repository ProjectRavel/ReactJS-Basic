import Product from "../components/Fragment/Product";
import ProductData from "../assets/ProductData/ProductData";
import NavigationProduct from "../components/Elements/navigation/navigationProducts";
import Counter from "../components/Fragment/Counter";

console.log(ProductData)

function ProductPages() {
  return (
    <>
    <NavigationProduct />
      <div className="mx-auto py-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ProductData.map((product) => {
            return <Product key={product.id}>
              <Product.image src={product.image}/>
              <Product.body
                Title={product.title}
                brand={product.brand}
                price={product.price}
              >
                {product.desc}
              </Product.body>
            </Product>;
          })}
        </div>
      </div>
      <div className="flex justify-center mb-72">
      <Counter/>
      </div>
    </>
  );
}

export default ProductPages;
