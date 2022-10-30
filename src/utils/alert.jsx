import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import MoreSkills from '../images/skilli.mp4'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(0),
  },
}));



export default function CustomizedDialogs({props}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button style={{backgroundColor:"teal", padding:"10px", border:"0",color:"white"}} variant="outlined" onClick={handleClickOpen}>
    View More
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
      
        <DialogContent style={{backgroundColor:"teal"}}>
        <video width="300" height="300" loop autoPlay>
      <source src={MoreSkills} type="video/mp4"/>
     </video>  </DialogContent>
        <DialogActions style={{backgroundColor:"teal"}}>
          <Button color='inherit' onClick={handleClose} >
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
