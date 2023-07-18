// // import { connectDatabase, insertDocument } from '../../helpers/db-util';
// import {MongoClient} from 'mongodb';

// async function handler(req, res) {
//   if (req.method === 'POST') {
//     const userEmail = req.body.email;

//     if (!userEmail || !userEmail.includes('@')) {
//       res.status(422).json({ message: 'Invalid email address.' });
//       return;
//     }

//     const client = await MongoClient.connect(
//       'mongodb+srv://new-project:FYrlJccpWFRnpIPm@cluster0.obgyh78.mongodb.net/events?retryWrites=true&w=majority'
//     )
//     const db = client.db();
//     await db.collection('newsletter').insertOne({email: userEmail})

//     client.close();

//     console.log(userEmail);

//     // let client;

//     // try {
//     //   client = await connectDatabase();
//     // } catch (error) {
//     //   res.status(500).json({ message: 'Connecting to the database failed!' });
//     //   return;
//     // }

//     // try {
//     //   await insertDocument(client, 'newsletter', { email: userEmail });
//     //   client.close();
//     // } catch (error) {
//     //   res.status(500).json({ message: 'Inserting data failed!' });
//     //   return;
//     // }
//     // console.log(userEmail)

//     // MongoClient

//     res.status(201).json({ message: 'Signed up!' });
//   }
// }

// export default handler;


import { connectDatabase, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;