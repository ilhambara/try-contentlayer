import Link from "next/link";
import { format, parseISO } from "date-fns";
import styles from "../styles/Home.module.css";

export const PostCard = (post) => {
  return (
    <Link href={post.url}>
      <a className={styles.card}>
        <h2>{post.title} &rarr;</h2>
        <p>{format(parseISO(post.date), "LLLL d, yyyy")}</p>
      </a>
    </Link>
  );
};
