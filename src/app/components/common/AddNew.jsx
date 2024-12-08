import React from 'react'
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add';

function AddNew({url , text ,children}) {
  return (
    // <Link href={` ${url}`}>
    // <button className="text-md px-3.5 p-1.5 my-2 flex items-center gap-1 bg-primaryColor rounded text-sm  text-white hover:ring-1 hover:bg-green-900/70">
    //  {children ? children : <span className=''> <AddIcon /></span>}
    //  {text? <p>{text} </p> :<p className='text-base'> যোগ করুন</p>}
    // </button>
    <Link href={` ${url}`}>
    <button className=" button-addnew text-md px-3.5 p-1.5 my-2 flex items-center gap-1 bg-primaryColor rounded text-sm transition-all ease-in-out duration-100 text-white hover: hover:ring-2 hover:bg-green-700 hover:ring-green-600/50 ">
     {children ? children : <span className=''> <AddIcon /></span>}
     {text? <p>{text} </p> :<p className='text-base '> যোগ করুন</p>}
    </button>

    
  </Link>
  )
}

export default AddNew