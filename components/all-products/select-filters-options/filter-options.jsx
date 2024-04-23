import { useRouter } from 'next/router'

export default function FilterOptions(props) {

  const { categories } = props
  const router = useRouter()

  const filter = router.query.q + ' '
  let filterby = ''
  filterby += filter

  const isSelected = filter.split(' ')

  return (
    <main className='flex justity-center bg-white p-8 max-w-[60em]'>
      <div className='flex flex-wrap gap-4'>
        {
          categories?.map((item) => (
            <div
              onClick={() => {
                
                if(!isSelected.includes(item)){
                  filterby += item + ' '
                }

                setTimeout(() => {
                  router.push(`/products?p=1&q=${filterby}`)
                }, 200);
              }}
              className={`border border-pink-400 border-solid border-1 rounded pl-2 pr-2 hover:bg-pink-400  hover:text-white transition-colors duration-300 ease-in-out cursor-pointer ${isSelected.includes(item) && 'bg-pink-400 text-white'}` }
            >{item}</div>
          ))
        }
      </div>
    </main>
  )
}