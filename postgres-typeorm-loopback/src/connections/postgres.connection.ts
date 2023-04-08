
import { DataSourceOptions } from '@loopback/typeorm';
import { Book } from '../entities/book.entity';

export const postgresConnection: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'vova',
  database: 'postgres',
  entities: [Book],
  migrations: [],
  synchronize: true,
};