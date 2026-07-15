import laptop1 from "../assets/products/laptops/laptop1.png";
import laptop2 from "../assets/products/laptops/laptop2.png";
import laptop3 from "../assets/products/laptops/laptop3.png";

export const products = [
  {
    id: 1,
    category: "gaming-laptops",
    slug: "axiom-phantom-x15",
    name: "AXIOM Phantom X15",
    price: 89999,
    image: laptop1,
    shortDescription: "RTX 4060 Gaming Laptop",
    specifications: {
      processor: "Intel Core i7-14700HX",
      gpu: "NVIDIA RTX 4060 8GB",
      ram: "16GB DDR5",
      storage: "1TB NVMe SSD",
      display: '15.6" QHD 165Hz',
    },
    warranty: "2 Years",
    inStock: true,
    rating: 4.8,
  },

  {
    id: 2,
    category: "gaming-laptops",
    slug: "axiom-titan-x17",
    name: "AXIOM Titan X17",
    price: 119999,
    image: laptop2,
    shortDescription: "RTX 4070 Gaming Laptop",
    specifications: {
      processor: "Intel Core i9-14900HX",
      gpu: "NVIDIA RTX 4070 8GB",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      display: '17.3" QHD 240Hz',
    },
    warranty: "3 Years",
    inStock: true,
    rating: 4.9,
  },

  {
  id: 3,
  category: "gaming-laptops",
  slug: "axiom-frost-x16",
  name: "AXIOM Frost X16",
  price: 149999,
  image: laptop3,
  shortDescription: "Flagship White Edition Gaming Laptop",

  specifications: {
    processor: "Intel Core Ultra 9 285HX",
    gpu: "NVIDIA GeForce RTX 5080 16GB",
    ram: "64GB DDR5",
    storage: "2TB PCIe Gen5 NVMe SSD",
    display: '16" 4K Mini-LED 240Hz',
  },

  warranty: "3 Years Premium Warranty",

  inStock: true,

  rating: 5.0,
}
];