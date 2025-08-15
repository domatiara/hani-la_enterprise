import bs from "../assets/images/black-soap.jpg";
import ms from "../assets/images/moringa-soap.jpg";
import hc from "../assets/images/hair-cream-f.jpg";
import bas from "../assets/images/baobab-soap.jpg";
import sb from "../assets/images/raw-shea.jpg";
import bc from "../assets/images/body-cream-f.jpg";
import ss from "../assets/images/shea-soap.jpg";



const products = [
  {
    id: 1,
    name: "Hani-lah Skin Glow",
    description: "Deeply nourishes and hydrates your skin, leaving it soft, radiant, and naturally glowing.",
    price: 50.00,
    image: bc,
    category: "Skin Care",
    size: "300g",
  },
  {
    id: 2,
    name: "Hani-lah Hair Glow",
    description: "Enriched with natural oils to moisturize, strengthen, and promote healthy, lustrous hair.",
    price: 40.00,
    image: hc,
    category: "Hair Care",
    size: "300g",
  },

  {
    id: 3,
    name: "Hani-lah Black Soap",
    description: "Traditional African black soap that deeply cleanses, detoxifies, and helps maintain healthy, clear skin.",
    price: 35.00,
    image: bs,
    category: "Skin Care",
    size: "150g",
  },

  {
    id: 4,
    name: "Hani-lah Baobab Soap",
    description: "Gentle cleansing with the skin-loving benefits of baobab, leaving your skin refreshed and rejuvenated.",
    price: 30.00,
    image: bas,
    category: "Skin Care",
    size: "150g",
  },
  {
    id: 5,
    name: "Hani-lah Moringa Soap",
    description: "Moisturizing shea butter soap that cleans gently while keeping your skin smooth and hydrated.",
    price: 30.00,
    image: ms,
    category: "Skin Care",
    size: "150g",
  },
  {
    id: 6,
    name: "Hani-lah Shea Soap",
    description: "Moisturizing shea butter soap that cleans gently while keeping your skin smooth and hydrated.",
    price: 30.00,
    image: ss,
    category: "Skin Care",
    size: "150g",
  },
  {
    id: 7,
    name: "Hani-lah Raw Shea Butter",
    description: "100% pure and unrefined shea butter to deeply moisturize, heal, and protect skin and hair naturally.",
    price: 60.00,
    image: sb,
    category: "",
    size: "1kg",
  },
  // {
  //   id: 8,
  //   name: "Shea Butter Baby Cream",
  //   description: "Gentle cream for babies' sensitive skin, fragrance-free.",
  //   price: 30.00,
  //   image: p2,
  //   category: "Soap",
  //   size: "100ml",
  // },
  // {
  //   id: 9,
  //   name: "Shea Butter Beard Balm",
  //   description: "Tame and condition your beard with our shea-rich formula.",
  //   price: 30.00,
  //   image: Hair,
  //   category: "Hair Care",
  //   size: "50g",
  // },
  // {
  //   id: 10,
  //   name: "Shea Butter Soap Bar",
  //   description: "Cold-processed soap bar for smooth, clean, and soft skin.",
  //   price: 30.00,
  //   image: p2,
  //   category: "Soap",
  //   size: "100g",
  // },
];

export default products;
