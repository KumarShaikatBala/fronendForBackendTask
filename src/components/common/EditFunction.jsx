import React from 'react'
import Link from 'next/link'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function EditFunction({url}) {
  return (
 
        <Link href={url}>
        <div

                className="text-yellow-500 border hover:bg-yellow-500 hover:ring-1 hover:text-white rounded-xl  p-1"
            >
              < ModeEditIcon />
            </div>
        </Link>
   
  )
}

export default EditFunction