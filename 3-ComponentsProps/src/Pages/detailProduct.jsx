import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { useEffect, useState } from "react";
import NavigationProduct from "../components/Elements/navigation/navigationProducts";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  console.log(product);

  return (
    <>
       <NavigationProduct />
      <div className="mt-12">
        <div className="container mx-auto">
          <h1 className="text-center text-2xl font-medium mb-8">Detail Product:</h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-start md:space-x-8 bg-white p-6 rounded-lg shadow-lg">
            <img src={product.image} alt={product.title} className="w-full md:w-1/3 object-cover rounded-lg" />
            <div className="mt-4 md:mt-0">
              <h1 className="text-3xl font-bold mb-4">{product.title || "Loading..."}</h1>
              <p className="text-gray-700 mb-4">{product.description || ".."}</p>
              <p className="text-xl font-semibold text-green-500 mb-4">Price: ${product.price}</p>
              <p className="text-lg text-gray-500">Category: {product.category || "Uncategorized"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
