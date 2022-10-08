import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import imgFake from "public/images/fake-card-active.png"
import {
  CONTENT_TYPES,
  defaultAuthor,
  defaultAvatar,
  MAPPING_CONTENT_TYPE_TEXT
} from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import styles from "./card.module.scss"

const fakeCard = {
  id: "2",
  image: imgFake,
  types: [CONTENT_TYPES.TECHNOLOGY],
  title: "Byzantine generals problem, blockchain and consensus",
  detail: `The demand for understanding concepts of blockchain technology continues to grow, especially for beginners. One of the notable concepts pertaining to the blockchain landscape which has been troubling beginners refers to the Byzantine Generals’ Problem`,
  authorAvatar: "/images/default-avatar.svg",
  authorName: "Firebird Writer",
  date: "Oct 10",
  timeToRead: "4 min"
}

const CardActive = () => {
  return (
    <Link href={`/articles/${fakeCard.id}`}>
      <div
        className={clsx(
          "bg-white w-full rounded-[20px] p-7 flex flex-col gap-3 cursor-pointer",
          "sm:flex-row sm:gap-8 sm:py-5 sm:px-4",
          "md:p-7"
        )}
      >
        <div
          className={clsx(
            "rounded-2xl w-full max-w-[600px] relative",
            "xs:max-w-[436px]",
            "md:max-w-[480px]",
            "lg:max-w-[500px]"
          )}
        >
          <Image
            src={fakeCard?.image}
            layout="responsive"
            alt=""
            className="rounded-2xl"
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
          <div className={clsx("mt-5 flex gap-2", "xs:mt-12 md:mt-auto")}>
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
