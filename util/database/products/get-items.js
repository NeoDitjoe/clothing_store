import client from "../connect-mongo-client";

export default async function getItems() {
  const db = client.db('sample_airbnb')

  const results = await db.collection('listingsAndReviews')
  .aggregate([
    {$project: {name: 1}}
  ])
  .toArray()

  return results
}
