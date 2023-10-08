import React from 'react'
import Filter from './Filter/Filter'
import ListItems from './ListItems/'
export default function Body({data,onCheckedDone}) {
  return (
    <div>
        <Filter />
        <ListItems onCheckedDone={onCheckedDone} data={data}/>
    </div>
  )
}
