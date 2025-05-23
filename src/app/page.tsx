"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";
import ListOfBooks from "./components/ListOfBooks";
import AddBookModal from "./components/AddBookModal";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Home() {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://ellas-bibliotek-api.newmetadev.workers.dev/list")
      .then((res) => res.json())
      .then((data) => {
        setListOfBooks(data);
        setLoading(false);
      });
  }, []);

  const renderListOfBooks = () => {
    const query = searchQuery.toLowerCase().trim();

    const filteredBooks = query
      ? listOfBooks.filter((book: any) => {
          const titleMatch = book.title.toLowerCase().includes(query);
          const authorMatch = Array.isArray(book.authors)
            ? book.authors.some((author: string) =>
                author.toLowerCase().includes(query)
              )
            : false;

          return titleMatch || authorMatch;
        })
      : listOfBooks;

    return filteredBooks.length > 0 ? (
      <ListOfBooks list={filteredBooks} query={searchQuery} />
    ) : (
      <p className={styles.message}>Inga böcker hittades</p>
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.action}>
        <div className={styles.actionButtons}>
          <AddBookModal />
          <ThemeSwitcher />
        </div>
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
      <h1 className={styles.headerTitle}>
        Välkommen till Ella's bibliotek <br />
        <span>En samling av böcker som jag har hemma </span>
      </h1>
      <div className={styles.center}>
        <SearchBar onSearch={setSearchQuery} />
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
