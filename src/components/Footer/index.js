import React from 'react'
import discordIcon from './discord.ad55798e.svg'
import twitterIcon from './twitter.1ded3b2f.svg'
import mediumIcon from './medium.3ecc09ba.svg'
import telegramIcon from './telegram.ea7221c5.svg'
import youtubeIcon from './youtube.8a5a468b.svg'
import instagramIcon from './instagram.289a8f2f.svg'
import './index.css'

const Footer = () => {
  return(
    <div className='footer'>
      <div className='footer-body'>
        <div>Copyright © 2022 GUARDS Project</div>
        {/* <div>
          <a href="https://discord.com/invite/aurory" target='_blank' title='discord' rel='noreferrer'>
            <img src={discordIcon} alt='discord'/>
          </a>
          <a href="https://twitter.com/AuroryProject" target='_blank' title='twitter' rel='noreferrer'>
            <img src={twitterIcon} alt='twitter' />
          </a>
          <a href="https://auroryproject.medium.com/" target='_blank' title='medium' rel='noreferrer'>
            <img src={mediumIcon} alt='medium' />
          </a>
          <a href="https://t.me/aurory_project" target='_blank' title='telegram' rel='noreferrer'>
            <img src={telegramIcon} alt='telegram' />
          </a>
          <a href="https://www.youtube.com/channel/UCcJNmpgOE3CpqQls8UH1mRw" target='_blank' title='youtube' rel='noreferrer'>
            <img src={youtubeIcon} alt='youtube' />
          </a>
          <a href="https://www.instagram.com/auroryproject" target='_blank' title='instagram' rel='noreferrer'>
            <img src={instagramIcon} alt='instagram' />
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Footer