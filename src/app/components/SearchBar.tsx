import { useState, ChangeEvent } from "react";
import styles from "./css/SearchBar.module.css";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Pass query to parent
  };

  return (
    <>
      <div className={styles.search}>
        <p>Klicka på sökikonen för att söka på boktitel eller författare</p>
        <div>
          <input
            type="text"
            placeholder="Sök . . ."
            value={query}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </>
  );
}
