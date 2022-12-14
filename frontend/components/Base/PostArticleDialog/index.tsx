import clsx from "clsx"
import moment from "moment"
import Image from "next/image"
import useArticles from "../../../hooks/useArticles"
import {
  contentTypes,
  defaultAuthor,
  ModalPostTypes,
  socialShare
} from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import Button from "../Button"
import AuthorImage from "../Card/AuthorImage"
import CardThumbnail from "../Card/CardThumbnail"
import CardType from "../Card/CardType"
import Editor from "../Editor"
import Spinner from "../Spinner"
import { DialogTypes, FormDataTypes, FormErrorDataTypes } from "./InitState"
import styles from "./post.module.scss"
import iconBack from "/public/images/icon-back.svg"
import iconLink from "/public/images/icon-link-gray.svg"
import iconView from "/public/images/icon-view.svg"

const inputStyles = clsx(
  "flex w-full h-[52px] px-5 justify-center bg-[#F7F8F9] rounded-lg border border-[#DEDEDE] text-sm",
  "sm:text-base"
)

const INPUT_FIELDS = {
  NAME: "author_name",
  EMAIL: "author_email",
  TITLE: "title",
  AVATAR: "author_image"
}

const PostArticleDialog = (props: DialogTypes) => {
  const { handleClose, open } = props

  const {
    modalType,
    handleChangPostType,
    formData,
    errorFormData,
    loadingCreatePost,
    handleFormChange,
    handleSelectCategory,
    handleEditorChange,
    handleViewPost,
    handleBackToEditForm,
    onSubmitPost
  } = useArticles({ handleClose })

  const renderEditForm = () => {
    const renderInputField = (
      fieldName: any,
      placeholder: string,
      leftIcon?: any
    ) => (
      <div className="relative">
        <input
          type="text"
          name={fieldName}
          placeholder={placeholder}
          className={inputStyles}
          value={formData[fieldName as keyof FormDataTypes]}
          onChange={handleFormChange}
        />
        {errorFormData[fieldName as keyof FormErrorDataTypes] && (
          <span className="text-birdRed text-sm">
            {errorFormData[fieldName as keyof FormErrorDataTypes]}
          </span>
        )}
        <div className="absolute top-[10px] right-[10px]">
          <Image src={leftIcon} alt="" />
        </div>
      </div>
    )

    const renderCardCategorys = () => (
      <div className={clsx("flex flex-wrap gap-2", "xs:gap-[10px]")}>
        {contentTypes
          .slice(1, contentTypes.length)
          .map((item: any, index: number) => (
            <div
              className={clsx(
                "flex  h-8 rounded-lg px-5 items-center cursor-pointer text-sm font-semibold",
                formData.categories.includes(item.value)
                  ? getContentTypeColor(item.value)
                  : "bg-[#eeeeee] text-[#747474]"
              )}
              key={index}
              onClick={() => handleSelectCategory(item.value)}
            >
              {item.label}
            </div>
          ))}
      </div>
    )

    const renderActionButtons = () => (
      <div
        className={clsx(
          "flex flex-col justify-between mt-1 gap-3",
          "sm:flex-row"
        )}
      >
        <Button
          className={clsx(
            "h-[60px] justify-center border-2 border-birdGray text-birdGray px-12 text-14px font-semibold",
            formData.content.length === 0 && "opacity-50"
          )}
          onClick={handleViewPost}
          disabled={formData.content.length === 0}
        >
          <Image src={iconView} alt="" />
          <span className="ml-1.5">View post</span>
        </Button>

        <div
          className={clsx(
            "flex flex-col-reverse items-center mt-auto gap-3",
            "sm:flex-row"
          )}
        >
          <Button
            className="w-full justify-center ml-auto text-birdGray px-10"
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button
            className="w-full justify-center h-[60px] bg-main text-white px-12"
            onClick={onSubmitPost}
          >
            {loadingCreatePost ? <Spinner /> : "Submit"}
          </Button>
        </div>
      </div>
    )

    return (
      <form
        action="submit"
        className={clsx(
          "flex flex-col gap-2 mt-8 h-auto px-5",
          "xs:gap-3 xs:px-10",
          "lg:px-[150px]"
        )}
      >
        <div
          className={clsx("grid grid-cols-1 gap-2", "xs:grid-cols-2 xs:gap-3")}
        >
          {renderInputField(INPUT_FIELDS.NAME, "Your name *")}
          {renderInputField(INPUT_FIELDS.EMAIL, "Your email address *")}
        </div>

        {renderInputField(INPUT_FIELDS.TITLE, "Your post title *")}
        {renderInputField(
          INPUT_FIELDS.AVATAR,
          "Your avatar image link",
          iconLink
        )}

        <span className={clsx("mt-3 font-semibold", "xs:mt-2")}>
          Choose Categories *
        </span>
        {renderCardCategorys()}

        <div
          className={clsx(
            "w-full bg-[#f7f8f9] rounded-lg border border-[#dedede] mt-[10px]",
            "xs:mt-[9px]"
          )}
        >
          <Editor content={formData.content} onChange={handleEditorChange} />
        </div>
        {renderActionButtons()}
      </form>
    )
  }

  const renderPreviewPost = () => {
    const tabStyles = "w-[160px] rounded-lg text-16px font-semibold py-2.5"
    const handleViewThumbnail = () => {
      handleChangPostType(ModalPostTypes.VIEW_THUMBNAIL)
    }
    const handleViewDetail = () => {
      handleChangPostType(ModalPostTypes.VIEW_DETAIL)
    }

    return (
      <div
        className={clsx(
          "mt-[22px] px-5",
          styles.fitWithDialog,
          "xs:mt-[32px] xs:px-10",
          "md:px-[60px]"
        )}
      >
        <div className={clsx("flex justify-center gap-2", "md:gap-3")}>
          <button
            type="button"
            className={clsx(
              tabStyles,
              modalType !== ModalPostTypes.VIEW_THUMBNAIL
                ? "text-birdGray bg-[#EAEAEA] hover:bg-gray-300 transition"
                : "text-white bg-black"
            )}
            onClick={handleViewThumbnail}
          >
            Thumbnail
          </button>
          <button
            type="button"
            className={clsx(
              tabStyles,
              modalType !== ModalPostTypes.VIEW_DETAIL
                ? "text-birdGray bg-[#EAEAEA] hover:bg-gray-300 transition"
                : "text-white bg-black"
            )}
            onClick={handleViewDetail}
          >
            Detail
          </button>
        </div>
        {modalType === ModalPostTypes.VIEW_DETAIL && (
          <div
            className={clsx(
              "mt-3 bg-[#F6F6F6] rounded-t-[20px] px-5 py-4 ",
              styles.fitWithDialog,
              "xs:p-8",
              "md:px-[70px]"
            )}
          >
            <div>
              <div className="">
                <CardType cardTypes={formData?.categories} isPreviewPost />
                <h1
                  className={clsx(
                    "text-20px font-birdMedium font-semibold mt-3",
                    "xs:mt-2 xs:text-32px",
                    "md:text-[36px] md:leading-[48px]"
                  )}
                >
                  {formData?.title}
                </h1>
                <div
                  className={clsx(
                    "flex flex-col justify-between items-center mt-8 gap-[18px]",
                    "xs:flex-row xs:mt-4 xs:gap-0",
                    "md:mt-5"
                  )}
                >
                  <div className="flex gap-2 h-fit">
                    <AuthorImage image={formData.author_image} />
                    <div className="flex flex-col gap-1">
                      <span
                        className={clsx(
                          "text-14/20 font-semibold",
                          "xs:text-16px"
                        )}
                      >
                        {formData?.author_name || defaultAuthor}
                      </span>
                      <span
                        className={clsx(
                          "text-12px text-birdGray",
                          "xs:text-sm"
                        )}
                      >
                        {`${moment(new Date()).format("ll")} | ${"4 min"} read`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-full py-2.5 px-[30px]">
                    <span className="text-xs font-bold text-birdGray uppercase tracking-wider">
                      Share
                    </span>
                    {socialShare.map((item, index) => (
                      <div
                        key={index}
                        className={clsx(
                          "h-8 w-8 flex items-center justify-center rounded-full",
                          index === 2 && "bg-birdRed"
                        )}
                      >
                        <Image src={item.icon} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: formData.content }}
                  className={clsx("flex flex-col gap-3 mt-5", "xs:mt-8")}
                ></div>
              </div>
            </div>
          </div>
        )}
        {modalType === ModalPostTypes.VIEW_THUMBNAIL && (
          <div
            className={clsx(
              "mt-3 bg-[#F6F6F6] rounded-t-[20px] px-5 py-4 flex w-full items-center",
              styles.fitWithDialog,
              "xs:p-8",
              "md:px-[70px]"
            )}
          >
            <CardThumbnail cardDetail={formData} />
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={clsx(
        { hidden: !open },
        "fixed inset-0 flex justify-center w-screen h-screen bg-[rgba(0,0,0,0.8)] z-[9999] px-5 py-10",
        "xs:px-10",
        "lg:px-[150px]",
        "xl:px-[200px]"
      )}
    >
      <div
        className={clsx(
          "flex flex-col w-full h-full overflow-y-auto bg-white rounded-[20px] pt-10 pb-8",
          "xs:pt-12"
        )}
      >
        <div className="flex justify-center relative">
          {modalType !== ModalPostTypes.EDIT_POST && (
            <div
              className="absolute left-5 xs:left-10 md:left-[60px] cursor-pointer"
              onClick={handleBackToEditForm}
            >
              <Image src={iconBack} alt="Back" />
            </div>
          )}
          <span
            className={clsx(
              "text-3xl text-center font-semibold",
              "xs:text-4xl"
            )}
          >
            {modalType === ModalPostTypes.EDIT_POST
              ? "Submit your blog here"
              : "View post"}
          </span>
        </div>
        {modalType === ModalPostTypes.EDIT_POST
          ? renderEditForm()
          : renderPreviewPost()}
      </div>
    </div>
  )
}

export default PostArticleDialog
