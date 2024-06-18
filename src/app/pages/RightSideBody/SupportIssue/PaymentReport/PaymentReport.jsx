import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function PaymentReport() {
    const [open,setOpen]=React.useState(false);

    function handleClickOpen(){
        setOpen(true);
    }
    function handleClose(){
        setOpen(false);
    }
    return ( <>
            <Button variant="outlined" 
      sx={{
        backgroundColor: 'rgb(62, 62, 190)',
        color: 'white',
        border: 'none',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        margin: '5px',
        fontSize: '16px',
        height: '200px',
        width: '200px',
        '&:hover': {
          backgroundColor: 'rgb(42, 42, 170)',
        }
      }}
      className='Support-issue-main-cards' 
      onClick={handleClickOpen}>
       PAYMENT REPORT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const StartDatelmsSync = formJson.StartDatelmsSync;
            const EndDatelmsSync = formJson.EndDatelmsSync;
            
            console.log('StartDatelmsSync:', StartDatelmsSync);
            // console.log('Anchor:', anchor);
            console.log('EndDatelmsSync: ', EndDatelmsSync)
            
            handleClose();
          },
          sx: { width: '600px' }
        }}
      >
        <DialogTitle>PAYMENT REPORT</DialogTitle>
        

            
        {/* */}
      </Dialog>

    </> );
}

export default PaymentReport;