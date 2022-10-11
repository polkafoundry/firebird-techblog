import React, { useEffect, useRef, useState } from "react"
import axios from "axios"

const Editor = () => {
  const editorRef = useRef<any>()
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false)
  const { CKEditor, DecoupledEditor } = editorRef.current || {}

  class UploadAdapter {
    loader
    constructor(loader: any) {
      this.loader = loader
      this.upload = this.upload.bind(this)
      this.abort = this.abort.bind(this)
    }

    async upload() {
      const file = await this.loader.file
      const data = new FormData()
      data.append("file", file)
      const res = await axios.post("/upload-image", data, {
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data"
        }
      })
      return {
        default: res?.data.url
      }
    }

    abort() {
      // Reject promise returned from upload() method.
      console.log("abort")
    }
  }

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      DecoupledEditor: require("@ckeditor/ckeditor5-build-decoupled-document")
    }
    setEditorLoaded(true)
  }, [])

  const [data, setData] = useState("")

  function MyCustomUploadAdapterPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return new UploadAdapter(loader)
    }
  }
  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={DecoupledEditor}
          data={data}
          config={{
            extraPlugins: [MyCustomUploadAdapterPlugin]
          }}
          onReady={(editor: any) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor)
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              )
            // this.editor = editor
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData()
            setData(data)
          }}
        />
      ) : (
        <p>Editor Loading...</p>
      )}
    </>
  )
}

export default Editor