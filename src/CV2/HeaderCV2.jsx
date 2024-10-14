import { selectPersonalDetails } from '../Features/personalDetails';
import { useSelector } from 'react-redux';

export default function HeaderCV2() {
    const { firstName, lastName, phone, email } = useSelector(
        selectPersonalDetails
      );
  return (
    <div className=' flex flex-col items-center'>
        <h1 className=' text-3xl font-bold'>{firstName} {lastName}</h1>
        <p className=''>{phone} | {email}</p>
    </div>
  )
}
