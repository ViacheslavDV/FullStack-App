import { useAuthorQuery } from "@/app/hooks/query/useAuthorQuery";
import styles from "./Author.module.scss";
import Image from "next/image";

const Author = () => {
  const { data, status, stateAuthorDataType, setStateAuthorDataType } =
    useAuthorQuery();
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.fields}>
          <p className={styles.order}>#</p>
          <p className={styles.avatar}></p>
          <p className={styles.author}>Author</p>
          <p className={styles.songs}>Songs</p>
          <p className={styles.rating}>Rating</p>
        </div>
        <div className={styles.container}>
          {data &&
            data.map((author) => (
              <div key={author.id} className={styles.data}>
                <p className={styles.order}>{author.id}</p>
                {author.image && (
                  <Image
                    className={styles.avatar}
                    src={author.image}
                    alt={author.name}
                    width={50}
                    height={50}
                  />
                )}
                <p className={styles.author}>{author.name}</p>
                <p className={styles.songs}>{author.songs?.length}</p>
                <p className={styles.rating}>{author.listeners}</p>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Author;
