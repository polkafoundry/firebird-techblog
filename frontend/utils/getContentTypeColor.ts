import { CONTENT_TYPES } from "./constants"

export const getContentTypeColor = (type: any) => {
  let color = "text-white",
    backgroundColor = "bg-white"

  switch (type) {
    case CONTENT_TYPES.ECOSYSTEM:
      color = "text-birdRed"
      backgroundColor = "bg-[#FDEEEB]"
      break
    case CONTENT_TYPES.ANALYTICS:
      color = "text-birdGreen"
      backgroundColor = "bg-[#DEFFEC]"
      break
    case CONTENT_TYPES.COMMUNITY:
      color = "text-birdOrange"
      backgroundColor = "bg-[#FFF3E0]"
      break
    case CONTENT_TYPES.READER_CONTRIBUTION:
      color = "text-birdPurple"
      backgroundColor = "bg-[#F1EBFD]"
      break
    case CONTENT_TYPES.TECHNOLOGY:
      color = "text-birdBlue"
      backgroundColor = "bg-[#EBF4FD]"
      break

    default:
      break
  }

  return `${color} ${backgroundColor}`
}
