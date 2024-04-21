import Home from "@/components/home/home";
import getItems from "@/util/database/products/get-items";
import {Button} from "@nextui-org/react";

export default function HomePage({items}) {
  console.log(items)
  return (
    <main>
      <Home />
      
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
