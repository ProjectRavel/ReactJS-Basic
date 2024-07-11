
const ProductData = [
    {
        id: 1,
        title: "Nike Blue Air M1",
        brand: "Nike",
        price: "Rp 680.000",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus similique eum itaque ratione commodi. Debitis nemo adipisci quam fuga eius inventore fugit, illo voluptatum, repellendus voluptatibus aliquid, beatae nobis.",
      },
      {
        id: 2,
        title: "Adidas Ultra Boost",
        brand: "Adidas",
        price: "Rp 900.000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel orci neque. Cras et urna nec dui laoreet fermentum.",
      },
      {
        id: 3,
        title: "Puma RS-X",
        brand: "Puma",
        price: "Rp 750.000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores.",
      },
      {
        id: 4,
        title: "Reebok Classic",
        brand: "Reebok",
        price: "Rp 850.000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, temporibus.",
      },
      {
        id: 5,
        title: "New Balance 990v5",
        brand: "New Balance",
        price: "Rp 1.000.000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, exercitationem.",
      },
      {
        id: 6,
        title: "Asics Gel-Kayano",
        brand: "Asics",
        price: "Rp 950.000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, assumenda.",
      }, 
      {
        id: 7,
        title: "Converse Chuck Taylor",
        brand: "Converse",
        price: "Rp 650.000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, odit.",
      },
      {
        id: 8,
        title: "Vans Old Skool",
        brand: "Vans",
        price: "Rp 600.000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quod.",
      },
      {
        id: 9,
        title: "Under Armour HOVR",
        brand: "Under Armour",
        price: "Rp 900.000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, explicabo.",
      },
      {
        id: 10,
        title: "Saucony Jazz Original",
        brand: "Saucony",
        price: "Rp 700.000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, libero.",
      },
];

ProductData.forEach(product => {
    product.image = `/img/card${product.id}.jpg`;
  });

export default ProductData;