import Image from "next/image"
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function AllProducts(props) {

  const { items, countItems } = props
  const router = useRouter()
  const currentPage = router.query.p

  function nextPageHandler(pageNumber){
    router.push(`/products?p=${pageNumber}`)
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 ">
          {
            items?.map((item) => (
              <ProductsComponents {...item} />
            ))
          }
        </div>

        <Pagination onChange={nextPageHandler} total={countItems / 4} initialPage={Number(currentPage)} color={'warning'} />
      </div>
    </div>
  )
}

export function ProductsComponents(props) {

  const { name, brand, price, image } = props

  const ellipsis = name.length >= 22
  return (
    <main key={name} className='bg-gray-100 w-25 pl-4 pr-2 pb-2 shadow-md rounded'>
      <div className='flex justify-center h-50'>
        <Image
          src={image[0]}
          alt={name}
          width={400}
          height={400}

          style={{ height: '250px', width: '230px' }}
        />
      </div>

      <h2>{name.substring(0, 22)}{ellipsis && '...'}</h2>
      <h4 className='text-gray-400'>{brand}</h4>
      <h1 className='font-bold mt-1'>R {(Number(price) * 19.53).toFixed(2)}</h1>
    </main>
  )
}
