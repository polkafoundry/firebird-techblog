import clsx from "clsx"
import Image from "next/image"
import React from "react"
import imgNotFound from "/public/images/no-blog-available.png"

const CardNotFound = (props: any) => {
  const { className } = props
  return (
    <div
      className={clsx(
        "flex flex-col mt-14",
        className ? className : "items-center"
      )}
    >
      <div className="relative max-h-[230px]">
        <Image src={imgNotFound} alt="" />
      </div>
      <span className="text-2xl font-semibold mt-2">No articles available</span>
    </div>
  )
}

export default CardNotFound
