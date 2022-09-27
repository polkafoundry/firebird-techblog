import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import { contentTypes, CONTENT_TYPES } from "../../../utils/constants"
import Button from "../../Base/Button"
import ButtonLink from "../../Base/ButtonLink"
import { CardActive, CardHorizontal } from "../../Base/Card"
import CardVertical from "../../Base/Card/CardVertical"
import styles from "./landing.module.scss"

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

  const handleSubcribe = () => {
    //TODO: simple validate email
    console.log("subcribe: ", inputEmail)
  }

  //#region RENDER

  const renderLastestPost = () => {
    return (
      <>
        <div className="flex w-full justify-between mt-8">
          <span className="text-3xl font-semibold font-birdMedium">
            Latest Post
          </span>
          <div className="flex items-center rounded-lg px-5 h-[52px] bg-white w-full max-w-xs">
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

        <div className="flex w-full mt-3">
          <CardActive />
        </div>

        <div className="grid grid-cols-3 mt-5">
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
      <div className="relative w-full h-[280px] mt-10 cursor-pointer">
        <Image
          src={"/images/befitter-banner.png"}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
    )
  }

  const renderExclusiveContent = () => {
    return (
      <>
        <div className="text-[32px] font-semibold font-birdMedium mt-10">
          Exclusive Content
        </div>

        <div className="grid grid-cols-[_1fr_360px] gap-5 mt-4">
          <div className="flex-1 grid grid-cols-1 gap-5">
            {Array(3)
              .fill(1)
              .map((item, index: number) => (
                <CardHorizontal key={index + 100} />
              ))}
          </div>

          <div
            className={`${styles.subcribe} flex flex-col px-8 py-10 text-white max-h-[480px]`}
          >
            <span className="font-semibold text-[32px]">
              Subcribe to receive our latest blog
            </span>
            <span className="text-lg mt-10">
              No spam, unsubcribe anytime and always bring contents!
            </span>

            <div className="flex rounded-lg bg-white w-full h-[52px] mt-5 px-4 items-center">
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
              onClick={handleSubcribe}
            >
              Subcribe Now
            </div>
          </div>
        </div>
      </>
    )
  }

  const renderFirebirdWriter = () => {
    return (
      <div className={`${styles.writer} mt-14 pt-10 pb-[100px]`}>
        <div className={clsx(styles.section, "flex flex-col gap-10")}>
          <div className="flex">
            <div className="flex flex-col w-full max-w-[580px]">
              <span className="font-birdMedium font-semibold text-[56px]">
                The Firebird’s Writer
              </span>
              <span className="text-lg">
                Become a contributor and share your own stories to bring
                valuable blockchain knowledge to the community. <br /> Let’s
                submit your articles for a chance to receive alluring rewards
                from Firebird.
              </span>

              <div className="flex gap-4 mt-3">
                <ButtonLink href="writer" className="px-12 bg-black text-white">
                  Discover
                </ButtonLink>
                <Button className="gap-2 px-7 border-[2.5px] border-black">
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
              <Image
                src="/images/bird-writer.png"
                alt=""
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </div>
          </div>

          <div className="flex w-full">
            <CardActive />
          </div>
        </div>
      </div>
    )
  }

  ////#endregion RENDER

  return (
    <div className="flex flex-col w-full">
      <div className={`${styles.banner} flex text-white pt-20`}>
        <div className={`${styles.section}`}>
          <p className="mt-12">The Firebird Blog</p>
        </div>
      </div>

      <div className="w-full bg-[#f7f7f8] pb-16 pt-7">
        <div className={`${styles.section} flex flex-col`}>
          <div className="flex gap-2">
            {contentTypes.map((item: any) => (
              <div
                key={item?.value}
                className={`px-8 py-2 rounded-lg cursor-pointer text-birdGray font-semibold ${
                  contentType === item?.value ? styles.typeActived : ""
                }`}
                onClick={() => handleSelectType(item.value)}
              >
                {item?.label}
              </div>
            ))}
          </div>

          {renderLastestPost()}

          {renderSubBanner()}

          {renderExclusiveContent()}
        </div>
      </div>

      {renderFirebirdWriter()}
    </div>
  )
}

export default LandingPage
