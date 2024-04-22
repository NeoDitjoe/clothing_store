import client from "../connect-mongo-client";

export default async function getItems(collection) {
  const db = client.db('store')

  const results = await db.collection(collection)
  .aggregate([
    {$project: { _id: 0}}
  ])
  .toArray()

  return results
}
