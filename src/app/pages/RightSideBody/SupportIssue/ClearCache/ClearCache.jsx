import React, { useState } from 'react';
// import { ApplicationAPIDataService } from './services/ApplicationAPIDataService';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import { Toast } from './services/Toast'; // Import the Toast utility
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import { Toast } from '../../../../config/services/toast.service';
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';

const ClearCache = () => {
    const [open, setOpen] = useState(false);
    const [cacheType, setCacheType] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await ApplicationAPIDataService.getClearCache(cacheType);
            Toast.success('Cache cleared successfully');
        } catch (error) {
            Toast.error('Error clearing cache: ' + error.message);
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
                CLEAR CACHE
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit,
                    sx: { width: '80vw', maxHeight: '70vh', padding: '10px' },
                }}
            >
                <DialogTitle>Clear Cache</DialogTitle>
                <DialogContent>
                    <Box className="report-container" display="flex" flexDirection="column">
                        <TextField
                            name="cache_clear"
                            label="Enter cache type"
                            placeholder="Example: cibil"
                            value={cacheType}
                            onChange={(e) => setCacheType(e.target.value)}
                            fullWidth
                            required
                            margin="normal"
                        />
                        <p>Example: cibil</p>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button type="submit" color="primary" disabled={!cacheType}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ClearCache;
