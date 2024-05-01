import React from 'react'
import client from '../connect-mongo-client'

export default async function singleItem(id) {

  const db = client.db('store')

  const item = await db.collection('items')
    .aggregate([
      { $match: { id } },
      {
        $project: {
          _id: 0, image: 1, name: 1,
          price: 1, brand: 1, description: 1,
          size: 1, material: 1, categories: 1
        }
      }
    ])
    .toArray()

  const getCategories = item.map((item) => item.categories)
  
  function getRandomInt() {
    return Math.floor(Math.random() * getCategories[0].length);
  }

  const recommend = []

  for(let i = 0; i < 3; i++){
    recommend.push(getCategories[0][getRandomInt()])
  }
  
  return {
    item,
    categories : recommend
  }
}
