import PaginationComp from '@/components/all-products/pagination/pagination'
import AllProducts from '@/components/all-products/products'
import FilterOptions from '@/components/all-products/select-filters-options/filter-options'
import Search from '@/components/search-form/search'
import getCategories from '@/util/database/categories/get-categories'
import { getAllItems } from '@/util/database/products/get-items'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProductPage(props) {

  const router = useRouter()

  return (
    <div className='p-4 bg-blue-300 flex flex-col items-center gap-4'>

      <FilterOptions {...props} />

      <Search />
      <button 
        className='font-bold border border-pink-400 border-solid border-1 bg-white pl-10 pr-10 hover:bg-black hover:text-white'
        onClick={() => router.push('products?p=1')}
      >Clear</button>

      <AllProducts {...props} />

      <PaginationComp {...props}/>
      
    </div>
  )
}

export async function getServerSideProps({query}){

  const { items, countItems } = await getAllItems(Number((query.p - 1) * 4), query.q || '', query.results_for?.split(' '))
  const categories = await getCategories()

  return{
    props:{
      items,
      countItems,
      categories
    }
  }
}
