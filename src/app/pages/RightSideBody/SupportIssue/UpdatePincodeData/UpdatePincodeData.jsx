import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

function UpdatePincodeData() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        pincode: '',
        state: '',
        city: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your submit logic here
        console.log('Form data:', formData);
        handleClose();
    };

    return (
        <>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
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
            >
                Update Pincode Data
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Pincode Data</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        type="number"
                        required
                        inputProps={{ minLength: 6, maxLength: 6 }}
                        helperText={(formData.pincode.length < 6 || formData.pincode.length > 6) && "Pincode number should have 6 digits"}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        pattern="^[a-zA-Z\s]*$"
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        pattern="^[a-zA-Z\s.]*$"
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default UpdatePincodeData;
