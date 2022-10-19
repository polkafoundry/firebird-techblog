import Image from "next/image"
import Link from "next/link"
import {
  defaultAuthor,
  defaultAvatar,
  MAPPING_CONTENT_TYPE_TEXT,
  URLS
} from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import styles from "./card.module.scss"

type CardWriterProps = {
  cardData: any
}

const CardWriter = (props: CardWriterProps) => {
  const { cardData } = props
  return (
    <Link href={URLS.DETAILS_ARTICLE}>
      <div className="bg-white w-full rounded-[20px] p-7 flex flex-col gap-5 h-full cursor-pointer">
        <picture className="rounded-xl">
          <img
            src={cardData?.image}
            alt=""
            style={{
              objectFit: "cover",
              borderRadius: 12
            }}
          />
        </picture>
        <div className="flex flex-col flex-1">
          <div className="flex mt-1 gap-[6px]">
            {cardData?.types?.map((type: any) => (
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
            className={`${styles.multiLineActive} mt-1 font-semibold text-2xl lg:text-32px`}
          >
            {cardData?.title}
          </div>
          <div className={`${styles.multiLineActive} mt-2`}>
            {cardData?.detail}
          </div>
          <div className="mt-auto pt-5 flex gap-2">
            <Image
              src={cardData?.authorAvatar || defaultAvatar}
              width={44}
              height={44}
              alt=""
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold">
                {cardData?.authorName || defaultAuthor}
              </span>
              <span className="text-xs text-birdGray">
                {`${cardData?.date} | ${cardData?.timeToRead} read`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardWriter
