import React from "react"
import clsx from "clsx"
import Link from "next/link"

type ButtonProps = {
  className?: string
  href: string
  children: any
}

const buttonStyles = {
  hoverAnimated: "duration-500 hover:tracking-widest",
  button:
    "flex h-14 rounded-[60px] items-center tracking-wider text-lg font-birdMedium cursor-pointer"
}

const ButtonLink = (props: ButtonProps) => {
  const { className = "", children, href } = props

  return (
    <Link href={href}>
      <a
        className={clsx(
          buttonStyles.button,
          buttonStyles.hoverAnimated,
          className
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink
