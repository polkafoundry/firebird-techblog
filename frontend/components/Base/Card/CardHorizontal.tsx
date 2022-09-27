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
  types: ["ecosystem", "analytics"],
  title: "How businesses can benefit from Web3.0 and blockchain",
  detail:
    "According to experts, combination of Web3. 0 and blockchain can help venture capitalists benefit from sectors such as e-commerce and fantasy sports. With Web3. 0 and blockchain expected to be adopted in next couple of years, businesses aim to use to ramp up offerings",
  authorAvatar: "/images/fake-author-avatar.png",
  authorName: "Doone Roisin",
  date: "Jan 24",
  timeToRead: "4 min"
}
const CardHorizontal = () => {
  return (
    <div className="bg-white w-full rounded-[20px] p-5 flex gap-5">
      <div className="rounded-xl w-1/2 relative">
        <Image src={fakeCard?.image} layout="fill" objectFit="contain" alt="" />
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
        <div className={`${styles.multiLine} mt-1 text-xl font-semibold`}>
          {fakeCard?.title}
        </div>
        <div className={`${styles.multiLine} mt-2`}>{fakeCard?.detail}</div>
        <div className="mt-4 flex gap-2">
          <div className="flex gap-2 items-center">
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

export default CardHorizontal
