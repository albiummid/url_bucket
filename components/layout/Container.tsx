import React, { PropsWithChildren } from 'react'

export default function Container({children,className}:PropsWithChildren&{className?:string}) {
  return (
    <div className={`'max-w-7xl mx-auto p-5 ${className}`}>
      {children}
    </div>
  )
}
