import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './search.module.css'

export default function Search() {

  async function searchHandler(e){
    e.preventDefault()
    alert('Being up dated')
  }
  return (
    <form onSubmit={searchHandler} className={styles.form}>
      <div className='flex flex-row items-center m-4 justify-center'>
        <div className='bg-gray-200'>
          <input type='text' name='search' placeholder='What are you look for ?' required />
        </div>

        <button>
          <div className='bg-gray-300 p-5 border-b border-black hover:bg-gray-200 focus:bg-gray-200 cursor-pointer'>
            <FaSearch background='gray' size={24} />
          </div>
        </button>
      </div>
    </form>
  )
}
