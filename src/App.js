import './App.css';
import Header from './components/Header'
import Staking from './components/staking';
import Footer from './components/Footer';
import React, { useMemo, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { clusterApiUrl } from '@solana/web3.js';

import { 
  ConnectionProvider, 
  WalletProvider,
  useWallet,
  useConnection,
} from "@solana/wallet-adapter-react/lib/index.js";

import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getLedgerWallet,
  getSolletWallet,
  getSolletExtensionWallet
} from '@solana/wallet-adapter-wallets';

import { 
  WalletModalProvider, 
  WalletMultiButton,
  WalletDisconnectButton
} from "@solana/wallet-adapter-react-ui";

function App() {
  const network = clusterApiUrl('devnet');
  const wallets = useMemo(() => [
    getPhantomWallet(),
    getSlopeWallet(),
    getSolflareWallet(),
    getLedgerWallet(),
    getSolletWallet({network}),
    getSolletExtensionWallet({network})
  ], [network]);

  return (
    <Router>
      <div className="App">
        <ConnectionProvider endpoint={network}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider title="Wallet Provider">
              <Header />
              <Routes>
                <Route path="/staking" element={<Staking />} />
              </Routes>
              <Footer />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </Router>
  );
}

export default App;
