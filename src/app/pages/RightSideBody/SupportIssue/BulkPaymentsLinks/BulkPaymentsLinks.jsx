
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

export default function BulkPaymentsLinks(){
    const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
    return (
        <>
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
        Bulk Payments Links 
      </Button>
      <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Bulk Payments Links (Choose One To Proceed)</DialogTitle>
            <DialogContent>
                <OverDue />
                <AchRegisterFailed />
                <AchBouncedClass />
                <ManualFileUpload />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
        
        </>
    );

}

 function OverDue() {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

 

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
        OverDue
      </Button>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());

            const applicationExceptionList = formJson.applicationExceptionList;
            const OverwriteExceptionList = formJson.OverwriteExceptionList === 'on';
            const selectedLoanType = formJson.selectedLoanType;

            const applicationIds = applicationExceptionList.split('\n').filter(id => id.trim() !== '');

            console.log('applicationExceptionList:', applicationIds);
            console.log('OverwriteExceptionList:', OverwriteExceptionList);
            console.log('SelectedLoanType:', selectedLoanType);

            handleClose();
          },
          sx: { width: '600px' }
        }}
      >
        <DialogTitle>Bulk Loan Closure</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="applicationExceptionList">Enter Exception List</label>
            <TextField
              id="applicationExceptionList"
              name="applicationExceptionList"
              placeholder='Enter one appId per row...'
              multiline
              rows={4}
            />
            <input type="hidden" id="selectedLoanType" name="selectedLoanType" />
            <div>
              <Button> CLOSE </Button>
              <Button id="deleteBtnBulkLoanClosure" onClick={handleDelete}> DELETE </Button>
              <Button id="downloadListBtnBulkLoanClosure" onClick={handleDownload}> DOWNLOAD LIST </Button>
              <DialogActions>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </div>

            {(btnsonDelete || btnsonDownload) && (
              <div>
                <label>Select loan type to delete for: </label>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                  <Button variant="outlined" onClick={() => handleLoanTypeSelect('Term Loan')}>Term Loan</Button>
                  <Button variant="outlined" onClick={() => handleLoanTypeSelect('Purchase Finance')}>Purchase Finance</Button>
                  <Button variant="outlined" onClick={() => handleLoanTypeSelect('OD')}>OD</Button>
                  <Button variant="outlined" onClick={() => handleLoanTypeSelect('Bullet Loan')}>Bullet Loan</Button>
                  <Button variant="outlined" onClick={() => handleLoanTypeSelect('Bullet Loan With Principal Moratorium And Penalty')}>Bullet Loan With Principal Moratorium And Penalty</Button>
                  <Button variant="outlined" onClick={() => handleLoanTypeSelect('MBB')}>MBB</Button>
                </div>
              </div>
            )}
            {btnsonDownload && (
              <div>
                <FormControlLabel
                  control={<Checkbox id="OverwriteExceptionList" name="OverwriteExceptionList" />}
                  label="Overwrite displayed exception list"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog> */}
    </React.Fragment>
  );
}
function AchRegisterFailed() {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      
    };
  
   
  
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
          Ach Register Failed
        </Button>
        {/* <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
  
              const applicationExceptionList = formJson.applicationExceptionList;
              const OverwriteExceptionList = formJson.OverwriteExceptionList === 'on';
              const selectedLoanType = formJson.selectedLoanType;
  
              const applicationIds = applicationExceptionList.split('\n').filter(id => id.trim() !== '');
  
              console.log('applicationExceptionList:', applicationIds);
              console.log('OverwriteExceptionList:', OverwriteExceptionList);
              console.log('SelectedLoanType:', selectedLoanType);
  
              handleClose();
            },
            sx: { width: '600px' }
          }}
        >
          <DialogTitle>Bulk Loan Closure</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label htmlFor="applicationExceptionList">Enter Exception List</label>
              <TextField
                id="applicationExceptionList"
                name="applicationExceptionList"
                placeholder='Enter one appId per row...'
                multiline
                rows={4}
              />
              <input type="hidden" id="selectedLoanType" name="selectedLoanType" />
              <div>
                <Button> CLOSE </Button>
                <Button id="deleteBtnBulkLoanClosure" onClick={handleDelete}> DELETE </Button>
                <Button id="downloadListBtnBulkLoanClosure" onClick={handleDownload}> DOWNLOAD LIST </Button>
                <DialogActions>
                  <Button type="submit">Submit</Button>
                </DialogActions>
              </div>
  
              {(btnsonDelete || btnsonDownload) && (
                <div>
                  <label>Select loan type to delete for: </label>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Term Loan')}>Term Loan</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Purchase Finance')}>Purchase Finance</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('OD')}>OD</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Bullet Loan')}>Bullet Loan</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Bullet Loan With Principal Moratorium And Penalty')}>Bullet Loan With Principal Moratorium And Penalty</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('MBB')}>MBB</Button>
                  </div>
                </div>
              )}
              {btnsonDownload && (
                <div>
                  <FormControlLabel
                    control={<Checkbox id="OverwriteExceptionList" name="OverwriteExceptionList" />}
                    label="Overwrite displayed exception list"
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog> */}
      </React.Fragment>
    );
  }
