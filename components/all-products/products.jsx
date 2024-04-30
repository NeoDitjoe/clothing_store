import addToCartHandler from "@/util/add-to-cart-handler/add-to-cart"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { FaShoppingCart } from "react-icons/fa"

export default function AllProducts(props) {

  const { items } = props

  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 ">
        {
          items?.map((item, i) => (
            <ProductsComponents {...item} key={i} />
          ))
        }
      </div>
    </div>
  )
}

export function ProductsComponents(props) {

  const { name, brand, price, image, id } = props
  const { data: session, loading } = useSession()
  const router = useRouter()

  const ellipsis = name.length >= 22
  return (
    <div className='bg-gray-100 w-25 pl-4 pr-2 pb-2 shadow-md rounded'>
      <Link href={`/view-product?item=${id}`}>
        <div className='flex justify-center h-50'>
          <Image
            src={image[0]}
            alt={name}
            width={200}
            height={200}

            style={{ height: '250px', width: '230px' }}
          />
        </div>

        <h2>{name.substring(0, 22)}{ellipsis && '...'}</h2>
      </Link>
      <div className="flex flex-row justify-between items-center">
        <div>
          <h4 className='text-gray-400'>{brand}</h4>
          <h1 className='font-bold mt-1'>R {(Number(price) * 19.53).toFixed(2)}</h1>
        </div>

        <div 
          className="cursor-pointer "
          onClick={() => addToCartHandler(loading, session, image, name, price, '1', router) }>
          <FaShoppingCart className="text-orange-500 hover:text-green-500 text-2xl" />
        </div>
      </div>
    </div>
  )
}
