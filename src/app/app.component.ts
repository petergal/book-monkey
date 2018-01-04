import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bm-root',
  template: `
    <bm-book-list *ngIf="listOn"
    (showDetailsEvent)="showDetails($event)">
    </bm-book-list>
    <bm-book-details *ngIf="detailsOn"
    (showListEvent)="showList()" [book]="book">
    </bm-book-details>
  `
  // template: '<bm-book-list></bm-book-list>'
  // templateUrl: './app.component.html',
  // styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;
  // title = 'bm';

  book: Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }

}
