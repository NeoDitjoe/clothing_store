import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './search.module.css'
import { useRouter } from 'next/router'

export default function Search() {

  const router = useRouter()

  function searchHandler(e) {
    e.preventDefault()
    const input = new FormData(e.target).get('search')

    router.push(`/products?p=1&results_for=${input}`)

  }
  async function clearSeach(e) {
    e.preventDefault()

    router.push(`/products?p=1`)
    const input = document.getElementById('search')
    input.value = ''
  }



  const isRoute = router.asPath.includes('products')
  console.log(isRoute)

  return (
    <form onSubmit={searchHandler} className={styles.form}>
      <div className='flex flex-row items-center m-4 justify-center'>
        <div className='bg-gray-200'>
          <input type='text' id='search' name='search' placeholder='What are you look for ?' required />
        </div>

        <button>
          <div className='bg-gray-300 p-5 border-b border-black hover:bg-gray-200 focus:bg-gray-200 cursor-pointer'>
            <FaSearch background='gray' size={24} />
          </div>
        </button>
      </div>

      {
        isRoute
        && <button
          className='ml-4 font-bold border border-pink-400 border-solid border-1 bg-white pl-10 pr-10 hover:bg-black hover:text-white'
          onClick={clearSeach}
        >Clear</button>
      }
    </form>
  )
}
