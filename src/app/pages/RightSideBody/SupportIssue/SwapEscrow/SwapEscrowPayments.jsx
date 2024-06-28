import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import 'src/Apsp.css';

export default function SwapEscrowPayments() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleFormSubmit= async (event)=>{
    event.preventDefault();
    const formData= new FormData(event.currentTarget)
    const formJson=Object.fromEntries(formData.entries());

    const applicationfromSwapEscrowPayments=formJson.ApplicationfromSwapEscrowPayments
    const applicationtoSwapEscrowPayments=formJson.ApplicationtoSwapEscrowPayments;
    
    const payload={
      from_request_id: applicationfromSwapEscrowPayments,
      to_request_id: applicationtoSwapEscrowPayments
    };
    try {
      const response = await ApplicationAPIDataService.postSwapEscrow(payload);
      if (response.data.success) {
        alert('swap escrow successful');
      } else {
        alert('swap escrow failed');
      }
    } catch (error) {
      alert('An error occurred during swap escrow');
    }
  
    handleClose();
  }

  return (
    <React.Fragment>
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
        Swap Escrow payments
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleFormSubmit,
          sx: { width: '600px' }
        }}
      >
        <DialogTitle>Swap Escrow Payments</DialogTitle>
        <DialogContent>
  <DialogContentText></DialogContentText>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
  
    <label htmlFor="fromApplications">From Application</label>
    <TextField id="fromapplications" name="ApplicationfromSwapEscrowPayments" placeholder='From Applications...'></TextField>
    <label htmlFor="toApplications">To Application</label>
    <TextField id="toapplications" name="ApplicationtoSwapEscrowPayments" placeholder='To Applications...'></TextField>
  
    
  
  </div>
  
</DialogContent>

        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
        
      </Dialog>
    </React.Fragment>
  );
}
