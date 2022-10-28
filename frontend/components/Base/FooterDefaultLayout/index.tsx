import Image from "next/image"
import {
  headerRoutes,
  RouteTypes,
  SocialItemTypes,
  socialsData
} from "../../../utils/constants"
import logoText from "/public/images/logo-text.svg"
import iconScroll from "/public/images/icon-scroll-to-top.svg"
import Tippy from "@tippyjs/react"
import clsx from "clsx"

const buyPkfExchanges = [
  {
    name: "Uniswap",
    url: "https://app.uniswap.org/#/swap?outputCurrency=0x8B39B70E39Aa811b69365398e0aACe9bee238AEb"
  },
  {
    name: "Ascendex",
    url: "https://ascendex.com/en/basic/cashtrade-spottrading/usdt/pkf"
  },
  {
    name: "Gate.io",
    url: "https://www.gate.io/trade/pkf_usdt"
  },
  {
    name: "Kucoin",
    url: "https://www.kucoin.com/trade/PKF-USDT"
  }
]

const FooterDefaultLayout = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="bg-black text-white w-full">
      <div
        className={clsx(
          "flex flex-col relative max-w-screen-main mx-auto px-7 text-center pt-[60px] mb-3 box-border",
          "md:px-40 md:pt-24 md:text-left"
        )}
      >
        <div
          className={clsx(
            "top-5 right-5 absolute cursor-pointer",
            "md:top-[60px] md:right-[84px]"
          )}
          onClick={handleScrollToTop}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image src={iconScroll} layout="fill" alt="" />
          </div>
        </div>

        <div className="w-full flex">
          <div className="flex flex-col max-w-full w-full md:max-w-[300px] items-center md:items-start">
            <div className="flex">
              <Image src={logoText} alt="" />
            </div>
            <p className="text-sm mt-3">
              Follow us on Firebird official groups and channels so you won’t
              miss anything!
            </p>
            <div className="flex gap-3 mt-3">
              {socialsData.map((item: SocialItemTypes, index: number) => (
                <Tippy key={index} content={item.label} placement="bottom">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={clsx({
                      "pointer-events-none": item.disabled
                    })}
                  >
                    <Image src={item.img} alt="" width={28} height={28} />
                  </a>
                </Tippy>
              ))}
            </div>
          </div>

          <div className="hidden md:flex mt-auto ml-auto">
            <div className="flex flex-col max-w-[250px]">
              <p className="font-semibold">BUY PKF</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {buyPkfExchanges.map((item: any, index: number) => (
                  <a
                    href={item.url}
                    key={index + 100}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full max-w-[120px] hover:underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col ml-20 max-w-[250px]">
              <p className="font-semibold">Sitemap</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {headerRoutes.map((item: RouteTypes, index: number) => (
                  <a
                    key={index + 100}
                    href={item.uri}
                    target={item.target}
                    rel="noreferrer"
                    className="w-full max-w-[120px] hover:underline"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center md:mt-16 mt-3">
          Copyright © 2022 . All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default FooterDefaultLayout
