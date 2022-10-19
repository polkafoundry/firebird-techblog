import { useQuery } from "@apollo/client"
import clsx from "clsx"
import Image from "next/image"
import React from "react"
import { GET_TOP_LASTEST_ARTICLES } from "../../../graphql/article"
import { formatCardData } from "../../../utils/format"
import Button from "../../Base/Button"
import ButtonLink from "../../Base/ButtonLink"
import { CardVertical } from "../../Base/Card"
import CardWriter from "../../Base/Card/CardWriter"

const WriterPage = () => {
  //#region RENDER

  const LIMIT_LASTEST_RESULTS = 6

  const { data: articlesData = [], refetch: refetchLastest } = useQuery(
    GET_TOP_LASTEST_ARTICLES,
    {
      variables: {
        category: {},
        take: LIMIT_LASTEST_RESULTS
      }
    }
  )

  const articles = formatCardData(articlesData)

  const renderBirdWriter = () => {
    return (
      <div className="">
        <p
          className={clsx(
            "text-[40px] leading-[44px] font-semibold font-birdMedium mb-3 text-center",
            "xs:text-[60px] xs:leading-[80px] xs:text-left",
            "md:text-[56px] md:leading-[64px]"
          )}
        >
          The Firebird Writer
        </p>
        <span
          className={clsx(
            "text-sm text-center block",
            "xs:text-lg xs:text-left",
            "md:text-22px"
          )}
        >
          Reading distinctive blockchain articles from various contributors’
          perspectives.
        </span>

        <div className=" flex-col gap-5 hidden md:flex">
          <div className="flex gap-5 mt-8">
            <div className="flex-1 w-full">
              <CardWriter cardData={articles[0]} />
            </div>
            <div className="flex flex-col justify-between gap-5 md:w-[260px] 2md:w-[310px] xl:w-[330px] main:w-[360px]">
              <CardVertical hideDetail cardData={articles[1]} />
              <CardVertical hideDetail cardData={articles[2]} />
            </div>
          </div>

          <div className="flex flex-col m-auto xs:grid xs:grid-cols-2 md:grid-cols-3 gap-5">
            {articles.slice(3).map((article: any) => (
              <CardVertical key={article.id} cardData={article} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center xs:grid xs:grid-cols-2 md:hidden gap-5 mt-8">
          {articles.map((article: any) => (
            <CardVertical key={article.id} cardData={article} />
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
      </div>
    )
  }

  const renderBecomeContributor = () => {
    return (
      <>
        <p
          className={clsx(
            "text-main text-16px font-birdMedium mt-20 text-center",
            "xs:text-xl xs:text-left",
            "md:leading-[28px]"
          )}
        >
          Write & Earn
        </p>

        <div
          className={clsx("grid grid-cols-1 mt-1", "xs:grid-cols-2", "md:mt-4")}
        >
          <div className="flex flex-col pr-10">
            <span
              className={clsx(
                "text-32px font-birdMedium font-semibold text-center",
                "xs:text-4xl xs:text-left",
                "md:text-6xl"
              )}
            >
              Become a Firebird Contributor
            </span>

            <div className="relative w-full h-[240px] xs:h-full mb-5 xs:mt-0">
              <Image
                src="/images/bird-writer.png"
                alt=""
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-col text-sm",
              "xs:text-base",
              "md:text-lg"
            )}
          >
            <span>
              If you have useful knowledge, creative ideas, research, or
              experiences relating to Firebird and blockchain, don’t hesitate to
              contribute to our community.
            </span>
            <span className="mt-2 text-center xs:text-left xs:mt-3 md:mt-2">
              Let’s become contributors to bring valuable information to the
              community and get attractive rewards from the Firebird team.
            </span>
            <div className="flex justify-center xs:justify-start">
              <Button className="mt-5 gap-2 px-7 border-[2.5px] border-black text-16px xs:text-18px xs:mt-3 md:mt-5">
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
              <span
                className={clsx(
                  "text-main text-16px font-birdMedium font-semibold",
                  "md:text-20px"
                )}
              >
                How to participate?
              </span>
              <ul
                className={clsx(
                  "mt-3 list-decimal pl-4 text-sm leading-6",
                  "xs:text-12px",
                  "md:text-sm"
                )}
              >
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
      <div
        className={clsx(
          "w-full max-w-[1440px] mx-auto px-5 pt-5 pb-10",
          "xs:px-10 xs:pb-20",
          "md:px-[60px]",
          "lg:px-[160px]"
        )}
      >
        {renderBirdWriter()}

        {renderBecomeContributor()}
      </div>
    </div>
  )
}

export default WriterPage
