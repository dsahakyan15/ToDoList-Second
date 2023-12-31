import { Form } from 'react-bootstrap'
import { FaPen, FaTrashCan, FaCircleInfo } from 'react-icons/fa6'
import Timer from '../Timer/Timer'


export default function ListItem({ data,id,onCheckedDone }) {

  const { title, done, date } = data

  const itemDate = new Date(date)
  const options = { month: "short" };
  const timeFormatMonth = new Intl.DateTimeFormat("en-US", options).format(new Date(itemDate));

  const timeIsOut = (date) => {

    const fiveDays = 5 * 24 * 60 * 60 * 1000
    if ((date - new Date()) < fiveDays) {
      return true
    }

    return false

  }


  return (
    <div className='mb-1 mt-3 d-flex justify-content-between align-items-center'>
      <Form.Check onChange={onCheckedDone(id)} checked={done ? done : null}  label={title} />


      {timeIsOut(itemDate) ? <Timer itemDate={itemDate} /> : null}

      <div>
        <div className='icons d-flex justify-content-end'>
          <span className='text-info me-2 '><FaPen /></span>
          <span className='text-danger '><FaTrashCan /></span>
        </div>
        <div className='text-secondary d-flex align-items-center'>
          <FaCircleInfo />
          <span className='ms-2'>{
            itemDate.getDate() + ' ' +
            timeFormatMonth + ' ' +
            itemDate.getFullYear()}</span>
        </div>
      </div>
    </div>
  )
}
