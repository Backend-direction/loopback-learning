import { CosmosClient } from "@azure/cosmos";
import { error } from "console";
import * as dotenv from "dotenv";
dotenv.config();

const key = process.env.COSMOS_KEY || 'C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==';
const endpoint = process.env.COSMOS_ENDPOINT + ''  || 'https://localhost:8081';
const databaseId = process.env.COSMOS_DATABASE || 'db';
console.log(endpoint, 'https://localhost:8081')


const client = new CosmosClient({ endpoint, key });
let db: any;
let cont: any;

async function initDatabase() {
  const { database } = await client.databases.createIfNotExists({
    id: databaseId
  })
  console.log(`Created database:\n${database.id}\n`);

  const { container } = await database.containers.createIfNotExists({
    id: 'tasks'
  });

  db = database;
  cont = container

  return { database, container };
}

initDatabase().then(() => {
  console.log('Db was initialized successfully')
}).catch (error => {
  console.log('DB init failed', error);
  
})


export { client, initDatabase, db, cont };



