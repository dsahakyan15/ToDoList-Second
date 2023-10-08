import { FaRegHourglassHalf } from 'react-icons/fa6'

export default function Timer({itemDate} ) {

    const options = { month: "short" };
    console.log(itemDate)
    const timeFormatMonth = new Intl.DateTimeFormat("en-US", options).format(new Date(itemDate));

    return (
        <div className='border border-2 rounded p-2 pe-4 ps-4 border-warning'>
            <span className=' text-warning me-3'><FaRegHourglassHalf /></span>
            <span>{
                itemDate.getDate() + ' ' +
                timeFormatMonth + ' ' +
                itemDate.getFullYear()}</span>
        </div>
    )
}
