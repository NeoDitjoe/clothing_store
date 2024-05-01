import { Pagination } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

export default function PaginationComp(props) {

  const { countItems } = props

  const router = useRouter()

  const currentPage = router.query.p

  function nextPageHandler(pageNumber) {
    const urlSearchParams = new URLSearchParams(window.location.search);

    const queryParams = Object.fromEntries(urlSearchParams.entries());
    queryParams.p = pageNumber; 
    const queryString = new URLSearchParams(queryParams).toString();
    const nextPageUrl = `/products?${queryString}`;
    router.push(nextPageUrl);
  }

  return (
    <Pagination
      onChange={nextPageHandler}
      total={Math.ceil(countItems / 8)}
      initialPage={Number(currentPage)}
      color={'warning'}
    />
  )
}
