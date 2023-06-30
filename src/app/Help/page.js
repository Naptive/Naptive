import Image from "next/image";
import Q from "/public/Q.svg";
import { Suspense } from "react";
import Loading from "./loading";
function Help() {
  return (
    <main className="h-[100vh] bg-neutral-950 px-2 py-3 antialiased sm:px-[32px] ">
      <div className="flex h-[100%] min-w-[100%] gap-2 pt-[5em]">
        <div className="hidden h-full w-1/3 min-w-[230px] bg-black sm:block">
          <Suspense fallback={<Loading />}>
            <h1 className="flex items-end px-3 py-3 text-[30px] font-extralight">
              Help
              <Image
                alt="Question mark"
                src={Q}
                className="mb-2 h-[0.58em] w-[0.58em]"
              />
            </h1>
          </Suspense>
        </div>

        <div className="w-full overflow-scroll bg-black px-6 py-6 sm:w-2/3">
          <section className="mb-[40px]">
            <h1 className="text-[20px] font-light sm:text-[25px]">
              Difficulty Adding Items to Cart
            </h1>
            <h3 className="mb-8 text-start text-stone-500">
              If users are having trouble adding items to their shopping cart,
              it can disrupt their shopping experience on the e-commerce
              website.
            </h3>
            <h3 className="font-light text-stone-300 antialiased">
              Check internet connection: Ensure that the internet connection is
              stable and strong enough to support the website's functionality.
              Clear browser cache: Clearing the cache can remove any temporary
              data that might be causing conflicts. Disable browser extensions:
              Some browser extensions can interfere with the website's
              functionality. Temporarily disable them and try adding items
              again. Try a different browser: Switching to a different browser
              can help identify if the problem is specific to the current
              browser being used. Contact customer support: If the issue
              persists, users should reach out to the customer support team of
              the e-commerce website for further assistance.
            </h3>
          </section>
          <section className="mb-[40px]">
            <h1 className="text-[20px] font-light sm:text-[25px]">
              Payment Processing Errors
            </h1>
            <h3 className="mb-8 text-start text-stone-500">
              Encountering errors during the payment process can prevent
              customers from completing their transactions.
            </h3>
            <h3 className="font-light text-stone-300 antialiased">
              Double-check payment details: Ensure that all payment information,
              such as credit card details and billing address, are entered
              correctly. Try a different payment method: If one payment method
              is not working, suggest trying an alternative payment option
              provided by the website. Contact customer support: If the issue
              persists, users should contact the customer support team of the
              e-commerce website for guidance and assistance. Check with the
              bank or payment provider: Sometimes, payment errors can occur due
              to issues on the bank or payment processor's side. Users should
              contact them to ensure there are no restrictions or problems with
              their account.
            </h3>
          </section>
          <section className="mb-[40px]">
            <h1 className="text-[20px] font-light sm:text-[25px]">
              Delivery and Shipping Issues
            </h1>
            <h3 className="mb-8 text-start text-stone-500">
              Customers may face problems related to delivery, shipping, or
              tracking of their orders.
            </h3>
            <h3 className="font-light text-stone-300 antialiased">
              Review order status: Advise users to check the order status and
              tracking information provided on the website. They should ensure
              that the estimated delivery time has not passed. Contact customer
              support: If there are concerns or issues with delivery or
              shipping, users should contact the customer support team of the
              e-commerce website to inquire about the status of their order and
              seek assistance. Verify shipping address: Remind users to
              double-check the accuracy of their shipping address to ensure that
              the delivery is sent to the correct location. Check delivery
              options: If available, users may have the option to select
              different delivery methods or shipping carriers. Suggest exploring
              alternative options if the current method is causing issues.
            </h3>
          </section>
        </div>
      </div>
    </main>
  );
}
export default Help;
