import {
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  useDisclosure
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function AddBookModal(props: any) {

  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  return (
    <>
      <p>
      Lägg till bok&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;
      <Button onPress={onOpen} variant="flat" color="danger">
        Klicka här
      </Button>
      </p>
      <Modal 
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="auto"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Lägg till bok</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Kopiera URL länken från Adlibris"
                  placeholder="https://www.adlibris.com/se/bok/xxxxxxxxx"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="flat" onPress={onClose}>
                  Stäng
                </Button>
                <Button color="success" onPress={onClose}>
                  Lägg till
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  </>
  )
}