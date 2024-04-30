import { hashPassword } from "@/util/bcrypt/bcrypt"
import client from "../connect-mongo-client"

export default async function createUser(email, password, image, res){

  if(password.split('').length < 9){
    res.status(417).json({ message: 'password should include 8 characters or more'})
    return
  }

  const db = client.db('auth')

  const emailExist = await db.collection('users').findOne({email: email})

  if(emailExist){
    res.status(417).json({ message: 'email is already in use, try to login'})
    return
  } 

  const sequrePassword = await hashPassword(password)

  const date = new Date()
  const stringDate = date.toString()

  await db.collection('users').insertOne({
    email,
    image,
    password: sequrePassword,
    createdAt: stringDate
  })

  res.status(200).json({ message: 'success'})
}