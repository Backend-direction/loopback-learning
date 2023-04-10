// @ts-check
const CosmosClient = require('@azure/cosmos').CosmosClient

// For simplicity we'll set a constant partition key
const partitionKey = undefined
class TaskModel {
  container: any

  constructor(container: any) {
    this.container = container
  }

  // async init() {
  //   console.log('Setting up the database...')
  //   const dbResponse = await this.client.databases.createIfNotExists({
  //     id: this.databaseId
  //   })
  //   this.database = dbResponse.database
  //   console.log('Setting up the database...done!')
  //   console.log('Setting up the container...')
  //   const coResponse = await this.database.containers.createIfNotExists({
  //     id: this.collectionId
  //   })
  //   this.container = coResponse.container
  //   console.log('Setting up the container...done!')
  // }

  async find(querySpec: any) {
    console.log('Querying for items from the database')
    if (!this.container) {
      throw new Error('Collection is not initialized.')
    }
    const { resources } = await this.container.items.query(querySpec).fetchAll()
    return resources
  }

  async findAll() {
    const querySpec = {
      query: 'SELECT * FROM root r',
    }

    const { resources } = await this.container.items.query(querySpec).fetchAll()
    return resources
  }

  async addItem(item: any) {
    console.log('Adding an item to the database')
    item.date = Date.now()
    item.completed = false
    const { resource: doc } = await this.container.items.create(item)
    return doc
  }

  async updateItem(itemId: any) {
    console.log('Update an item in the database')
    const doc = await this.getItem(itemId)
    doc.completed = true

    const { resource: replaced } = await this.container
      .item(itemId, partitionKey)
      .replace(doc)
    return replaced
  }

  async getItem(itemId: any) {
    console.log('Getting an item from the database')
    const { resource } = await this.container.item(itemId, partitionKey).read()
    return resource
  }
}

export default TaskModel;