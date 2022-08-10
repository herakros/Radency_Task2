import { Component, OnInit } from '@angular/core';
import { OrderBook } from 'src/app/core/models/orderBooks';
import { OrderByBook } from 'src/app/core/models/queries/orderByBook';
import { OrderByGenre } from 'src/app/core/models/queries/orderByGenre';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: OrderBook[];
  recommendedBooks: OrderBook[];

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    let query = new OrderByBook();
    query.order = 'title';

    this.bookService.getAllBooks(query).subscribe((data: OrderBook[]) => {
      this.books = data;
    });

    let queryRecommended = new OrderByGenre();
    queryRecommended.gerne = '';

    this.bookService.getRecommendedBooks(queryRecommended).subscribe((data) => {
      this.recommendedBooks = data;
    });
  }

}
