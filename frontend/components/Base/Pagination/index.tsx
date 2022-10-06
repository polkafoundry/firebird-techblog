import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import ButtonLink from "../ButtonLink"

type PaginationProps = {
  className?: string
  currentPage: number
}

const fakePagination = {
  startPage: 1,
  endPage: 12
}

const Pagination = (props: PaginationProps) => {
  const { className = "", currentPage } = props
  return (
    <div className={clsx("flex items-center", className)}>
      <ButtonLink
        className={clsx(
          fakePagination.startPage === 1 && "opacity-50",
          "bg-birdRed w-8 h-8 justify-center"
        )}
        href="#"
      >
        <Image
          className="cursor-pointer"
          src="/images/icon-previous.svg"
          width={14}
          height={8}
          alt=""
        />
      </ButtonLink>
      <div className="flex mx-5">
        {Array(
          fakePagination.endPage - fakePagination.startPage > 3
            ? 3
            : fakePagination.endPage - fakePagination.startPage
        )
          .fill(1)
          .map((item, index) => (
            <Link href="#" key={index}>
              <a
                className={clsx(
                  currentPage === fakePagination.startPage + index &&
                    "text-birdRed",
                  "w-8 text-center text-xl font-semibold hover:text-birdRed transition "
                )}
              >
                {fakePagination.startPage + index}
              </a>
            </Link>
          ))}

        {fakePagination.endPage - fakePagination.startPage > 3 && (
          <Link href="#">
            <a className="w-8 text-center text-xl font-semibold hover:text-birdRed transition ">
              ...
            </a>
          </Link>
        )}
        <Link href="#">
          <a
            className={clsx(
              currentPage === fakePagination.endPage && "text-birdRed",
              "w-8 text-center text-xl font-semibold hover:text-birdRed transition "
            )}
          >
            {fakePagination.endPage}
          </a>
        </Link>
      </div>
      <ButtonLink className="bg-birdRed w-8 h-8 justify-center" href="">
        <Image
          className="cursor-pointer"
          src="/images/icon-next.svg"
          width={14}
          height={8}
          alt=""
        />
      </ButtonLink>
    </div>
  )
}

export default Pagination
