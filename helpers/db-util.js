import { MongoClient, ObjectId } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://new-project:ZAeWPAGCuw1zExWv@cluster0.obgyh78.mongodb.net/events"
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();
  return documents;
}
export async function deleteOne2(collection, id) {
  const client = await connectDatabase();

  const db = client.db();
  const result = await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
  return result;
}