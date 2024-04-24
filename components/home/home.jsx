import Image from 'next/image'
import Search from '../search-form/search'
import Advert from './advert-huge-post/advert'
import Categories from './categories/categories'
import styles from './home.module.css'
import MoreCategories from './more-categories/categories'
import Products from './products/products'
import VideoPromo from './video/video'
import logo from '../../public/images/logo.png'

export default function Home(props) {

  const { items, adverts } = props
  return (
    <main>
      <div className={styles.background}></div>
      <div className={styles.div}>
        <Image
          src={logo}
          alt='4real'
          width={200}
          height={200}
          className={styles.logo}
        />
      </div>

      <div className='bg-white pt-2 pb-2 radius-23'>
        <Search />

        <Categories />

        <Products items={items} />

        <Advert adverts={adverts} />

        <MoreCategories />

        <VideoPromo />
      </div>

    </main>
  )
}
