export class Contact {
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, street?: string, postalCode?: string, city?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
  }
}
