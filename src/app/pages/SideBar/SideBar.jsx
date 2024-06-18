import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    const sideBarArr=["SUPPORT ISSUE","JOBS","LENDERS","LOAN OFFICERS","ANCHORS","AUTO APPROVAL","PAYMENT LINKS","DIALER","PRIMARY ASSIGNEES"]
    return ( <>
    {/* <div>
     <List>
       {sideBarArr.map((text) => (
         <ListItem button key={text}>
           <ListItemText primary={text} >
            <link></link>
           </ListItemText>
         </ListItem>
       ))}
     </List>
   </div> */}
    <aside id="aside-SideBar">
        <List id="jobListSideBarul">
        <ListItem className='jobListSideBarli' button component={Link} to="support-issue">
        <ListItemText primary="SUPPORT ISSUE" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="Lms">
        <ListItemText primary="LMS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="jobs">
        <ListItemText primary="JOBS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="lenders">
        <ListItemText primary="LENDERS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="loan-officers">
        <ListItemText primary="LOAN OFFICERS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="anchors">
        <ListItemText primary="ANCHORS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="auto-approval">
        <ListItemText primary="AUTO APPROVAL" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="payment-links">
        <ListItemText primary="PAYMENT LINKS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="dialer">
        <ListItemText primary="DIALER" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="primary-assignees">
    <ListItemText primary="PRIMARY ASSIGNEES" />
    </ListItem>  
    <ListItem className='jobListSideBarli' button component={Link} to="support-issue">
        <ListItemText primary="SUPPORT ISSUE" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="Lms">
        <ListItemText primary="LMS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="jobs">
        <ListItemText primary="JOBS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="lenders">
        <ListItemText primary="LENDERS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="loan-officers">
        <ListItemText primary="LOAN OFFICERS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="anchors">
        <ListItemText primary="ANCHORS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="auto-approval">
        <ListItemText primary="AUTO APPROVAL" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="payment-links">
        <ListItemText primary="PAYMENT LINKS" />
      </ListItem>
      <ListItem className='jobListSideBarli' button component={Link} to="dialer">
        <ListItemText primary="DIALER" />
      </ListItem>
      
        </List>
    </aside>
    </> );
}

export default SideBar;