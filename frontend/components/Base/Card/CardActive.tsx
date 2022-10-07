import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import imgFake from "public/images/fake-card-active.png"
import {
  CONTENT_TYPES,
  defaultAuthor,
  defaultAvatar,
  MAPPING_CONTENT_TYPE_TEXT,
  URLS
} from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import styles from "./card.module.scss"

const fakeCard = {
  image: imgFake,
  types: [CONTENT_TYPES.READER_CONTRIBUTION],
  title:
    "3 Steps to Web3: The Ultimate Guide to Navigating Web3 for Non-Tech Founders",
  detail:
    "Now that we're well over halfway through 2022, it's safe to say there's definitely been a rapid pace of change surrounding Web3 this year. In the month of March alone, there were 41,000 new articles published referencing Web3",
  authorAvatar: "/images/default-avatar.svg",
  authorName: "Firebird Writer",
  date: "August 9",
  timeToRead: "4 min"
}
const CardActive = () => {
  return (
    <Link href={URLS.DETAILS_ARTICLE}>
      <div
        className={clsx(
          "bg-white w-full rounded-[20px] p-7 flex flex-col gap-3 cursor-pointer",
          "xs:flex-row xs:gap-8"
        )}
      >
        <div className="rounded-xl w-full max-w-[600px] relative">
          <Image src={fakeCard?.image} layout="responsive" alt="" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex mt-1 gap-[6px]">
            {fakeCard?.types?.map((type: any) => (
              <div
                key={type}
                className={`font-semibold text-sm rounded-lg px-5 h-8 flex items-center 
            ${getContentTypeColor(type)}`}
              >
                <span>{MAPPING_CONTENT_TYPE_TEXT[type]}</span>
              </div>
            ))}
          </div>
          <div
            className={clsx(
              `${styles.multiLineActive} mt-1 text-xl leading-7 font-semibold`,
              "xs:text-[32px] xs:leading-10"
            )}
          >
            {fakeCard?.title}
          </div>
          <div
            className={clsx(
              `${styles.multiLineActive} mt-4 text-sm`,
              "xs:mt-2 xs:text-base"
            )}
          >
            {fakeCard?.detail}
          </div>
          <div className={clsx("mt-5 flex gap-2", "xs:mt-12")}>
            <Image
              src={fakeCard?.authorAvatar || defaultAvatar}
              width={44}
              height={44}
              alt=""
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold">
                {fakeCard?.authorName || defaultAuthor}
              </span>
              <span className="text-xs text-birdGray">
                {`${fakeCard?.date} | ${fakeCard?.timeToRead} read`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardActive
