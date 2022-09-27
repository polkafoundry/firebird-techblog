import Image from "next/image"
import React from "react"
import Button from "../../Base/Button"
import ButtonLink from "../../Base/ButtonLink"
import { CardVertical } from "../../Base/Card"
import CardWriter from "../../Base/Card/CardWriter"

const WriterPage = () => {
  //#region RENDER

  const renderBirdWriter = () => {
    return (
      <>
        <p className="text-[40px] font-semibold font-birdMedium mb-3">
          The Firebird Writer
        </p>
        <span className="text-[22px]">
          Reading distinctive blockchain articles from various contributors’
          perspectives.
        </span>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5 mt-8">
            <div className="flex-1 w-full">
              <CardWriter />
            </div>
            <div className="flex flex-col gap-5">
              <CardVertical hideDetail />
              <CardVertical hideDetail />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <CardVertical />
            <CardVertical />
            <CardVertical />
          </div>
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

  const renderBecomeContributor = () => {
    return (
      <>
        <p className="text-main text-xl font-birdMedium mt-20">Write & Earn</p>

        <div className="grid grid-cols-2">
          <div className="flex flex-col pr-10">
            <span className="text-[56px] font-birdMedium font-semibold">
              Become a Firebird Contributor
            </span>

            <div className="relative w-full h-full">
              <Image
                src="/images/bird-writer.png"
                alt=""
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </div>
          </div>

          <div className="flex flex-col text-lg">
            <span>
              If you have useful knowledge, creative ideas, research, or
              experiences relating to Firebird and blockchain, don’t hesitate to
              contribute to our community.
            </span>
            <span className="mt-2">
              Let’s become contributors to bring valuable information to the
              community and get attractive rewards from the Firebird team.
            </span>
            <div className="flex">
              <Button className="mt-5 gap-2 px-7 border-[2.5px] border-black">
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

            <div className="flex flex-col mt-14">
              <span className="text-main font-birdMedium font-semibold">
                How to participate?
              </span>
              <ul className="mt-3 list-decimal pl-4 text-sm leading-6">
                <li>
                  {`Click the "Post an article” button and enter your content in the form.`}
                </li>
                <li>Click the “Submit” button. </li>
                <li>Your post will be reviewed by Firebird Team.</li>
                <li>
                  You will receive a confirmation email if your post is chosen.
                </li>
                <li>
                  Earn $PKF after your post is posted on The Firebird Blog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }

  //#endregion RENDER

  return (
    <div className="flex flex-col w-full pt-20 bg-[#F7F7F8]">
      <div className="w-full max-w-[1440px] mx-auto px-[160px] pt-5 pb-20">
        {renderBirdWriter()}

        {renderBecomeContributor()}
      </div>
    </div>
  )
}

export default WriterPage
