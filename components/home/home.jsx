import Search from '../search-form/search'
import Categories from './categories/categories'
import styles from './home.module.css'
import Products from './products/products'

export default function Home(props) {

  const { items } = props
  return (
    <main>
      <div className={styles.background}></div>
      <Search />
      <Categories />

      <h1 className='text-center m-3 text-4xl font-bold text-green-400'>New Products</h1>
      <div className="flex justify-center m-5" >
        <div className='flex flex-row gap-5'>
          {
            items.map((item) => (
              <Products {...item} />
            ))
          }
        </div>
      </div>
    </main>
  )
}
