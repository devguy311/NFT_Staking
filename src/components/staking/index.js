import React, {useMemo, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import icon from './download.png'
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

const Staking  = () => {
  
  const [rightCardClass, setRightCardClass] = useState('card2-body-subcard-header-right')
  const [leftCardClass, setLeftCardClass] = useState('card2-body-subcard-header-left background')
  const [lockleftClass, setLockLeftClass] = useState('card2-body-subcard-header-left-locked background')
  const [lockrightClass, setLockRightClass] = useState('card2-body-subcard-header-left-locked')
  const [guards, setGuards] = useState('GUARDS')

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

  const unstake = () => {
    setRightCardClass('card2-body-subcard-header-right background')
    setLeftCardClass('card2-body-subcard-header-left')
    setGuards('xGUARDS')
  }
  const stake = () => {
    setLeftCardClass('card2-body-subcard-header-left background')
    setRightCardClass('card2-body-subcard-header-right')
    setGuards('GUARDS')
  }

  const lockstake = () => {
    setLockRightClass('card2-body-subcard-header-left-locked')
    setLockLeftClass('card2-body-subcard-header-left-locked background')
  }

  const lockunstake = () => {
    setLockRightClass('card2-body-subcard-header-right-locked background')
    setLockLeftClass('card2-body-subcard-header-right-locked')
  }

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
    <Grid className='main'>
      <div className='top-space'></div>
      <div className='main-body'>
        <div className='flexible-pool'>
          <div className='card-header'>
            <div className='label'>Stake NFTs</div>
            <Tooltip className='tooltip' title={
              <div>
                <Typography color="inherit" className='tooltip-title'>Stake NFTs</Typography>
                <div className='tooltip-content'>
                  You can unlock your tokens whenever you want.
                </div>
              </div>
          } arrow placement='left-start'>
              <div className='icon'>
                <img src={icon} className='que' />
              </div>
            </Tooltip>
            <div></div>
          </div>
          <div className='card-body'>
            <div className='comment hidden'>
              <div className='com-lab'>
              GUARDSs won’t be redeemable before 26/5/2022
              </div>
            </div>
            <div className='card1'>
              <div className='card1-header'>
                pool info
              </div>
              <div className='card1-body'>
                <div className='card1-body-left'>
                  <div className='card1-body-letter'>Total GUARDS Staked</div>
                  <div className='card1-body-value'>2,358,640</div>
                </div>
                <div className='card1-body-right'>
                  <div className='card1-body-letter'>Est APR</div>
                  <div className='card1-body-value'>37%</div>
                </div>
              </div>
            </div>
            <div className='card1'>
              <div className='card1-header'>
                my rewards
              </div>
              <div className='card1-body'>
                <div className='card1-body-left'>
                  <div className='card1-body-letter'>Current GUARDS Amount</div>
                  <div className='card1-body-value'>0.0000</div>
                  <div className='hidden'>
                    <div className='card1-body-value'>
                      <span>0.0000</span>
                      $nbsp;+&nbsp;
                      <span>
                      0.0000
                      GUARDS gained
                      </span>
                    </div>
                  </div>
                </div>
                <div className='card1-body-right'>
                  <div className='card1-body-letter'>Est GUARDS per day</div>
                  <div className='card1-body-value'>0.000000000</div>
                </div>
              </div>
            </div>
            <div className='card2'>
              <div className='card2-header'>
                my balance
              </div>
              <div className="card2-body">
                <div className='card2-body-amount'>
                  <div className='card2-body-amount-value'>
                    <div className='card2-body-amount-value-let'>
                    GUARDS
                    </div>
                    <div className='card2-body-amount-value-num'>
                      0.0000
                    </div>
                  </div>
                  <div className='card2-body-amount-value'>
                    <div className='card2-body-amount-value-let'>
                      xGUARDS
                    </div>
                    <div className='card2-body-amount-value-num'>
                      0.0000
                    </div>
                  </div>
                </div>
                <div className='card2-body-subcard'>
                  <div className='card2-body-subcard-header'>
                    <div className={leftCardClass} onClick={() => stake()}>STAKE</div>
                    <div className={rightCardClass} onClick={() => unstake()}>
                      UNSTAKE
                      <div className='hidden'>
                        <div className='locked'>
                          locked until 1/1/1970
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card2-body-subcard-body'>
                    <div className='flex justify-content max-amount items-center'>
                      <div className='flex flex-grow input-field items-center'>
                        <input className='inp-color' min='0' step='0.1' type='number' disabled placeholder='0.00' value='0' />
                        <div className='inp-label'>{guards}</div>
                      </div>
                      <button className='max-btn ml-2'>MAX</button>
                    </div>
                    <div className='sticky'>
                      <div>
                        <WalletMultiButton />    
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='locked-pool'>
          <div className='card-header'>
            <div className='label'>Stake Tokens</div>
            <Tooltip className='tooltip' title={
              <div>
                <Typography color="inherit" className='tooltip-title'>Stake Tokens</Typography>
                <div className='tooltip-content'>
                  You'll not be able to unlock your tokens before 26/5/2022. The APR is higher.
                </div>
              </div>
          } arrow placement='bottom'>
            <div className='icon'>
              <img src={icon} className='que' />
            </div>
            </Tooltip>
          </div>
          <div className='card-body'>
            <div className='comment'>
              <div className='com-lab'>
              GUARDS won’t be redeemable before 26/5/2022
              </div>
            </div>
            <div className='card1'>
              <div className='card1-header'>
                pool info
              </div>
              <div className='card1-body'>
                <div className='card1-body-left'>
                  <div className='card1-body-letter'>Total GUARDS Staked</div>
                  <div className='card1-body-value'>2,229,330</div>
                </div>
                <div className='card1-body-right'>
                  <div className='card1-body-letter'>Est APR</div>
                  <div className='card1-body-value'>75%</div>
                </div>
              </div>
            </div>
            <div className='card1'>
              <div className='card1-header'>
                my rewards
              </div>
              <div className='card1-body'>
                <div className='card1-body-left'>
                  <div className='card1-body-letter'>Current GUARDS Amount</div>
                  <div className='card1-body-value'>0.0000</div>
                  <div>
                    <div className='card1-body-value'>
                      <span>0.0000</span>
                      +
                      <span className='amount-col'>
                      0.0000
                      GUARDS gained
                      </span>
                    </div>
                  </div>
                </div>
                <div className='card1-body-right'>
                  <div className='card1-body-letter'>Est GUARDS per day</div>
                  <div className='card1-body-value'>0.000000000</div>
                </div>
              </div>
            </div>
            <div className='card2'>
              <div className='card2-header'>
                my balance
              </div>
              <div className="card2-body">
                <div className='card2-body-amount-sep'>
                  <div className='card2-body-amount-value'>
                    <div className='card2-body-amount-value-let'>
                      GUARDS
                    </div>
                    <div className='card2-body-amount-value-num'>
                      0.0000
                    </div>
                  </div>
                </div>
                <div className='card2-body-subcard'>
                  <div className='card2-body-subcard-header'>
                    <div className={lockleftClass} onClick={() => lockstake()}>STAKE</div>
                    <div className={lockrightClass} onClick={() => lockunstake()}>
                      UNSTAKE
                      <div>
                        <div className='locked'>
                          locked until 26/5/2022
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card2-body-subcard-body'>
                    <div className='flex justify-content max-amount items-center'>
                      <div className='flex flex-grow input-field items-center'>
                        <input className='inp-color' min='0' step='0.1' type='number' disabled placeholder='0.00' value='0' />
                        <div className='inp-label'>GUARDS</div>
                      </div>
                      <button className='max-btn ml-2'>MAX</button>
                    </div>
                    <div className='sticky'>
                      {/* <button className='sticky-conect'>Connect Wallet</button> */}
                      <div>
                        <WalletMultiButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default Staking