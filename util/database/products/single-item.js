import React from 'react'
import client from '../connect-mongo-client'

export default async function singleItem(id) {
  
  const db = client.db('store')

  const item = await db.collection('items')
    .aggregate([
      {$match: {id}},
      {$project: {_id: 0}}
    ])
    .toArray()

    const getCategories = item.map((item) => item.categories)
    const categories = getCategories[0].slice(0, 3)

    return {
      item, 
      categories
    }
}
