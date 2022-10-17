// import clsx from "clsx"
// import Image from "next/image"
// import Link from "next/link"
// import ButtonLink from "../ButtonLink"

// type PaginationProps = {
//   className?: string
//   currentPage?: number
//   onChangePage: (data: any) => void
// }

// const fakePagination = {
//   startPage: 7,
//   endPage: 12
// }

// const Pagination = (props: PaginationProps) => {
//   const { className = "", currentPage = 2, onChangePage } = props

//   const handleChangePage = (value: any) => {
//     if (value !== currentPage) {
//       onChangePage(value)
//     }
//   }

//   return (
//     <div className={clsx("flex items-center", className)}>
//       <ButtonLink
//         className={clsx(
//           fakePagination.startPage === 1 && "opacity-50",
//           "bg-birdRed w-8 h-8 justify-center"
//         )}
//         href="#"
//       >
//         <Image
//           className="cursor-pointer"
//           src="/images/icon-previous.svg"
//           width={14}
//           height={8}
//           alt=""
//         />
//       </ButtonLink>
//       <div className="flex mx-5">
//         {fakePagination.startPage > 1 && (
//           <Link href="#">
//             <a className="w-8 text-center text-xl font-semibold hover:text-birdRed transition ">
//               1
//             </a>
//           </Link>
//         )}
//         {fakePagination.startPage > 2 && (
//           <Link href="#">
//             <a className="w-8 text-center text-xl font-semibold hover:text-birdRed transition ">
//               ...
//             </a>
//           </Link>
//         )}
//         {Array(
//           fakePagination.endPage - fakePagination.startPage > 3
//             ? 3
//             : fakePagination.endPage - fakePagination.startPage
//         )
//           .fill(1)
//           .map((item, index) => (
//             <Link href="#" key={index} onClick={() => handleChangePage(index)}>
//               <a
//                 className={clsx(
//                   currentPage === fakePagination.startPage + index &&
//                     "text-birdRed",
//                   "w-8 text-center text-xl font-semibold hover:text-birdRed transition "
//                 )}
//               >
//                 {fakePagination.startPage + index}
//               </a>
//             </Link>
//           ))}

//         {fakePagination.endPage - fakePagination.startPage > 3 && (
//           <Link href="#">
//             <a className="w-8 text-center text-xl font-semibold hover:text-birdRed transition ">
//               ...
//             </a>
//           </Link>
//         )}
//         <Link href="#">
//           <a
//             className={clsx(
//               currentPage === fakePagination.endPage && "text-birdRed",
//               "w-8 text-center text-xl font-semibold hover:text-birdRed transition "
//             )}
//           >
//             {fakePagination.endPage}
//           </a>
//         </Link>
//       </div>
//       <ButtonLink className="bg-birdRed w-8 h-8 justify-center" href="">
//         <Image
//           className="cursor-pointer"
//           src="/images/icon-next.svg"
//           width={14}
//           height={8}
//           alt=""
//         />
//       </ButtonLink>
//     </div>
//   )
// }

// export default Pagination

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

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1]
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
