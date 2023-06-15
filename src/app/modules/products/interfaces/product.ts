import {Timestamp} from "firebase/firestore";

export interface Product {
  id?: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  stock: number;
  barcode: string;
  photoUrl: string;

  createdAt: Timestamp;
  createdBy: string;
  updatedAt: Timestamp;
  updatedBy: string;
}

export interface Category {
  id?: string;
  description: string;

  createdAt: Timestamp;
  createdBy: string;
  updatedAt: Timestamp;
  updatedBy: string;
}

export interface Brand {
  id?: string;
  description: string;

  createdAt: Timestamp;
  createdBy: string;
  updatedAt: Timestamp;
  updatedBy: string;
}
