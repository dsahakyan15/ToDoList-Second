import { FaRegHourglassHalf } from 'react-icons/fa6'

export default function Timer({data} ) {

    return (
        <div className='border border-2 rounded p-2 pe-4 ps-4 border-warning'>
            <span className=' text-warning me-3'><FaRegHourglassHalf /></span>
            <span>{data}</span>
        </div>
    )
}
