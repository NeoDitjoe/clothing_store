import { useRouter } from 'next/router'

export default function FilterOptions(props) {

  const { categories } = props
  const router = useRouter()

  let filter = router.query.q + ' '
  let filterby = ''
  filterby += filter

  const isSelected = filter.split(' ')

  /**
   * when all Item were removed the query q was left behind with empty
   * an empty string. this is what was left = { products?p=1&q=[''] }
   * 
   * So when we remove the last select item we completeley remove 
   * the query q buy pushing { products?p=1 } to our url.
   */
  let clearQuery = false

  return (
    <main>
      <h1 className='bg-white text-center text-2xl text-orange-300 font-bold'>Fitlter:</h1>
      <div className='flex justity-center bg-white p-8 max-w-[60em]'>
        <div className='flex flex-wrap gap-4'>
          {
            categories?.map((item, i) => (
              <div
                key={i}
                onClick={() => {

                  if (!isSelected.includes(item)) {

                    router.query.q
                      ? filterby += item + ' '
                      : filterby = item + ' '
                  } else {
                    const removeItem = isSelected.filter(selected => selected !== item)

                    if (isSelected.length == 2) {
                      clearQuery = true
                    } else {
                      filterby = removeItem.join(' ').trim()
                      clearQuery = false
                    }

                  }

                  setTimeout(() => {

                    !clearQuery
                      ? router.push(`/products?p=1&q=${filterby}`)
                      : router.push('/products?p=1')

                  }, 200);
                }}
                className={`border border-pink-400 border-solid border-1 rounded pl-2 pr-2 hover:bg-pink-300  hover:text-white transition-colors duration-300 ease-in-out cursor-pointer ${isSelected.includes(item) && 'bg-pink-400 text-white'}`}
              >{item}</div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

/**
 * if array only one option remove the q its self
 */