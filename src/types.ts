export interface Product {
  id: string;
  title: string;
  price: number;
  description?: string;
  image: string;
  artist: string;
  category: ProductCategory;
  inventory?: number;
}

export interface Artist {
  id: string;
  name: string;
  location: string;
  bio: string;
  image: string;
  products: Product[];
}

export interface CartItem extends Product {
  quantity: number;
}

// Union type for strict category matching
export type ProductCategory =
  | "Pottery"
  | "Jewelry"
  | "Art"
  | "Decor"
  | "Woodwork"
  | "All";

export interface NavLink {
  name: string;
  href: string;
}
