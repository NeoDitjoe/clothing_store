import { isvalidPassword } from '@/util/bcrypt/bcrypt';
import client from '@/util/database/connect-mongo-client';
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({

  session: {
    jwt: true

  },

  providers: [

    CredentialsProvider({

      async authorize(credentials) {
        const userscollection = client.db('auth').collection('users')
        const user = await userscollection.findOne({ email: credentials.email })

        if (!user) {
          throw new Error('User not found!')
        }

        const checkPassword = await isvalidPassword(credentials.password, user.password)

        if (!checkPassword) {
          throw new Error('Incorrect Password')
        }
        
        return { email: user.email }
      }
    })
  ],

  callbacks: {
    async signIn({ account, profile }) {
      return true 
    },
  },

  secret: process.env.SECRET,
})
