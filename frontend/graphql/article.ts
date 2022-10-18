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

export const GET_TOP_LASTEST_ARTICLES = gql`
  query Articles(
    $category: CategoryManyRelationFilter
    $take: Int!
    $skip: Int
    $created_at: DateTimeNullableFilter
  ) {
    articles(
      where: {
        is_display: { equals: 1 }
        category: $category
        created_at: $created_at
      }
      orderBy: { created_at: desc }
      take: $take
      skip: $skip
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
    count: articlesCount(
      where: {
        is_display: { equals: 1 }
        category: $category
        created_at: $created_at
      }
    )
  }
`
