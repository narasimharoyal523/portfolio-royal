import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Zoom>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="narasimharoyal523@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="+91 95156 71090" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText>
              <Link href="https://github.com/narasimharoyal523" target="_blank" rel="noopener">
                github.com/profile
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText>
              <Link
                href="https://www.linkedin.com/in/narasimha-royal-kasetti-83a0682b6/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn Profile
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Container>
    </Zoom>
  );
}

export default Contact;
