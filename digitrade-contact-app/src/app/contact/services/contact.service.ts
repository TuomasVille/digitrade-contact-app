import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /*this.contacts = [
    new Contact('Aku', 'Ankka', '1234567890'),
    new Contact('Iines', 'Ankka', '1234567890'),
    new Contact('Hupu', 'Ankka', '1234567890')
  ];
    this.contacts.push(new Contact('Tupu', 'Ankka', '1234567890'));*/
  }

  get(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }
}
