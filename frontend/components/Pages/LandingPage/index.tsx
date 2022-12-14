import { useQuery } from "@apollo/client"
import clsx from "clsx"
import { useState } from "react"
import {
  GET_BANNER,
  GET_TOP_LASTEST_ARTICLES,
  SEARCH_ARTICLES
} from "../../../graphql/article"
import { getMinReadEstimate, getThumbnailDes } from "../../../utils/ckeditor"
import {
  contentTypes,
  CONTENT_TYPES,
  defaultAvatar
} from "../../../utils/constants"
import { formatTime } from "../../../utils/format"
import ExclusiveContent from "./ExclusiveContent"
import FirebirdWriter from "./FirebirdWriter"
import styles from "./landing.module.scss"
import LastestPost from "./LastestPost"

function LandingPage() {
  const [contentType, setContentType] = useState<
    typeof contentTypes[number]["value"]
  >(CONTENT_TYPES.ALL)
  const [inputSearch, setInputSearch] = useState<string>("")
  const [inputEmail, setInputEmail] = useState<string>("")

  const LIMIT_LASTEST_RESULTS = 4
  const LIMIT_SEARCH = 4

  const {
    data: articlesData = [],
    loading: loadingArticles,
    refetch: refetchLastest
  } = useQuery(GET_TOP_LASTEST_ARTICLES, {
    variables: {
      category: {},
      take: LIMIT_LASTEST_RESULTS
    }
  })

  const {
    data: searchData = [],
    loading: loadingSearch,
    refetch: refreshSearch
  } = useQuery(SEARCH_ARTICLES, {
    variables: {
      title: "",
      take: LIMIT_SEARCH
    }
  })

  const { data: bannerData = [] } = useQuery(GET_BANNER)

  const handleSelectType = (type: any) => {
    setContentType(type)

    refetchLastest({
      category:
        type !== CONTENT_TYPES.ALL ? { some: { id: { equals: type } } } : {},
      take: LIMIT_LASTEST_RESULTS
    })
  }

  const handleSearch = (e: any) => {
    const titleSearch = e.target.value
    setInputSearch(titleSearch)

    refreshSearch({
      title: titleSearch.trim(),
      take: LIMIT_SEARCH
    })
  }

  const handleClearSearch = () => {
    setInputSearch("")
  }

  const handleChangeEmail = (e: any) => {
    setInputEmail(e.target.value)
  }

  const handleSubscribe = () => {
    //TODO: simple validate email
    console.log("subscribe: ", inputEmail)
  }

  const formatData = articlesData.articles
    ? articlesData.articles.map((article: any) => ({
        id: article.id,
        image: article.thumbnail?.url,
        types: article.category.map((cat: any) => cat.id),
        title: article.title,
        detail: getThumbnailDes(article.content || ""),
        authorAvatar: article.author_image || defaultAvatar,
        authorName: article.author_name || "Firebird Writer",
        date: formatTime(article.created_at),
        timeToRead: getMinReadEstimate(article.content || "")
      }))
    : []

  //#region RENDER

  const renderSubBanner = () => {
    if (!bannerData?.aMABanners?.length) return null
    return (
      <div className={clsx("relative w-full mt-10 cursor-pointer", "xs:mt-20")}>
        <picture>
          <img
            src={bannerData.aMABanners[0].banner}
            alt=""
            style={{
              objectFit: "cover",
              borderRadius: 12
            }}
          />
        </picture>
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

          <LastestPost
            inputSearch={inputSearch}
            handleSearch={handleSearch}
            handleClearSearch={handleClearSearch}
            articles={formatData}
            resultSearched={searchData?.articles}
            loading={loadingArticles}
            loadingSearch={loadingSearch}
          />

          {renderSubBanner()}

          {/* <ExclusiveContent
            inputEmail={inputEmail}
            handleChangeEmail={handleChangeEmail}
            handleSubscribe={handleSubscribe}
          /> */}
        </div>
      </div>

      <FirebirdWriter />
    </div>
  )
}

export default LandingPage
