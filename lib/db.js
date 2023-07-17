// import { MongoClient } from "mongodb";

// export async function connectToDatabase() {
//   const client = await MongoClient.connect(
//     // "mongodb+srv://new-project:SMzbuJ587hufswYx@cluster0.obgyh78.mongodb.net/auth-demo?retryWrites=true&w=majority"
//     "mongodb+srv://new-project:RjkSLzsOS3QGgVeL@cluster0.obgyh78.mongodb.net/auth-demo"
//     // "mongodb+srv://new-project:QsvvbPSYu4Or05yl@cluster0.obgyh78.mongodb.net/event"
//   );

//   return client;
// }


import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://new-project:9J1TGKKSYIUBuO2o@cluster0.obgyh78.mongodb.net/auth-demo')
  
  return client;
}