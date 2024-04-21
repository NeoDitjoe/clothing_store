import Home from "@/components/home/home";
import getItems from "@/util/database/products/get-items";

export default function HomePage({items}) {
  console.log(items)
  return (
    <main>
      <Home items={items}/>
      
    </main>
  );
}

export async function getServerSideProps(){
  const items = await getItems()

  return{
    props:{
      items
    }
  }
}
