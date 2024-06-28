import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';

const HiddenInput = styled('input')({
    display: 'none',
});

function AchRegistration() {
    const [open, setOpen] = React.useState(false);
    const [attachment, setAttachment] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFileUpload = (event) => {
        setAttachment(event.target.files[0]);
    };

    const handleSubmit = async (action) => {
        if (action === 'download') {
            // Handle download action
            console.log('Download Attachment');
        } else if (action === 'upload') {
            if (!attachment) {
                alert('Please upload an attachment first.');
                return;
            }

            const formData = new FormData();
            formData.append('attachment', attachment);

            try {
                const response = await ApplicationAPIDataService.postAchRegistration(formData);
                if (response.data.success) {
                    console.log('Attachment uploaded and email sent successfully');
                    alert('Attachment uploaded and email sent successfully!');
                } else {
                    console.error('Failed to upload attachment and send email:', response.data.message);
                    alert(`Failed to upload attachment and send email: ${response.data.message}`);
                }
            } catch (error) {
                console.error('An error occurred during the upload and send mail process:', error);
                alert('An error occurred. Please try again.');
            }
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
                ACH REGISTRATION-INDIFI CAPITAL PVT LTD
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'div',
                    sx: { width: '80vw', maxHeight: '100vh', padding: '10px' },
                }}
            >
                <DialogTitle>Mail Ach Registration Cases</DialogTitle>
                <DialogContent>
                    <Box className="report-container" display="flex" flexDirection="column">
                        <Box mt={2} mb={1}>
                            <Typography variant="body1">
                                <strong>Subject:</strong> ACH Registration - Indifi Capital Pvt Ltd
                            </Typography>
                        </Box>
                        <Box mt={2} mb={1}>
                            <Typography variant="body1">
                                <strong>Body:</strong><br />
                                Dear Team,<br />
                                We are sending enclosed ACH for registration by today's courier. Kindly acknowledge once received.<br />
                                <br />
                                Regards,<br />
                                Indifi Technologies
                            </Typography>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={() => handleSubmit('download')} color="primary">
                        Download Attachment
                    </Button>
                    <label htmlFor="upload-ach">
                        <HiddenInput
                            id="upload-ach"
                            type="file"
                            onChange={handleFileUpload}
                        />
                        <Button component="span" color="primary" onClick={() => handleSubmit('upload')}>
                            Upload Attachment and Send Mail
                        </Button>
                    </label>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AchRegistration;
