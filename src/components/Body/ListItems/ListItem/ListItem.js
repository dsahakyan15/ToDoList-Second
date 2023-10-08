import { Form } from 'react-bootstrap'
import { FaPen, FaTrashCan, FaCircleInfo } from 'react-icons/fa6'
import Timer from '../Timer/Timer'


export default function ListItem({ data }) {

  const { title, done, date } = data

  const itemDate = new Date(date)
  const options = { month: "short" };
  const timeFormatMonth = new Intl.DateTimeFormat("en-US", options).format(new Date(itemDate));

  const timeIsOut = () => {
    
  }



  return (
    <div className='mb-1 mt-3 d-flex justify-content-between align-items-center'>
      <Form.Check checked={done ? done:null} value={true} label={title} />
      {done ? <Timer data={date}/> : null}
      
      <div>
        <div className='icons d-flex justify-content-end'>
          <span className='text-info me-2 '><FaPen /></span>
          <span className='text-danger '><FaTrashCan /></span>
        </div>
        <div className='text-secondary d-flex align-items-center'>
          <FaCircleInfo />
          <span className='ms-2'>{itemDate.getDate() + ' ' + timeFormatMonth + ' ' + itemDate.getFullYear()}</span>
        </div>
      </div>
    </div>
  )
}
