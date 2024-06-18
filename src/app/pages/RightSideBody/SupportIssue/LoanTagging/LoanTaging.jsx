import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

function LoanTagging() {
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            // Implement your submit logic here
            console.log('Selected file:', selectedFile);
        }
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
                UPLOAD LOAN TAGGING DATA
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit,
                    sx: { width: '80vw', maxHeight: '90vh', padding: '10px' },
                }}
            >
                <DialogTitle>Upload Loan Tagging Data</DialogTitle>
                <DialogContent>
                    <Box className="report-container" display="flex" flexDirection="column">
                        <ol type="1">
                            <li> System expects an Excel file (xlsx format)</li>
                            <li> Following should be the column headers:</li>
                            <ol type="a">
                                <li> app_id</li>
                                <li> loan_state</li>
                                <li> settlement_amount</li>
                                <li> settlement_date</li>
                                <li> write_off_amount</li>
                                <li> write_off_date</li>
                                <li> securitization</li>
                                <li> hypothecation</li>
                                <li> udyam_registration_certificate_number</li>
                                <li> sector_of_unit</li>
                                <li> additional_comments</li>
                            </ol>
                            <li>Date fields should have the format <b>dd-mm-yyyy</b></li>
                            <li>Having value in “App id” field is mandatory. Other fields are basis the tag that is being added.</li>
                            <li>If user is trying to mark a loan as written-off then corresponding date and amount should be mentioned. Settlement tag should be followed by value in corresponding date and amount field.</li>
                            <li>Securitization, Hypothecation, and PSL tag will be applied based on values being updated under columns – Securitization, Hypothecation, and Unit (Micro/Small). These fields can hold only predefined values.</li>
                            <li>“Comments” column is optional</li>
                        </ol>
                        <input
                            id="upload_excel"
                            type="file"
                            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                            onChange={handleFileChange}
                            required
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button type="submit" color="primary" disabled={!selectedFile}>
                        Upload File
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default LoanTagging;
