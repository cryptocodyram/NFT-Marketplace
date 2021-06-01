import React from 'react';
import OpenSea from '../assets/opensea-logo.webp';
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TokenPage } from './TokenPage';

export const Header = () => {
  const history = useHistory();
  return (
    <row>
    <div className="col-lg-12 main-header" >
      <div className="col-lg-4 title">
        <img src={OpenSea}  className="logo"></img>
         OpenSea 
      </div>
      <div className=" col-md-6 input-group rounded search">
          <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
      </div>
      <div className= "col-lg-4 nav-bar" >
        <button className="nav-item" onClick={()=>{history.push('/asset')}}> Marketplace </button>
        <button className="nav-item" onClick={()=>{history.push('/asset')}}> Stats </button>
        <button className="nav-item" > Resources </button>
        <button className="nav-item" onClick={()=>{history.push('/collection')}}> <AccountCircleIcon/> </button>
        <button className="nav-item" > <AccountBalanceWalletIcon/> </button>
       </div>
    </div>
    </row>
  )
}
