import Link from 'next/link';
import React from 'react'
import { GiDeadWood } from "react-icons/gi";
function Logo() {
  return (
   <div className='flex items-center gap-2'>
   <Link href=''><GiDeadWood className='w-6 h-6'/></Link>
    <span className='font-bold text-md tracking-tight'>Woodcraft Wonders</span>
   </div>
  )
}

export default Logo