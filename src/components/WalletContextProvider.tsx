'use client'
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";
import { FC, ReactNode, useMemo } from "react";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

const WalletContextProvider: FC<{children:ReactNode}> = ({children}) => {
  
  const network = WalletAdapterNetwork.Devnet;
  const url = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [
    new BackpackWalletAdapter(),
    new PhantomWalletAdapter()
  ], [network])

  return (
      <ConnectionProvider endpoint={url}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  )

}

export default WalletContextProvider;