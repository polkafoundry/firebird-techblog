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

const LIMIT_RESULTS = 4
export const GET_TOP_LASTEST_ARTICLES = gql`
  query Articles($category: CategoryManyRelationFilter!) {
    articles(
      where: { is_display: { equals: 1 }, category: $category }
      orderBy: { created_at: desc }
      take: ${LIMIT_RESULTS}
    ) {
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
      content
      created_at
    }
  }
`
