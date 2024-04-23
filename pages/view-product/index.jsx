import ViewProduct from "@/components/view-product/product"
import singleItem from "@/util/database/products/single-item"

export default function ViewProductPage(props) {

  const { item } = props

  console.log(item[0])

  return (
    <main>
      <ViewProduct {...item[0]}/>
    </main>
  )
}

export async function getServerSideProps({query}){

  const item = await singleItem(query.item)

  return{
    props: {
      item
    }
  }
}