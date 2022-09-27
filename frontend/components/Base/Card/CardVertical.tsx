import clsx from "clsx"
import Image from "next/image"
import React from "react"
import {
  CONTENT_TYPES,
  MAPPING_CONTENT_TYPE_TEXT
} from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import styles from "./card.module.scss"

const fakeCard = {
  image: "/images/fake-card-vertical.png",
  types: [CONTENT_TYPES.TECHNOLOGY, CONTENT_TYPES.COMMUNITY],
  title: "How businesses can benefit from Web3.0 and blockchain",
  detail:
    "According to experts, combination of Web3. 0 and blockchain can help venture capitalists benefit from sectors such as e-commerce and fantasy sports. With Web3. 0 and blockchain expected to be adopted in next couple of years, businesses aim to use to ramp up offerings",
  authorAvatar: "/images/fake-author-avatar.png",
  authorName: "Doone Roisin",
  date: "Jan 24",
  timeToRead: "4 min"
}
const CardVertical = () => {
  return (
    <div className="bg-white w-full max-w-[360px] rounded-[20px] p-5 flex flex-col">
      <div className="rounded-xl h-[180px] w-full relative">
        <Image src={fakeCard?.image} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="flex mt-3 gap-[6px]">
        {fakeCard?.types?.map((type: any) => {
          return (
            <div
              key={type}
              className={clsx(
                "font-semibold text-sm rounded-lg px-5 h-8 flex items-center",
                getContentTypeColor(type)
              )}
            >
              <span>{MAPPING_CONTENT_TYPE_TEXT[type]}</span>
            </div>
          )
        })}
      </div>
      <div className={`${styles.multiLine} mt-1 text-xl font-semibold`}>
        {fakeCard?.title}
      </div>
      <div className={`${styles.multiLine} mt-2`}>{fakeCard?.detail}</div>
      <div className="mt-5 flex gap-2">
        <Image
          src={fakeCard?.authorAvatar}
          width={44}
          height={44}
          alt=""
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">{fakeCard?.authorName}</span>
          <span className="text-xs text-birdGray">
            {`${fakeCard?.date} | ${fakeCard?.timeToRead} read`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardVertical
