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