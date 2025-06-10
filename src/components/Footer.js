import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton, Link, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1976d2',  // MUI primary blue
        color: 'white',
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Typography variant="body2" component="p">
          © {new Date().getFullYear()} K. Narasimha Royal. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Contact: <Link href="mailto:narasimharoyal523@gmail.com" color="inherit" underline="hover">narasimharoyal523@gmail.com</Link> | Phone: 9515671090
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
          <Link href="https://github.com/narasimharoyal523" target="_blank" rel="noopener" color="inherit" underline="none">
            <IconButton aria-label="GitHub" color="inherit" size="small">
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/narasimha-royal-kasetti-83a0682b6/" target="_blank" rel="noopener" color="inherit" underline="none">
            <IconButton aria-label="LinkedIn" color="inherit" size="small">
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
