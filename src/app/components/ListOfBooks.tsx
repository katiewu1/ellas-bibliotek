import styles from "./css/ListOfBooks.module.css";

export default function ListOfBooks(props: any) {
  return (
    <div className={styles.grid}>
      {props.list.map((book) => (
        <a
        key={book.title}
        href={book.url}
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
        >
          <h3>
            {book.title}
          </h3>      
          <img 
            src={book.image}
            alt="Bild på bokomslag"
          />
        </a>
      ))}
  </div>
  )
}