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

export default function BulkDuplicationAndRejection() {
  const [open, setOpen] = React.useState(false);
  
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        Bulk Duplication & Rejection
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
            const applicationBulkDuplication = formJson.ApplicationBulkDuplication;
            const duplicateApplication = formJson.duplicateApplication === 'on';
            const rejectApplication = formJson.rejectApplication === 'on';
            console.log('ApplicationBulkDuplication:', applicationBulkDuplication);
            console.log('DuplicateApplication:', duplicateApplication);
            console.log('RejectApplication:', rejectApplication);
            handleClose();
          },
          sx: { width: '600px' }
        }}
      >

        <DialogTitle>Change Rejection Reason</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="applicationsBulkDuplication">Enter Applications</label>
            <TextField id="applicationsBulkDuplication" name="ApplicationBulkDuplication" placeholder='Enter Applications...'></TextField>
            <FormControlLabel
              control={<Checkbox id="duplicateApplication" name="duplicateApplication" />}
              label="Duplicate Application"
            />
            <FormControlLabel
              control={<Checkbox id="rejectApplication" name="rejectApplication" />}
              label="Reject Application"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
