import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import imgFake from "public/images/fake-card-vertical.png"
import {
  CONTENT_TYPES,
  defaultAuthor,
  defaultAvatar,
  MAPPING_CONTENT_TYPE_TEXT,
  URLS
} from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import styles from "./card.module.scss"

type CardVerticalProps = {
  cardData?: any
  hideDetail?: boolean
}
const CardVertical = (props: CardVerticalProps) => {
  const { hideDetail = false, cardData: fakeCard } = props

  return (
    <Link href={`/articles/${fakeCard?.id}`}>
      <div
        className={clsx(
          "bg-white w-full rounded-[20px] p-5 flex flex-col cursor-pointer",
          "xs:max-w-[360px] xs:p-4",
          "md:p-5"
        )}
      >
        <div className="rounded-xl w-full relative">
          <Image
            src={fakeCard?.image}
            layout="responsive"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className={clsx("flex mt-3 gap-[6px]", "xs:mt-2", "md:mt-3")}>
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
        <div
          className={clsx(
            `${styles.multiLine} mt-1 text-xl leading-7 font-semibold`,
            "xs:mt-2 xs:text-20px",
            "mt:mt-1 md:text-xl md:leading-8"
          )}
        >
          {fakeCard?.title}
        </div>
        {!hideDetail && (
          <div
            className={clsx(
              `${styles.multiLine} mt-3 text-sm`,
              "xs:mt-2",
              "md:text-base"
            )}
          >
            {fakeCard?.detail}
          </div>
        )}
        <div className={clsx("mt-5 flex gap-2", "xs:mt-3", "md:mt-5")}>
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
    </Link>
  )
}

export default CardVertical
