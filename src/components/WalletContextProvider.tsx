'use client'
import { PhantomWalletAdapter, BackpackWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { FC, ReactNode, useMemo } from "react";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";

const WalletContextProvider: FC<{children:ReactNode}> = ({children}) => {
  
  const url = useMemo(() => clusterApiUrl("devnet"), []);
  const phantom = new PhantomWalletAdapter();
  const backpack = new BackpackWalletAdapter();

  return (
      <ConnectionProvider endpoint={url}>
        <WalletProvider wallets={[phantom ,backpack]} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  )

}

export default WalletContextProvider;