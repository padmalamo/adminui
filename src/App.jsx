import SideBar from './app/pages/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Drawer, 
  CssBaseline, Typography, Box
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

const theme = createTheme();

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          {!isLargeScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            Admin Indifi
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant={isLargeScreen ? "permanent" : "temporary"}
          open={isLargeScreen || mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, mt: isLargeScreen ? 8 : 0 },
          }}
        >
          <SideBar></SideBar>
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: { md: 0 }, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography> */}
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer />
    </ThemeProvider>
    
  );
}

export default App;
