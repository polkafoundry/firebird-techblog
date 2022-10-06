import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  CONTENT_TYPES,
  MAPPING_CONTENT_TYPE_TEXT,
  URLS
} from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import styles from "./card.module.scss"
import imgFake from "/public/images/fake-card-vertical.png"

const fakeCard = {
  image: imgFake,
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
    <Link href={URLS.DETAILS_ARTICLE}>
      <div
        className={clsx(
          "bg-white w-full rounded-[20px] p-5 flex flex-col gap-3 items-center cursor-pointer",
          "md:flex-row md:gap-5"
        )}
      >
        <div className={clsx("rounded-xl w-full relative", "md:w-1/2")}>
          <Image src={fakeCard?.image} layout="responsive" alt="" />
        </div>
        <div className="flex flex-col flex-1">
          <div className={clsx("flex mt-1 gap-1", "gap-[6px]")}>
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
              `${styles.multiLine} mt-1 text-xl leading-7 font-semibold`,
              "md:leading-8"
            )}
          >
            {fakeCard?.title}
          </div>
          <div
            className={clsx(
              `${styles.multiLine} mt-3 text-sm`,
              "md:mt-2 md:text-base"
            )}
          >
            {fakeCard?.detail}
          </div>
          <div className="mt-4 flex gap-2">
            <div className="contents md:hidden">
              <Image
                src={fakeCard?.authorAvatar}
                width={44}
                height={44}
                alt=""
                className="rounded-full"
              />
            </div>
            <div
              className={clsx(
                "flex flex-col gap-[2px] items-left",
                "md:flex-row md:items-center md:gap-2"
              )}
            >
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
    </Link>
  )
}

export default CardHorizontal
