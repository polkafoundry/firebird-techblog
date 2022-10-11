import clsx from "clsx"
import { useState } from "react"
import { contentTypes } from "../../../utils/constants"
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

const ArticlesPage = () => {
  const [filter, setFilter] = useState<any>({
    category: "",
    archive: "",
    perPage: 9,
    page: 1
  })

  const handleSelectCategory = (value: any) => {
    setFilter((prevFilter: any) => ({
      ...prevFilter,
      category: value
    }))
  }
  const handleSelectArchive = (value: any) => {
    setFilter((prevFilter: any) => ({
      ...prevFilter,
      archive: value
    }))
  }

  return (
    <div className="flex flex-col w-full pt-20 bg-[#F7F7F8]">
      <div
        className={clsx(
          "w-full max-w-[1440px] mx-auto px-5 pt-5 pb-10",
          "xs:px-[120px] xs:pb-20"
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
            "xs:mt-4 xs:flex-row"
          )}
        >
          <div className={clsx("grid grid-cols-2 gap-3", "xs:hidden")}>
            <DropDown items={contentTypes} label="Category" />
            <DropDown items={archives} label="Archived" />
          </div>

          <div
            className={clsx(
              "sticky top-5 bg-white rounded-[20px] px-7 pt-5 pb-8 h-fit hidden",
              "xs:block"
            )}
          >
            <ul className="flex flex-col gap-3">
              <p className="font-semibold text-2xl">Category</p>
              {contentTypes.map((item: any) => (
                <li
                  key={item.value}
                  className="cursor-pointer hover:underline"
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
                  className="cursor-pointer hover:underline"
                  onClick={() => handleSelectArchive(item.value)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <div className={clsx("grid grid-cols-1 gap-5", "xs:grid-cols-3")}>
              {new Array(filter.perPage).fill(1).map((item, index: number) => (
                <CardVertical key={index} />
              ))}
            </div>
            <Pagination className="justify-center mt-10" currentPage={1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesPage
