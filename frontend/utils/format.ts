import moment from "moment"
import { getMinReadEstimate, getThumbnailDes } from "./ckeditor"
import { defaultAvatar } from "./constants"

export const formatTime = (time: Date) => moment(time).format("ll")

export const formatCardData = (articlesData: any) =>
  articlesData.articles
    ? articlesData.articles.map((article: any) => ({
        id: article.id,
        image: article.thumbnail?.url,
        types: article.category.map((cat: any) => cat.id),
        title: article.title,
        detail: getThumbnailDes(article.content || ""),
        authorAvatar: article.author_image || defaultAvatar,
        authorName: article.author_name || "Firebird Writer",
        date: formatTime(article.created_at),
        timeToRead: getMinReadEstimate(article.content || "")
      }))
    : []

export const getAllMonthFromBefore = () => {
  const startMonth = 9
  const startYear = 2022
  const currentMonth = moment().month()
  const currentYear = moment().year()

  let result = []
  // loop each year from start to current
  // if year inside loop = startYear => start with startMonth, otherwise month 0
  // if year inside loop = currentYear => start with currentMonth, otherwise month 11

  for (let year = startYear; year <= currentYear; year++) {
    const startMonthAvailable = year === startYear ? startMonth : 0
    const endMonthAvailable = year === currentYear ? currentMonth : 11
    for (let month = startMonthAvailable; month <= endMonthAvailable; month++) {
      const curMonth = new Date(year, month, 1)
      result.push({
        value: curMonth,
        label: moment(curMonth).format("MMMM YYYY")
      })
    }
  }
  return result
}
