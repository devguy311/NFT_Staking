import React, { useMemo, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './logo.png'
import Link from '@mui/material/Link';
import './index.css'
import '@solana/wallet-adapter-react-ui/styles.css'
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
import { clusterApiUrl } from '@solana/web3.js';

const pages = ['Dashboard', 'Staking'];

const Header = () => {
  const wallet = useWallet();
  const connection = useConnection();
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const network = clusterApiUrl('devnet');
  const wallets = useMemo(() => [
    getPhantomWallet(),
    getSlopeWallet(),
    getSolflareWallet(),
    getLedgerWallet(),
    getSolletWallet({network}),
    getSolletExtensionWallet({network})
  ], [network]);
  
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  return (
    <AppBar  className='title' position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          <Link href="/" to="/">
            <img src={logo} className='logo'/>
          </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link className='header-link' href={`/${page.toLocaleLowerCase()}`} style={{textDecoration: 'none'}}>
                <Button
                  className='header-button'
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <WalletMultiButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
