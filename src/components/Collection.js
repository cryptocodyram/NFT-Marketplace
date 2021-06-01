import React,{useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import StoreIcon from '@material-ui/icons/Store';

export const Collection = () => {
   const [open, setOpen] = React.useState(false);
   const [picture, setPicture] = useState(null);
   const [imgData, setImgData] = useState(null);
   const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
   }
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <row>
  
      <div className="col-lg-2 collection-sidenav">
        
      </div>
      <div className="col-lg-10 collection-right">
        <h4>My Collections</h4>
        <div className="collection-card">
        <div className="icon"> <StoreIcon className="store-icon"/>
         </div>
        <span className="span"> Create new collection </span>
        <button type="button" class="btn btn-primary create" onClick={handleClickOpen}>Create </button>
         <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Create Your Collection"}</DialogTitle>
        <DialogContentText id="alert-dialog-description">
          You can change these values later, along with configuring external URls,<br></br>
                payment options, and trading fees
          </DialogContentText>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="DialogContentText">
           <label className="black">Logo* </label>
           <br></br>
           <label id="logo" >(350 x 350 recommended) </label>
           <div clas="file_input_wrap">
              <input type="file" name="imageUpload" id="imageUpload" hidden accept="image/*" onChange={onChangePicture}  />
              <label for="imageUpload" className="img-icon"><ImageOutlinedIcon className="svg"/></label>
                <img width="100%"  src={imgData} />
              </div>
            <div>
              <label className="black" style={{marginTop:'20px'}}>Name*</label>
              <input type="text" placeholder="Example: Treasures of the Sea" className="input-text"/>
              <label className="black" style={{marginTop:'13px'}}>Description*</label>
              <textarea   placeholder="Provide a description for your store. Markdown syntax is supported" className="input-text textarea"/>
            </div>  
          </DialogContentText>
            <button type="button" class="btn btn-primary create last"  > Create </button>
        </DialogContent>
      </Dialog>
        </div>
        <div className="collection-card2">
        </div>
      </div>
    </row>
  )
}
