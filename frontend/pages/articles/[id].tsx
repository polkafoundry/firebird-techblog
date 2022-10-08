import { gql } from "@apollo/client"
import Image from "next/image"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import DetailsArticlePage from "../../components/Pages/DetailsArticlePage"
import client from "../../helpers/apollo-client"

export default function ArticleDetail({ data }: { data: any }) {
  return (
    <DefaultLayout>
      <DetailsArticlePage articleDetail={data} />
    </DefaultLayout>
  )
}
// get list of all articles:
export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        articles {
          id
        }
      }
    `
  })

  const paths = data.articles.map((item: { id: string }) => ({
    params: {
      id: item.id
    }
  }))

  return { paths, fallback: false }
}

//fetch just one company... you're doing it right
export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params
  const { data } = await client.query({
    query: gql`
      query Article($id: ID!) {
        article(where: { id: $id }) {
          id
          is_display
          title
          author_name
          author_image
          author_email
          hashtags
          content
          references
        }
      }
    `,
    variables: { id }
  })
  return {
    props: {
      data: data.article
    }
  }
}
