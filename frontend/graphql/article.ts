import { gql } from "@apollo/client"

export const GET_ARTICLES = gql`
  query ($where: ArticleWhereInput!) {
    articles(where: $where) {
      id
      title
      author_name
      author_image
      thumbnail {
        url
      }
      category {
        id
        name
      }
    }
  }
`
