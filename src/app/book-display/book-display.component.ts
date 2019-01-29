import { Component, OnInit } from '@angular/core';
import { Books } from '../entity/books'

import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {

  title;
  cat;
  desc;

  error;

  books: Books[];

  constructor() { }

  ngOnInit() {
    this.books = [];
  }
  
  addBook()  {
    if(!this.title || !this.cat || !this.desc)  {
      this.error ="Sorry, you are missing one or more fields" 
    } else  {
      if(this.title.length > 30)  {
        this.error = "Sorry, your book title is too long (max 30 Characters)"
      } else {
        this.books.push({
          title: this.title,
          category: this.cat,
          description: this.desc,
        })
        this.error = "";
      }
    }
     
  }
}
