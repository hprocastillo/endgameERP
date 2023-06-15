import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  DocumentData,
  Firestore, orderBy,
  query,
  updateDoc
} from "@angular/fire/firestore";
import {Customer} from "../interfaces/customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.customerCollection = collection(this.firestore, 'customers');
  }

  getCustomers() {
    const q = query(this.customerCollection, orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Customer[]>;
  }

  getCustomerById(id: string) {
    const customerDocumentReference = doc(this.firestore, `customers/${id}`);
    return docData(customerDocumentReference, {idField: 'id'});
  }

  addCustomer(customer: Customer) {
    return addDoc(this.customerCollection, customer);
  }

  updateCustomer(customer: Customer) {
    const customerDocumentReference = doc(this.firestore, `customers/${customer.id}`);
    return updateDoc(customerDocumentReference, {...customer});
  }

  deleteCustomer(customer: Customer) {
    const customerDocumentReference = doc(this.firestore, `customers/${customer.id}`);
    return deleteDoc(customerDocumentReference);
  }

}
