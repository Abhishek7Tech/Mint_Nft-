import { HStack} from "@chakra-ui/react"
import { FC } from "react"
import styles from "../app/page.module.css"
import dynamic from "next/dynamic";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// import wallet dynamically //
const WalletMultiButtonDynamic = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  {ssr: false}
)

const NavBar: FC = () => {
  return (
    <HStack width="full" padding={4}>
      <WalletMultiButtonDynamic className={styles["wallet-adapter-button-trigger"]}/>
    </HStack>
  )
}

export default NavBar;