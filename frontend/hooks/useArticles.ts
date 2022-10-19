import { useMutation } from "@apollo/client"
import { useState } from "react"
import { toast } from "react-toastify"
import { CREATE_POST } from "../graphql/article"
import {
  EMAIL_PATTERN,
  LETTER_ONLY_PATTERN,
  ModalPostTypes
} from "../utils/constants"

type FormDataTypes = {
  author_name: string
  author_image: string
  author_email: string
  title: string
  categories: Array<string>
  content: string
}

type FormErrorDataTypes = {
  author_name: string
  author_email: string
  title: string
}

const defaultInputValues = {
  author_email: "",
  author_image: "",
  author_name: "",
  categories: [],
  content: "",
  title: ""
}

const defaultErrorValues = {
  author_name: "",
  author_email: "",
  title: ""
}

const INPUT_FIELDS = {
  NAME: "author_name",
  EMAIL: "author_email",
  TITLE: "title",
  AVATAR: "author_image"
}

const useArticles = (props: any) => {
  const { handleClose } = props

  const [modalType, setModalPostType] = useState<ModalPostTypes>(
    ModalPostTypes.EDIT_POST
  )
  const [formData, setFormData] = useState<FormDataTypes>(defaultInputValues)
  const [errorFormData, setErrorFormData] =
    useState<FormErrorDataTypes>(defaultErrorValues)

  const handleChangPostType = (type: ModalPostTypes) => {
    setModalPostType(type)
  }

  const [createPost, { loading: loadingCreatePost }] = useMutation(
    CREATE_POST,
    {
      onError: (err) => {
        toast.error(err.message)
        console.log("err :>> ", err)
      },
      onCompleted: () => {
        setFormData(defaultInputValues)
        toast.success(
          "Thanks for your submission! We will look into it and get back to you soon."
        )
        handleClose()
      }
    }
  )

  const handleFormChange = (e: any) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value

    if (fieldName === INPUT_FIELDS.NAME) {
      if (fieldValue.length >= 60 || !LETTER_ONLY_PATTERN.test(fieldValue))
        return
    }
    if (fieldName === INPUT_FIELDS.EMAIL) {
      if (fieldValue.length >= 60) return
    }
    if (fieldName === INPUT_FIELDS.TITLE) {
      if (fieldValue.length >= 160 || !LETTER_ONLY_PATTERN.test(fieldValue))
        return
    }

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }))
    updateErrorDataInput(fieldName, fieldValue)
  }

  const updateErrorDataInput = (fieldName: string, fieldValue: string) => {
    if (fieldValue.trim() === "") {
      setErrorFormData((prevState) => ({
        ...prevState,
        [fieldName]: "Field is required!"
      }))
      return
    }
    if (fieldName === INPUT_FIELDS.EMAIL) {
      if (!EMAIL_PATTERN.test(fieldValue)) {
        setErrorFormData((prevState) => ({
          ...prevState,
          [fieldName]: "Invalid email address."
        }))
        return
      }
    }
    setErrorFormData((prevState) => ({
      ...prevState,
      [fieldName]: ""
    }))
  }

  const isValidDataInputs = () => {
    updateErrorDataInput(INPUT_FIELDS.NAME, formData.author_name)
    updateErrorDataInput(INPUT_FIELDS.EMAIL, formData.author_email)
    updateErrorDataInput(INPUT_FIELDS.TITLE, formData.title)

    if (
      formData.author_name.trim() === "" ||
      formData.author_email.trim() === "" ||
      formData.title.trim() === "" ||
      !EMAIL_PATTERN.test(formData.author_email)
    ) {
      return false
    }

    if (formData.categories.length === 0) {
      toast.error("Please choose categories before submit!")
      return false
    }
    if (formData.content.trim().length === 0) {
      toast.error("Please enter content before submit!")
      return false
    }

    return true
  }

  const handleSelectCategory = (value: string) => {
    let categories = [...formData.categories]
    const newCategories = categories.includes(value)
      ? categories.filter((item) => item !== value)
      : [...categories, value]

    if (newCategories.length <= 2) {
      setFormData((prevState) => ({
        ...prevState,
        categories: newCategories
      }))
    } else {
      toast.error("You can only select less than two categories!")
    }
  }

  const onSubmitPost = () => {
    if (isValidDataInputs() && !loadingCreatePost) {
      createPost({
        variables: {
          author_name: formData.author_name,
          author_image: formData.author_image,
          author_email: formData.author_email,
          title: formData.title,
          category: {
            connect: formData.categories.map((item) => ({ id: item }))
          },
          content: formData.content
        }
      })
    }
  }
  const handleEditorChange = (content: any) => {
    setFormData((prevState) => ({
      ...prevState,
      content: content
    }))
  }

  const handleViewPost = () => {
    if (isValidDataInputs()) handleChangPostType(ModalPostTypes.VIEW_DETAIL)
  }

  const handleBackToEditForm = () => {
    handleChangPostType(ModalPostTypes.EDIT_POST)
  }

  return {
    modalType,
    handleChangPostType,
    onSubmitPost,
    formData,
    errorFormData,
    loadingCreatePost,
    handleFormChange,
    handleSelectCategory,
    handleEditorChange,
    handleViewPost,
    handleBackToEditForm
  }
}

export default useArticles
