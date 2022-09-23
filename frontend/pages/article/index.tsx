import { gql } from "@apollo/client";
import client from "../../helpers/apollo-client";
import Link from "next/link";

type Article = {
    id: string
    title: string
}

export default function Articles({ data }: {data: Array<Article>}) {
  console.log(data);
  return (
    <div>
      <h1> List of all articles shown here.</h1>
      {data.map((item) => (
        <p key={item.id}>
          <Link href={`/article/${item.id}`}>
            <a> {item.id}. {item.title} </a>
          </Link>
        </p>
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        articles {
          id
          title
        }
      }
    `,
  });
  return {
    props: {
      data: data.articles,
    },
  };
}
