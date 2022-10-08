import clsx from "clsx"
import Image from "next/image"
import Button from "../../../Base/Button"
import styles from "../landing.module.scss"

import imgWrite from "public/images/bird-writer.png"

const FirebirdWriter = () => {
  return (
    <div
      className={clsx(
        `${styles.writer} mt-14 pt-[60px] pb-[60px]`,
        "xs:pt-10 xs:pb-[100px]"
      )}
    >
      <div className={clsx(styles.section, "flex flex-col gap-10")}>
        <div className={clsx("flex flex-col items-center mb-5", "xs:flex-row")}>
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
              Become a contributor and share your own stories to bring valuable
              blockchain knowledge to the community. <br /> Let’s submit your
              articles for a chance to receive alluring rewards from Firebird.
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

export default FirebirdWriter
