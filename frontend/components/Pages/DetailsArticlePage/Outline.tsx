import clsx from "clsx"
import React from "react"
import Spinner from "../../Base/Spinner"

type OutlineProps = {
  headings: any[]
  handleClick: any
  headingActive?: any
  inputEmail: any
  handleChangeEmail: (data: any) => void
  handleSubscribe: (data: any) => void
  loading: boolean
}

const Outline = (props: OutlineProps) => {
  const {
    headings,
    handleClick,
    headingActive,
    inputEmail,
    handleChangeEmail,
    handleSubscribe,
    loading
  } = props
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
        {headings?.map((item, index) => (
          <div className="mt-5" key={item.content}>
            <p
              className={clsx(
                "cursor-pointer inline-block",
                (headingActive.mainHeadingIndex !== index ||
                  headingActive.isSubHeadingActive) &&
                  "opacity-80"
              )}
              onClick={() => handleClick(item.element)}
            >
              {item.content}
            </p>
            {item.subHeadings?.map((subHeading: any, index: number) => (
              <p
                key={subHeading.content}
                className={clsx(
                  "pl-4 mt-0.5 inline-block cursor-pointer",
                  headingActive.subHeadingIndex !== index && "opacity-80"
                )}
                onClick={() => handleClick(subHeading.element)}
              >
                {subHeading.content}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-5 text-white">
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
            value={inputEmail}
            onChange={handleChangeEmail}
          />
        </div>

        <div
          className="flex cursor-pointer h-[52px] mt-3 font-semibold bg-main rounded-lg justify-center items-center tracking-wider duration-500 hover:tracking-widest"
          onClick={handleSubscribe}
        >
          {loading ? <Spinner /> : "Subscribe Now"}
        </div>
      </div>
    </div>
  )
}

export default Outline
