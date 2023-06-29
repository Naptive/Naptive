import Image from "next/image"
import Q from "/public/Q.svg"
function Help() {
  return (
    <main className='h-[100vh] py-3 sm:px-[32px] px-2 antialiased bg-neutral-950 '>
      
        
        <div className="min-w-[100%] h-[100%] pt-[5em] flex gap-2">
            <div className="w-1/3 min-w-[230px] hidden h-full bg-black sm:block">

            <h1 className="text-[30px] font-extralight px-3 py-3 flex items-end">Help
            
            <Image alt="Question mark" src={Q} className="w-[0.58em] h-[0.58em] mb-2"/></h1>
            
            </div>


            <div className="w-full sm:w-2/3 bg-black">

            </div>
        </div>
    </main>
  )
}
export default Help