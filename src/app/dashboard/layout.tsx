import React, { PropsWithChildren } from 'react'

export default function LayoutPage(props:PropsWithChildren) {
  return (
    <div>
      {props.children}
    </div>
  )
}
