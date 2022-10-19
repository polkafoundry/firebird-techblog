import React from "react"
import clsx from "clsx"

type ButtonProps = {
  className?: string
  children: any
  onClick?: () => void
  disabled?: boolean
}

const buttonStyles = {
  hoverAnimated: "duration-500 hover:tracking-widest",
  button:
    "flex h-14 rounded-[60px] items-center tracking-wider text-lg font-birdMedium cursor-pointer"
}

const Button = (props: ButtonProps) => {
  const { className = "", children, onClick, disabled = false } = props

  return (
    <div
      className={clsx(
        buttonStyles.button,
        !disabled && buttonStyles.hoverAnimated,
        disabled && "pointer-events-none",
        className
      )}
      // onClick={!disabled ? onClick : () => {}}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button
