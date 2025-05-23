import styles from "./css/ListOfBooks.module.css";

type Book = {
  title: string;
  image: string;
  url: string;
  authors: string[];
};

type Props = {
  list: Book[];
  query: string;
};

export default function ListOfBooks({ list, query }: Props) {
  return (
    <div className={list.length > 0 ? styles.grid : ""}>
      {list.length > 0 ? (
        list.map((book) => (
          <a
            key={book.title}
            href={book.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{book.title}</h2>
            <img src={book.image} alt="Bild på bokomslag" />
            <div className={styles.authors}>
              {Array.isArray(book.authors) && book.authors.length > 0 ? (
                book.authors.map((author) => <p key={author}>{author}</p>)
              ) : (
                <p>Okänd författare</p>
              )}
            </div>
          </a>
        ))
      ) : (
        <p className={styles.message}>
          Inga böcker hittades
          {query ? ` som matchar "${query}"` : ""}
        </p>
      )}
    </div>
  );
}
