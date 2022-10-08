import { HTMLAttributeAnchorTarget } from "react"

import iconMedium from "/public/images/socials/medium.svg"
import iconGithub from "/public/images/socials/github.svg"
import iconTelegram from "/public/images/socials/telegram.svg"
import iconAnnouncement from "/public/images/socials/announcement.svg"
import iconTwitter from "/public/images/socials/twitter.svg"
import iconReddit from "/public/images/socials/reddit.svg"

import iconMediumHover from "/public/images/socials/medium.svg"
import iconGithubHover from "/public/images/socials/github.svg"
import iconTelegramHover from "/public/images/socials/telegram.svg"
import iconAnnouncementHover from "/public/images/socials/announcement.svg"
import iconTwitterHover from "/public/images/socials/twitter.svg"
import iconRedditHover from "/public/images/socials/reddit.svg"

import defaultAvatar from "/public/images/default-avatar.svg"

const firebirdLanding = process.env.FIREBIRD_LANDING_PAGE || "https://firebird-landingpage.netlify.app/"
const defaultAuthor = "Firebird Writer"
export { defaultAvatar, defaultAuthor }

export const CONTENT_TYPES = {
  ALL: "",
  ECOSYSTEM: "ecosystem",
  TECHNOLOGY: "technology",
  COMMUNITY: "community",
  ANALYTICS: "analytics",
  READER_CONTRIBUTION: "reader_contribution"
}

export const contentTypes = [
  { value: CONTENT_TYPES.ALL, label: "All" },
  { value: CONTENT_TYPES.ECOSYSTEM, label: "Ecosystem" },
  { value: CONTENT_TYPES.TECHNOLOGY, label: "Technology" },
  { value: CONTENT_TYPES.COMMUNITY, label: "Community" },
  { value: CONTENT_TYPES.ANALYTICS, label: "Analytics" },
  { value: CONTENT_TYPES.READER_CONTRIBUTION, label: "Reader’s Contribution" }
]

export const MAPPING_CONTENT_TYPE_TEXT = {
  [CONTENT_TYPES.ALL]: "All",
  [CONTENT_TYPES.ECOSYSTEM]: "Ecosystem",
  [CONTENT_TYPES.TECHNOLOGY]: "Technology",
  [CONTENT_TYPES.COMMUNITY]: "Community",
  [CONTENT_TYPES.ANALYTICS]: "Analytics",
  [CONTENT_TYPES.READER_CONTRIBUTION]: "Reader’s Contribution"
}

export const URLS = {
  DETAILS_ARTICLE: "/details-article"
}

export type SocialItemTypes = {
  img: string
  imgHover: string
  label: string
  username: string
  url: string
}
export const socialsData: Array<SocialItemTypes> = [
  {
    img: iconTwitter,
    imgHover: iconTwitterHover,
    label: "Official Twitter",
    url: "https://twitter.com/Firebirdchain",
    username: "@Firebirdchain"
  },
  {
    img: iconGithub,
    imgHover: iconGithubHover,
    label: "Github",
    url: "https://github.com/firebird",
    username: "@Firebird"
  },
  {
    img: iconMedium,
    imgHover: iconMediumHover,
    label: "Medium",
    url: "https://medium.com/firebird",
    username: "@Firebird"
  },
  {
    img: iconReddit,
    imgHover: iconRedditHover,
    label: "Reddit",
    url: "https://www.reddit.com/r/firebird/",
    username: "r/firebird"
  },
  {
    img: iconAnnouncement,
    imgHover: iconAnnouncementHover,
    label: "Annoucement Channel",
    url: "https://t.me/FirebirdANN",
    username: "@FirebirdANN"
  },
  {
    img: iconTelegram,
    imgHover: iconTelegramHover,
    label: "Telegram Group",
    url: "https://t.me/Firebird_en",
    username: "@Firebird_en"
  }
]

export type RouteTypes = {
  label: string
  uri: string
  target: HTMLAttributeAnchorTarget
}

export const headerRoutes: Array<RouteTypes> = [
  {
    label: "Home",
    target: "_blank",
    uri: firebirdLanding
  },
  {
    label: "Blog",
    target: "_self",
    uri: "/"
  },
  // {
  //   label: "Blog List",
  //   target: "_self",
  //   uri: "articles"
  // },
  {
    label: `Firebird's Writer`,
    target: "_self",
    uri: "/writer"
  }
]

type HeadDefaultTypes = {
  image: string
  title: string
  description: string
}

export const headDefault: HeadDefaultTypes = {
  description:
    "Where you can discover Firebird-related news, including updates, research, analytics, events, partnerships, technological knowledge, etc.",
  image: "https://d1j2c9jkfhu70p.cloudfront.net/Thumbnail_firebird_ebe64c4845.png",
  title: "The Firebird Blog"
}
