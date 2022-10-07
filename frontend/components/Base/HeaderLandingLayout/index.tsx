import React from "react"
import Link from "next/link"
import Image from "next/image"

const HeaderLandingLayout = () => {
  return (
    <nav className="absolute -translate-x-1/2 left-1/2 h-20 w-full flex items-center justify-between max-w-screen-main px-[120px] text-white">
      <Link href="/">
        <a>
          <Image
            src="/images/logo-text.svg"
            width="192px"
            height="42px"
            layout="fixed"
            alt=""
          />
        </a>
      </Link>
      <div className="flex gap-5 overflow-hidden">
        <Link href="/about">About Firebird</Link>
        <Link href="/bird-nest">Bird nest</Link>
        <Link href="/build-nest">Build nest</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/community">Community</Link>
      </div>
    </nav>
  )
}

export default HeaderLandingLayout
