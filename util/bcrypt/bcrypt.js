import { hash, compare } from "bcryptjs";

export async function hashPassword(password){
  return await hash(password, 14)
}

export async function isvalidPassword(input, password){
  return await compare(input, password)
}