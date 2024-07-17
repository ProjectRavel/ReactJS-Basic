import Button from "../Elements/input/button/button";
import { Link } from "react-router-dom";

const Product = ({ children }) => {
 
  return (
    <div className="max-w-sm w-full h-full bg-slate-100 rounded-lg shadow-2xl shadow-slate-300 hover:scale-110 transition-all duration-300 p-4 mx-2 flex flex-col justify-between cursor-pointer">
      {children}
    </div>
  );
};

const Image = ({ src, id }) => {
  return (
    <div className="flex justify-center">
      <Link to= {`./${id}`}>
        <img src={src} alt="" className="p-8 rounded-t-lg h-48 object-cover" />
      </Link>
    </div>
  
  );
};

const Body = ({ Title = "...", brand = "...", price = "...", onClick, children }) => {
  return (
    <div className="flex flex-col flex-grow justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-700">{Title}...</h2>
        <p className="text-sm text-slate-500">Brand: {brand}</p>
        <p className="text-sm text-slate-500">
          Price:$   
          {price}
        </p>
        <p className="text-sm text-slate-400 mt-2 mb-4">{children.substring(0, 125)}</p>
      </div>
      <Button variant="blue" name="Add to cart" onClick={onClick}/>
    </div>
  );
};

Product.image = Image;
Product.body = Body;

export default Product;
