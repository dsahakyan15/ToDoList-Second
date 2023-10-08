import React from 'react'
import Filter from './Filter/Filter'
import ListItems from './ListItems/'
export default function Body({data}) {
  return (
    <div>
        <Filter />
        <ListItems data={data}/>
    </div>
  )
}
