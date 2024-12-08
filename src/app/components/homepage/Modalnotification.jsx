"use client"
export default function Modalnotification () {
 const handleModal = () => {
  const modal = document.getElementById("MODAL")
  modal.classList.toggle('hidden')

 }

    return(
        <div id='MODAL' className=" hidden inset-0 fixed px-10  justify-center items-center w-full h-full bg-transparentBlack py-10 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="relative w-[70vw]   bg-white mx-auto py-auto rounded xl:h-[60%]">
                 <div className="flex flex-col items-center justify-center">
                    <span className="w-10 h-10 font-[700] text-white  text-center bg-red-400 ml-auto" onClick={handleModal}>x</span>
                    <iframe width="100%" height=""
                      src="https://www.youtube.com/embed/tgbNymZ7vqY">
                   </iframe>
                 </div>
             </div>
        </div>
    )
}