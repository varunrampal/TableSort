import { Component, OnInit } from '@angular/core';
import { Person } from './_models/person';
import { PersonService } from './_services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Table Sort';
  persons: Person[];
  isDesc = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    // Call PersonService method to populate data
    this.personService.index().subscribe((data) => {
      this.persons = data;
    }, error => { console.log('error:' + error) });
  }

  // Sort data based on the column
  sortData(property: string) {

    this.isDesc = !this.isDesc;

    const direction = this.isDesc ? 1 : -1;

    this.persons.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

}
