import clsx from "clsx"
import React from "react"
import { ModalPostTypes } from "../../../utils/constants"

type PreviewPostProps = {
  articleDetail: any
  modalType: ModalPostTypes
  onChangeModalPost: (data: any) => void
}

const tabStyles = "w-[160px] rounded-lg text-16px font-semibold py-2.5"
const PreviewPost = (props: PreviewPostProps) => {
  const { articleDetail, modalType, onChangeModalPost } = props

  const handleViewThumbnail = () => {
    onChangeModalPost(ModalPostTypes.VIEW_THUMBNAIL)
  }
  const handleViewDetail = () => {
    onChangeModalPost(ModalPostTypes.VIEW_DETAIL)
  }
  console.log("articleDetail", articleDetail)

  return (
    <div className="mt-[22px] px-5 xs:px-10 xs:mt-[32px] md:px-[60px]">
      <div className={clsx("flex justify-center gap-2", "md:gap-3")}>
        <button
          type="button"
          className={clsx(
            tabStyles,
            "text-birdGray bg-[#EAEAEA] hover:bg-gray-300 transition"
          )}
          onClick={handleViewThumbnail}
        >
          Thumbnail
        </button>
        <button
          type="button"
          className={clsx(tabStyles, "text-white bg-black")}
          onClick={handleViewDetail}
        >
          Detail
        </button>
      </div>
      <div
        className={clsx(
          "mt-3 bg-[#F6F6F6] rounded-t-[20px] px-5 py-4 h-full",
          "xs:p-8",
          "md:px-[70px]"
        )}
      >
        {modalType === ModalPostTypes.VIEW_DETAIL ? (
          <div
            dangerouslySetInnerHTML={{ __html: articleDetail.content }}
            className="flex flex-col gap-3"
          ></div>
        ) : (
          <div>Thumnai</div>
        )}
      </div>
    </div>
  )
}

export default PreviewPost
