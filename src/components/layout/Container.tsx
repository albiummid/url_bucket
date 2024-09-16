import React, { PropsWithChildren } from 'react'

export default function Container({children,style}:PropsWithChildren&{style?:React.CSSProperties}) {
  return (
    <div style={style} className='max-w-7xl mx-auto p-5'>
      {children}
    </div>
  )
}
