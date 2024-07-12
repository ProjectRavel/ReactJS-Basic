import Button from "../Elements/input/button/button";

const Product = ({ children }) => {
  return (
      <div className="max-w-sm w-full h-full bg-slate-100 rounded-lg shadow-2xl shadow-slate-300 hover:shadow-slate-400 transition-all duration-300 p-4 mx-2 flex flex-col justify-between">
        {children}
      </div>
  );
};

const Image = ({ src }) => {
  return (
    <div className="flex justify-center">
      <a href="#">
        <img src={src} alt="" className="p-8 rounded-t-lg h-48 object-cover" />
      </a>
    </div>
  );
};

const Body = ({ Title = "...", brand = "...", price = "...", children }) => {
  return (
    <div className="flex flex-col flex-grow justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-700">{Title}</h2>
        <p className="text-sm text-slate-500">Brand: {brand}</p>
        <p className="text-sm text-slate-500">Price: {price}</p>
        <p className="text-sm text-slate-400 mt-2 mb-4">{children}</p>
      </div>
      <Button variant="blue" name="Add to cart" />
    </div>
  );
};

Product.image = Image;
Product.body = Body;

export default Product;