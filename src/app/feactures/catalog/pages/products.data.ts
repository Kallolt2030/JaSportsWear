export type ProductType = 'article' | 'clothe' | 'accessory';

export interface Product {
  id: number;
  name: string;
  price: number;
  type: ProductType;
  category?: string;
  brand?: string;
  description: string;
  image: string;
  images?: string[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [

  //// ROPA ///
  {
    id: 1,
    name: "Playera Gym Pro",
    price: 299,
    type: "clothe",
    category: "shirts",
    brand: "JaSportsWear",
    description: "Playera deportiva transpirable ideal para entrenamiento.",
    image: "assets/products/Playera-negra.jpg",
    images: [
      "assets/products/Playera-negra.jpg",
      "assets/products/PlayeraS-blanca.jpg"
    ],
    featured: true
  },

  /// ARTICULOS ///

  {
    id: 2,
    name: "Cinturón de levantamiento",
    price: 450,
    type: "article",
    category: "gym-gear",
    brand: "JaSportsWear",
    description: "Cinturón resistente para powerlifting y entrenamiento pesado.",
    image: "assets/products/",
    images: [
      "assets/products/"
    ]
  },
];