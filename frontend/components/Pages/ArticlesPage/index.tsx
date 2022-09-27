import React, { useState } from "react"
import { contentTypes } from "../../../utils/constants"
import { CardVertical } from "../../Base/Card"
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
      <div className="w-full max-w-[1440px] mx-auto px-[120px] pt-5 pb-20">
        <p className="text-[40px] font-semibold font-birdMedium">
          Firebird Blogs
        </p>

        <div className="flex gap-5 relative mt-4">
          <div className="sticky top-5 bg-white rounded-[20px] px-7 pt-5 pb-8 h-fit">
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

          <div className="flex-1 grid grid-cols-3 gap-5">
            {new Array(filter.perPage).fill(1).map((item, index: number) => (
              <CardVertical key={index} />
            ))}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesPage
