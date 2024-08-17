import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import {links} from '../../utils/links'
import { LuAlignLeft } from 'react-icons/lu'
export default function LinksDropdowns() {
  return (
 <>
 <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant='outline' className='flex gap-4 max-w-[100px]'>
      <LuAlignLeft className='h-6 w-6'/>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align='start' className='w-48' sideOffset={10}>
    {links.map((link)=> {return <DropdownMenuItem key={link.href}>
  <Link href={link.href} className='capitalize w-full'>{link.label}</Link>
    </DropdownMenuItem>})}
  </DropdownMenuContent>
 </DropdownMenu>
 </>
  )
}
