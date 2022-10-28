import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton
} from "react-share"
import { HTMLAttributeAnchorTarget } from "react"

import iconAnnouncement from "/public/images/socials/announcement.svg"
import iconGithub from "/public/images/socials/github.svg"
import iconMedium from "/public/images/socials/medium.svg"
import iconReddit from "/public/images/socials/reddit.svg"
import iconTelegram from "/public/images/socials/telegram.svg"
import iconTwitter from "/public/images/socials/twitter.svg"

import iconAnnouncementHover from "/public/images/socials/announcement.svg"
import iconGithubHover from "/public/images/socials/github.svg"
import iconMediumHover from "/public/images/socials/medium.svg"
import iconRedditHover from "/public/images/socials/reddit.svg"
import iconTelegramHover from "/public/images/socials/telegram.svg"
import iconTwitterHover from "/public/images/socials/twitter.svg"

import defaultAvatar from "/public/images/default-avatar.svg"

import iconFb from "/public/images/icon-fb.png"
import iconLink from "/public/images/icon-link.png"
import iconTeleBlack from "/public/images/icon-telegram.png"
import iconTwitterBlack from "/public/images/icon-twitter.png"

const firebirdLanding =
  process.env.NEXT_PUBLIC_FIREBIRD_LANDING_PAGE ||
  "https://firebird-landingpage.netlify.app/"
const defaultAuthor = "Firebird Writer"
export { defaultAvatar, defaultAuthor }

export const CONTENT_TYPES = {
  ALL: "",
  ECOSYSTEM: "3",
  TECHNOLOGY: "4",
  COMMUNITY: "2",
  ANALYTICS: "1",
  READER_CONTRIBUTION: "5"
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
  DETAILS_ARTICLE: "/articles"
}

export type SocialItemTypes = {
  img: string
  imgHover: string
  label: string
  username: string
  url: string
  disabled: boolean
}
export const socialsData: Array<SocialItemTypes> = [
  {
    img: iconTwitter,
    imgHover: iconTwitterHover,
    label: "Official Twitter",
    url: "https://twitter.com/Firebirdchain",
    username: "@Firebirdchain",
    disabled: false
  },
  {
    img: iconGithub,
    imgHover: iconGithubHover,
    label: "Github",
    url: "https://github.com/firebird",
    username: "@Firebird",
    disabled: true
  },
  {
    img: iconMedium,
    imgHover: iconMediumHover,
    label: "Medium",
    url: "https://medium.com/firebird",
    username: "@Firebirdchain",
    disabled: false
  },
  {
    img: iconReddit,
    imgHover: iconRedditHover,
    label: "Reddit",
    url: "https://www.reddit.com/r/firebird/",
    username: "r/firebird",
    disabled: true
  },
  {
    img: iconAnnouncement,
    imgHover: iconAnnouncementHover,
    label: "Annoucement Channel",
    url: "https://t.me/FirebirdANN",
    username: "@FirebirdANN",
    disabled: false
  },
  {
    img: iconTelegram,
    imgHover: iconTelegramHover,
    label: "Telegram Group",
    url: "https://t.me/Firebird_en",
    username: "@Firebird_en",
    disabled: false
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
  keywords: string
}

export const headDefault: HeadDefaultTypes = {
  description:
    "Discover our latest news, including updates, research, analytics, events, partnerships, technological knowledge, and etc.",
  image: "https://d1j2c9jkfhu70p.cloudfront.net/Thumbnail_2_7bc61c9253.png",
  title: "The Firebird Blog",
  keywords: ""
}

export enum ModalPostTypes {
  EDIT_POST,
  VIEW_THUMBNAIL,
  VIEW_DETAIL
}

export const socialShare = [
  { icon: iconTeleBlack, link: "", component: TelegramShareButton },
  { icon: iconTwitterBlack, link: "", component: TwitterShareButton },
  { icon: iconFb, link: "", component: FacebookShareButton },
  { icon: iconLink, link: "" }
]

export const LETTER_ONLY_PATTERN = /^[a-zA-Z\s]*$/
export const EMAIL_PATTERN =
  /^[_A-Za-z0-9]+(\.[_A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,150})$/
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
