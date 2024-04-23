import client from "../connect-mongo-client";

const db = client.db('store')

export default async function getItems(collection) {

  const results = await db.collection(collection)
  .aggregate([
    {$sort: {_id: -1}},
    {$project: { _id: 0}},
    {$limit: 8}
  ])
  .toArray()

  return results
}
 
export async function getAllItems(skip){

  const items = await db.collection('items')
    .aggregate([
      {$project: {_id: 0}},
      {$skip: skip},
      {$limit: 4},
    ])
    .toArray()

    const countItems = await db.collection('items').countDocuments()

    return {
      items,
      countItems
    }
}