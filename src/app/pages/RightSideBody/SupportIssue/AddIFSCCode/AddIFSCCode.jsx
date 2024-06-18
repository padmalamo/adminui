import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AddIFSCCode() {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        bank_name: '',
        ifsc_code: '',
        micr_code: '',
        bank_branch: '',
        bank_address: '',
        bank_contact: '',
        bank_city: '',
        bank_district: '',
        bank_state: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Implement your submit logic here
        handleClose();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
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
                    }
                }}
                className='Support-issue-main-cards'
                onClick={handleClickOpen}
            >
                ADD IFSC CODE
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit,
                    sx: { width: '80vw', maxHeight: '100vh', padding: '10px' }
                }}
            >
                <DialogTitle>ADD STAMP PAPER</DialogTitle>
                <DialogContent>
                    <div className="report-container" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginTop: '10px', height: '1px' }}></div>
                        <div style={{ display: 'flex', marginBottom: '10px' }}>
                            <div style={{ flex: '1', marginRight: '10px' }}>
                                <TextField
                                    label="BANK Name"
                                    name="bank_name"
                                    type="text"
                                    value={formData.bank_name}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                            </div>
                            <div style={{ flex: '1' }}>
                                <TextField
                                    label="IFSC Code"
                                    name="ifsc_code"
                                    type="text"
                                    value={formData.ifsc_code}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: '10px' }}>
                            <div style={{ flex: '1', marginRight: '10px' }}>
                                <TextField
                                    label="MICR Code"
                                    name="micr_code"
                                    type="text"
                                    value={formData.micr_code}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                            </div>
                            <div style={{ flex: '1' }}>
                                <TextField
                                    label="Bank Branch"
                                    name="bank_branch"
                                    type="text"
                                    value={formData.bank_branch}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: '10px' }}>
                            <div style={{ flex: '1', marginRight: '10px' }}>
                                <TextField
                                    label="Bank Address"
                                    name="bank_address"
                                    type="text"
                                    value={formData.bank_address}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </div>
                            <div style={{ flex: '1' }}>
                                <TextField
                                    label="Bank Contact"
                                    name="bank_contact"
                                    type="text"
                                    value={formData.bank_contact}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: '10px' }}>
                            <div style={{ flex: '1', marginRight: '10px' }}>
                                <TextField
                                    label="Bank City"
                                    name="bank_city"
                                    type="text"
                                    value={formData.bank_city}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </div>
                            <div style={{ flex: '1' }}>
                                <TextField
                                    label="Bank District"
                                    name="bank_district"
                                    type="text"
                                    value={formData.bank_district}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: '10px' }}>
                            <div style={{ flex: '1' }}>
                                <TextField
                                    label="Bank State"
                                    name="bank_state"
                                    type="text"
                                    value={formData.bank_state}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button type="submit" color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddIFSCCode;
