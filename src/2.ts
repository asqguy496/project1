import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <ul>
      <li *ngFor="let item of items">{{ item.name }} ({{ item.price | currency }})</li>
    </ul>
  `,
})
export class AppComponent {
  title = 'Shopping List';
  items: any[] = [
    { name: 'Apple', price: 10 },
    { name: 'Pear', price: 20 },
    { name: 'Banana', price: 30 }
  ];
}
