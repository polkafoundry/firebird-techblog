import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import {
  CONTENT_TYPES,
  defaultAuthor,
  defaultAvatar,
  EMAIL_PATTERN
} from "../../../utils/constants"
import CardType from "../../Base/Card/CardType"
import Outline from "./Outline"
import iconFb from "/public/images/icon-fb.png"
import iconLink from "/public/images/icon-link.png"
import iconTele from "/public/images/icon-telegram.png"
import iconTwitter from "/public/images/icon-twitter.png"
import styles from "./detailsArticlePage.module.scss"
import { useEffect, useRef, useState } from "react"
import { formatOutline } from "../../../utils/ckeditor"
import { CardVertical } from "../../Base/Card"
import {
  CREATE_SUBSCRIBE,
  GET_RELATED_ARTICLES
} from "../../../graphql/article"
import { useMutation, useQuery } from "@apollo/client"
import { formatCardData } from "../../../utils/format"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const socials = [
  { icon: iconTele, link: "" },
  { icon: iconTwitter, link: "" },
  { icon: iconFb, link: "" },
  { icon: iconLink, link: "" }
]

type DetailArticleProps = {
  articleDetail: any
}

type HeadingProps = {
  content: string
  subHeadings?: Array<{
    content: string
    element: HTMLElement
  }>
  element: HTMLElement
}

type HeadingActiveProps = {
  isSubHeadingActive: boolean
  mainHeadingIndex: number
  subHeadingIndex?: number
}

const DetailsArticlePage = (props: DetailArticleProps) => {
  const { articleDetail = {} } = props
  const [headings, setHeadings] = useState<HeadingProps[]>([])
  const [headingActive, setHeadingActive] = useState<HeadingActiveProps>({
    isSubHeadingActive: false,
    mainHeadingIndex: 0
  })
  const [inputEmail, setInputEmail] = useState<string>("")
  const contentRef = useRef<HTMLHeadingElement>(null)
  const headingTags = ["H2", "H3", "H4"]
  const router = useRouter()
  const { id } = router.query

  const { data: relatedData = [] } = useQuery(GET_RELATED_ARTICLES, {
    variables: {
      id: id,
      category: {
        some: { id: { in: articleDetail.category.map((cat: any) => cat.id) } }
      },
      take: 3
    }
  })

  const [createSubscribe, { loading: loadingCreateSubscribe }] = useMutation(
    CREATE_SUBSCRIBE,
    {
      onError: (err) => {
        toast.error(err.message)
        console.log("err :>> ", err)
      },
      onCompleted: () => {
        toast.success(
          "You have successfully subcribed to receivie Bird nest's latest blogs."
        )
        setInputEmail("")
      }
    }
  )

  useEffect(() => {
    const loadingOutline = () => {
      const elements = contentRef?.current?.children || []
      let headings = []

      for (let i = 0; i < elements.length; i++) {
        const currentElement = elements[i]
        const elementTagName = currentElement.tagName
        if (headingTags.includes(elementTagName)) {
          headings.push(currentElement)
        }
      }

      if (headings.length) {
        headings = formatOutline(headings, headingTags)
        setHeadings(headings)
      }
    }
    loadingOutline()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleMatchOutlineWithScroll)

    return () => {
      window.removeEventListener("scroll", handleMatchOutlineWithScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headingTags])

  useEffect(() => {
    handleMatchOutlineWithScroll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headings])

  const scrollToView = (element: Element) => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const handleMatchOutlineWithScroll = () => {
    const newHeadingActive = getActiveHeading()
    setHeadingActive(newHeadingActive)
  }

  // active heading will have position less than 100
  const getActiveHeading = () => {
    const headingPosTop = headings.map((heading: HeadingProps) => {
      const newSubHeadingPos = heading.subHeadings?.map(
        (subheading) => subheading.element.getBoundingClientRect().top
      )

      return {
        pos: heading.element.getBoundingClientRect().top,
        subHeadings: newSubHeadingPos
      }
    })

    for (let i = headingPosTop.length - 1; i >= 0; i--) {
      const mainHeading: any = headingPosTop[i]
      const subHeading = mainHeading.subHeadings
      for (let j = subHeading.length - 1; j >= 0; j--) {
        if (subHeading[j] < 100) {
          return {
            isSubHeadingActive: true,
            mainHeadingIndex: i,
            subHeadingIndex: j
          }
        }
      }
      if (headingPosTop[i].pos < 100) {
        return { isSubHeadingActive: false, mainHeadingIndex: i }
      }
    }
    return { isSubHeadingActive: false, mainHeadingIndex: 0 }
  }

  const handleChangeEmail = (e: any) => {
    const input = e.target.value
    if (input.length >= 60) return

    setInputEmail(e.target.value)
  }

  const handleSubscribe = () => {
    if (!EMAIL_PATTERN.test(inputEmail)) {
      toast.error("Invalid email address")
    } else {
      createSubscribe({ variables: { email: inputEmail } })
    }
  }

  return (
    <div className="flex flex-col w-full pt-20 bg-[#F7F7F8]">
      <div
        className={clsx(
          "w-full max-w-[1440px] mx-auto px-5 pt-5 pb-10",
          "xs:px-10",
          "md:px-[120px] xs:pb-20"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-[60px] relative mt-7 w-full",
            "xs:mt-4 xs:flex-row"
          )}
        >
          <div className={clsx(styles.content, "flex-1")}>
            <CardType cardTypes={articleDetail?.types} />
            <h1
              className={clsx(
                "text-3xl font-birdMedium font-semibold mt-3",
                "xs:mt-4 xs:text-4xl",
                "md:text-36px"
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
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: articleDetail.content }}
                className="flex flex-col gap-3"
              ></div>
              {articleDetail.hashtags && (
                <ul className="flex flex-wrap text-birdBlue gap-4 mt-5 xs:mt-8">
                  {articleDetail.hashtags.split(/\s+/).map((item: any) => (
                    <li key={item} className="text-16px font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {articleDetail.references && (
                <div className="mt-[60px] flex flex-col">
                  <span className="text-3xl font-semibold">References</span>
                  <div
                    className={clsx("break-words", styles.references)}
                    dangerouslySetInnerHTML={{
                      __html: articleDetail.references
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          <Outline
            headings={headings}
            headingActive={headingActive}
            handleClick={scrollToView}
            inputEmail={inputEmail}
            handleChangeEmail={handleChangeEmail}
            handleSubscribe={handleSubscribe}
            loading={loadingCreateSubscribe}
          />
        </div>

        <div className="mt-16">
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
              "flex flex-col items-start gap-5 mt-3",
              "xs:flex-row xs:mt-5"
            )}
          >
            {formatCardData(relatedData).map((item: any) => (
              <CardVertical key={item.id} cardData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsArticlePage
