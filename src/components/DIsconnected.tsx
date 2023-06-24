import { FC, MouseEventHandler, useCallback } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
// import { ArrowForwardIcon } from "@chakra-ui/icons"
import {useWalletModal} from "@solana/wallet-adapter-react-ui";
import {useWallet} from "@solana/wallet-adapter-react";

const Disconnected: FC = () => {

  const modalState = useWalletModal();
  const {wallet, connect} = useWallet();
  console.log("ModalState", modalState);
  console.log("Wallet", wallet);

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      if(event.defaultPrevented) {
        return;
      }
      console.log("Clicked");
      if(!wallet) {
      console.log("Clicked2");

        modalState.setVisible(true);
      }else {
      console.log("Clicked3");

        connect().catch((err) => {console.log("ERR", err)})
      }
    },[wallet, connect, modalState]
  )
  return (
    <Container>
      <VStack spacing={20}>
        <Heading
          color="white"
          as="h1"
          size="5xl"
          noOfLines={2}
          textAlign="center"
        >
          Mint your buildoor. Earn $BLD. Level up.
        </Heading>
        <Button
          bgColor="accent"
          color="white"
          maxW="380px"
          onClick={handleClick}
        >
          <HStack>
            <Text>become a buildoor</Text>
            {/* <ArrowForwardIcon /> */}
          </HStack>
        </Button>
      </VStack>
    </Container>
  )
}

export default Disconnected;