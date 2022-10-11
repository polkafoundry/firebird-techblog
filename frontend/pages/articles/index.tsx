import React, { useEffect } from "react"
import { gql } from "@apollo/client"
import client from "../../helpers/apollo-client"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import ArticlesPage from "../../components/Pages/ArticlesPage"
import { useFetch } from "../../utils"

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        articles {
          id
          title
        }
      }
    `
  })
  return {
    props: {
      data: data.articles
    }
  }
}
const Articles = () => {
  // const { response } = useFetch(``)

  useEffect(() => {
    const getData = async () => {
      const res = await client.query({
        query: gql`
          query {
            articles {
              id
              title
            }
          }
        `
      })
      console.log(res)
    }
    getData()
  }, [])

  return (
    <DefaultLayout title="The Firebird Blog">
      <ArticlesPage />
    </DefaultLayout>
  )
}

export default Articles
