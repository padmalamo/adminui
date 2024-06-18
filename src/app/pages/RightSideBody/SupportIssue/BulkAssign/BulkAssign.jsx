import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';

export default function BulkAssign() {
  const [open, setOpen] = React.useState(false);
  const [bulkAssignData, setBulkAssignData] = React.useState([]);
  const [selectedGroup, setSelectedGroup] = React.useState('');
  const [error, setError] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const fetchBulkAssignData = async () => {
      try {
        const response = await ApplicationAPIDataService.getBulkAssignData();
        // console.log('Bulk Assign Data Response:', response);
        if (response && Array.isArray(response.data.data)) {
          setBulkAssignData(response.data.data);
          // console.log("Bulk Assign Data", response.data);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (err) {
        console.error("Error fetching bulk assign data: ", err);
        setError(err);
      }
    };
    fetchBulkAssignData();
  }, []);

  const groups = [
    ...new Map(
      bulkAssignData.map((val) => [val.group_id, { group_name: val.group_name, group_id: val.group_id }])
    ).values()
  ];

  const filteredUsers = bulkAssignData.filter(user => user.group_id === selectedGroup);

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
        Bulk Assign
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
            const ApplicationBulkAssign = formJson.ApplicationBulkAssign;
            const GroupBulkAppAssign = formJson.GroupBulkAppAssign;
            const UserBulkAppAssign = formJson.UserBulkAppAssign;
            console.log('ApplicationBulkAssign:', ApplicationBulkAssign);
            console.log('GroupBulkAppAssign:', GroupBulkAppAssign);
            console.log('UserBulkAppAssign:', UserBulkAppAssign);
            handleClose();
          },
          sx: { width: '600px' }
        }}
      >
        <DialogTitle>Bulk Assign</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="applications">Enter Applications</label>
            <TextField id="applicationsBulkAssign" name="ApplicationBulkAssign" placeholder='Enter Applications...'></TextField>

            <label htmlFor="GroupBulkAppAssign">Select Group</label>
            <select
              id="GroupBulkAppAssign"
              name="GroupBulkAppAssign"
              required
              onChange={(e) => setSelectedGroup(e.target.value)}
            >
              <option value="">Select Groups</option>
              {groups.map((group) => (
                <option key={group.group_id} value={group.group_id}>
                  {group.group_name}
                </option>
              ))}
            </select>

            <label htmlFor="SelectUser">Select Users</label>
            <select id="UserAppAssign" name="UserBulkAppAssign" required>
              <option value="">Select Users</option>
              {filteredUsers.map((user) => (
                <option key={user.user_id} value={user.user_id}>
                  {user.user_name}
                </option>
              ))}
            </select>
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
