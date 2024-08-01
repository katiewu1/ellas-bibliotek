"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ListOfAlphabet from "./components/ListOfAlphabet";
import ListOfBooks from "./components/ListOfBooks";
import AddBookModal from "./components/AddBookModal";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Home() {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filterLetter, setFilterLetter] = useState("");

  useEffect(() => {
    fetch("https://ellas-bibliotek-api.newmetadev.workers.dev/list")
      .then((res) => res.json())
      .then((data) => {
        setListOfBooks(data);
        setLoading(false);
      });
  }, []);

  const renderListOfBooks = () => {
    if (listOfBooks.length > 0) {
      return (
        <ListOfBooks
          list={listOfBooks.filter((book: any) =>
            book.title.toLowerCase().startsWith(filterLetter)
          )}
          letter={filterLetter}
        />
      );
    } else {
      return <p className={styles.message}>Inga böcker hittades</p>;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.action}>
        <AddBookModal />
        <div>
          <a href="/">
            <Image
              src="/eb-logo.svg"
              alt="Ella's bibliotek Logo"
              className={styles.logo}
              width={200}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <br />
      <ThemeSwitcher />
      <div className={styles.center}>
        <ListOfAlphabet onSelectLetter={setFilterLetter} />
      </div>
      <div>
        {isLoading ? (
          <p className={styles.message}>Laddar...</p>
        ) : (
          renderListOfBooks()
        )}
      </div>
    </main>
  );
}
