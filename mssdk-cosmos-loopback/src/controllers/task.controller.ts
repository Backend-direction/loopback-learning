import {inject} from '@loopback/core';
import {
  Request,
  RestBindings,
  get,
  post,
  response,
  requestBody,
  ResponseObject,
} from '@loopback/rest';
import TaskModel from '../models/task.model';
import { cont } from '../datasource/db';

/**
 * A simple controller to bounce back http requests
 */
export class TaskController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/tasks')
  async findAll(): Promise<any> {
    const model = new TaskModel(cont);
    const tasks = await model.findAll();
    return tasks;
  }
  
  @post('/tasks')
  async add(@requestBody() data: any): Promise<any> {
    const model = new TaskModel(cont);
    const tasks = await model.addItem(data);
    return tasks;
  }
}
