import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import {
  defaultAuthor,
  defaultAvatar,
  MAPPING_CONTENT_TYPE_TEXT
} from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import styles from "./card.module.scss"

type CardActiveProps = {
  cardData?: any
}

const CardActive = (props: CardActiveProps) => {
  const { cardData } = props

  return (
    <Link href={`/articles/${cardData?.id}`}>
      <div
        className={clsx(
          "bg-white w-full rounded-[20px] p-7 flex flex-col gap-3 cursor-pointer",
          "sm:flex-row sm:gap-8 sm:py-5 sm:px-4",
          "md:p-7"
        )}
      >
        <div
          className={clsx(
            "rounded-2xl w-full max-w-[600px] relative flex-2",
            "xs:max-w-[436px]",
            "md:max-w-[500px]",
            "lg:max-w-[550px]",
            "xl:max-w-[610px]"
          )}
        >
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
        </div>
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
            className={clsx(
              `${styles.multiLineActive} mt-1 text-xl leading-7 font-semibold`,
              "xs:text-[32px] xs:leading-10"
            )}
          >
            {cardData?.title}
          </div>
          <div
            className={clsx(
              `${styles.multiLineActive} mt-4 text-sm`,
              "xs:mt-2 xs:text-base"
            )}
          >
            {cardData?.detail}
          </div>
          <div className={clsx("mt-5 flex gap-2", "xs:mt-12 md:mt-auto")}>
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

export default CardActive
