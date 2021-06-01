import React from 'react';
import OpenSea from '../assets/opensea-logo.webp';
import { useHistory } from "react-router-dom";
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
export const Header = () => {
  const history = useHistory();
   const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
   const [wallet, setWallet] = React.useState(false);

  const handleClickOpen = () => {
    setWallet(true);
  };

  const handleClickClose = () => {
    setWallet(false);
     };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }
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
    <div>
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
        <button className="nav-item" > Stats </button>
        <button className="nav-item" > Resources </button>
        <div>
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
                <ClickAwayListener onMouseLeave={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}> My Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My Collection</MenuItem>
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
        
        <Button className="nav-item" variant="outlined" color="primary" onClick={handleClickOpen} > <AccountBalanceWalletIcon/> 
      <Dialog
        open={wallet}
        TransitionComponent={Transition}
        onClose={handleClickClose}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClickClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
     </Button>

       
       </div>
       
    </div>
    </row>
   

</div>
  )
}
