import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';

export default function BulkRejection() {
  const [open, setOpen] = useState(false);
  const [rejectionReasons, setRejectionReasons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRejectionReasons = async () => {
      try {
        const response = await ApplicationAPIDataService.getRejectionReasons();
        if (response ) {
          setRejectionReasons(response.data.data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        console.error('Error fetching rejection reasons:', err);
        setError(err);
      }
    };

    fetchRejectionReasons();
  }, []);

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
    const ApplicationBulkRejection = formJson.ApplicationBulkRejection.split(',').map(id => id.trim());
    const commentsBulkRjection = formJson.CommentsBulkRjection;
    const rejectionReason = formJson.RejectionReason;
  
    const payload = {
      requestIds: ApplicationBulkRejection,
      reason: rejectionReason,
      note: commentsBulkRjection
    };
  

    try {
      const response = await ApplicationAPIDataService.postBulkRejection(payload);
      if (response.data.success) {
        alert('Bulk rejection successful');
      } else {
        alert('Bulk rejection failed');
      }
    } catch (error) {
      alert('An error occurred during bulk rejection');
    }
  
    handleClose();
  };
  return (
    <React.Fragment>
      <Button
        variant="outlined"
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
          },
        }}
        className="Support-issue-main-cards"
        onClick={handleClickOpen}
      >
        Bulk Rejection
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
        <DialogTitle>Change Rejection Reason</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="applications">Enter Applications</label>
            <TextField id="applications" name="ApplicationBulkRejection" placeholder="Enter Applications..." />
            <label htmlFor="RejectionReason">Rejection Reason*</label>
            {rejectionReasons.length > 0 && (
              <select id="RejectionReason" name="RejectionReason" required>
                <option value="">Select Rejection Reason</option>
                {rejectionReasons.map((reason) => (
                  <option key={reason.code} value={reason.code}>
                    {reason.description}
                  </option>
                ))}
              </select>
            )}
            <label htmlFor="comments">Additional Comments</label>
            <TextField id="comments" name="CommentsBulkRjection" placeholder="Add your Comments" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
