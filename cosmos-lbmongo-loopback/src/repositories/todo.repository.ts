import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources/mongo.datasource';
import { Todo, TodoRelations } from '../models/todo.model';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Todo, dataSource);
  }
}
