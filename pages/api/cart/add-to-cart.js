import addToCart from "@/util/database/cart/add-to-cart"

export default async function handler(req, res){

  const { name, image, price, qty, email} = req.body

  try {
    await addToCart(name, image, price, qty, email)
    res.status(200).json({ message: 'success' })
  } catch (error) {
    res.status(500).json({ message: 'Failed attempt!'})
  }
}