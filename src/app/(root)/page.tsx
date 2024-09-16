import { everyRequired } from '@/libs/utils/helper'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  everyRequired({
    time:undefined
  })
  return (
    <div>Home page</div>
  )
}