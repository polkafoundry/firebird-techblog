import React from "react"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import WriterPage from "../../components/Pages/WriterPage"

const Writer = () => {
  return (
    <DefaultLayout title="The Firebird Blog" isWriterPage>
      <WriterPage />
    </DefaultLayout>
  )
}

export default Writer
