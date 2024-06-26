import { moreCategories } from "@/util/home/data"
import Image from "next/image"
import Link from "next/link"

export default function MoreCategories() {

  return (
    <main className="cursor-pointer">
      <h1 className='text-center m-3 text-4xl font-bold text-purple-400'>New Products</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 ">
          {
            moreCategories.map((item, i) => (
              <Categories {...item} key={i}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export function Categories(props) {

  const { image, name } = props

  return (
    <Link href={`/products?p=1&q=${name}`}>
      <div>
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          style={{ width: '200px', height: '200px' }}
        />
      </div>

      <h3 className="text-center font-bold text-purple-500">{name}</h3>
    </Link>
  )

}