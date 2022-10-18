import clsx from "clsx"
import Image from "next/image"
import { CardActive, CardVertical } from "../../../Base/Card"

import ButtonLink from "../../../Base/ButtonLink"
import iconClose from "/public/images/icon-close-gray.svg"
import iconSearch from "/public/images/icon-search.svg"
import Link from "next/link"
import { URLS } from "../../../../utils/constants"

const LastestPost = (props: any) => {
  const {
    inputSearch,
    handleSearch,
    handleClearSearch,
    resultSearched,
    articles
  } = props

  const renderSearchBox = () => {
    return (
      <div
        className={clsx(
          "flex px-5 py-[14px] bg-white w-full relative shadow-lg shadow-[#00000014]",
          inputSearch ? "rounded-t-lg" : "rounded-lg",
          "xs:max-w-xs"
        )}
      >
        <div className="flex items-baseline w-full">
          <input
            type="text"
            placeholder="Search article"
            className="outline-none flex-1 mr-2"
            value={inputSearch}
            onChange={handleSearch}
          />
          {inputSearch && (
            <div className="h-4 w-4 relative mr-2" onClick={handleClearSearch}>
              <Image className="cursor-pointer" src={iconClose} alt="" />
            </div>
          )}
          <Image src={iconSearch} width={16} height={16} alt="" />
        </div>
        {inputSearch && (
          <ul className="absolute z-10 top-full left-0 px-5 pb-3 bg-white w-full shadow-lg shadow-[#00000014] rounded-b-lg">
            {resultSearched?.length ? (
              resultSearched.map((item: any) => (
                <li
                  key={item.id}
                  className="py-2 text-base cursor-pointer hover:text-birdRed"
                >
                  <Link href={`${URLS.DETAILS_ARTICLE}/${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))
            ) : (
              <li className="py-2 text-base">Not found ...</li>
            )}
          </ul>
        )}
      </div>
    )
  }

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
        {renderSearchBox()}
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
