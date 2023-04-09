// Read .env file and set environment variables
require('dotenv').config();
const random = Math.floor(Math.random() * 100);

// Use official mongodb driver to connect to the server
const { MongoClient, ObjectId } = require('mongodb');


const url = '';
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