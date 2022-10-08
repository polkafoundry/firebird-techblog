import clsx from "clsx"
import Image from "next/image"
import ButtonLink from "../../../Base/ButtonLink"
import { CardActive, CardVertical } from "../../../Base/Card"

const LastestPost = (props: any) => {
  const { inputSearch, handleSearch } = props
  return (
    <>
      <div
        className={clsx(
          "flex flex-col w-full justify-between mt-8 gap-3",
          "xs:flex-row"
        )}
      >
        <span
          className={clsx(
            "text-3xl font-semibold font-birdMedium text-center",
            "xs:text-left"
          )}
        >
          Latest Post
        </span>
        <div
          className={clsx(
            "flex items-center rounded-lg px-5 h-[52px] bg-white w-full",
            "xs:max-w-xs"
          )}
        >
          <input
            type="text"
            placeholder="Search article"
            className="outline-none w-full"
            value={inputSearch}
            onChange={handleSearch}
          />
          <Image
            className="cursor-pointer"
            src="/images/icon-search.svg"
            width={24}
            height={24}
            alt=""
          />
        </div>
      </div>

      <div className="hidden w-full mt-3 xs:flex">
        <CardActive />
      </div>

      <div
        className={clsx(
          "flex flex-col items-center gap-5 mt-5  ",
          "xs:flex-row"
        )}
      >
        <div className="flex xs xs:hidden">
          <CardVertical />
        </div>
        {Array(3)
          .fill(1)
          .map((item, index) => (
            <CardVertical key={index} />
          ))}
      </div>

      <div className="flex justify-center mt-10">
        <ButtonLink className="px-7 gap-3 bg-black text-white" href="articles">
          <>
            View more articles
            <Image
              src={"/images/icon-open.svg"}
              width={24}
              height={24}
              alt=""
            />
          </>
        </ButtonLink>
      </div>
    </>
  )
}

export default LastestPost
