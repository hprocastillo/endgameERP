import {Injectable} from '@angular/core';
import {Timestamp} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor() {
  }

  getDateFromInput(data: any) {
    let date = new Date(data.value);
    let day: string;
    let month: string;
    let year: string;

    /** get Day **/
    if (date.getDate() < 10) {
      day = '0' + (date.getDate() + 1);
    } else {
      day = (date.getDate() + 1).toString();
    }
    /** get Month **/
    if (date.getMonth() < 10) {
      month = '0' + (date.getMonth() + 1);
    } else {
      month = (date.getMonth() + 1).toString();
    }
    /** get Year **/
    year = date.getFullYear().toString();

    return new Date(year + '-' + month + '-' + day + 'T00:00:00');
  }

  setDateToInput(data: Timestamp) {
    let day: string;
    let month: string;
    let year: string;

    /** get day **/
    if (data.toDate().getDate() < 10) {
      day = '0' + data.toDate().getDate().toString();
    } else {
      day = data.toDate().getDate().toString();
    }
    /** get month **/
    if (data.toDate().getMonth() < 10) {
      month = '0' + (data.toDate().getMonth() + 1).toString();
    } else {
      month = (data.toDate().getMonth() + 1).toString();
    }
    /** get year **/
    year = data.toDate().getFullYear().toString();

    return year + '-' + month + '-' + day;
  }
}
