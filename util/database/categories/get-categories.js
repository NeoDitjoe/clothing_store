import client from '../connect-mongo-client';

export default async function getCategories() {

  const db = client.db('store');

  const pipeline = [
    {
      $project: {
        _id: 0,
        categories: 1
      }
    },
    {
      $unwind: '$categories'
    },
    {
      $group: {
        _id: null,
        uniqueCategories: { $addToSet: '$categories' }
      }
    },
    {
      $project: {
        _id: 0,
        categories: '$uniqueCategories'
      }
    }
  ];

  const result = await db.collection('items').aggregate(pipeline).toArray();

  const categories = result.length > 0 ? result[0].categories : [];

  return categories;

}


