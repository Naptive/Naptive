import Image from "next/image"
import Link from "next/link"

function Login() {
  return (
    <main className="min-w-screen min-h-screen pt-[64px] flex items-center justify-center">
     <div className="flex text-black h-[400px] w-[300px] md:w-[600px] absolute z-[4] ">
         <div className="w-2/4 bg-white h-full flex items-center justify-center hidden md:block">
            <Image 
            src={'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=360&t=st=1687644481~exp=1687645081~hmac=dd40aef50bdbf0db62c0a7519048b6daf03142e577ee050ac62f7d3f6d7e0140'} height={200} width={200} alt="login illustration" />
         </div>
         <div className="w-full md:w-2/4 h-full flex justify-center items-center flex-column md:border-[1px] md:border-white border-black">
           <div className="bg-pink-500 h-[140px] w-[10px] absolute z-[-1] animate-spin"> </div>
          <form className="h-max backdrop-blur-lg">
          <h2 className="text-white antialiased text-center h-min mb-[20px]">Login</h2>
            <div className="mb-[8px] w-[200px] ">
            <p className="text-white text-[12px] font-extralight">Email</p>
              <input className="bg-neutral-900 h-[35px] rounded-md focus:outline-none text-white text-[13px] w-full px-[8px]" 
              type="email" 
              name="email" 
              placeholder="Email"/>
            </div>
            <div className="w-[200px]">
              <p className="text-white text-[12px] font-extralight">Password</p>
              <input className="bg-neutral-900 h-[35px] rounded-md mb-[20px] focus:outline-none text-white text-[13px] w-full px-[8px]" 
              type="password" 
              name="password" 
              placeholder="Password"/>
            </div>

            <div>
              <button className="text-black text-[13px] bg-white w-full h-[38px]  rounded-full">Log in</button>
              <p className="text-neutral-700 mt-[5px] text-[12px]">Don't have an account <Link href={"/"}><span className="text-sky-500">Sign Up</span></Link></p>
            </div>
            <div className="flex items-center justify-evenly mt-[20px]">
              <button><Image src={"google.svg"} width={37} height={37}alt="Google" /></button>
            <button><Image src={"facebook.svg"} width={37} height={37}alt="Facebook" /></button>
            </div>
          </form>
         </div>
     </div>
    </main>
  )
}
export default Login