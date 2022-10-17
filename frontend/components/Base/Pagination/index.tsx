import clsx from "clsx"
import leftArrow from "/public/images/icon-previous.svg"
import { DOTS, usePagination } from "./usePagination"
import styles from "./pagination.module.scss"
import Image from "next/image"

const arrowStyles =
  "relative bg-birdRed w-8 h-8 rounded-full justify-center items-center flex"

type PaginationProps = {
  onPageChange: (data: any) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className: string
}

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  const lastPage =
    (paginationRange && paginationRange[paginationRange.length - 1]) || 1

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    if (currentPage < lastPage) onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  return (
    <ul
      className={clsx(
        styles.paginationContainer,
        className,
        "text-center text-xl"
      )}
    >
      {/* Left navigation arrow */}
      <li
        className={clsx(
          styles.paginationItem,
          currentPage === 1 ? "opacity-50 cursor-default" : "cursor-pointer",
          "mr-5"
        )}
        onClick={onPrevious}
      >
        <div className={clsx(arrowStyles)}>
          <Image src={leftArrow} alt="" />
        </div>
      </li>
      {paginationRange?.map((pageNumber: any, i: number) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={i} className={clsx(styles.paginationItem, styles.dots)}>
              &#8230;
            </li>
          )
        }

        // Render our Page Pills
        return (
          <li
            className={clsx(
              styles.paginationItem,
              "font-semibold hover:text-birdRed transition",
              currentPage == pageNumber
                ? "text-birdRed cursor-default"
                : "cursor-pointer"
            )}
            key={i}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      {/*  Right Navigation arrow */}
      {currentPage !== lastPage && (
        <li
          className={clsx(styles.paginationItem, "ml-5 cursor-pointer")}
          onClick={onNext}
        >
          <div className={clsx(arrowStyles, "rotate-180")}>
            <Image src={leftArrow} alt="" />
          </div>
        </li>
      )}
    </ul>
  )
}

export default Pagination
