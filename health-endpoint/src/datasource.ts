import { DataSource, DataSourceOptions } from 'typeorm';
import { Book } from './entities/book.entity';

export const postgresConnection: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'books',
  entities: [Book],
  migrations: [],
  synchronize: true,
};

const AppDataSource = new DataSource(postgresConnection);

AppDataSource.initialize()
  .then(() => console.log('DB successfully initialized'))
  .catch((error: Error) => console.log('Could not connect', error));

export default AppDataSource;