import { ModalPostTypes } from "../../../utils/constants"

export type DialogTypes = {
  open: boolean
  handleClose: () => void
  onSubmit: (data: any) => void
  handleChangPostType: (data: any) => void
  modalType: ModalPostTypes
}

export type FormDataTypes = {
  author_name: string
  author_image: string
  author_email: string
  title: string
  categories: Array<string>
  content: string
}

export type FormErrorDataTypes = {
  author_name: string
  author_email: string
  title: string
}

export const defaultInputValues = {
  author_email: "",
  author_image: "",
  author_name: "",
  categories: [],
  content: "",
  title: ""
}

export const defaultErrorValues = {
  author_name: "",
  author_email: "",
  title: ""
}
