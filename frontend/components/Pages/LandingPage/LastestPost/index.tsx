import clsx from "clsx"
import Image from "next/image"
import { CONTENT_TYPES } from "../../../../utils/constants"
import { CardActive, CardVertical } from "../../../Base/Card"

import imgFake1 from "public/images/fake-card-vertical-1.png"
import imgFake2 from "public/images/fake-card-vertical-2.png"
import imgFake3 from "public/images/fake-card-vertical-3.png"
import imgFakeActive from "public/images/fake-card-active.png"
import ButtonLink from "../../../Base/ButtonLink"

const fakeData = [
  {
    id: "3",
    image: imgFake1,
    types: [CONTENT_TYPES.ANALYTICS, CONTENT_TYPES.ECOSYSTEM],
    title:
      "Why Firebird should be Used Extensively in Gaming and Metaverse Projects",
    detail: `Firebird has officially been released recently and it promises to open up new opportunities for gaming and metaverse blockchain projects in the future.`,
    authorAvatar: "/images/default-avatar.svg",
    authorName: "Firebird Writer",
    date: "Oct 10",
    timeToRead: "4 min"
  },
  {
    id: "4",
    image: imgFake2,
    types: [CONTENT_TYPES.ANALYTICS, CONTENT_TYPES.TECHNOLOGY],
    title: "Validator node and how do we benefit from running a validator? ",
    detail: `Proof-of-stake is a cryptocurrency consensus mechanism for processing transactions and creating new blocks in a blockchain. A consensus mechanism is a method for validating entries into a distributed database and keeping the database secure`,
    authorAvatar: "/images/default-avatar.svg",
    authorName: "Firebird Writer",
    date: "Oct 10",
    timeToRead: "4 min"
  },
  {
    id: "2",
    image: imgFakeActive,
    types: [CONTENT_TYPES.TECHNOLOGY],
    title: "Byzantine generals problem, blockchain and consensus",
    detail: `The demand for understanding concepts of blockchain technology continues to grow, especially for beginners. One of the notable concepts pertaining to the blockchain landscape which has been troubling beginners refers to the Byzantine Generals’ Problem`,
    authorAvatar: "/images/default-avatar.svg",
    authorName: "Firebird Writer",
    date: "Oct 10",
    timeToRead: "4 min"
  }
]

const fakeCardActive = {
  id: "5",
  image: imgFake3,
  types: [CONTENT_TYPES.ANALYTICS, CONTENT_TYPES.ECOSYSTEM],
  title: "Catch the Potential Future of Gaming and Metaverse with Firebird",
  detail: `Currently, the gaming sector in general, and blockchain gaming, in particular, are expanding quickly. With the appearance of the metaverse, there’s a prediction that the metaverse and gaming will strongly grow together and usher in a new era for the gaming industry.`,
  authorAvatar: "/images/default-avatar.svg",
  authorName: "Firebird Writer",
  date: "Oct 10",
  timeToRead: "4 min"
}

const LastestPost = (props: any) => {
  const { inputSearch, handleSearch } = props
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
        <CardActive />
      </div>

      <div
        className={clsx(
          "flex flex-col items-center gap-5 mt-5",
          "xs:flex-row xs:mt-[26px] xs:gap-[14px] xs:grid xs:grid-cols-2",
          "md:mt-5 md:gap-5 md:grid-cols-3 "
        )}
      >
        <div className="flex md:hidden">
          <CardVertical cardData={fakeCardActive} />
        </div>
        {fakeData.map((item, index) => (
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
