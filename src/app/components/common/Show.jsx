import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Preview } from "@mui/icons-material";
import Link from 'next/link';

function Show({ url }) {
  return (
    <Link href={url} className="flex justify-center items-center text-center">
        <p className="font-medium max-w-[2.5rem] text-blue-500 rounded-xl border p-[5px] hover:bg-primaryColor hover:text-white hover:ring-1 hover:underline flex justify-center items-center">
          <VisibilityIcon />
          {/* <Preview/> */}
        </p>
    </Link>
  );
}

export default Show