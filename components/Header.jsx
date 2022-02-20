import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MuiNextLink from '@components/MuiNextLink';
import { styled } from '@mui/system';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import HideOnScroll from './HideOnScroll';
import Fab from '@mui/material/Fab';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import BackToTop from './BackToTop';
import Logo from '../public/rollinlogowhite.svg';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const navLinks = [
  { title: `home`, path: `/` },
  { title: `menu`, path: `/menu` },
  { title: `about us`, path: `/aboutus` },
  { title: `franchise`, path: `/franchise` },
  { title: `location`, path: `/location` },
];

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
              }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  <Logo />
                </MuiNextLink>
              </IconButton>
              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
