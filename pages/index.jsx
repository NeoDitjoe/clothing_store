import Home from "@/components/home/home";
import getItems from "@/util/database/products/get-items";

export default function HomePage(props) {
  
  const { items, adverts } = props
  return (
    <main>
      <Home
        items={items} 
        adverts = {adverts}
      />

    </main>
  );
}

export async function getStaticProps() {
  const items = await getItems('items')
  const adverts = await getItems('adverts')

  return {
    props: {
      items,
      adverts
    }
  }
}