function AchBouncedClass() {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      
    };
  
   
  
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
          Ach BouncedC lass
        </Button>
        {/* <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
  
              const applicationExceptionList = formJson.applicationExceptionList;
              const OverwriteExceptionList = formJson.OverwriteExceptionList === 'on';
              const selectedLoanType = formJson.selectedLoanType;
  
              const applicationIds = applicationExceptionList.split('\n').filter(id => id.trim() !== '');
  
              console.log('applicationExceptionList:', applicationIds);
              console.log('OverwriteExceptionList:', OverwriteExceptionList);
              console.log('SelectedLoanType:', selectedLoanType);
  
              handleClose();
            },
            sx: { width: '600px' }
          }}
        >
          <DialogTitle>Bulk Loan Closure</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label htmlFor="applicationExceptionList">Enter Exception List</label>
              <TextField
                id="applicationExceptionList"
                name="applicationExceptionList"
                placeholder='Enter one appId per row...'
                multiline
                rows={4}
              />
              <input type="hidden" id="selectedLoanType" name="selectedLoanType" />
              <div>
                <Button> CLOSE </Button>
                <Button id="deleteBtnBulkLoanClosure" onClick={handleDelete}> DELETE </Button>
                <Button id="downloadListBtnBulkLoanClosure" onClick={handleDownload}> DOWNLOAD LIST </Button>
                <DialogActions>
                  <Button type="submit">Submit</Button>
                </DialogActions>
              </div>
  
              {(btnsonDelete || btnsonDownload) && (
                <div>
                  <label>Select loan type to delete for: </label>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Term Loan')}>Term Loan</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Purchase Finance')}>Purchase Finance</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('OD')}>OD</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Bullet Loan')}>Bullet Loan</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Bullet Loan With Principal Moratorium And Penalty')}>Bullet Loan With Principal Moratorium And Penalty</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('MBB')}>MBB</Button>
                  </div>
                </div>
              )}
              {btnsonDownload && (
                <div>
                  <FormControlLabel
                    control={<Checkbox id="OverwriteExceptionList" name="OverwriteExceptionList" />}
                    label="Overwrite displayed exception list"
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog> */}
      </React.Fragment>
    );
  }
function ManualFileUpload() {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      
    };
  
   
  
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
          Manual File Upload
        </Button>
        {/* <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
  
              const applicationExceptionList = formJson.applicationExceptionList;
              const OverwriteExceptionList = formJson.OverwriteExceptionList === 'on';
              const selectedLoanType = formJson.selectedLoanType;
  
              const applicationIds = applicationExceptionList.split('\n').filter(id => id.trim() !== '');
  
              console.log('applicationExceptionList:', applicationIds);
              console.log('OverwriteExceptionList:', OverwriteExceptionList);
              console.log('SelectedLoanType:', selectedLoanType);
  
              handleClose();
            },
            sx: { width: '600px' }
          }}
        >
          <DialogTitle>Bulk Loan Closure</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label htmlFor="applicationExceptionList">Enter Exception List</label>
              <TextField
                id="applicationExceptionList"
                name="applicationExceptionList"
                placeholder='Enter one appId per row...'
                multiline
                rows={4}
              />
              <input type="hidden" id="selectedLoanType" name="selectedLoanType" />
              <div>
                <Button> CLOSE </Button>
                <Button id="deleteBtnBulkLoanClosure" onClick={handleDelete}> DELETE </Button>
                <Button id="downloadListBtnBulkLoanClosure" onClick={handleDownload}> DOWNLOAD LIST </Button>
                <DialogActions>
                  <Button type="submit">Submit</Button>
                </DialogActions>
              </div>
  
              {(btnsonDelete || btnsonDownload) && (
                <div>
                  <label>Select loan type to delete for: </label>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Term Loan')}>Term Loan</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Purchase Finance')}>Purchase Finance</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('OD')}>OD</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Bullet Loan')}>Bullet Loan</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('Bullet Loan With Principal Moratorium And Penalty')}>Bullet Loan With Principal Moratorium And Penalty</Button>
                    <Button variant="outlined" onClick={() => handleLoanTypeSelect('MBB')}>MBB</Button>
                  </div>
                </div>
              )}
              {btnsonDownload && (
                <div>
                  <FormControlLabel
                    control={<Checkbox id="OverwriteExceptionList" name="OverwriteExceptionList" />}
                    label="Overwrite displayed exception list"
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog> */}
      </React.Fragment>
    );
  }
