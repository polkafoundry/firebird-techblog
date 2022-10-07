import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import { contentTypes, CONTENT_TYPES } from "../../../utils/constants"
import Button from "../../Base/Button"
import ButtonLink from "../../Base/ButtonLink"
import { CardActive, CardHorizontal } from "../../Base/Card"
import CardVertical from "../../Base/Card/CardVertical"
import styles from "./landing.module.scss"
import imgWrite from "public/images/bird-writer.png"
import imgSubBanner from "public/images/befitter-banner.png"

type FilterTypes = {
  search: string
  type: typeof contentTypes[number]["value"]
}
const buttonStyles = {
  hoverAnimated: "duration-500 hover:tracking-widest",
  button:
    "flex h-14 rounded-[60px] items-center tracking-wider text-lg font-birdMedium cursor-pointer"
}

function LandingPage() {
  const [contentType, setContentType] = useState<
    typeof contentTypes[number]["value"]
  >(CONTENT_TYPES.ALL)
  const [inputSearch, setInputSearch] = useState<string>("")
  const [inputEmail, setInputEmail] = useState<string>("")
  const [filter, setFilter] = useState<FilterTypes>({
    search: "",
    type: ""
  })

  useEffect(() => {
    console.log("filter", filter)
  }, [filter])

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter((prevFilter: FilterTypes) => ({
        ...prevFilter,
        search: inputSearch.trim(),
        type: contentType
      }))
    }, 400)
    return () => clearTimeout(timer)
  }, [inputSearch, contentType])

  const handleSelectType = (type: any) => {
    setContentType(type)
  }

  const handleSearch = (e: any) => {
    setInputSearch(e.target.value)
  }

  const handleChangeEmail = (e: any) => {
    setInputEmail(e.target.value)
  }

  const handleSubscribe = () => {
    //TODO: simple validate email
    console.log("subscribe: ", inputEmail)
  }

  //#region RENDER

  const renderLastestPost = () => {
    return (
      <>
        <div
          className={clsx(
            "flex flex-col w-full justify-between mt-8 gap-3",
            "xs:flex-row"
          )}
        >
          <span
            className={clsx(
              "text-3xl font-semibold font-birdMedium text-center",
              "xs:text-left"
            )}
          >
            Latest Post
          </span>
          <div
            className={clsx(
              "flex items-center rounded-lg px-5 h-[52px] bg-white w-full",
              "xs:max-w-xs"
            )}
          >
            <input
              type="text"
              placeholder="Search article"
              className="outline-none w-full"
              value={inputSearch}
              onChange={handleSearch}
            />
            <Image
              className="cursor-pointer"
              src="/images/icon-search.svg"
              width={24}
              height={24}
              alt=""
            />
          </div>
        </div>

        <div className="hidden w-full mt-3 xs:flex">
          <CardActive />
        </div>

        <div
          className={clsx(
            "flex flex-col items-center gap-5 mt-5  ",
            "xs:flex-row"
          )}
        >
          <div className="flex xs xs:hidden">
            <CardVertical />
          </div>
          {Array(3)
            .fill(1)
            .map((item, index) => (
              <CardVertical key={index} />
            ))}
        </div>

        <div className="flex justify-center mt-10">
          <ButtonLink
            className="px-7 gap-3 bg-black text-white"
            href="articles"
          >
            <>
              View more articles
              <Image
                src={"/images/icon-open.svg"}
                width={24}
                height={24}
                alt=""
              />
            </>
          </ButtonLink>
        </div>
      </>
    )
  }

  const renderSubBanner = () => {
    return (
      <div className="relative w-full mt-10 cursor-pointer">
        <Image src={imgSubBanner} layout="responsive" alt="" />
      </div>
    )
  }

  const renderExclusiveContent = () => {
    return (
      <>
        <div
          className={clsx(
            "text-[32px] font-semibold font-birdMedium mt-10 text-center ",
            "xs:text-left"
          )}
        >
          Exclusive Content
        </div>

        <div className={clsx("grid gap-5 mt-4", "lg:grid-cols-[_1fr_360px]")}>
          <div className="flex-1 grid grid-cols-1 gap-5">
            {Array(3)
              .fill(1)
              .map((item, index: number) => (
                <CardHorizontal key={index + 100} />
              ))}
          </div>

          <div
            className={clsx(
              `${styles.subscribe} flex flex-col px-8 pt-10 pb-[62px] text-white max-h-[480px] rounded-[20px]`,
              "md:pb-10"
            )}
          >
            <span className={clsx("font-semibold text-3xl", "md:text-[32px]")}>
              Subscribe to receive our latest blog
            </span>
            <span className={clsx("text-lg mt-3", "md:mt-10")}>
              No spam, unsubscribe anytime and always bring contents!
            </span>

            <div
              className={clsx(
                "flex rounded-lg bg-white w-full h-[52px] mt-8 px-4 items-center",
                "md:mt-5"
              )}
            >
              <input
                type="text"
                className="w-full outline-none text-black"
                placeholder="Your email address"
                value={inputEmail}
                onChange={handleChangeEmail}
              />
            </div>

            <div
              className={clsx(
                "flex cursor-pointer h-[52px] mt-3 font-semibold bg-main rounded-lg justify-center items-center tracking-wider",
                buttonStyles.hoverAnimated
              )}
              onClick={handleSubscribe}
            >
              Subscribe Now
            </div>
          </div>
        </div>
      </>
    )
  }

  const renderFirebirdWriter = () => {
    return (
      <div
        className={clsx(
          `${styles.writer} mt-14 pt-[60px] pb-[60px]`,
          "xs:pt-10 xs:pb-[100px]"
        )}
      >
        <div className={clsx(styles.section, "flex flex-col gap-10")}>
          <div
            className={clsx("flex flex-col items-center mb-5", "xs:flex-row")}
          >
            <div
              className={clsx(
                "flex flex-col w-full max-w-[580px] items-center",
                "xs:items-start"
              )}
            >
              <span
                className={clsx(
                  "font-birdMedium font-semibold text-[32px]",
                  "xs:text-[56px]"
                )}
              >
                The Firebird’s Writer
              </span>
              <span
                className={clsx(
                  "text-lg text-center mt-3",
                  "xs:text-left xs:mt-0"
                )}
              >
                Become a contributor and share your own stories to bring
                valuable blockchain knowledge to the community. <br /> Let’s
                submit your articles for a chance to receive alluring rewards
                from Firebird.
              </span>

              <div className={clsx("flex gap-2 mt-5", "xs:mt-3 xs:gap-4")}>
                {/* <ButtonLink
                  href="writer"
                  className={clsx(
                    "px-12 bg-black text-white text-base",
                    "xs:text-lg"
                  )}
                >
                  Discover
                </ButtonLink> */}
                <Button
                  className={clsx(
                    "gap-2 px-2 border-[2.5px] border-black text-base font-semibold tracking-normal",
                    "xs:text-lg xs:px-7"
                  )}
                >
                  <>
                    <span>Post an article</span>
                    <Image
                      src="/images/icon-post.svg"
                      alt=""
                      width={24}
                      height={24}
                      layout="fixed"
                    />
                  </>
                </Button>
              </div>
            </div>

            <div className="relative w-full">
              <Image src={imgWrite} alt="" layout="responsive" />
            </div>
          </div>

          {/* <div className="flex w-full">
            <CardActive />
          </div> */}
        </div>
      </div>
    )
  }

  ////#endregion RENDER

  return (
    <div className="flex flex-col w-full bg-[#f7f7f8]">
      <div className={`${styles.banner} flex text-white pt-20`}>
        <div className={`${styles.section}`}>
          <p
            className={clsx(
              "mt-14 text-center px-2",
              "md:text-left md:mt-12 md:px-0"
            )}
          >
            The Firebird Blog
          </p>
        </div>
      </div>

      <div className={clsx("w-full pt-7", "md:pb-16")}>
        <div className={`${styles.section} flex flex-col`}>
          <div
            className={clsx(
              styles.hiddenScrollbar,
              "flex gap-2 overflow-x-auto"
            )}
          >
            {contentTypes.map((item: any) => (
              <div
                key={item?.value}
                className={`px-8 py-2 rounded-lg cursor-pointer text-birdGray font-semibold whitespace-nowrap ${
                  contentType === item?.value ? styles.typeActived : ""
                }`}
                onClick={() => handleSelectType(item.value)}
              >
                {item?.label}
              </div>
            ))}
          </div>

          {renderLastestPost()}

          {/* {renderSubBanner()} */}

          {/* {renderExclusiveContent()} */}
        </div>
      </div>

      {renderFirebirdWriter()}
    </div>
  )
}

export default LandingPage
