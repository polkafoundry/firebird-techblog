import clsx from "clsx"
import { CardHorizontal } from "../../../Base/Card"
import styles from "../landing.module.scss"

const buttonStyles = {
  hoverAnimated: "duration-500 hover:tracking-widest",
  button:
    "flex h-14 rounded-[60px] items-center tracking-wider text-lg font-birdMedium cursor-pointer"
}
const ExclusiveContent = (props: any) => {
  const { inputEmail, handleChangeEmail, handleSubscribe } = props

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

export default ExclusiveContent
