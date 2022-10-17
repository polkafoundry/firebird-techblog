// Outline will show like
// mainTagName
//   subTagName
//   subTagName
// mainTagName
export const formatOutline = (headings: Element[], headingTags: any) => {
  const mainTagName = headings[0].tagName
  const subTagName =
    mainTagName === headingTags[0] ? headingTags[1] : headingTags[2]

  const headingFormated: any[] = []
  headings.forEach((heading) => {
    if (heading.tagName === mainTagName) {
      headingFormated.push({
        content: getTextContent(heading),
        subHeadings: [],
        element: heading
      })
    } else if (heading.tagName === subTagName) {
      headingFormated[headingFormated.length - 1].subHeadings.push({
        content: getTextContent(heading),
        element: heading
      })
    }
  })

  return headingFormated
}

const getTextContent = (currentElement: Element) => {
  return currentElement.childElementCount
    ? currentElement.children[0].textContent
    : currentElement.textContent
}

export const getThumbnailDes = (htmlString: string) => {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = htmlString
  const firstParag: any = wrapper.firstChild

  return firstParag.innerText
}

export const getMinReadEstimate = (htmlString: string) => {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = htmlString
  const totalWords = countWords(wrapper.innerText)
  const estimateTime = Math.ceil(totalWords / 200)

  return `${estimateTime} min`
}

const countWords = (string: string) => string.trim().split(/\s+/).length
