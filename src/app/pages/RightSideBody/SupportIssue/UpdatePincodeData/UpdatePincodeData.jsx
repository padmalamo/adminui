import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';

function UpdatePincodeData() {
    const [open, setOpen] = React.useState(false);
    const [action, setAction] = React.useState('');
    const [formData, setFormData] = React.useState({
        pincode: '',
        state: '',
        city: '',
        tier: 4,
        lender_mapping: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await ApplicationAPIDataService.postUpdatePincode(formData);
            if (response.data.success) {
                console.log('Pincode updated successfully');
                alert('Pincode updated successfully!');
            } else {
                console.error('Pincode update failed:', response.data.message);
                alert(`Failed to update pincode: ${response.data.message}`);
            }
        } catch (error) {
            console.error('An error occurred during pincode update:', error);
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

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
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
                onClick={handleClickOpen}
            >
                Update Pincode Data
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
                <DialogTitle>Update Pincode Data</DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Select
                            value={action}
                            onChange={(e) => setAction(e.target.value)}
                            displayEmpty
                            required
                            fullWidth
                            name="action"
                        >
                            <MenuItem value="" disabled>Select Action</MenuItem>
                            <MenuItem value="add">Add New Pincode</MenuItem>
                            <MenuItem value="update">Update Existing Pincode</MenuItem>
                        </Select>
                        <TextField
                            label="Pincode"
                            name="pincode"
                            type="number"
                            value={formData.pincode}
                            onChange={handleChange}
                            inputProps={{ minLength: 6, maxLength: 6 }}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            inputProps={{ pattern: "^[a-zA-Z\\s]*$" }}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="City / District"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            inputProps={{ pattern: "^[a-zA-Z0-9\\s.]*$" }}
                            required
                            fullWidth
                            margin="normal"
                        />
                        {action === 'add' && (
                            <>
                                <label htmlFor="pincodeTier">Tier*</label>
                                <Select
                                    // label="Tier"
                                    value={formData.tier}
                                    id="pincodeTier"
                                    onChange={handleChange}
                                    name="tier"
                                    required
                                    fullWidth
                                    margin="normal"
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                </Select>
                                <TextField
                                    label="Lender Mapping"
                                    name="lender_mapping"
                                    type="text"
                                    value={formData.lender_mapping}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    helperText="Note: Value must be in the given format: {'Lender Name': boolean, 'Lender Name': boolean}"
                                />
                            </>
                        )}
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

export default UpdatePincodeData;
