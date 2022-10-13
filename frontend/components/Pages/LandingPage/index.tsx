import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import { contentTypes, CONTENT_TYPES } from "../../../utils/constants"
import Button from "../../Base/Button"
import ButtonLink from "../../Base/ButtonLink"
import { CardActive, CardHorizontal } from "../../Base/Card"
import CardVertical from "../../Base/Card/CardVertical"
import styles from "./landing.module.scss"
import imgWrite from "public/images/bird-writer.png"
import imgSubBanner from "public/images/befitter-banner.png"
import ExclusiveContent from "./ExclusiveContent"
import LastestPost from "./LastestPost"
import FirebirdWriter from "./FirebirdWriter"
import client from "../../../helpers/apollo-client"
import { gql } from "@apollo/client"

type FilterTypes = {
  search: string
  type: typeof contentTypes[number]["value"]
}
const buttonStyles = {
  hoverAnimated: "duration-500 hover:tracking-widest",
  button:
    "flex h-14 rounded-[60px] items-center tracking-wider text-lg font-birdMedium cursor-pointer"
}

function LandingPage() {
  const [contentType, setContentType] = useState<
    typeof contentTypes[number]["value"]
  >(CONTENT_TYPES.ALL)
  const [inputSearch, setInputSearch] = useState<string>("")
  const [inputEmail, setInputEmail] = useState<string>("")
  const [filter, setFilter] = useState<FilterTypes>({
    search: "",
    type: ""
  })
  const [articlesData, setArticlesData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    console.log("filter", filter)

    const getData = async () => {
      setLoading(true)
      try {
        let res = await client.query({
          query: gql`
            query ($where: ArticleWhereInput!) {
              articles(where: $where) {
                id
                title
                author_name
                author_image
                thumbnail {
                  url
                }
                category {
                  id
                  name
                }
              }
            }
          `,
          variables: {
            where: { category: { some: { id: { in: [+filter.type] } } } }
          }
        })
        setLoading(false)

        if (res?.data?.articles) {
          setArticlesData(res.data.articles)
          console.log("articlesData", res.data.articles)
        }
      } catch (error) {
        setLoading(false)
        console.log("Articles ERROR", error)
      }
    }

    getData()
  }, [filter])

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter((prevFilter: FilterTypes) => ({
        ...prevFilter,
        search: inputSearch.trim(),
        type: contentType
      }))
    }, 400)
    return () => clearTimeout(timer)
  }, [inputSearch, contentType])

  const handleSelectType = (type: any) => {
    setContentType(type)
  }

  const handleSearch = (e: any) => {
    setInputSearch(e.target.value)
  }

  const handleChangeEmail = (e: any) => {
    setInputEmail(e.target.value)
  }

  const handleSubscribe = () => {
    //TODO: simple validate email
    console.log("subscribe: ", inputEmail)
  }

  //#region RENDER

  const renderSubBanner = () => {
    return (
      <div className="relative w-full mt-10 cursor-pointer">
        <Image src={imgSubBanner} layout="responsive" alt="" />
      </div>
    )
  }

  ////#endregion RENDER

  return (
    <div className="flex flex-col w-full bg-[#f7f7f8]">
      <div className={`${styles.banner} flex text-white pt-20`}>
        <div className={`${styles.section}`}>
          <p
            className={clsx(
              "mt-14 text-center px-2",
              "xs:mb-20",
              "md:text-left md:mt-12 md:px-0"
            )}
          >
            The Firebird Blog
          </p>
        </div>
      </div>

      <div className={clsx("w-full pt-7", "xs:pt-5", "md:pt-7 md:pb-16")}>
        <div className={`${styles.section} flex flex-col`}>
          <div
            className={clsx(
              styles.hiddenScrollbar,
              "flex gap-2 overflow-x-auto"
            )}
          >
            {contentTypes.map((item: any) => (
              <div
                key={item?.value}
                className={clsx(
                  contentType === item?.value && styles.typeActived,
                  "px-8 py-2 rounded-lg cursor-pointer bg-white text-birdGray font-semibold whitespace-nowrap text-base",
                  "xs:text-20px",
                  "md:text-base"
                )}
                onClick={() => handleSelectType(item.value)}
              >
                {item?.label}
              </div>
            ))}
          </div>

          <LastestPost inputSearch={inputSearch} handleSearch={handleSearch} />

          {/* {renderSubBanner()} */}

          <ExclusiveContent
            inputEmail={inputEmail}
            handleChangeEmail={handleChangeEmail}
            handleSubscribe={handleSubscribe}
          />
        </div>
      </div>

      <FirebirdWriter />
    </div>
  )
}

export default LandingPage
