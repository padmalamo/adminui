import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import 'src/Apsp.css';
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';


export default function UploadMarchantData() {
  const [open, setOpen] = useState(false);
  const [anchors, setAnchors]=useState([]);
  const [error, setError] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchAnchors = async () => {
      try {
        const response = await ApplicationAPIDataService.getAnchors();
        if (response ) {
          setAnchors(response.data.data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        console.error('Error fetching anchors:', err);
        setError(err);
      }
    };

    fetchAnchors();
  }, []);

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
        Upload marchant data
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
            const email = formJson.email;
            const anchor = formJson.anchor;
            console.log('Email:', email);
            console.log('Anchor:', anchor);
            handleClose();
          },
          sx: { width: '600px' }
        }}
      >
        <DialogTitle>Marchant Data Upload (&lt; 10000 rows)</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Headers to be used in csv file
          &lt; merchant_id &gt; <br/>
          &lt; anchor_data &gt; <br/>
          &lt; pan_id &gt; <br/>
          &lt; phone &gt; <br/>
          &lt; gstin_id &gt; <br/>
          &lt; pre_approved_amount &gt;<br/>
          &lt; pan_name &gt;<br/>
          &lt; last_3_months_transactions_count &gt;<br/>
          &lt; last_6_months_transactions_count &gt;<br/>
          &lt; anchor_vintage &gt;<br/>
          </DialogContentText>
          <label htmlFor="anchor">Anchors*</label><br/>
          {/* <select id="anchor" name="anchor" required>
            <option value="">Select Anchors</option>
            <option value="anchor1">Anchor 1</option>
            <option value="anchor2">Anchor 2</option>
            <option value="anchor3">Anchor 3</option>
            
          </select> */}
          {anchors.length > 0 && (
              <select id="anchor" name="anchor" required>
                <option value="">Select Anchor</option>
                {anchors.map((anchor) => (
                  <option key={anchor.id} value={anchor.id}>
                    {anchor.name}
                  </option>
                ))}
              </select>
            )}
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
