import {Timestamp} from "firebase/firestore";

export interface Customer {
  id?: string;
  //personal data
  fullName: string;
  email: string;
  phone: string;
  dni: string;
  birthDay: Timestamp;

  //photos
  photoUrl1: string;
  photoUrl2: string;
  photoUrl3: string;

  //social media data
  facebookUrl: string;
  instagramUrl: string;

  //subscriber data
  userSystem: string;

  //log data
  createdAt: Timestamp;
  createdBy: string;
  updatedAt: Timestamp;
  updatedBy: string;
}
