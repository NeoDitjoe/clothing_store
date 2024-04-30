import addToCartHandler from '@/util/add-to-cart-handler/add-to-cart'
import postMethod from '@/util/database/post-method'
import { Button } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function ViewProduct(props) {

  const { image, name, price, brand, description, size, material } = props
  const [ qtyValue, setQtyValue ] = useState('1')
  const { data: session, loading } = useSession()
  const router = useRouter()

  const qty = []

  for (let i = 0; i < 7; i++) {
    qty.push(i)
  }

  return (
    <main className='flex justify-center  bg-gray-200'>
      <div className='grid grid:cols-1 md:grid-cols-2 mb-10'>

        <div className='bg-white'>
          <Image
            src={image[0]}
            alt={name}
            width={200}
            height={200}
            style={{
              width: '25em',
              height: '85vh'
            }}
          />
        </div>

        <div className='w-100 h-30 p-5'>
          <div>
            <h2 className='font-bold text-2xl'>{name}</h2>
            <h3 className='font-bold text-gray-500'>{brand}</h3>
            <h1 className='font-bold text-3xl'>R {(Number(price) * 19.53).toFixed(2)}</h1>
          </div>

          <div className='mt-10'>
            <h1 className='font-bold text-lg'>Description:</h1>
            <p className=' max-w-80 pl-3'>{description}</p>
          </div>

          <div className='font-bold text-lg mt-5 flex gap-1 items-center'>
            <h1>Size:</h1>
            <p>{size}</p>
          </div>

          <div className='font-bold text-lg text-gray-500 flex flex-wrap gap-1 items-center'>
            <h1>Material:</h1>
            <p>{material}</p>
          </div>

          <div className='flex flex-wrap gap-1 mt-10'>
            <h1 className='font-bold text-lg'>Qty:</h1>
            <select className='w-10 h-10' onChange={(e) => setQtyValue(e.target.value)}>
              {
                qty.map((num, i) => <option className='text-center' key={i}>{num + 1}</option>)
              }
            </select>
          </div>

          <div className='mt-10'>
            <Button 
              onClick={() => addToCartHandler(loading, session, image, name, price, qtyValue, router) }
              className="relative overflow-visible rounded hover:-translate-y-1 px-12 shadow-xl bg-blue-400 after:content-[''] after:absolute after:rounded after:inset-0 after:bg-blue-500 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0">
              Add To Cart
            </Button>
          </div>

        </div>
      </div>
    </main>
  )
}
