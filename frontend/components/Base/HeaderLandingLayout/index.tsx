import Image from "next/image"
import Link from "next/link"
import { headerRoutes, RouteTypes } from "../../../utils/constants"

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
        {headerRoutes.map((item: RouteTypes, index: number) => (
          <Link key={index} href={item.uri}>
            <a target={item.target}>{item.label}</a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default HeaderLandingLayout
