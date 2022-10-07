import clsx from "clsx"
import React from "react"
import { MAPPING_CONTENT_TYPE_TEXT } from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"

type CardTypeProps = {
  cardTypes: any[]
}

const CardType = (props: CardTypeProps) => {
  const { cardTypes } = props
  return (
    <div className="flex mt-3 gap-[6px]">
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
              <span>{MAPPING_CONTENT_TYPE_TEXT[type]}</span>
            </div>
          )
        })}
    </div>
  )
}

export default CardType
