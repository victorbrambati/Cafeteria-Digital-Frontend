import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    UseDisclosureProps,
  } from '@chakra-ui/react'
import Router from 'next/router';
import React from 'react'

type ConfirmPurchase = {
        isOpen: boolean;
        isAuthenticated: boolean;
        onClose: () => void;
}


export default function ConfirmPurchase({isOpen, isAuthenticated, onClose}: ConfirmPurchase) {
    const cancelRef = React.useRef<any>()

    function confirmButton() {
      if(isAuthenticated){
        onClose()

      } else{
        Router.push("/login");
      }
    }
  
    return (
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef= {cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent backgroundColor="gray.100">
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                {isAuthenticated ? "Pedido Confirmado!" : "Você precisa estar autenticado para fazer uma compra!"}
              </AlertDialogHeader>
              <AlertDialogBody>
              {isAuthenticated ? "Sua compra logo será entregue!" : "Você será redirecionado para fazer login!"}
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={confirmButton} colorScheme="green">
                  Ok
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}