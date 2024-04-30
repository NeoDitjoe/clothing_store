import { categories } from "@/util/home/data";
import client from "../connect-mongo-client";

const db = client.db('store')

export default async function getItems(collection) {

  const results = await db.collection(collection)
  .aggregate([
    {$sort: {_id: -1}},
    {$project: { _id: 0, name: 1, brand: 1, price: 1, image: 1, id: 1, title: 1}},
    {$limit: 8}
  ])
  .toArray()

  return results
}
 
export async function getAllItems(skip, categoriesQuery, searchInput){

  const categoriesQueryToArray = categoriesQuery.split(' ')
  const match = categoriesQuery.split('').length > 0 ?  {categories: {$all: categoriesQueryToArray }} : {}  

  /**
   * I was having a problem, When the input text included men it would bring results
   * for women too.
   * 
   * This happenes when I use regex for categories.
   * So to match categories every first character have to be uppercase. from the 
   * text {@link searchInput} array
  */
  const capitalizeFirstChar = searchInput?.map(text => text.charAt(0).toUpperCase() + text.slice(1));

  const matchBySearchResults = searchInput 
  ?  { $or : [ 
    {$or:  searchInput.map(input => ({ name: { $regex: new RegExp(input, 'i') } }))},
    {$or:  searchInput.map(input => ({ brand: { $regex: new RegExp(input, 'i') } }))},
    {$or:  searchInput.map(input => ({ description: { $regex: new RegExp(input, 'i') } }))},
    {categories: {$all: capitalizeFirstChar }}
  ]} 
  : {}

  const matchBy = {$and: [ match, matchBySearchResults]}
  
  const items = await db.collection('items')
    .aggregate([
      {$match: matchBy},
      {$project: {_id: 0, name: 1, brand: 1, price: 1, image: 1, id: 1}},
      {$skip: skip},
      {$limit: 4},
    ])
    .toArray()

    const countItems = await db.collection('items').countDocuments(matchBy)

    return {
      items,
      countItems
    }
}