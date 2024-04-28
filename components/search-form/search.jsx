import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './search.module.css'
import { useRouter } from 'next/router'

export default function Search() {

  const router = useRouter()

  async function searchHandler(e){
    e.preventDefault()
    const form = e.target
    const input = new FormData(form).get('search')
    
    router.push(`/products?p=1&results_for=${input}`)
    form.reset()
    
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
