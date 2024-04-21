const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://admin:XXJAkEEdWM6JjsHd@cluster0.f1x6sqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default client