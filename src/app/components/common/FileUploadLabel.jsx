import React from 'react'

function FileUploadLabel({size,type}) {
  return (
    <div>
        <p className='text-red-600 opacity-70 text-sm ml-3'>দয়া করে {size} কিলোবাইটের নিচে {type} সিলেক্ট করুন</p>
    </div>
  )
}

export default FileUploadLabel