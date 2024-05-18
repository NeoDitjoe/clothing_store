import getCartData from '@/util/database/cart/get-cart-data'
import React from 'react'

export default function CartPage({data}) {

  console.log(data)
  return (
    <div>card</div>
  )
}

export async function getServerSideProps({query}){

  const user = query.user
  const data = await getCartData(user)

  return{
    props:{
      data,
    }
  }
}