import { Providers } from './providers'


export const metadata = {
  title: 'Nft Minter',
  description: 'Mint nft',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Providers>
         {children}
      </Providers>
      </body>
    </html>
  )
}
