import Image from 'next/image'
import React from 'react'

export default function Products(props) {

  const { name, brand, price, image } = props
  return (
    <main key={name} className='bg-gray-100 w-25 pl-4 pr-2 shadow-md rounded'>
      <div className='flex justify-center h-50'>
        <Image
          src={image[0]}
          alt={name}
          width={100}
          height={400}

          style={{ height:'20vh'}}
        />
      </div>

      <h2>{name.substring(0, 12)}...</h2>
      <h4 className='text-gray-400'>{brand}</h4>
      <h1 className='font-bold mt-1'>R {(Number(price) * 18).toFixed(2)}</h1>
    </main>
  )
}
