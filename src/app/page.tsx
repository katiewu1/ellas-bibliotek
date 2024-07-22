"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ListOfAlphabet from "./components/ListOfAlphabet";
import ListOfBooks from "./components/ListOfBooks";
import AddBookModal from "./components/AddBookModal";

export default function Home() {

  const [listOfBooks, setListOfBooks] = useState([])
  const [filterLetter, setFilterLetter] = useState("")
  
  useEffect(() => {
    fetch('https://ellas-bibliotek-api.newmetadev.workers.dev/list')
      .then((res) => res.json())
      .then((data) => {
        setListOfBooks(data)
      })
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.action}>
        <AddBookModal />
        <div>
          <a
            href="/"
          >
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

      <div className={styles.center}>
        <ListOfAlphabet onSelectLetter={setFilterLetter}/>
      </div>
      <ListOfBooks list={listOfBooks.filter((book) => book.title.toLowerCase().startsWith(filterLetter))} />
    </main>
  );
}
