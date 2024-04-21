import client from "../connect-mongo-client";

export default async function getItems() {
  const db = client.db('store')

  const results = await db.collection('items')
  .aggregate([
    {$project: { _id: 0}}
  ])
  .toArray()

  return results
}
