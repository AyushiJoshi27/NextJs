// // import {MongoClient} from 'mongodb';
// import {
//   connectDatabase,
// insertDocument,
// getAllDocuments,
// } from '../../../helpers/db-util';
// async function handler(req, res) {
//   const eventId = req.query.eventId;
  
//   // const client = await MongoClient.connect(
//   //   'mongodb+srv://new-project:FYrlJccpWFRnpIPm@cluster0.obgyh78.mongodb.net/events?retryWrites=true&w=majority'
//   // )

//   // try {
//   //   client = await connectDatabase();
//   // } catch (error) {
//   //   res.status(500).json({ message: 'Connecting to the database failed!' });
//   //   return;
//   // }

//   if (req.method === 'POST') {
//     const { email, name, text } = req.body;

//     if (
//       !email.includes('@') ||
//       !name ||
//       name.trim() === '' ||
//       !text ||
//       text.trim() === ''
//     ) {
//       res.status(422).json({ message: 'Invalid input.' });
//       // client.close();
//       return;
//     }

//     const newComment = {
//       email,
//       name,
//       text,
//       eventId,
//     };

//     const db = client.db();
//     const result = await db.collection('comments').insertOne(newComment)

//     res.status(201).json({message: 'Comment added!', comment: newComment});
//     console.log(result);

//     if (req.method === 'GET') {
//       const dummyList = [
//         {id: 'c1', name: 'Max', text: 'A first comment!'},
//         {id: 'c2', name: 'Manual', text: 'A second comment!'},
//       ];

//       res.status(201).json({comments: dummyList});
//     }

//     client.close();
//     // let result;

//     // try {
//     //   result = await insertDocument(client, 'comments', newComment);
//     //   newComment._id = result.insertedId;
//     //   res.status(201).json({ message: 'Added comment.', comment: newComment });
//     // } catch (error) {
//     //   res.status(500).json({ message: 'Inserting comment failed!' });
//     // }
//   }

//   // if (req.method === 'GET') {
//   //   try {
//   //     const documents = await getAllDocuments(client, 'comments', { _id: -1 });
//   //     res.status(200).json({ comments: documents });
//   //   } catch (error) {
//   //     res.status(500).json({ message: 'Getting comments failed.' });
//   //   }
//   // }
//   client.close();


// }

// export default handler;


import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util';

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'Added comment.', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!' });
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed.' });
    }
  }

  client.close();
}

export default handler;