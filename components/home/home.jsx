import Search from '../search-form/search'
import Advert from './advert-huge-post/advert'
import Categories from './categories/categories'
import styles from './home.module.css'
import MoreCategories from './more-categories/categories'
import Products from './products/products'

export default function Home(props) {

  const { items, adverts } = props
  return (
    <main>
      <div className={styles.background}></div>
      
      <Search />

      <Categories />

      <Products items={items} />

      <Advert adverts={adverts} />

      <MoreCategories />

    </main>
  )
}
