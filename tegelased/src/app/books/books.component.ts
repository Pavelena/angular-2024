import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books = ["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Harry Potter", "Naksitrallid", "Timm Thaler ehk müüdud naer"];

  booksOriginal = this.books;

  sortAZ() {
    this.books.sort((a,b)=> a.localeCompare(b));
  }
  sortZA() {
    this.books.sort((a,b)=> b.localeCompare(a));
  }
  sortByLength() {
    this.books.sort((a,b)=> a.length - b.length);
  }
  sortBy2ndString() {
    this.books.sort((a,b)=> a[1].localeCompare(b[1]));
  }
  sortbyWordLength() {
    this.books.sort((a,b)=> a.split(" ").length - b.split(" ").length);
  }
  
  sortByPrevString() {
    this.books.sort((a,b)=> a[a.length-2].localeCompare(b[b.length-2]));
    console.log();
  }

  filterStartsWithTHE() {
    this.books = this.booksOriginal;
    const result = this.books.filter(e => e.startsWith('The'));
    this.books = result;
  }
  filterIncludesAnd() {
    this.books = this.booksOriginal;
    const result = this.books.filter(e => e.includes('and'));
    this.books = result;
  }
  filterMoreThan10() {
    this.books = this.booksOriginal;
    const result = this.books.filter(e => e.length > 10);
    this.books = result;
  }
  filterLessThan7() {
    this.books = this.booksOriginal;
    const result = this.books.filter(e => e.length < 7);
    this.books = result;
  }
  filter3OrMoreWords() {
    this.books = this.booksOriginal;
    const result = this.books.filter(e => e.split(" ").length >= 3);
    this.books = result;
  }
  filterPrevIsC() {
    this.books = this.booksOriginal;
    const result = this.books.filter(e => e[e.length - 2]==="c");
    this.books = result;
  }
  restore(){
    this.books = this.booksOriginal;
  }
}
