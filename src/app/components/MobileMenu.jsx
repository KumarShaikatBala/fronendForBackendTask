import Image from "next/image"
import Link from "next/link"
import NoticeIcon from '@public/icon/noticeicon.svg'

export default function MobileMenu () {
    return(
            <div className="w-[100vw] relative z-100   block   overflow-y-scroll bg-transparentBlack">
                <div className=" w-[90vw] flex flex-col bg-white justify-between opacity-100 h-[100vh] p-6">
                 
                    <div className="space-y-2" >
                        <div className=" min-h-[50px] rounded-md flex gap-4 items-center p-2 border">
                        <Image
                                src={NoticeIcon}
                                className="text-baseblue max-w-[30px]"
                                style={{width: 'auto', height: 'auto'}}
                                alt="notice"
                                loading={"lazy"}
                            />
                        <Link href="/notice">
                                <h2 className=" text-baseblue  font-bold hover:text-orange-900  text-base xl:text-xl">
                                    নোটিশ
                                </h2>
                            </Link>
                            
                        </div>
                        <div className="min-h-[50px] rounded">
                        <div className=" min-h-[50px] rounded-md border flex gap-4 items-center p-2">
                        <Image
                                src={NoticeIcon}
                                className="text-baseblue max-w-[30px]"
                                style={{width: 'auto', height: 'auto'}}
                                alt="notice"
                                loading={"lazy"}
                            />
                        <Link href="/manuals">
                                <h2 className=" text-baseblue  font-bold hover:text-orange-900  text-base xl:text-xl">
                                ম্যানুয়াল
                                </h2>
                            </Link>
                          
                        </div>
                        </div>
                        <div className=" min-h-[50px] rounded-md flex gap-4 items-center border p-2 ">
                        <Image
                                src={NoticeIcon}
                                className="text-baseblue max-w-[30px]"
                                style={{width: 'auto', height: 'auto'}}
                                alt="notice"
                                loading={"lazy"}
                            />
                        <Link href="/tutorials">
                                <h2 className=" text-baseblue  font-bold hover:text-orange-900  text-base xl:text-xl">
                                টিউটোরিয়াল
                                </h2>
                            </Link>
                        </div>
                      
                    </div>

                    
                        <div className="pb-6 bg-gray-200  pt-5 px-4 mb-10 border rounded-md">
                            <div className="gap-x-4 flex">
                                <Image 
                                src="./icon/contact.svg" 
                                // className="w-[44px] h-[44px]" 
                                alt="DOS Contact"
                                width={50}
                                height={50}
                                />
                            <div className="flex flex-col justify-center item-center font-[400] gap-y-2 ">
                                <p className="flex text-black font-inter text-[12px] font-normal  gap-x-2 ">Call : <span className="text-black font-inter text-[12px] font-bold ">01576400104, 01576400105 </span> </p>
                                <p className="flex text-black font-inter text-[12px] font-normal  gap-x-2 ">Mail : <span className="text-black font-inter text-[12px] font-bold ">dos.support@dream71.com</span> </p>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        
    )
}