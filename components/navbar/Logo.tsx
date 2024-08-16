import Link from 'next/link';
import React from 'react'
import { FaTachometerAlt } from "react-icons/fa";
import { Button } from '../ui/button';
function Logo() {
  return (
   <>
   <Link href=''><FaTachometerAlt className='w-6 h-6'/></Link>
   </>
  )
}

export default Logo