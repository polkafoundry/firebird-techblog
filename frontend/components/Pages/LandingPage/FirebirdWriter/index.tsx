import clsx from "clsx"
import Image from "next/image"
import styles from "../landing.module.scss"

import imgWrite from "public/images/bird-writer.png"
import { useState } from "react"
import ButtonLink from "../../../Base/ButtonLink"
import Button from "../../../Base/Button"
import PostArticleDialog from "../../../Base/PostArticleDialog"

const FirebirdWriter = () => {
  const [openModalPost, setOpenModalPost] = useState<boolean>(false)

  const handleOpenPostArticle = () => {
    setOpenModalPost(true)
  }
  const handleClosePostArticle = () => {
    setOpenModalPost(false)
  }

  const onSubmitPost = (data: any) => {
    console.log(data)
  }

  return (
    <div
      className={clsx(
        `${styles.writer} mt-14 pt-[60px] pb-[60px]`,
        "xs:py-20",
        "md:pt-10 xs:pb-[100px]"
      )}
    >
      <div className={clsx(styles.section, "flex flex-col gap-10")}>
        <div
          className={clsx(
            "flex flex-col items-center mb-5 gap-5",
            "xs:flex-row"
          )}
        >
          <div
            className={clsx(
              "flex flex-col w-full max-w-[580px] items-center ",
              "xs:items-start"
            )}
          >
            <span
              className={clsx(
                "font-birdMedium font-semibold text-[32px]",
                "xs:text-[40px] xs:leading-[52px]",
                "lg:text-[56px]"
              )}
            >
              The Firebird Writer
            </span>
            <span
              className={clsx(
                "text-lg text-center mt-3",
                "xs:text-left xs:mt-2",
                "md:mt-6"
              )}
            >
              Let’s get ready to embrace write-and-earn programs with alluring
              rewards from Firebird in the near future. <br /> More information
              will be revealed soon. Please stay tunned and follow our channels
              for the latest updates.
            </span>

            <div className={clsx("flex gap-2 mt-5", "xs:mt-3 xs:gap-4")}>
              <ButtonLink
                href="writer"
                className={clsx(
                  "px-12 bg-black text-white text-base",
                  "xs:text-lg"
                )}
              >
                Discover
              </ButtonLink>
              <Button
                className={clsx(
                  "gap-2 px-2 border-[2.5px] border-black text-base font-semibold tracking-normal",
                  "xs:text-lg xs:px-7"
                )}
                onClick={handleOpenPostArticle}
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

          <div className="relative w-full  md:max-h-full">
            <Image src={imgWrite} alt="" layout="responsive" />
          </div>
        </div>

        {/* <div className="flex w-full">
          <CardActive />
        </div> */}
      </div>

      <PostArticleDialog
        handleClose={handleClosePostArticle}
        onSubmit={onSubmitPost}
        open={openModalPost}
      />
    </div>
  )
}

export default FirebirdWriter
