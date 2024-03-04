"use client"

import { Header, Footer, SuiWallet, DigiTrustWallet } from '@/components'
import { WalletKitProvider } from "@mysten/wallet-kit";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
const wallets = [new PetraWallet()];

export default function Page({ params }: { params: { slug: string } }) {

  return (
   < AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
    <main className="overflow-hidden">
      <Header />
        <DigiTrustWallet wallet={params.slug} />
      <Footer />
    </main>
    </AptosWalletAdapterProvider>

  );
}
