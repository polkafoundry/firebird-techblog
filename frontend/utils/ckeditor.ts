export const getThumbnailDes = (htmlString: string) => {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = htmlString
  const firstParag: any = wrapper.firstChild

  return firstParag.innerText
}
