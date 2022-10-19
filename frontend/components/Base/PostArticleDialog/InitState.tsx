export type DialogTypes = {
  open: boolean
  handleClose: () => void
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
