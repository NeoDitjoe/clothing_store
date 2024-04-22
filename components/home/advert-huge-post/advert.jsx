import React from 'react'

export default function Advert(props) {

  const { adverts } = props

  return (
    <div className='flex justify-center'>
      <div className='flex md:flex-row  flex-col gap-5'>
        {
          adverts?.map((item) => (
            <AdvertComponent {...item} />
          ))
        }
      </div>
    </div>
  )
}

export function AdvertComponent(props) {

  const { image, title } = props

  return (
    <main className='w-80' key={title}>

      <div
        className='flex justify-center items-center'
        style={{
          background: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '80vh'
        }}>

        <h1
          className='text-shadow text-3xl font-bold text-white text-center'
          style={{ textShadow: '2px 2px 4px black' }}
        >{title}</h1>
      </div>

    </main>
  )
}
