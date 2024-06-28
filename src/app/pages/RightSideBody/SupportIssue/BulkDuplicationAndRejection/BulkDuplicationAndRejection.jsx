// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

// export default function BulkDuplicationAndRejection() {
//   const [open, setOpen] = React.useState(false);
//   const [duplicateApplication, setDuplicateApplication] = React.useState(false);
//   const [rejectApplication, setRejectApplication] = React.useState(false);
//   const [rejectionReasons,setRejectionReasons]=React.useState([]);
//   // const [duplicateOption, setDuplicateOption] = React.useState('');
//   // const [rejectOption, setRejectOption] = React.useState('');
//   const duplicateApplicationTag=["Submit for credit Review","Send Loan Agreement","Discrepancy in Loan Agreement","Abandoned Leads Calling","New Apps Calling","Others"]

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleDuplicateChange = (event) => {
//     setDuplicateApplication(event.target.checked);
//   };

//   const handleRejectChange = (event) => {
//     setRejectApplication(event.target.checked);
//   };

//   // const handleDuplicateOptionChange = (event) => {
//   //   setDuplicateOption(event.target.value);
//   // };

//   // const handleRejectOptionChange = (event) => {
//   //   setRejectOption(event.target.value);
//   // };

//   React.useEffect(() => {
//     const fetchRejectionReasons = async () => {
//       try {
//         const response = await ApplicationAPIDataService.getRejectionReasons();
//         if (response ) {
//           setRejectionReasons(response.data.data);
//         } else {
//           throw new Error('Unexpected response format');
//         }
//       } catch (err) {
//         console.error('Error fetching rejection reasons:', err);
//         setError(err);
//       }
//     };

//     fetchRejectionReasons();
//   }, []);

//   const handleFormSubmit=async(event)=>{
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const formJson = Object.fromEntries(formData.entries());
    
//     const applicationBulkDuplication = formJson.ApplicationBulkDuplication;
//     const duplicateApplication = formJson.duplicateApplication === 'on';
//     const freePool = formJson.freePool === 'on';
//     // const duplicateOption=formJson.duplicateOption;
//     const duplicateTag=formJson.duplicateOption
//     const rejectApplication = formJson.rejectApplication === 'on';
//     const rejectionReason=formJson.RejectionReason;
//     const comment=formJson.CommentsRejection;
//     console.log('ApplicationBulkDuplication:', applicationBulkDuplication);
//     console.log('DuplicateApplication:', duplicateApplication);
//     console.log('RejectApplication:', rejectApplication);

//     if(rejectApplication){
//           const payloadRejection={
//             note: comment,
//           reason: rejectionReason,
//           requestIds:applicationBulkDuplication
//         }
//           try {
//           const response = await ApplicationAPIDataService.postBulkRejection(payloadRejection);
//           if (response.data.success) {
//             alert('Bulk rejection successful');
//           } else {
//             alert('Bulk rejection failed');
//           }
//         } catch (error) {
//           alert('An error occurred during bulk rejection');
//         }
//     }
//     if(duplicateApplication){
//       const payloadDuplicate={
//         applications:
//         data={
//            anchor_id: "0c5486b3-0fd3-4a5c-b6e0-e7f188c2de5c" ,// hard coded
//            anchor_loan_type_id: "8003954b-c4fd-4903-82d9-fd02c61d58be", // hard coded
//            facility_type: "Term", // hard coded
//            free_pool: freePool,
//            tags: duplicateTag
//         }
//       }
//       try {
//         const response = await ApplicationAPIDataService.postBulkDuplication(payloadDuplicate);
//         if (response.data.success) {
//           alert('Bulk duplication successful');
//         } else {
//           alert('Bulk duplication failed');
//         }
//       } catch (error) {
//         alert('An error occurred during bulk duplication');
//       }
//     } 
//     handleClose();
//   }
//   return (
//     <React.Fragment>
//       <Button 
//         variant="outlined"
//         sx={{
//           backgroundColor: 'rgb(62, 62, 190)',
//           color: 'white',
//           border: 'none',
//           padding: '15px 32px',
//           textAlign: 'center',
//           textDecoration: 'none',
//           display: 'inline-block',
//           margin: '5px',
//           fontSize: '16px',
//           height: '200px',
//           width: '200px',
//           '&:hover': {
//             backgroundColor: 'rgb(42, 42, 170)',
//           }
//         }}
//         className='Support-issue-main-cards' 
//         onClick={handleClickOpen}>
//         Bulk Duplication & Rejection
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: handleFormSubmit,
//           sx: { width: '600px' }
//         }}
//       >
//         <DialogTitle>Change Rejection Reason</DialogTitle>
//         <DialogContent>
//           <DialogContentText></DialogContentText>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//             <label htmlFor="applicationsBulkDuplication">Enter Applications</label>
//             <TextField id="applicationsBulkDuplication" name="ApplicationBulkDuplication" placeholder='Enter Applications...'></TextField>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   id="duplicateApplication"
//                   name="duplicateApplication"
//                   checked={duplicateApplication}
//                   onChange={handleDuplicateChange}
//                 />
//               }
//               label="Duplicate Application"
//             />
//             {duplicateApplication && (
//                 <>
//                 <FormControlLabel  control={<Checkbox id="freePool" name="freePool" />} label="Duplicate Applications move to Free Pool" />
//                 <InputLabel htmlFor="duplicateOption" >Select Tag </InputLabel>
//                 <Select
//                   labelId="duplicateOption"
//                   id="duplicateOption"
//                   // value={duplicateOption}
//                   // onChange={handleDuplicateOptionChange}
//                   name="duplicateOption"
//                 >
//                   <MenuItem value="">Select Tag</MenuItem>
//                 {duplicateApplicationTag.map((reason,index) => (
//                   <MenuItem key={index} value={reason}>
//                     {reason}
//                   </MenuItem>
//                 ))}
//                 </Select>
             
//                 </>
//             )}
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   id="rejectApplication"
//                   name="rejectApplication"
//                   checked={rejectApplication}
//                   onChange={handleRejectChange}
//                 />
//               }
//               label="Reject Application"
//             />
//             {rejectApplication && (
//               <>
              
//               <label htmlFor="RejectionReason">Rejection Reason*</label>
//             {rejectionReasons.length > 0 && (
//               <select id="RejectionReason" name="RejectionReason" required>
//                 <option value="">Select Rejection Reason</option>
//                 {rejectionReasons.map((reason) => (
//                   <option key={reason.code} value={reason.code}>
//                     {reason.description}
//                   </option>
//                 ))}
//               </select>
//             )}
//                 <label htmlFor="comments">Additional Comments</label>
//                 <TextField id="comments" name="CommentsRejection" placeholder="Add your Comments" />
//               </>
//               )}
            
//           </div>
//         </DialogContent>
//         <DialogActions>
//           <Button type="submit">Submit</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';

export default function BulkDuplicationAndRejection() {
  const [open, setOpen] = React.useState(false);
  const [duplicateApplication, setDuplicateApplication] = React.useState(false);
  const [rejectApplication, setRejectApplication] = React.useState(false);
  const [rejectionReasons, setRejectionReasons] = React.useState([]);
  const [error, setError] = React.useState(null);

  const duplicateApplicationTag = ["Submit for credit Review", "Send Loan Agreement", "Discrepancy in Loan Agreement", "Abandoned Leads Calling", "New Apps Calling", "Others"];

  React.useEffect(() => {
    const fetchRejectionReasons = async () => {
      try {
        const response = await ApplicationAPIDataService.getRejectionReasons();
        if (response) {
          setRejectionReasons(response.data.data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        console.error('Error fetching rejection reasons:', err);
        setError(err);
      }
    };

    fetchRejectionReasons();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDuplicateChange = (event) => {
    setDuplicateApplication(event.target.checked);
  };

  const handleRejectChange = (event) => {
    setRejectApplication(event.target.checked);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const applicationBulkDuplication = formJson.ApplicationBulkDuplication.split(',').map(id => id.trim());
    const duplicateApplication = formJson.duplicateApplication === 'on';
    const freePool = formJson.freePool === 'on';
    const duplicateTag = formJson.duplicateOption;
    const rejectApplication = formJson.rejectApplication === 'on';
    const rejectionReason = formJson.RejectionReason;
    const comment = formJson.CommentsRejection;

    if (rejectApplication) {
      const payloadRejection = {
        note: comment,
        reason: rejectionReason,
        requestIds: applicationBulkDuplication
      };
      try {
        const response = await ApplicationAPIDataService.postBulkRejection(payloadRejection);
        if (response.data.success) {
          alert('Bulk rejection successful');
        } else {
          alert('Bulk rejection failed');
        }
      } catch (error) {
        alert('An error occurred during bulk rejection');
      }
    }

    if (duplicateApplication) {
      const payloadDuplicate = {
        applications: applicationBulkDuplication,
        data: {
          anchor_id: "0c5486b3-0fd3-4a5c-b6e0-e7f188c2de5c", // hard coded
          anchor_loan_type_id: "8003954b-c4fd-4903-82d9-fd02c61d58be", // hard coded
          facility_type: "Term", // hard coded
          free_pool: freePool,
          tags: duplicateTag
        }
      };
      try {
        const response = await ApplicationAPIDataService.postBulkDuplication(payloadDuplicate);
        if (response.data.success) {
          alert('Bulk duplication successful');
        } else {
          alert('Bulk duplication failed');
        }
      } catch (error) {
        alert('An error occurred during bulk duplication');
      }
    }

    handleClose();
  };

  return (
    <React.Fragment>
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
        onClick={handleClickOpen}>
        Bulk Duplication & Rejection
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleFormSubmit,
          sx: { width: '600px' }
        }}
      >
        <DialogTitle>Change Rejection Reason</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="applicationsBulkDuplication">Enter Applications</label>
            <TextField id="applicationsBulkDuplication" name="ApplicationBulkDuplication" placeholder='Enter Applications...'></TextField>
            <FormControlLabel
              control={
                <Checkbox
                  id="duplicateApplication"
                  name="duplicateApplication"
                  checked={duplicateApplication}
                  onChange={handleDuplicateChange}
                />
              }
              label="Duplicate Application"
            />
            {duplicateApplication && (
              <>
                <FormControlLabel control={<Checkbox id="freePool" name="freePool" />} label="Duplicate Applications move to Free Pool" />
                <InputLabel htmlFor="duplicateOption">Select Tag</InputLabel>
                <Select
                  labelId="duplicateOption"
                  id="duplicateOption"
                  name="duplicateOption"
                >
                  <MenuItem value="">Select Tag</MenuItem>
                  {duplicateApplicationTag.map((reason, index) => (
                    <MenuItem key={index} value={reason}>
                      {reason}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  id="rejectApplication"
                  name="rejectApplication"
                  checked={rejectApplication}
                  onChange={handleRejectChange}
                />
              }
              label="Reject Application"
            />
            {rejectApplication && (
              <>
                <label htmlFor="RejectionReason">Rejection Reason*</label>
                {rejectionReasons.length > 0 && (
                  <Select id="RejectionReason" name="RejectionReason" required>
                    <MenuItem value="">Select Rejection Reason</MenuItem>
                    {rejectionReasons.map((reason) => (
                      <MenuItem key={reason.code} value={reason.code}>
                        {reason.description}
                      </MenuItem>
                    ))}
                  </Select>
                )}
                <label htmlFor="comments">Additional Comments</label>
                <TextField id="comments" name="CommentsRejection" placeholder="Add your Comments" />
              </>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
