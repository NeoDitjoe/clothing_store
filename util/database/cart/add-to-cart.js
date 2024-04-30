import client from "../connect-mongo-client";

export default async function addToCart(name, image, price, qty, email){

  const db = client.db('users')

  await db.collection('cart').insertOne({
    name,
    image,
    price,
    qty,
    email
  })
}