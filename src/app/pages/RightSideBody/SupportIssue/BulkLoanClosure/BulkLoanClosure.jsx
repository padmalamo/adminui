import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';

export default function BulkLoanClosure() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const applicationBulkLoanClosure = formJson.ApplicationsBulkLoanClosure.split(',').map(id => id.trim());
    const forceCloseBulkLoanClosure = formJson.ForceCloseBulkLoanClosure === 'on';
  
    const payload = {
      requestIds: applicationBulkLoanClosure,
      force_close: forceCloseBulkLoanClosure
    };

    // console.log('Payload:', payload);  // Debug statement
  
    try {
      const response = await ApplicationAPIDataService.postBulkLoanClosure(payload);
      console.log('Response:', response);  // Debug statement
      if (response.data.success) {
        alert('Bulk loan closure successful');
      } else {
        alert(`Bulk loan closure failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during bulk loan closure:', error);  // Debug statement
      alert('An error occurred during bulk loan closure');
    }
  
    handleClose();
  };
  
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
        Bulk Loan Closure
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleFormSubmit,
          sx: { width: '600px' },
        }}
      >

        <DialogTitle>Bulk Loan Closure</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="applicationsBulkLoanClosure">Enter Applications</label>
            <TextField id="applicationsBulkLoanClosure" name="ApplicationsBulkLoanClosure" placeholder='Enter Applications...'></TextField>
            <FormControlLabel
              control={<Checkbox id="ForceClose" name="ForceCloseBulkLoanClosure" />}
              label="Force Close"
            />

            <p>Email with success/failure report will be sent.</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
