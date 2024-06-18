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
import { ApplicationAPIDataService } from '../../../../config/application-api-data-service';


function CreateAnchor() {
    const [open, setOpen]=React.useState(false);
    const [selectedIndustry,setSelectedIndustry]=React.useState([]);
    const [copyAnchor, setCopyAnchor]=React.useState([]);
    const [requestAnchor, setRequestAnchor]=React.useState([]);
    const [createAnchorData, setCreateAnchorData]=React.useState([]);
    const [error,setError]=React.useState();

    function handleClickOpen(){
        setOpen(true);

    }
    function handleClose(){
        setOpen(false);
    }
  React.useEffect(()=>{
    const fetchCreateAnchor=async()=>{
    try{
      const response=await ApplicationAPIDataService.getCreateAnchorData()
      console.log(" create anchor data ",response.data.data);
      if(response){
        setCreateAnchorData(response.data.data);
      }
      else{
        throw new Error("Unexpected response format");
      }
    }
    catch(err){
        console.log("error fetching anchor data ");
        setError(err);
    }
  }
    fetchCreateAnchor();
  },[]);

  const industries=[
    ...new Set(createAnchorData.map((val)=>val.industry))
  ];
  console.log("industry",industries);
  
  const selectedAnchor=createAnchorData
  .filter((anchor)=>(anchor.industry===selectedIndustry))
  .map((anchor)=>anchor.name);

      
  
  
  console.log(selectedAnchor)
    
    
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
        Create Anchor
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
            const ApplicationCreateAnchor = formJson.ApplicationCreateAnchor;
            const IndustryCreateAnchor = formJson.IndustryCreateAnchor;
            const CopyAnchorCreateAnchor=formJson.CopyAnchorCreateAnchor;
            const RequestCreateAnchor=formJson.RequestCreateAnchor;
            console.log('ApplicationCreateAnchor:', ApplicationCreateAnchor);
            // console.log('Anchor:', anchor);
            console.log('IndustryCreateAnchor: ', IndustryCreateAnchor)
            console.log('CopyAnchorCreateAnchor: ',CopyAnchorCreateAnchor)
            console.log('RequestCreateAnchor: ',RequestCreateAnchor)
            handleClose();
          },
          sx: { width: '600px' }
        }}
      >
        <DialogTitle>Create Anchor</DialogTitle>
        <DialogContent>
  <DialogContentText></DialogContentText>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
  
    <label htmlFor="applications">Enter Anchor Name</label>
    <TextField id="" name="ApplicationCreateAnchor" placeholder='Enter Anchor...'></TextField>
  
    <label htmlFor="SelectIndustry">Select Industry</label>
    <select id="SelectIndustry" name="IndustryCreateAnchor" required
    onChange={(e)=>setSelectedIndustry(e.target.value)}>
      <option value="">Select Industry</option>
      {industries.map((industry,index)=>(
        <option
          key={index}
          value={industry}
        >
          {industry}
        </option>
      ))}
    </select>
    <label htmlFor="SelectCopyAnchor">Select Copy Anchors</label>
    <select id="" name="CopyAnchorCreateAnchor" required>
      <option value="">Select CopyAnchor</option>
      {selectedAnchor.map((anchor, index)=>(
        <option key={index} value={anchor}>
          {anchor}
        </option>
      ))}
    </select>
    <label htmlFor="SelectRequest">Select Request Anchors</label>
    <select id="" name="RequestCreateAnchor" required>
      <option value="">Select Request Anchor</option>
      <option value="Request 1">Request 1</option>
      <option value="Request 2">Request 2</option>
      <option value="Request 3">Request 3</option>
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

export default CreateAnchor;