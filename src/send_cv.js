import React, { useState } from 'react';
import { Button, Input, Box, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Spinner, ChakraProvider, Flex, Stack } from '@chakra-ui/react';
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
    <Stack spacing={5}>
      <Input type="file" onChange={handleFileChange} />
      <Flex>
        <ChakraProvider theme={theme_blue}>
          {isEligible ? (<Button variant="customColor" onClick={handleUpload} style={{fontFamily:"Century Gothic"}}>
            {"Upload"}
          </Button>):
          (<Button color={"grey"} onClick={null} style={{fontFamily:"Century Gothic"}}>
            {"Not Available"}
          </Button>)}        
        </ChakraProvider>
      </Flex>
      <Flex>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalOverlay />
          <ModalContent spacing={5}>
            <ModalHeader>Uploading file</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {isLoading ? <Spinner /> : <MdCheckCircle />}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Stack>
  );
}

export default FileUpload;
