import Image from "next/image"
import Link from "next/link"
import { headerRoutes, RouteTypes } from "../../../utils/constants"

const HeaderDefaultLayout = () => {
  return (
    <nav className="absolute -translate-x-1/2 left-1/2 h-20 w-full flex items-center justify-between max-w-screen-main px-[120px] text-black overflow-hidden">
      <Link href="/">
        <a>
          <Image
            src="/images/logo-text-black.svg"
            width="192px"
            height="42px"
            layout="fixed"
            alt=""
          />
        </a>
      </Link>
      <div className="flex gap-5">
        {headerRoutes.map((item: RouteTypes, index: number) => (
          <Link key={index} href={item.uri}>
            <a target={item.target}>{item.label}</a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default HeaderDefaultLayout
