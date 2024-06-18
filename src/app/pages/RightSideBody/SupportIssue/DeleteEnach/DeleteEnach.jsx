import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function DeleteEnach() {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        request_id_emandate: '',
        request_id_physical_emandate: '',
        enach_deletion_reason: '',
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
                DELETE ENACH
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
                <DialogTitle>Delete Enach</DialogTitle>
                <DialogContent>
                    <div className="report-container" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginTop: '10px', height: '1px' }}></div>
                        <div style={{ marginBottom: '10px' }}>
                            <TextField
                                label="Request ID(s) for Emandate"
                                name="request_id_emandate"
                                type="text"
                                value={formData.request_id_emandate}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <TextField
                                label="Request ID(s) for Physical Emandate"
                                name="request_id_physical_emandate"
                                type="text"
                                value={formData.request_id_physical_emandate}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <TextField
                                label="Reason for deletion"
                                name="enach_deletion_reason"
                                type="text"
                                value={formData.enach_deletion_reason}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
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

export default DeleteEnach;
