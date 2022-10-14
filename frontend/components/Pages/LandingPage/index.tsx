import { useQuery } from "@apollo/client"
import clsx from "clsx"
import Image from "next/image"
import imgSubBanner from "public/images/befitter-banner.png"
import { useEffect, useState } from "react"
import { GET_ARTICLES } from "../../../graphql/article"
import { contentTypes, CONTENT_TYPES } from "../../../utils/constants"
import ExclusiveContent from "./ExclusiveContent"
import FirebirdWriter from "./FirebirdWriter"
import styles from "./landing.module.scss"
import LastestPost from "./LastestPost"

type FilterTypes = {
  search: string
  type: typeof contentTypes[number]["value"]
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

  const {
    data: articlesData,
    loading,
    error
  } = useQuery(GET_ARTICLES, {
    variables: {
      where: { category: { some: { id: { in: [+filter.type] } } } }
    }
  })

  useEffect(() => {
    console.log("articlesData", articlesData)
  }, [articlesData])

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
      <div className={clsx("relative w-full mt-10 cursor-pointer", "xs:mt-20")}>
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

          {renderSubBanner()}

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
