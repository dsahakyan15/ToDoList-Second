import { useState } from 'react'
import { FaCalendarDays } from 'react-icons/fa6'
import { Form, Button, InputGroup } from 'react-bootstrap'

export default function AddItem({ changeCalendar, onAddItem, dateValue }) {

    const [dateVal, setDateVal] = dateValue
    const handleCalendar = changeCalendar
    const [inputValue, setInputValue] = useState('')

    const handleInput = (event) => {
        setInputValue(event.target.value)
    }

    const onHandleAdd = () => {
        const date = `${dateVal.getMonth()+1} ${dateVal.getDate()} ${dateVal.getFullYear()}`


        const obj = {
            title: inputValue,
            date
        }
        setDateVal(new Date())
        setInputValue('')
        onAddItem(obj)
    }

    return (
        <div
            className='bg-light p-3 rounded-4 align-items-center justify-content mx-auto d-flex'
            style={{ height: '70px' }}>
            <InputGroup
                className='me-2'>
                <Form.Control
                    placeholder='Add new...'
                    style={{ width: '80%' }}
                    value={inputValue}
                    onChange={handleInput}
                    className='border-0 bg-light' />
                <InputGroup.Text
                    className=' border-0'>
                    <FaCalendarDays
                        onClick={handleCalendar}
                        className='text-primary p2 mr-3'
                    />
                </InputGroup.Text>
            </InputGroup>
            <Button onClick={onHandleAdd} variant="primary">ADD</Button>

        </div>
    )
}