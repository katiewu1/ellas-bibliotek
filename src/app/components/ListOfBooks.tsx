import styles from "./css/ListOfBooks.module.css";

type Book = {
  title: string;
  image: string;
  url: string;
  authors: [];
};

export default function ListOfBooks(props: any) {
  return (
    <div className={props.list.length > 0 ? styles.grid : ""}>
      {props.list.length > 0 ? (
        props.list.map((book: Book) => (
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
              {book.authors.map((author) => (
                <p key={author}>{author}</p>
              ))}
            </div>
          </a>
        ))
      ) : (
        <p className={styles.message}>
          Inga böcker hittades som börjar med bokstav{" "}
          {props.letter.toUpperCase()}
        </p>
      )}
    </div>
  );
}
