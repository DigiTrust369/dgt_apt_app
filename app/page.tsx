"use client";
import { Header, Footer, MappleAssetBox, VaultBox } from "@/components";
import { WalletKitProvider } from "@mysten/wallet-kit";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
const wallets = [new PetraWallet()];

export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col min-h-screen">
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <Header />
      <div className="mb-auto">
        <MappleAssetBox />
      </div>
      <div className="mb-auto">
        <VaultBox />
      </div>
      <Footer />
      </AptosWalletAdapterProvider>
    </main>
  );
}
