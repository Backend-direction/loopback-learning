import {get, post, Request, requestBody} from '@loopback/rest';
import {getModelSchema, Repository, typeorm} from '@loopback/typeorm';
import { Book } from '../entities/book.entity';


export class BookController {
  @typeorm.repository(Book) private bookRepo: Repository<Book>;

  constructor() {}

  // Create a new book
  @post('/books')
  async create(@requestBody() data: Book) {
    const book = new Book();
    book.id = data.id;
    book.title = data.title;
    book.isPublished = false;
    return await this.bookRepo.save(book);
  }

  // Find book by title
  @get('/books')
  async getAll() {
    return await this.bookRepo.find();
  }
}