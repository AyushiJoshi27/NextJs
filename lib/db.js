import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://new-project:su9J53ym6vWlgLcY@cluster0.obgyh78.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
