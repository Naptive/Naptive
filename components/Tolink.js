"use client";
import Image from "next/image";

function Tolink() {
  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "end",
    });
  };

  return (
    <>
      <div
        className="flex items-center gap-1"
        onClick={() => scrolltoHash("second-section")}
      >
        <Image
          className="h-[18px] min-w-[18px]"
          src={"/erImg.svg"}
          width={18}
          height={18}
          alt="error image"
        />
        <span className="cursor-pointer text-base font-normal text-neutral-500 antialiased hover:text-neutral-300 whitespace-nowrap">
          Payment Processing Errors
        </span>
      </div>

      <div
        className="flex items-center gap-1"
        onClick={() => scrolltoHash("first-section")}
      >
        <Image
          className="h-[18px] min-w-[18px]"
          src={"/erImg.svg"}
          width={18}
          height={18}
          alt="error image"
        />
        <span className="cursor-pointer text-base font-normal text-neutral-500 antialiased hover:text-neutral-300 whitespace-nowrap">
          Difficulty Adding Items to Cart
        </span>
      </div>

      <div
        className="flex items-center gap-1"
        onClick={() => scrolltoHash("third-section")}
      >
        <Image
          className="h-[18px] min-w-[18px]"
          src={"/erImg.svg"}
          width={18}
          height={18}
          alt="error image"
        />
        <span className="cursor-pointer text-base font-normal text-neutral-500 antialiased hover:text-neutral-300 whitespace-nowrap">
          Delivery and Shipping Issues
        </span>
      </div>
    </>
  );
}
export default Tolink;
