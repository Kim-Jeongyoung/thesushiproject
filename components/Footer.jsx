import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {
  CopyrightTwoTone,
  Facebook,
  Instagram,
  Twitter,
} from '@mui/icons-material';
import MuiNextLink from '@components/MuiNextLink';

//Added 2/19
// import Container from '@mui/material/Container';
import { Container, Grid, Typography } from '@mui/material';

//Add logo in the middle 2/19
import FooterLogo from '../public/footer_rollinlogo_white.svg';
import IconButton from '@mui/material/IconButton';
import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
// import Image from 'next/image';
// import Image from 'material-ui-image';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: '#40464d',
        textDecoration: 'none',
        color: 'common.white',
      }}
    >
      <Container maxwidth="sm">
        {/* Logo Grid */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          // margin bottom
          sx={{ pb: 2 }}
        >
          <Grid item sx={12}>
            <Box sx={{ align: 'center' }}>
              <FooterLogo />
            </Box>
          </Grid>
        </Grid>
        {/* Second Grid with Contact and Follow on us */}
        <Container>
          <Grid container spacing={2} direction="row">
            <Grid item xs={8}>
              <Box>CONTACT US</Box>
              <Box sx={{ py: 1 }}>Email info@rollinsushi.com</Box>
              <Box>Phone 956-249-0167</Box>
            </Grid>

            {/* Follow on us Grid */}

            <Grid item xs={4}>
              <Box>Follow on Us</Box>
              <Box>
                <Stack direction="row" spacing={5} sx={{ mb: 5, py: 2 }}>
                  <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourInstagramLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram fontSize="large" />
                  </MuiNextLink>
                  <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourFacebookLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook fontSize="large" />
                  </MuiNextLink>
                  <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourTwitterLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter fontSize="large" />
                  </MuiNextLink>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Grid>
          <Typography align="center" color="common.white">
            © 2022 Sushi Rollin'
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

//original footer
// const Footer = () => {
//   return (
//     <Box component="footer" sx={{ py: 5, bgcolor: '#40464d' }}>
//       <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
//         <MuiNextLink
//           sx={{ textDecoration: 'none', color: 'common.white' }}
//           href="https://YourFacebookLink/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Facebook fontSize="large" />
//         </MuiNextLink>
//         <MuiNextLink
//           sx={{ textDecoration: 'none', color: 'common.white' }}
//           href="https://YourInstagramLink/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Instagram fontSize="large" />
//         </MuiNextLink>
//         <MuiNextLink
//           sx={{ textDecoration: 'none', color: 'common.white' }}
//           href="https://YourTwitterLink/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Twitter fontSize="large" />
//         </MuiNextLink>
//       </Stack>
//       <Typography align="center" color="common.white">
//         © 2022 Sushi Rollin'
//       </Typography>
//     </Box>
//   );
// };

export default Footer;

//2/19 일 작업 한 코드

{
  /* <Box
  component="footer"
  sx={{
    bgcolor: '#262626',
    textDecoration: 'none',
    color: 'common.white',
    px: 1,
  }}
>
  <Container maxWidth="lg">
    <Grid>
      <Box sx={{ align: 'center' }}>
        <FooterLogo />
        {/* <Image src="public/footer_rollinlogo_white.svg" /> */
}
// </Box>
// </Grid>

{
  /* centered logo */
}
{
  /* <Box sx={{ align: 'center' }}>
          <Container
            maxWidth="lg"
            sx={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <IconButton edge="start" aria-label="home">
              <MuiNextLink activeClassName="active" href="/">
                <Logo />
              </MuiNextLink>
            </IconButton>
          </Container>
        </Box> */
}

{
  /* 다시 코드 이해 필요 */
}
//   <Grid
//     container
//     spacing={2}
//     direction="row"
//     justifyContent="space-between"
//     alignItmes="center"
//   >
//     <Grid item xs={12} sm={6}>
//       <Box>
//         {/* <Link href="/" color="inherit"> */}
//         CONTACT US
//         {/* </Link> */}
//       </Box>
//       <Box>
//         {/* <Link href="/" color="inherit"> */}
//         Email info@rollinsushi.com
//         {/* </Link> */}
//       </Box>
//       <Box>Phone 956-249-0167</Box>
//     </Grid>
//     <Grid item xs={12} sm={6} sx={{ width: 300 }}>
//       <Box>FIND US ON</Box>
//       <Box component="span" sx={{ py: 1 }}>
//         {/* 아이콘 간격 줄이기 */}
//         <Stack
//           direction="row"
//           justifyContent="space-between"
//           spacing={1}
//           sx={{ mb: 5 }}
//           px
//         >
//           <MuiNextLink
//             sx={{ textDecoration: 'none', color: 'common.white' }}
//             href="https://YourFacebookLink/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Facebook fontSize="large" />
//           </MuiNextLink>
//           <MuiNextLink
//             sx={{ textDecoration: 'none', color: 'common.white' }}
//             href="https://YourInstagramLink/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Instagram fontSize="large" />
//           </MuiNextLink>
//           <MuiNextLink
//             sx={{ textDecoration: 'none', color: 'common.white' }}
//             href="https://YourTwitterLink/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Twitter fontSize="large" />
//           </MuiNextLink>
//         </Stack>
//       </Box>
//     </Grid>
//   </Grid>

//   <Typography align="center" color="common.white">
//     © 2022 Sushi Rollin'
//   </Typography>
// </Container>

{
  /* <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}> */
}

{
  /* </Stack> */
}
// </Box>; */}

// 2/20 시작 코드
// <Box component="footer" sx={{ py: 5, bgcolor: '#40464d' }}>
//       <Container>
//         {/* Logo Grid */}
//         <Grid columns={3}>
//           <Box sx={{ align: 'center' }}>
//             <FooterLogo />
//           </Box>
//         </Grid>
//         {/* Second Grid with Contact and Follow on us */}
//         <Grid>
//           <Grid>
//             <Grid container>
//               <Grid item>
//                 <Box>CONTACT US</Box>
//                 <Box>Email info@rollinsushi.com</Box>
//               </Grid>
//             </Grid>
//           </Grid>
//           {/* Follow on us Grid */}
//           <Grid>
//             <Grid container>
//               <Grid item>
//                 <Box>Follow on Us</Box>
//                 <Box>social icons</Box>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid>
//           <Typography align="center" color="common.white">
//             © 2022 Sushi Rollin'
//           </Typography>
//         </Grid>
//       </Container>
//     </Box>

// 2/19 대략 틀 완성
{
  /* <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: '#40464d',
        textDecoration: 'none',
        color: 'common.white',
      }}
    >
      <Container maxwidth="sm">
        Logo Grid

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={12}>
            <Box sx={{ align: 'center' }}>
              <FooterLogo />
            </Box>
          </Grid>
        </Grid>
        Second Grid with Contact and Follow on us

        <Container>
          <Grid container spacing={2} direction="row">
            <Grid item xs={8}>
              <Box>CONTACT US</Box>
              <Box sx={{ py: 1 }}>Email info@rollinsushi.com</Box>
              <Box>Phone 956-249-0167</Box>
            </Grid>

            Follow on us Grid

            <Grid item xs={4}>
              <Box>Follow on Us</Box>
              <Box>
                <Stack direction="row" spacing={5} sx={{ mb: 5, py: 2 }}>
                  <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourInstagramLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram fontSize="large" />
                  </MuiNextLink>
                  <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourFacebookLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook fontSize="large" />
                  </MuiNextLink>
                  <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourTwitterLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter fontSize="large" />
                  </MuiNextLink>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Grid>
          <Typography align="center" color="common.white">
            © 2022 Sushi Rollin'
          </Typography>
        </Grid>
      </Container>
    </Box> */
}
