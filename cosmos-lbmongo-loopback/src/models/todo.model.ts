import {Entity, model, property, belongsTo} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'}
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
}

export type TodoWithRelations = Todo & TodoRelations;
