import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const HiddenInput = styled('input')({
    display: 'none',
});

function CreditFlagBulkUpload() {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // Implement your upload logic here
        console.log('File:', file);
        handleClose();
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
                    },
                }}
                className='Support-issue-main-cards'
                onClick={handleClickOpen}
            >
                 CREDIT FLAGS bULK UPLOAD
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'div',
                    sx: { width: '80vw', maxHeight: '70vh', padding: '10px' },
                }}
            >
                <DialogTitle>Upload Credit Flags Data</DialogTitle>
                <DialogContent>
                    <Box className="report-container" display="flex" flexDirection="column">
                        <Box mt={2} mb={1} sx={{ width: '70%' }}>
                            <input
                                id="upload_excel"
                                type="file"
                                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                onChange={handleFileUpload}
                            />
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpload} color="primary">
                        Upload
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CreditFlagBulkUpload;
