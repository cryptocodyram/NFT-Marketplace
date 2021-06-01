import React from 'react';
import Image1 from '../assets/token/crypoterior.png';
import Image2 from '../assets/token/crypto.gif';
import Art from '../assets/token/art-light.svg';
import Music from '../assets/token/music-light.svg';
import Domain from '../assets/token/domain-names-light.svg';
import Virtual from '../assets/token/virtual-worlds-light.svg';
import Trading from '../assets/token/trading-cards-light.svg';
import Utility from '../assets/token/utility-light.svg';
import Sports from '../assets/token/sports-light.svg';
import Collectibles from '../assets/token/collectibles-light.svg';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



export const TokenPage = () => {
   
  return (
    <div >
      <div className="Header_root">
      <button aria-selected="true" className="header-button" type="button">
       <div className="header-icon"><img className="header-image" src={Art}/>
          <span class="TabNavItem--name">Art</span>
       </div>
       </button>
        <button aria-selected="true" className="header-button" type="button">
       <div className="header-icon"><img className="header-image" src={Music}/>
          <span class="TabNavItem--name">Music</span>
       </div>
       </button>
        <button aria-selected="true" className="header-button TabNavItem--name" type="button">
       <div className="header-icon"><img className="header-image" src={Domain}/>
          <span class="TabNavItem--name">Domain Names</span>
       </div>
       </button>
        <button aria-selected="true" className="header-button TabNavItem--name" type="button">
       <div className="header-icon"><img className="header-image" src={Virtual}/>
          <span class="TabNavItem--name">Virtual Worlds</span>
       </div>
       </button>
        <button aria-selected="true" className="header-button TabNavItem--name" type="button">
       <div className="header-icon"><img className="header-image" src={Trading}/>
          <span class="TabNavItem--name">Trading Cards</span>
       </div>
       </button>
        <button aria-selected="true" className="header-button" type="button">
       <div className="header-icon"><img className="header-image" src={Collectibles}/>
          <span class="TabNavItem--name">Collectibles</span>
       </div>
       </button>
        <button aria-selected="true" className="header-button" type="button">
       <div className="header-icon"><img className="header-image" src={Sports}/>
          <span class="TabNavItem--name">Sports</span>
       </div>
       </button>
        <button aria-selected="true" className="header-button" type="button">
       <div className="header-icon"><img className="header-image" src={Utility}/>
          <span class="TabNavItem--name">Utility</span>
       </div>
       </button>
    </div>
    <div className="col-lg-8 Token_root ">
        <div className="card">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image1} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}} > <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>
       <div className="card">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src="https://lh3.googleusercontent.com/i38dNKQsaL3sUbl3jT5HCwNze9hEb0dvMgISNUIWAd1L5YRkZ-j84N9dTZW0AXkGy6Rh0X-a_LH-HWnt0yjbr2rIJ5lAF75HRZ_TKqI=s262" width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}}> <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>
       <div className="card">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image2} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}} > <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>
       <div className="card">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image1} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}}> <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>
      
    
    </div>

    <div className="col-lg-9 Token_root">
         <div className="card">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image1} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span > <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>

      <div className="card">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image2} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}}> <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>

      <div className="card">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image2} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}} > <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>

      <div className="card">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image2} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}}> <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>
    </div>
    </div>
  )
}
