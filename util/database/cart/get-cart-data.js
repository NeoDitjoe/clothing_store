import client from "../connect-mongo-client";

export default async function getCartData(email){

  const db = client.db('users')

  const results = await db.collection('cart').aggregate([
    {$match: {email}},
    {$project: {_id: 0}}
  ]).toArray()

  return results
}