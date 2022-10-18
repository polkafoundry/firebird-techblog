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
