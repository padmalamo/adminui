import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';

function LmsSyncEscrowCases() {
    const [open,setOpen]=React.useState(false);

    function handleClickOpen(){
        setOpen(true);
    }
    function handleClose(){
        setOpen(false);
    }
    const handleFormSubmit = async (event) => {
      event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const StartDate = formJson.StartDatelmsSync;
            const EndDate = formJson.EndDatelmsSync;
            
            // console.log('StartDatelmsSync:', StartDatelmsSync);
            // console.log('Anchor:', anchor);
            // console.log('EndDatelmsSync: ', EndDatelmsSync)
      const payload = {
        start_date: StartDate,
				end_date: EndDate
      };
  
      // console.log('Payload:', payload);  // Debug statement
    
      try {
        const response = await ApplicationAPIDataService.postEscrowLmsCases(payload);
        console.log('Response:', response);  // Debug statement
        if (response.data.success) {
          alert('post Escrow Lms Cases successful');
        } else {
          alert(`post Escrow Lms Cases failed: ${response.data.message}`);
        }
      } catch (error) {
        console.error('Error during postEscrowLmsCases:', error);  // Debug statement
        alert('An error occurred during postEscrowLmsCases');
      }
    
      handleClose();
    };


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
        LMS SYNC ESCROW CASES
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
        <DialogTitle>LMS Sync Case</DialogTitle>
        

            
        <DialogContent>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>Start Date:</label>
                <DatePicker name="StartDatelmsSync" />
                <label>End Date:</label>
                <DatePicker name="EndDatelmsSync"/>
        </div>
            </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>

    </> );
}

export default LmsSyncEscrowCases;