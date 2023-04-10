// Read .env file and set environment variables
require('dotenv').config();
const random = Math.floor(Math.random() * 100);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Use official mongodb driver to connect to the server
const { MongoClient, ObjectId } = require('mongodb');


const url = 'mongodb://d6b7bc78-0ee0-4-231-b9ee:LHMi6I1RyTotD4dGcx0NRJhX4f8IFlRYWv9iXu8agJuqvPlvJehKGpEgZHQbtmhCQqorGSWeNYn0ACDbIydCkg==@d6b7bc78-0ee0-4-231-b9ee.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@d6b7bc78-0ee0-4-231-b9ee@';
const client = new MongoClient(url);

async function main(){

    await client.connect();
    
    const db = client.db(`familiesdb`);
    console.log(`New database:\t${db.databaseName}\n`);

    // Collection reference with creation if it does not already exist
    const collection = db.collection('families');
    console.log(`New collection:\t${collection.collectionName}\n`);

    const product = {
        id: '1',
        category: "gear-surf-surfboards",
        name: `Yamba Surfboard-${random}`,
        quantity: 12,
        sale: false,
        country: 'USA'
    };
    const query = { name: product.name};
    const update = { $set: product };
    const options = {upsert: true, new: true};
    
    // Insert via upsert (create or replace) doc to collection directly
    const upsertResult1 = await collection.updateOne(query, update, options);
    console.log(`upsertResult1: ${JSON.stringify(upsertResult1)}\n`);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());