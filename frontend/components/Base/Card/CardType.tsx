import clsx from "clsx"
import React from "react"
import { MAPPING_CONTENT_TYPE_TEXT } from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"

type CardTypeProps = {
  cardTypes: any[]
  isPreviewPost?: boolean
}

const CardType = (props: CardTypeProps) => {
  const { cardTypes, isPreviewPost = false } = props
  return (
    <div className="flex flex-wrap gap-[6px]">
      {cardTypes &&
        cardTypes.map((type: any) => {
          return (
            <div
              key={type}
              className={clsx(
                "font-semibold text-sm rounded-lg px-5 h-8 flex items-center",
                getContentTypeColor(type)
              )}
            >
              <span
                className={clsx(isPreviewPost && "text-14px", "xs:text-16px")}
              >
                {MAPPING_CONTENT_TYPE_TEXT[type]}
              </span>
            </div>
          )
        })}
    </div>
  )
}

export default CardType
