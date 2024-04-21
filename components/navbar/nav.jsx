import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <main>
      <Link href='/'>Home</Link>
      <Link href='/testing-page'>Testing</Link>
    </main>
  )
}
