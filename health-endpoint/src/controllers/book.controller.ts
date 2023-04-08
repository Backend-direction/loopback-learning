import {get, post, Request, requestBody} from '@loopback/rest';
import { Repository } from 'typeorm';
import AppDataSource from '../datasource';
import { Book } from '../entities/book.entity';

export class BookController {

  constructor() {}

  // Create a new book
  @post('/books')
  async create(@requestBody() data: Book) {
    const bookRepo = AppDataSource.getRepository(Book);
    const book = new Book();
    book.id = data.id;
    book.title = data.title;
    book.isPublished = false;
    return await bookRepo.save(book);
  }

  // Find book by title
  @get('/books')
  async getAll() {
    const bookRepo = AppDataSource.getRepository(Book);
    return await bookRepo.find();
  }
}