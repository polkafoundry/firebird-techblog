import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import {
  CONTENT_TYPES,
  defaultAuthor,
  defaultAvatar
} from "../../../utils/constants"
import CardType from "../../Base/Card/CardType"
import Outline from "./Outline"
import iconFb from "/public/images/icon-fb.png"
import iconLink from "/public/images/icon-link.png"
import iconTele from "/public/images/icon-telegram.png"
import iconTwitter from "/public/images/icon-twitter.png"
import styles from "./detailsArticlePage.module.scss"

const socials = [
  { icon: iconTele, link: "" },
  { icon: iconTwitter, link: "" },
  { icon: iconFb, link: "" },
  { icon: iconLink, link: "" }
]

type DetailArticleTypes = {
  articleDetail: any
}

const DetailsArticlePage = (props: DetailArticleTypes) => {
  const { articleDetail = {} } = props

  const fakeTypes = () => {
    switch (articleDetail?.id) {
      case "2":
        return [CONTENT_TYPES.TECHNOLOGY]
      case "3":
        return [CONTENT_TYPES.ANALYTICS, CONTENT_TYPES.ECOSYSTEM]
      case "4":
        return [CONTENT_TYPES.ANALYTICS, CONTENT_TYPES.TECHNOLOGY]
      case "5":
        return [CONTENT_TYPES.ANALYTICS, CONTENT_TYPES.ECOSYSTEM]

      default:
        return [CONTENT_TYPES.TECHNOLOGY]
    }
  }

  return (
    <div className="flex flex-col w-full pt-20 bg-[#F7F7F8]">
      <div
        className={clsx(
          "w-full max-w-[1440px] mx-auto px-5 pt-5 pb-10",
          "xs:px-[120px] xs:pb-20"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-[60px] relative mt-7 w-full",
            "xs:mt-4 xs:flex-row"
          )}
        >
          <div className={clsx(styles.content, "flex-1")}>
            <CardType cardTypes={articleDetail?.types || fakeTypes()} />
            <h1
              className={clsx(
                "text-3xl font-birdMedium font-semibold mt-3",
                "xs:mt-4 xs:text-36px"
              )}
            >
              {articleDetail?.title}
            </h1>
            <div
              className={clsx(
                "flex flex-col justify-between items-center mt-3 gap-3",
                "xs:flex-row xs:mt-2"
              )}
            >
              <div className="flex gap-2 h-fit">
                <Image
                  src={articleDetail?.author_image || defaultAvatar}
                  width={44}
                  height={44}
                  alt=""
                  className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">
                    {articleDetail?.author_name || defaultAuthor}
                  </span>
                  <span className="text-xs text-birdGray">
                    {`${articleDetail?.date || "Oct 10"} | ${
                      articleDetail?.timeToRead || "4 min"
                    } read`}
                  </span>
                </div>
              </div>
              {/* <div className="flex items-center gap-2 bg-white rounded-full py-2.5 px-[30px]">
                <span className="text-xs font-bold text-birdGray uppercase tracking-wider">
                  Share
                </span>
                {socials.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <div
                      className={clsx(
                        "h-8 w-8 flex items-center justify-center rounded-full cursor-pointer",
                        index === 2 && "bg-birdRed"
                      )}
                    >
                      <Image src={item.icon} alt="" />
                    </div>
                  </Link>
                ))}
              </div> */}
            </div>
            <div className={clsx("mt-5", "xs:mt-8")}>
              <div
                dangerouslySetInnerHTML={{ __html: articleDetail.content }}
                className="flex flex-col gap-3"
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: articleDetail.references }}
              ></div>
            </div>
          </div>

          <Outline />
        </div>

        {/* <div className="mt-16">
          <h5
            className={clsx(
              "text-3xl font-birdMedium font-semibold",
              "xs:text-[32px] xs:leading-[56px]"
            )}
          >
            Related Articles
          </h5>
          <div
            className={clsx(
              "flex flex-col items-center gap-5 mt-3",
              "xs:flex-row xs:mt-5"
            )}
          >
            {Array(3)
              .fill(1)
              .map((item, index) => (
                <CardVertical key={index} />
              ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default DetailsArticlePage
