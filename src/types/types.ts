export interface Product {
  _id: string;
  title: string;
  price: number;
  category: string;
  imageUrl?: string;
}

export interface Category {
  name: string;
}
