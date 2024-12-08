import React, { memo } from 'react';
import Label from '@/components/common/Label';
import BanglaDate from '@/components/common/BanglaDate';
import EnglishToBangla from '@/components/common/EnglishToBangla';

const Field = memo(({ Name, Value, status, dob , nid , taka }) => {
    return (
        <div className="w-full flex items-center ">
            <h1 className="text-md min-w-[6rem] capitalize p-1">
                <Label className="" value={Name} /> 
            </h1> <span className="mx-2">:</span> 

            {status && !nid && !dob &&
                <p className='py-1 rounded text-white bg-blue-500'>{Value}</p>
            
            }
            {!status && !nid && !dob &&
                <p className='py-1 text-lg text-gray-900'>{Value }</p>
            
            }
            {!status && !nid && dob &&
                 <BanglaDate date={Value} />
            
            }
            {!status && nid && !dob &&
                 <EnglishToBangla number={parseInt(Value)} />
            
            }

        </div>
    );
});
Field.displayName = 'Field';

export default Field;