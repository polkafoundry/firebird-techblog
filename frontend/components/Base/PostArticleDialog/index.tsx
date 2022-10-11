import clsx from "clsx"
import React, { useState } from "react"
import { contentTypes } from "../../../utils/constants"
import { getContentTypeColor } from "../../../utils/getContentTypeColor"
import Button from "../Button"
import Editor from "../Editor"

const inputStyles = `flex h-[52px] px-5 justify-center bg-[#F7F8F9] rounded-lg border border-[#DEDEDE]`

type DialogTypes = {
  open: boolean
  handleClose: () => void
  onSubmit: (data: any) => void
}

const PostArticleDialog = (props: DialogTypes) => {
  const { handleClose, onSubmit, open } = props

  const [formData, setFormData] = useState<{
    author_name: string
    author_image: string
    author_email: string
    title: string
    categories: Array<string>
    content: string
  }>({
    author_email: "",
    author_image: "",
    author_name: "",
    categories: [],
    content: "",
    title: ""
  })

  const handleFormChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleSelectCategory = (value: string) => {
    let categories = [...formData.categories]
    const newCategories = categories.includes(value)
      ? categories.filter((item) => item !== value)
      : [...categories, value]

    console.log(newCategories)
    setFormData((prevState) => ({
      ...prevState,
      categories: newCategories
    }))
  }
  const handleSubmit = () => {
    console.log("handel Submit: ", formData)
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 flex justify-center w-screen h-screen bg-[rgba(0,0,0,0.8)] z-[9999] px-[150px] py-10",
        { hidden: !open }
      )}
    >
      <div className="flex flex-col w-full overflow-y-auto bg-white rounded-[20px] pt-10 pb-8 px-[150px]">
        <span className="text-4xl text-center font-semibold">
          Submit your blog here
        </span>

        <form action="submit" className="flex flex-col gap-3 mt-8 h-full">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="author_name"
              placeholder="Your name *"
              className={inputStyles}
              value={formData.author_name}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="author_email"
              placeholder="Your email address *"
              className={inputStyles}
              value={formData.author_email}
              onChange={handleFormChange}
            />
          </div>

          <input
            type="text"
            name="title"
            placeholder="Your post title *"
            className={inputStyles}
            value={formData.title}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="author_image"
            placeholder="Your avatar image link"
            className={inputStyles}
            value={formData.author_image}
            onChange={handleFormChange}
          />

          <span className="mt-2 font-semibold">Choose Categories</span>
          <div className="flex gap-[10px]">
            {contentTypes
              .slice(1, contentTypes.length)
              .map((item: any, index: number) => (
                <div
                  className={clsx(
                    "flex h-8 rounded-lg px-5 items-center cursor-pointer text-sm font-semibold",
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

          <div className="w-full bg-[#f7f8f9] rounded-lg border border-[#dedede]">
            <Editor />
          </div>

          <div className="flex items-center mt-auto">
            <Button
              className="ml-auto text-[#747474] px-10"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className="h-[60px] bg-main text-white px-12"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostArticleDialog
