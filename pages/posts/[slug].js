import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import styles from "../../styles/Home.module.css";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

export default function PostLayout({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <main className={styles.main}>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>

        <article
          className={styles.grid}
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </main>
    </>
  );
}
