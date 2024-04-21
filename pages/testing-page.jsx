import { Button } from '@nextui-org/react'
import React from 'react'

export default function TestingPage() {
  return (
    <div className='p-4 bg-blue-300'>
      <Button
        disableRipple
        className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
        size="lg"
    
      >
        Press me
      </Button>
    </div>
  )
}
