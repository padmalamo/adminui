import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import { postIfscCode } from 'path/to/your/postIfscCode';  // Adjust the import path accordingly
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';

function AddIFSCCode() {
    const [open, setOpen] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const payload = {
            address: formJson.bank_address,
            bank: formJson.bank_name,
            branch: formJson.bank_branch,
            city: formJson.bank_city,
            contact: formJson.bank_contact,
            district: formJson.bank_district,
            ifsc: formJson.ifsc_code,
            micr_code: formJson.micr_code,
            state: formJson.bank_state,
        };

        // console.log('Form Data Submitted:', payload);

        try {
            const response = await ApplicationAPIDataService.postIfscCode(payload);
            if (response.data.success) {
                console.log('IFSC code added successfully');
                alert('IFSC Code added successfully!');
            } else {
                console.error('IFSC code addition failed:', response.data.message);
                alert(`Failed to add IFSC Code: ${response.data.message}`);
            }
        } catch (error) {
            console.error('An error occurred during addition of IFSC code:', error);
            alert('An error occurred. Please try again.');
        }

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
                <DialogTitle>ADD IFSC CODE</DialogTitle>
                <DialogContent>
                    <div className="report-container" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginTop: '10px', height: '1px' }}></div>
                        <div style={{ display: 'flex', marginBottom: '10px' }}>
                            <div style={{ flex: '1', marginRight: '10px' }}>
                                <TextField
                                    label="BANK Name"
                                    name="bank_name"
                                    type="text"
                                    required
                                    fullWidth
                                />
                            </div>
                            <div style={{ flex: '1' }}>
                                <TextField
                                    label="IFSC Code"
                                    name="ifsc_code"
                                    type="text"
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
                                    required
                                    fullWidth
                                />
                            </div>
                            <div style={{ flex: '1' }}>
                                <TextField
                                    label="Bank Branch"
                                    name="bank_branch"
                                    type="text"
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
                                    fullWidth
                                />
                            </div>
                            <div style={{ flex: '1' }}>
                                <TextField
                                    label="Bank Contact"
                                    name="bank_contact"
                                    type="text"
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
                                    fullWidth
                                />
                            </div>
                            <div style={{ flex: '1' }}>
                                <TextField
                                    label="Bank District"
                                    name="bank_district"
                                    type="text"
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
