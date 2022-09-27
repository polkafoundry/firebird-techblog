import Image from "next/image"
import React from "react"
import {
  CONTENT_TYPES,
  MAPPING_CONTENT_TYPE_TEXT
} from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import styles from "./card.module.scss"

const fakeCard = {
  image: "/images/fake-card-active.png",
  types: [CONTENT_TYPES.READER_CONTRIBUTION],
  title:
    "3 Steps to Web3: The Ultimate Guide to Navigating Web3 for Non-Tech Founders",
  detail:
    "Now that we're well over halfway through 2022, it's safe to say there's definitely been a rapid pace of change surrounding Web3 this year. In the month of March alone, there were 41,000 new articles published referencing Web3",
  authorAvatar: "/images/fake-author-avatar.png",
  authorName: "Doone Roisin",
  date: "August 9",
  timeToRead: "4 min"
}
const CardWriter = () => {
  return (
    <div className="bg-white w-full rounded-[20px] p-7 flex flex-col gap-5 h-full">
      <div className="rounded-xl w-full max-w-full relative h-full">
        <Image
          src={fakeCard?.image}
          layout="fill"
          alt=""
          sizes="100vw"
          objectFit="contain"
        />
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
          className={`${styles.multiLineActive} mt-1 text-[32px] leading-10 font-semibold`}
        >
          {fakeCard?.title}
        </div>
        <div className={`${styles.multiLineActive} mt-2`}>
          {fakeCard?.detail}
        </div>
        <div className="mt-12 flex gap-2">
          <Image
            src={fakeCard?.authorAvatar}
            width={44}
            height={44}
            alt=""
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">
              {fakeCard?.authorName}
            </span>
            <span className="text-xs text-birdGray">
              {`${fakeCard?.date} | ${fakeCard?.timeToRead} read`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardWriter
