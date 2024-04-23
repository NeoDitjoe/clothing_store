import { Pagination } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

export default function PaginationComp(props) {

  const { countItems } = props

  const router = useRouter()

  const currentPage = router.query.p

  function nextPageHandler(pageNumber) {
    router.push(`/products?p=${pageNumber}`)
  }

  return (
    <Pagination
      onChange={nextPageHandler}
      total={Math.ceil(countItems / 4)}
      initialPage={Number(currentPage)}
      color={'warning'}
    />
  )
}
