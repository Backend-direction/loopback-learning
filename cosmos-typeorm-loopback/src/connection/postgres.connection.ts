
import { DataSourceOptions } from '@loopback/typeorm';
import { Book } from '../entities/book.entity';

// export const postgresConnection: DataSourceOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'vova',
//   database: 'postgres',
//   entities: [Book],
//   migrations: [],
//   synchronize: true,
// };

export const postgresConnection: DataSourceOptions = {
  type: "mongodb",
  url: "mongodb://localhost:C2y6yDjf5%252FR%252Bob0N8A7Cgv30VRDJIWEHLM%252B4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw%252FJw%253D%253D@localhost:10255/admin?ssl=true",
  database: "db",
  ssl: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [Book],
  migrations: [],
  synchronize: true,
};