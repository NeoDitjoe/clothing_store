import createUser from "@/util/database/auth/sign-up"

export default async function handler( req, res ){

  const { email, password, image } = req.body

  if(req.method === 'POST'){
    try {
      await createUser(email, password, image, res)
      res.status(200).json({ message: 'success' })
    } catch (error) {
      res.status(500).json({ message: error.message ||  'Failed to create user!'})
    }
  }

}