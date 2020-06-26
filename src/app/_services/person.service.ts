import { Injectable } from '@angular/core';
import { Person } from '../_models/person';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: Person[];
  constructor() { }

  index(): Observable<Array<Person>> {
    const persons: Person[] =
      [
        { firstName: 'Varun', lastName: 'Rampal', age: 35 },
        { firstName: 'Amelia', lastName: 'Margaret', age: 26 },
        { firstName: 'Olivia', lastName: 'Samantha', age: 47 },
        { firstName: 'Isla', lastName: 'Bethany', age: 15 },
        { firstName: 'Poppy', lastName: 'Joanne', age: 34 },
        { firstName: 'Jessica', lastName: 'Lauren', age: 54 },
        { firstName: 'Taylor', lastName: 'Smith', age: 42 },
        { firstName: 'Wilson', lastName: 'Byrne', age: 29 },
        { firstName: 'Lam', lastName: 'Williams', age: 19 },
        { firstName: 'Gagnon', lastName: 'Martin', age: 33 },
      ];
    return of(persons);
  }

}
