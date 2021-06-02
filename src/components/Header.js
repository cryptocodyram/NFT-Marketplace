import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import OpenSea from '../assets/opensea-logo.webp';
import SearchIcon from "@material-ui/icons/Search";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TokenPage } from './TokenPage';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Modal } from 'react-bootstrap';
import Web3 from 'web3';


export const Header = () => {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const [ account, setAccount ] = React.useState();
  const [ balance, setBalance ] = React.useState();

  useEffect(()=>{
    loadBlockchainData()
  })

  const loadBlockchainData = async () => {
    const web3 = new Web3(window.web3.currentProvider);
    // Load account
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    const bal = await web3.eth.getBalance(accounts[0])
    const getbalance = web3.utils.fromWei(new web3.utils.BN(bal),'ETHER')
    console.log(getbalance)
    setBalance(getbalance)
  }

  const HandleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleClick() {
    window.location.href = "/asset"
   }
   function handleCollection(){
     window.location.href="/collection"
   }
   
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  
  return (
    <div >
    <row>
    <div className="col-lg-12 main-header" >
      <div className="col-lg-4 title">
         WNFT 
      </div>
      <div className=" col-md-6 input-group rounded search">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
        aria-describedby="search-addon" />
      </div>
      <div className= "col-lg-4 nav-bar" >
        <button className="nav-item" onClick={handleClick}> Marketplace </button>
        <div style={{zIndex: "1"}}>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onMouseEnter = {handleToggle}
        >
          <AccountCircleIcon/>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
          <Paper>
            <ClickAwayListener onHide={handleClose}>
              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                <MenuItem onClick={handleClose}> My Profile</MenuItem>
                <MenuItem onClick={handleCollection}>My Collection</MenuItem>
                <MenuItem onClick={handleClose}>My Favorites</MenuItem>
                <MenuItem onClick={handleClose}>My Account Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
          )}
        </Popper>
      </div>
         <Button variant="primary" className="nav-item" onClick={handleShow}>
          <AccountBalanceWalletIcon/>
      </Button>
      <Modal show={show} onHide={HandleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title><div><AccountCircleIcon className="wallet-icon"/> {account}</div></Modal.Title>
        </Modal.Header>
        <Modal.Body >
         <div className="wallet">
         <span className="total"> Total balance </span> 
         <br/>
         <span className="balance" style={{whiteSpace :"nowrap"}}>  <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="3%"></img> {balance} ETH</span> 
         </div>
         <button className="btn-btn-primary add-funds"> Add Funds </button> 
        </Modal.Body>
      </Modal>
       </div>
       
    </div>
    </row>
   

</div>
  )
}
