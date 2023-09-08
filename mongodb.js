const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = 'task-manager';

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

(async () => {
  try {
    const client = new MongoClient(connectionURL, { useNewUrlParser: true });
    await client.connect();

    const db = client.db(databaseName);

    // const result = await db.collection('users').deleteOne({name: "josh"})
    // console.log(result)

    // const result = await db.collection('users').deleteMany(
    //   {age: 27}
    // )
    // console.log(result)


    // const result = await db.collection('users').updateOne(
    //   { _id: new ObjectId("64f9f9c621efbb684a1d110b") },
    //   {
    //     $inc: {
    //       age: 2
    //     }
    //   }
    // );

    // console.log("Update Result:", result);

    // // Find the updated document
    // const updatedDocument = await db.collection('users').findOne({ _id: new ObjectId("64f9f9c621efbb684a1d110b") });
    // console.log("Updated Document:", updatedDocument);

    // const result = await db.collection('tasks').updateMany(
    //     {completed: false},
    // {$set: 
    //     {
    //         completed: true
    //     }
    // });

    // console.log("Update Result:", result);




    // const singleDocumentToInsert = {
    //       name: 'John',
    //       age: 35
    //     };
    
    //     // Insert the document
    //     const result = await db.collection('users').insertOne(singleDocumentToInsert);
        
    //     const insertedDocument = await db.collection('users').findOne({ _id: result.insertedId });
    //     console.log("Single Document Inserted:", insertedDocument);

    // const multiDocumentToInsert = [
    //     {
    //         description: 'Mow lawn',
    //         completed: false
    //     },
    //     {
    //         description: 'Clean house',
    //         completed: true
    //     },
    //     {
    //         description: 'Water plants',
    //         completed: true
    //     }
    // ];

    // const resultMany = await db.collection('tasks').insertMany(multiDocumentToInsert);

    // if (resultMany && resultMany.insertedCount > 0) {
    //   console.log("Multiple Documents Inserted:");
    //   // Iterate over the insertedIds and fetch each document
    //   for (const key in resultMany.insertedIds) {
    //     if (Object.hasOwnProperty.call(resultMany.insertedIds, key)) {
    //       const id = resultMany.insertedIds[key];
    //       const insertedDoc = await db.collection('tasks').findOne({ _id: id });
    //       console.log(`Document with _id ${id}:`, insertedDoc);
    //     }
    //   }
    // } else {
    //   console.error("Failed to insert multiple documents.");
    // }



    client.close();
  } catch (error) {
    console.error('Error:', error);
    client.close();
  }
})();










    // const singleDocumentToInsert = {
    //   name: 'BrenenH',
    //   age: 27
    // };

    // // Insert the document
    // const result = await db.collection('users').insertOne(singleDocumentToInsert);
    
    // // Retrieve the inserted document by its _id
    // const insertedDocument = await db.collection('users').findOne({ _id: result.insertedId });
    // console.log("Single Document Inserted:", insertedDocument);

    // const multiDocumentToInsert = [
    //   {
    //     name: 'BrenenH',
    //     age: 27
    //   },
    //   {
    //     name: 'Jenn',
    //     age: 24
    //   }
    // ];

    // const resultMany = await db.collection('users').insertMany(multiDocumentToInsert);

    // if (resultMany && resultMany.insertedCount > 0) {
    //   console.log("Multiple Documents Inserted:");
    //   // Iterate over the insertedIds and fetch each document
    //   for (const key in resultMany.insertedIds) {
    //     if (Object.hasOwnProperty.call(resultMany.insertedIds, key)) {
    //       const id = resultMany.insertedIds[key];
    //       const insertedDoc = await db.collection('users').findOne({ _id: id });
    //       console.log(`Document with _id ${id}:`, insertedDoc);
    //     }
    //   }
    // } else {
    //   console.error("Failed to insert multiple documents.");
    // }