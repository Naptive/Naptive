import Image from "next/image";
import Q from "/public/Q.svg";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
import Tolink from "../../../components/Tolink";
import Problems from "../../../components/problems"
function Help() {
  return (
    <main className="h-[100vh] bg-neutral-950 px-2 py-3 sm:py-0 antialiased sm:px-[32px] ">
      <div className="flex h-[100%] min-w-[100%] gap-2 ">
        <div className="hidden h-full w-1/3 min-w-[230px] bg-black pt-[4em] sm:block">
          <Suspense fallback={<Loading />}>
            <h1 className="flex items-end px-3 py-3 text-[30px] font-extralight">
              Help
              <Image
                alt="Question mark"
                src={Q}
                className="mb-2 h-[0.58em] w-[0.58em]"
              />
            </h1>
            <section className="flex flex-col gap-1 h-full w-full px-3 py-3">
              <Tolink />
            </section>
          </Suspense>
        </div>
        <Suspense fallback={<Loading />}>
          <div className="flex w-full flex-col gap-[10px] overflow-scroll bg-black px-6 py-6 pt-[5.5em] sm:w-2/3 [&::-webkit-scrollbar]:hidden">
            <Problems />
          </div>
        </Suspense>
      </div>
    </main>
  );
}
export default Help;
