import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import Link from 'next/link';
function Download({url}) {
  return (
           <Link target='_blank' href={url}>
               <span className='hover:text-white border rounded-xl  text-gray-600 p-1 text-xl hover:rounded-xl hover:bg-sky-300'> < DownloadIcon /></span>
            </Link>
  )
}

export default Download