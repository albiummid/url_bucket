import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-rose-300 py-2'>
      <p className='text-center text-sm'>
        Made with ❤️ By <Link className=' underline' referrerPolicy="no-referrer" target="_blank" replace={false} href={'http://albi.netlify.app'}>albi ummid</Link>
      </p>
    </div>
  )
}
