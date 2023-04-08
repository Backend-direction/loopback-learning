import {get, post, Request, requestBody} from '@loopback/rest';
import AppDataSource from '../datasource';
import { Book } from '../entities/book.entity';

export class HealthController {

  constructor() {}

  // Create a new book
  @get('/health')
  async check() {
    const dataBase = await AppDataSource.getRepository(Book);
    if(dataBase) {
      return  {
        status: 'ok',
        message: 'Healthy'
      }
    }

    return {
      status: 'error',
      message: 'Error'
    }
  }
}