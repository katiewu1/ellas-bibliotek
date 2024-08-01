import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import styles from "./css/AddBookModal.module.css";

export default function AddBookModal(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState("");
  const [bookData, setBookData] = useState({});

  function addBook(url: string) {
    if (url === "") return;
    else {
      fetch("https://ellas-bibliotek-api.newmetadev.workers.dev/add", {
        method: "POST",
        body: JSON.stringify({
          url: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (Object.keys(bookData).length !== 0) setBookData({});
          else setBookData(data);
        });
    }
  }

  return (
    <>
      <p>
        Lägg till bok&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;
        <Button onClick={onOpen} variant="flat" color="danger">
          Klicka här
        </Button>
      </p>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Lägg till bok
              </ModalHeader>
              <ModalBody>
                {Object.keys(bookData).length === 0 ? (
                  <Input
                    autoFocus
                    isClearable
                    isRequired
                    label="URL"
                    placeholder="https://www.adlibris.com/se/bok/xxxxxxxxx"
                    description="Kopiera in URL länken från Adlibris"
                    variant="bordered"
                    isInvalid={!value.includes("adlibris") && value != ""}
                    errorMessage="Lägg till en giltig URL länk från Adlibris"
                    value={value}
                    onValueChange={setValue}
                  />
                ) : (
                  <div>
                    <h1 className={styles.heading}>
                      Du har lagt till följande bok i Ella's bibliotek:
                    </h1>
                    <br />
                    <div className={styles.book}>
                      <h3>{bookData.title}</h3>
                      <img src={bookData.image} alt="Bild på bokomslag" />
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="flat" onPress={onClose}>
                  Stäng
                </Button>
                <Button
                  color="warning"
                  isDisabled={value === ""}
                  onPress={() => addBook(value)}
                >
                  {Object.keys(bookData).length === 0
                    ? "Lägg till"
                    : "Lägg till ny bok"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
