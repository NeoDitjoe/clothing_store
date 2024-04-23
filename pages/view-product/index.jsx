import AllProducts from "@/components/all-products/products"
import ViewProduct from "@/components/view-product/product"
import { getAllItems } from "@/util/database/products/get-items"
import singleItem from "@/util/database/products/single-item"

export default function ViewProductPage(props) {

  const { item, items } = props

  return (
    <main className="mb-10">
      <ViewProduct {...item[0]} />

      <h1
        className="text-center text-black-400 font-bold text-3xl m-3"
      >You Might Also Like</h1>
      <AllProducts {...props} />
    </main>
  )
}

export async function getServerSideProps({ query }) {

  const { item, categories } = await singleItem(query.item)
  const { items } = await getAllItems(0, categories.join(' '))

  return {
    props: {
      item,
      items
    }
  }
}