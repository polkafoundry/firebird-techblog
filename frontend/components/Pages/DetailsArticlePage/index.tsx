import clsx from "clsx"
import Image from "next/image"
import { CONTENT_TYPES } from "../../../utils/constants"
import { CardVertical } from "../../Base/Card"
import CardType from "../../Base/Card/CardType"
import iconTele from "/public/images/icon-telegram.png"
import iconTwitter from "/public/images/icon-twitter.png"
import iconFb from "/public/images/icon-fb.png"
import iconLink from "/public/images/icon-link.png"
import Link from "next/link"

const fakeBlog = {
  types: [CONTENT_TYPES.TECHNOLOGY, CONTENT_TYPES.COMMUNITY],
  socials: [
    { icon: iconTele, link: "" },
    { icon: iconTwitter, link: "" },
    { icon: iconFb, link: "" },
    { icon: iconLink, link: "" }
  ],
  title:
    "3 Steps to Web3: The Ultimate Guide to Navigating Web3 for Non-Tech Founders",
  authorAvatar: "/images/default-avatar.svg",
  authorName: "Firebird Writer",
  date: "Jan 24",
  timeToRead: "4 min"
}

const DetailsArticlePage = () => {
  return (
    <div className="flex flex-col w-full pt-20 bg-[#F7F7F8]">
      <div
        className={clsx(
          "w-full max-w-[1440px] mx-auto px-5 pt-5 pb-10",
          "xs:px-[120px] xs:pb-20"
        )}
      >
        <div
          className={clsx(
            "flex flex-col  gap-5 relative mt-7",
            "xs:mt-4 xs:flex-row"
          )}
        >
          <div className="flex-1">
            <CardType cardTypes={fakeBlog?.types} />
            <h1
              className={clsx(
                "text-3xl font-birdMedium font-semibold mt-3",
                "xs:mt-4 xs:text-36px"
              )}
            >
              {fakeBlog?.title}
            </h1>
            <div
              className={clsx(
                "flex flex-col justify-between items-center mt-3 gap-3",
                "xs:flex-row xs:mt-2"
              )}
            >
              <div className="flex gap-2 h-fit">
                <Image
                  src={fakeBlog?.authorAvatar}
                  width={44}
                  height={44}
                  alt=""
                  className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">
                    {fakeBlog?.authorName}
                  </span>
                  <span className="text-xs text-birdGray">
                    {`${fakeBlog?.date} | ${fakeBlog?.timeToRead} read`}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full py-2.5 px-[30px]">
                <span className="text-xs font-bold text-birdGray uppercase tracking-wider">
                  Share
                </span>
                {fakeBlog?.socials.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <div
                      className={clsx(
                        "h-8 w-8 flex items-center justify-center rounded-full cursor-pointer",
                        index === 2 && "bg-birdRed"
                      )}
                    >
                      <Image src={item.icon} alt="" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className={clsx("mt-5", "xs:mt-8")}>Blog Content</div>
          </div>
          <div
            className={clsx(
              "sticky top-5 h-fit max-w-[360px] bg-black text-white rounded-[20px] pt-7 pb-8 px-8 hidden",
              "xs:block"
            )}
          >
            <h5 className="text-[32px] leading-10 font-birdMedium font-semibold">
              Outline
            </h5>
            <div className="pb-5 border-b border-white border-opacity-40 text-sm leading-5">
              <div className="mt-5">
                <p>1. Web3 is the new trendy name for the decentralized web.</p>
              </div>
              <div className="mt-5">
                <p className="opacity-80">
                  2. Web1 is read-only, Web2 is read-write, Web3 is
                  read-write-own.
                </p>
                <p className="pl-4 mt-0.5 opacity-80">
                  2.1. Web3 is a money layer for the internet.
                </p>
                <p className="pl-4 mt-0.5 opacity-80">
                  2.2. Web3 is an identity layer for the internet.
                </p>
              </div>
              <div className="mt-5">
                <p className="opacity-80">
                  3. Web3 is a reaction to social networks not keeping our data
                  secure, and selling it for their own profit.
                </p>
              </div>
              <div className="mt-5">
                <p className="opacity-80">
                  4. Web3 is a way for artists and creators to not only own what
                  they produce on a platform, but the platform itself.
                </p>
              </div>
            </div>
            <div className="mt-5 text-white">
              <span className="font-semibold text-2xl block">
                Subscribe to receive our latest blog
              </span>
              <span className="text-sm mt-2 block">
                No spam, unsubscribe anytime and always bring contents!
              </span>

              <div className="flex rounded-lg bg-white w-full h-[52px] mt-2 px-4 items-center">
                <input
                  type="text"
                  className="w-full outline-none text-black"
                  placeholder="Your email address"
                  // value={inputEmail}
                  // onChange={handleChangeEmail}
                />
              </div>

              <div
                className="flex cursor-pointer h-[52px] mt-3 font-semibold bg-main rounded-lg justify-center items-center tracking-wider duration-500 hover:tracking-widest"
                // onClick={handleSubscribe}
              >
                Subscribe Now
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h5
            className={clsx(
              "text-3xl font-birdMedium font-semibold",
              "xs:text-[32px] xs:leading-[56px]"
            )}
          >
            Related Articles
          </h5>
          <div
            className={clsx(
              "flex flex-col items-center gap-5 mt-3",
              "xs:flex-row xs:mt-5"
            )}
          >
            {Array(3)
              .fill(1)
              .map((item, index) => (
                <CardVertical key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsArticlePage
