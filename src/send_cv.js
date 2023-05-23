import React, { useState } from 'react';
import { Button, Input, Box, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Spinner, ChakraProvider } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import theme_blue from './color/theme_blue';

function FileUpload({isEligible}) {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    setIsOpen(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "File uploaded.",
        description: "Your file has been successfully uploaded.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 1000);
  };

  return (
    <Box>
      <Input type="file" onChange={handleFileChange} />
      <ChakraProvider theme={theme_blue}>
        {isEligible ? (<Button variant="customColor" onClick={handleUpload} style={{fontFamily:"Century Gothic"}}>
          {"Upload"}
        </Button>):
        (<Button color={"gray.200"} onClick={null} style={{fontFamily:"Century Gothic"}}>
          {"Upload"}
        </Button>)}        
      </ChakraProvider>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Uploading file</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? <Spinner /> : <MdCheckCircle />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default FileUpload;
