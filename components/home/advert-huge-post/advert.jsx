import React from 'react'

export default function Advert(props) {

  const { adverts } = props

  return (
    <div>
      {
        adverts?.map((item) => (
          <AdvertComponent {...item} />
        ))
      }
    </div>
  )
}

export function AdvertComponent(props) {

  const { image, title } = props

  return (
    <main>

      <div style={{
        background: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '70vh'
      }}>
        <h1>{title}</h1>
      </div>

      <div style={{
        background: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '70vh'
      }}>

        <h1>{title}</h1>
      </div>

    </main>
  )
}
