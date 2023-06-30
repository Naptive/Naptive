"use client"
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function Navlink({ href, children }) {
    let segment = useSelectedLayoutSegment()
    let active = href === `${segment}`
    console.log(active);
  return (
    <Link className={active ? "text-white hover:text-white whitespace-nowrap" : "text-blue  font-[14px]" } href={href}>{children}</Link>
  )
}
export default Navlink