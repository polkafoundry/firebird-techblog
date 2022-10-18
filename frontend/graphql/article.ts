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

export const SEARCH_ARTICLES = gql`
  query Articles($title: String!, $take: Int!) {
    articles(
      where: { is_display: { equals: 1 }, title: { contains: $title } }
      orderBy: { created_at: desc }
      take: $take
    ) {
      id
      title
    }
  }
`

export const GET_EXCLUSIVE_ARTICLES = gql`
  query Articles($take: Int!, $skip: Int) {
    exclusive: articles(
      where: { is_display: { equals: 1 }, is_exclusive: { equals: true } }
      orderBy: { created_at: desc }
      take: $take
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
    lastest: articles(
      where: { is_display: { equals: 1 } }
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
  }
`

export const GET_BANNER = gql`
  query {
    aMABanners {
      id
      banner
    }
  }
`
export const GET_RELATED_ARTICLES = gql`
  query Articles($category: CategoryManyRelationFilter, $id: ID, $take: Int!) {
    articles(
      where: {
        is_display: { equals: 1 }
        category: $category
        id: { not: { equals: $id } }
      }
      orderBy: { created_at: desc }
      take: $take
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

export const CREATE_POST = gql`
  mutation createArticle(
    $author_name: String!
    $author_image: String!
    $author_email: String!
    $title: String!
    $category: CategoryRelateToManyForCreateInput!
    $content: String!
  ) {
    createArticle(
      data: {
        author_name: $author_name
        author_image: $author_image
        author_email: $author_email
        title: $title
        category: $category
        content: $content
      }
    ) {
      id
    }
  }
`
