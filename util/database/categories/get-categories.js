import client from '../connect-mongo-client'

export default async function getCategories() {
  
  const db = client.db('store')

  const data = await db.collection('items')
    .aggregate([
      { $project: { _id: 0, categories: 1 } }
    ])
    .toArray()

  const categories = data.map((item) => item.categories)
  const uniqueCategories = new Set(categories.flat())

  return [...uniqueCategories]
}

