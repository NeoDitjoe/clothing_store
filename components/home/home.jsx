import Search from '../search-form/search'
import Categories from './categories/categories'
import styles from './home.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.background}></div>
      <Search />
      <Categories />
      
    </main>
  )
}
