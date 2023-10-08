import { useState } from 'react'
import Header from '../Header/Header'
import Body from '../Body/Body'
import { Container } from 'react-bootstrap'

export default function App() {

  const [list, setList] = useState([
    {
      title: 'Buy groceries for next week',
      date: '28Jun2024',
      done: true,
      key: 1
    },
    {
      title: 'Renew car insurance',
      date: '10Oct2023',
      done: false,
      key: 2
    },
    {
      title: 'Sign up for online course',
      date: '28Jun2024',
      done: false,
      key: 3
    }
  ])

  const addItemList = ({ title, date }) => {
    const key = list.length ? list[list.length - 1].key + 1 : 1


    setList((prevState) => {
      return [...list, {
        title,
        date,
        done: false,
        key,

      }]
    })
  }

  return (
    <Container className='mt-3 bg-secondary-subtle rounded p-4' >
      <Header onAddItem={addItemList} />
      <Body data={list} />
    </Container>
  )
}
