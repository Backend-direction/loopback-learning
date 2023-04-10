const { CosmosClient } = require("@azure/cosmos");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const endpoint = '';
const key = ''

const client = new CosmosClient({ endpoint, key });
const databaseId = 'db'

async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({
    id: databaseId
  })
  console.log(`Created database:\n${database.id}\n`)
}


async function readDatabase() {
  const { resource: databaseDefinition } = await client
    .database(databaseId)
    .read()
  console.log(databaseDefinition)
}

async function run() {
  await createDatabase();
  await readDatabase();
}

run().catch((e) => {
  console.log(e);
});