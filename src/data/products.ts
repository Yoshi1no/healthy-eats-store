import nutsImage from "@/assets/products/nuts-dried-fruits.jpg";
import smoothieImage from "@/assets/products/green-smoothie.jpg";
import honeyImage from "@/assets/products/organic-honey.jpg";
import avocadoImage from "@/assets/products/avocado.jpg";
import superfoodsImage from "@/assets/products/superfoods.jpg";
import granolaImage from "@/assets/products/granola.jpg";
import matchaImage from "@/assets/products/matcha.jpg";

import { Product, Category } from "@/types";

export const categories: Category[] = [
  { id: "all", name: "Все товары", icon: "🍽️" },
  { id: "superfoods", name: "Суперфуды", icon: "🌱" },
  { id: "nuts", name: "Орехи и сухофрукты", icon: "🥜" },
  { id: "drinks", name: "Напитки", icon: "🍵" },
  { id: "breakfast", name: "Завтраки", icon: "🥣" },
  { id: "fresh", name: "Свежие продукты", icon: "🥑" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Микс орехов и сухофруктов",
    description: "Премиум ассорти: миндаль, кешью, грецкий орех, курага, изюм",
    price: 3500,
    oldPrice: 4200,
    image: nutsImage,
    category: "nuts",
    badge: "Хит продаж",
    inStock: true,
  },
  {
    id: "2",
    name: "Зелёный смузи микс",
    description: "Порошок для приготовления: шпинат, киви, огурец, яблоко",
    price: 2800,
    image: smoothieImage,
    category: "drinks",
    badge: "Новинка",
    inStock: true,
  },
  {
    id: "3",
    name: "Органический мёд",
    description: "Натуральный горный мёд с пасеки, 500г",
    price: 4500,
    image: honeyImage,
    category: "superfoods",
    inStock: true,
  },
  {
    id: "4",
    name: "Авокадо Хасс",
    description: "Спелые авокадо премиум качества, 3 шт",
    price: 2200,
    oldPrice: 2800,
    image: avocadoImage,
    category: "fresh",
    badge: "-21%",
    inStock: true,
  },
  {
    id: "5",
    name: "Набор суперфудов",
    description: "Киноа, чиа, годжи, спирулина, льняное семя",
    price: 5900,
    image: superfoodsImage,
    category: "superfoods",
    badge: "Премиум",
    inStock: true,
  },
  {
    id: "6",
    name: "Гранола с ягодами",
    description: "Овсяная гранола с клюквой и тыквенными семечками, 400г",
    price: 1800,
    image: granolaImage,
    category: "breakfast",
    inStock: true,
  },
  {
    id: "7",
    name: "Матча премиум",
    description: "Японский церемониальный чай матча, 100г",
    price: 6500,
    image: matchaImage,
    category: "drinks",
    badge: "Из Японии",
    inStock: true,
  },
  {
    id: "8",
    name: "Миндаль сырой",
    description: "Органический калифорнийский миндаль, 500г",
    price: 3200,
    image: nutsImage,
    category: "nuts",
    inStock: true,
  },
];
