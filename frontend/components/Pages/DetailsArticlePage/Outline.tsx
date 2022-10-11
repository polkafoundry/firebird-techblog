import clsx from "clsx"
import React from "react"

type OutlineProps = {
  headings?: any[]
}

const Outline = (props: OutlineProps) => {
  const headings = props.headings
  console.log("headingss", headings)
  // const headings = [
  //   {
  //     content: "1. Web3 is the new trendy name for the decentralized web."
  //   },
  //   {
  //     content:
  //       "2. Web1 is read-only, Web2 is read-write, Web3 is read-write-own.",
  //     active: true,
  //     subHeadings: [
  //       {
  //         content: "2.1. Web3 is a money layer for the internet.",
  //         active: true
  //       },
  //       { content: "2.2. Web3 is an identity layer for the internet." }
  //     ]
  //   },
  //   {
  //     content:
  //       "3. Web3 is a reaction to social networks not keeping our data secure, and selling it for their own profit."
  //   },
  //   {
  //     content:
  //       "4. Web3 is a way for artists and creators to not only own what they produce on a platform, but the platform itself."
  //   }
  // ]

  return (
    <div
      className={clsx(
        "sticky top-5 h-fit w-[360px] bg-black text-white rounded-[20px] pt-7 pb-8 px-8 hidden",
        "lg:flex lg:flex-col"
      )}
    >
      <h5 className="text-[32px] leading-10 font-birdMedium font-semibold">
        Outline
      </h5>
      <div
        className={clsx(
          "pb-5 text-sm leading-5"
          // "border-b border-white border-opacity-40"
        )}
      >
        {headings.map((item) => (
          <div className="mt-5" key={item.content}>
            <p
              className={clsx(
                "cursor-pointer",
                item.active ? "" : "opacity-80"
              )}
            >
              {item.content}
            </p>
            {item.subHeadings?.map((subHeading) => (
              <p
                key={subHeading.content}
                className={clsx(
                  "pl-4 mt-0.5 cursor-pointer",
                  subHeading.active ? "opacity-100" : "opacity-80"
                )}
              >
                {subHeading.content}
              </p>
            ))}
          </div>
        ))}
      </div>
      {/* <div className="mt-5 text-white">
        <span className="font-semibold text-2xl block">
          Subscribe to receive our latest blog
        </span>
        <span className="text-sm mt-2 block">
          No spam, unsubscribe anytime and always bring contents!
        </span>

        <div className="flex rounded-lg bg-white w-full h-[52px] mt-2 px-4 items-center">
          <input
            type="text"
            className="w-full outline-none text-black"
            placeholder="Your email address"
            // value={inputEmail}
            // onChange={handleChangeEmail}
          />
        </div>

        <div
          className="flex cursor-pointer h-[52px] mt-3 font-semibold bg-main rounded-lg justify-center items-center tracking-wider duration-500 hover:tracking-widest"
          // onClick={handleSubscribe}
        >
          Subscribe Now
        </div>
      </div> */}
    </div>
  )
}

export default Outline