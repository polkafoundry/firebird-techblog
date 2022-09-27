import Image from "next/image"
import React from "react"

const FooterDefaultLayout = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="flex flex-col max-w-[1440px] px-40 mx-auto pt-24 mb-3 box-border">
        <div className="w-full flex">
          <div className="flex flex-col max-w-[300px]">
            <Image
              src="/images/logo-text.svg"
              alt=""
              height={40}
              width={190}
              layout="fixed"
            />
            <p className="text-sm mt-3">
              Follow us on Firebird official groups and channels so you won’t
              miss anything!
            </p>
          </div>
        </div>
        <p className="text-center">Copyright © 2022 . All rights reserved.</p>
      </div>
    </div>
  )
}

export default FooterDefaultLayout
