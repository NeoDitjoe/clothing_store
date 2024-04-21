import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
  return (
    <form>
      <div className='flex flex-row items-center m-4 justify-center'>
        <div className='bg-gray-200 p-5 border-b border-black'>
          <FaSearch background='gray' size={24} />
        </div>
        <div className='w-80 bg-gray-200 p-5 border-b border-black'>
          <input style={{ all: 'unset' }} type='text' name='search' placeholder='What are you look for ?' required />
        </div>
      </div>
    </form>
  )
}
