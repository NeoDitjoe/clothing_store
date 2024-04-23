import { categories } from '@/util/home/data'
import Link from 'next/link'
import React from 'react'

export default function Categories() {
  return (
    <div className='flex flex-col sm:flex-row items-center'>

      <div className='text-blue-400 w-100 h-50 m-5 md:m-20'>
        <h1 className='text-5xl font-bold'>Categories</h1>
      </div>

      <div className='flex flex-row gap-6 overflow-x-scroll  m-5' style={{ width: '100%' }}>
        {
          categories.map((item) => (
            <div className='flex flex-col' key={item.name}>
              <Link href={`/products?p=1&q=${item.name} `}>
                <div style={{
                  background: `url(${item.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  width: '200px',
                  height: '200px',
                  borderRadius: '100%',
                }}></div>

                <h1 className='text-2xl font-bold text-center'>{item.name}</h1>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
