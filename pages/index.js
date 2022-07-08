import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import styles from "../styles/Home.module.css";
import { PostCard } from "../components/PostCard";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div className={styles.container}>
      <Head>
        <title>Contentlayer Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contentlayer + <a href="#">Next.js!</a>
        </h1>

        <p className={styles.description}>
          All contents are stored in <code className={styles.code}>/posts</code>
        </p>

        <div className={styles.grid}>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Vercel</p>
      </footer>
    </div>
  );
}
