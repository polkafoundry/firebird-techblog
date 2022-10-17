import clsx from "clsx"
import Image from "next/image"
import { CardActive, CardVertical } from "../../../Base/Card"

import ButtonLink from "../../../Base/ButtonLink"

const LastestPost = (props: any) => {
  const { inputSearch, handleSearch, articles } = props

  return (
    <>
      <div
        className={clsx(
          "flex flex-col w-full justify-between items-baseline mt-8 gap-3",
          "xs:flex-row xs:mt-12",
          "md:mt-8"
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

      <div className={clsx("hidden w-full mt-3", "md:mt-5 md:flex", "md:mt-3")}>
        <CardActive cardData={articles[0]} />
      </div>

      <div
        className={clsx(
          "flex flex-col items-center gap-5 mt-5",
          "xs:flex-row xs:items-start xs:mt-[26px] xs:gap-[14px] xs:grid xs:grid-cols-2",
          "md:mt-5 md:gap-5 md:grid-cols-3 "
        )}
      >
        <div className="flex md:hidden">
          <CardVertical cardData={articles[0]} />
        </div>
        {articles.slice(1).map((item: any, index: number) => (
          <div className="flex" key={index}>
            <CardVertical cardData={item} />
          </div>
        ))}
      </div>

      <div className={clsx("flex justify-center mt-5", "xs:mt-8", "md:mt-10")}>
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
