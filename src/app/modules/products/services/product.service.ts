import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference, deleteDoc, doc, docData,
  DocumentData,
  Firestore,
  orderBy,
  query, updateDoc
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Brand, Category, Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: CollectionReference<DocumentData>;
  categoriesCollection: CollectionReference<DocumentData>;
  brandsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.productsCollection = collection(this.firestore, 'products');
    this.categoriesCollection = collection(this.firestore, 'products-categories');
    this.brandsCollection = collection(this.firestore, 'products-brands');
  }


  ///////////////////////////////////////////
  //////////// PRODUCTS - CRUD /////////////
  getProducts() {
    const q = query(this.productsCollection, orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Product[]>;
  }

  getProductById(product: Product) {
    const productDocumentReference = doc(this.firestore, `products/${product.id}`);
    return docData(productDocumentReference, {idField: 'id'});
  }

  addProduct(product: Product) {
    return addDoc(this.productsCollection, product);
  }

  updateProduct(product: Product) {
    const productDocumentReference = doc(this.firestore, `products/${product.id}`);
    return updateDoc(productDocumentReference, {...product});
  }

  deleteProduct(product: Product) {
    const productDocumentReference = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productDocumentReference);
  }

  ///////////////////////////////////////////
  //////////// CATEGORIES - CRUD ///////////
  getCategories() {
    const q = query(this.categoriesCollection, orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Category[]>;
  }

  getCategoryById(category: Category) {
    const categoryDocumentReference = doc(this.firestore, `products-categories/${category.id}`);
    return docData(categoryDocumentReference, {idField: 'id'});
  }

  addCategory(category: Category) {
    return addDoc(this.categoriesCollection, category);
  }

  updateCategory(category: Category) {
    const categoryDocumentReference = doc(this.firestore, `products-categories/${category.id}`);
    return updateDoc(categoryDocumentReference, {...category});
  }

  deleteCategory(category: Category) {
    const categoryDocumentReference = doc(this.firestore, `products-categories/${category.id}`);
    return deleteDoc(categoryDocumentReference);
  }

  ///////////////////////////////////////////
  ///////////// BRANDS - CRUD //////////////
  getBrands() {
    const q = query(this.brandsCollection, orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Brand[]>;
  }

  getBrandById(brand: Brand) {
    const brandDocumentReference = doc(this.firestore, `products-brands/${brand.id}`);
    return docData(brandDocumentReference, {idField: 'id'});
  }

  addBrand(brand: Brand) {
    return addDoc(this.brandsCollection, brand);
  }

  updateBrand(brand: Brand) {
    const brandDocumentReference = doc(this.firestore, `products-brands/${brand.id}`);
    return updateDoc(brandDocumentReference, {...brand});
  }

  deleteBrand(brand: Brand) {
    const brandDocumentReference = doc(this.firestore, `products-brands/${brand.id}`);
    return deleteDoc(brandDocumentReference);
  }
}
