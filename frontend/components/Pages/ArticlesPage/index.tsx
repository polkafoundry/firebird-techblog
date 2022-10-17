import { useQuery } from "@apollo/client"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { GET_TOP_LASTEST_ARTICLES } from "../../../graphql/article"
import { getMinReadEstimate, getThumbnailDes } from "../../../utils/ckeditor"
import {
  contentTypes,
  CONTENT_TYPES,
  defaultAvatar
} from "../../../utils/constants"
import { formatTime } from "../../../utils/format"
import { CardVertical } from "../../Base/Card"
import DropDown from "../../Base/DropDown"
import Pagination from "../../Base/Pagination"

const archives = [
  { value: "8", label: "August 2022" },
  { value: "9", label: "September 2022" },
  { value: "10", label: "October 2022" },
  { value: "11", label: "November  2022" },
  { value: "12", label: "December 2022" }
]

const PAGE_SIZE = 9

const ArticlesPage = () => {
  const [filter, setFilter] = useState<any>({
    category: "",
    archive: "",
    perPage: 9,
    page: 1
  })

  const {
    data: articlesData = [],
    loading,
    error,
    refetch
  } = useQuery(GET_TOP_LASTEST_ARTICLES, {
    variables: { category: {}, take: PAGE_SIZE }
  })

  const handleSelectCategory = (value: any) => {
    setFilter((prevFilter: any) => ({
      ...prevFilter,
      category: value
    }))
    if (value === CONTENT_TYPES.ALL) {
      refetch({ category: {}, take: PAGE_SIZE })
    } else {
      refetch({
        category: { some: { id: { equals: value } } },
        take: PAGE_SIZE
      })
    }
  }
  const handleSelectArchive = (value: any) => {
    setFilter((prevFilter: any) => ({
      ...prevFilter,
      archive: value
    }))
  }

  const handleChangePage = (value: any) => {
    setFilter((prevFilter: any) => ({
      ...prevFilter,
      page: value
    }))
  }

  useEffect(() => {
    console.log("filter :>> ", filter)
  }, [filter])

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

  return (
    <div className="flex flex-col w-full pt-20 bg-[#F7F7F8]">
      <div
        className={clsx(
          "w-full max-w-[1440px] mx-auto px-5 pt-5 pb-10",
          "xs:px-10 xs:pb-20",
          "md:px-[120px]"
        )}
      >
        <p
          className={clsx(
            "text-[40px] leading-[44px] text-center font-semibold font-birdMedium",
            "xs:text-[40px] xs:leading-[60px] xs:text-left"
          )}
        >
          Firebird Blogs
        </p>

        <div
          className={clsx(
            "flex flex-col gap-5 relative mt-7",
            "sm:mt-4 sm:flex-row"
          )}
        >
          <div className={clsx("grid grid-cols-2 gap-3", "sm:hidden")}>
            <DropDown items={contentTypes} label="Category" />
            <DropDown items={archives} label="Archived" />
          </div>

          <div
            className={clsx(
              "sticky top-5 bg-white rounded-[20px] px-7 pt-5 pb-8 h-fit w-50 hidden",
              "sm:block",
              "lg:w-64"
            )}
          >
            <ul className="flex flex-col gap-3">
              <p className="font-semibold text-2xl">Category</p>
              {contentTypes.map((item: any) => (
                <li
                  key={item.value}
                  className={clsx(
                    "cursor-pointer hover:text-birdRed",
                    filter.category === item.value &&
                      "text-birdRed font-semibold"
                  )}
                  onClick={() => handleSelectCategory(item.value)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3 mt-8">
              <p className="font-semibold text-2xl">Archived</p>
              {archives.map((item: any) => (
                <li
                  key={item.value}
                  className={clsx(
                    "cursor-pointer hover:text-birdRed",
                    filter.archive === item.value &&
                      "text-birdRed font-semibold"
                  )}
                  onClick={() => handleSelectArchive(item.value)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <div
              className={clsx(
                "grid grid-cols-1 gap-5 items-start",
                "xs:grid-cols-2",
                "lg:grid-cols-3"
              )}
            >
              {formatData.map((item: any, index: number) => (
                <CardVertical key={index} cardData={item} insideBlogPage />
              ))}
            </div>
            <Pagination
              className="justify-center mt-10"
              currentPage={filter.page}
              totalCount={105}
              pageSize={PAGE_SIZE}
              onPageChange={handleChangePage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesPage
