import Image from "next/image"

function Rating() {
  return (
    <Image 
    src={'/Ratings.svg'} 
    alt="Ratings" 
    width={15} 
    priority 
    height={15}
    className="w-[10px] h-auto sm:w-[15px]"
    
    />
    
  )
}
export default Rating