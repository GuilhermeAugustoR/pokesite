import {
  Modal as CkModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface IModal {
  onOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal = ({ onOpen, onClose, children }: IModal) => {
  return (
    <>
      <CkModal isOpen={onOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent h="500px" bg="teal.500">
          {/* <ModalHeader>{title}</ModalHeader> */}
          <ModalBody>{children}</ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </CkModal>
    </>
  );
};

export default Modal;
