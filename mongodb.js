const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = 'task-manager';


(async () => {
  try {
    const client = new MongoClient(connectionURL, { useNewUrlParser: true });
    await client.connect();

    const db = client.db(databaseName);

    client.close();
  } catch (error) {
    console.error('Error:', error);
    client.close();
  }
})();
