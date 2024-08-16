import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';
import { CiShoppingCart } from "react-icons/ci";
function cartButton() {
  const ItemsInCart = 0;
  return (
    <div><Button asChild variant='outline' size='icon' className='flex justify-center items-center relative'>
      <Link href="/cart">
        <CiShoppingCart />
        <span className='absolute -top-3 -right-3 bg-primary rounded-full h-6 w-6 text-white flex items-center justify-center text-sm'>{ItemsInCart}</span>
      </Link>
    </Button></div>
  )
}

export default cartButton