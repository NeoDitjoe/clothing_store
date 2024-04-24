import { categories } from "@/util/home/data";
import client from "../connect-mongo-client";

const db = client.db('store')

export default async function getItems(collection) {

  const results = await db.collection(collection)
  .aggregate([
    {$sort: {_id: -1}},
    {$project: { _id: 0, name: 1, brand: 1, price: 1, image: 1, id: 1}},
    {$limit: 8}
  ])
  .toArray()

  return results
}
 
export async function getAllItems(skip, categoriesQuery){
  
  const categoriesQueryToArray = categoriesQuery.split(' ')
  const match = categoriesQuery.split('').length > 0 ?  {categories: {$all: categoriesQueryToArray }} : {}  

  const items = await db.collection('items')
    .aggregate([
      {$match: match},
      {$project: {_id: 0}},
      {$skip: skip},
      {$limit: 4},
    ])
    .toArray()

    const countItems = await db.collection('items').countDocuments(match)

    return {
      items,
      countItems
    }
}