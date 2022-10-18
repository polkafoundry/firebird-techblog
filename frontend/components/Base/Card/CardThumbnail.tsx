import clsx from "clsx"
import moment from "moment"
import Image from "next/image"
import { defaultAuthor } from "../../../utils/constants"
import AuthorImage from "./AuthorImage"
import styles from "./card.module.scss"
import CardType from "./CardType"
import imgFake from "/public/images/default-thumbnail.png"

type CardActiveProps = {
  cardDetail?: any
}

const CardThumbnail = (props: CardActiveProps) => {
  const { cardDetail } = props

  return (
    <div
      className={clsx(
        "bg-white w-full rounded-[20px] p-7 flex flex-col cursor-pointer",
        "sm:flex-row sm:py-5 sm:px-4",
        "md:p-7"
      )}
    >
      <div className={clsx("rounded-2xl w-full sm:w-1/2 relative")}>
        <Image
          src={imgFake}
          layout="responsive"
          alt=""
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-1 sm:pl-[18px] md:pl-[27px]">
        <div className="flex mt-3 gap-[6px] sm:mt-0">
          <CardType cardTypes={cardDetail?.categories} />
        </div>
        <div
          className={clsx(
            `${styles.multiLine} mt-1 text-lg leading-7 font-semibold`,
            "sm:text-20px",
            "md:text-3xl"
          )}
        >
          {cardDetail?.title}
        </div>
        <div
          className={clsx(
            `${styles.multiLine} mt-2 text-12px`,
            "sm:text-sm md:mt-3"
          )}
        >
          {cardDetail?.detail}
          {/* {`Firebird has officially been released recently and it promises to open up new opportunities for gaming and metaverse blockchain projects in the future. Why do we say that? In this article, let’s explore the reasons why Firebird is a potential platform for VCs and gaming projects to invest in.`} */}
          {/* {getThumbnailDes(cardDetail?.content || "")} */}
        </div>
        <div className={clsx("mt-2 flex gap-2", "sm:mt-auto")}>
          <AuthorImage image={cardDetail?.author_image} />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">
              {cardDetail?.author_name || defaultAuthor}
            </span>
            <span className="text-xs text-birdGray">
              {`${moment(new Date()).format("ll")} | ${"4 min"} read`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardThumbnail
