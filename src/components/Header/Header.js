
import { useState } from 'react';
import Calendar from 'react-calendar'
import Title from './Title'
import AddItem from './AddItem/AddItem'
import 'react-calendar/dist/Calendar.css';

export default function Header({ onAddItem }) {

    const [dateVal, setDateVal] = useState(new Date())
    const [activeCalendar, setActiveCalendar] = useState(false)

    const changeCalendar = () => {
        setActiveCalendar((prevSate) => !prevSate)
    }

    const checkDate = (date) => {
        if (date < new Date()) {
            console.log("Are you Dumb guuyy??")
        } else {
            setDateVal(date)
            changeCalendar()
            console.log(dateVal)
        }
    }



    return (
        <div className='text-center border-bottom mt-3 border-secondary-subtle pb-3'>
            <Title />

            <AddItem onAddItem={onAddItem} changeCalendar={changeCalendar} dateValue={[dateVal, setDateVal]} />

            {
                activeCalendar ?
                    <div className='d-flex ms-auto mt-3' style={{ width: '300px' }}>
                        <Calendar onChange={checkDate} value={dateVal} />
                    </div> : null
            }

        </div >
    )
}
