import React from 'react';
import { Box, Typography, Chip, Stack, Grid } from '@mui/material';
import { Fade } from 'react-awesome-reveal';

const skills = [
  'Java', 'Spring Boot', 'Python', 'JavaScript', 'SQL',
  'HTML', 'CSS', 'JSP', 'Servlets', 'Bootstrap',
  'MySQL', 'Hibernate', 'Maven', 'Git', 'GitHub',
  'Google Cloud AI', 'Dialogflow CX', 'Gemini AI',
  'Linux', 'Kali Linux'
];

const interests = [
  'Tech Innovations - Exploring AI & Cybersecurity trends',
  'Coding Challenges - Solving problems on LeetCode & CodeChef',
  'Blogging - Writing about programming & security best practices',
  'Gaming & AI Development - Experimenting with AI-based game logic'
];

function Skills() {
  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', px: 3, py: 5 }}>
      <Fade direction="down" triggerOnce>
        <Typography variant="h4" align="center" gutterBottom>
          Skills & Interests
        </Typography>
      </Fade>

      <Fade direction="left" triggerOnce>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>Technical Skills</Typography>
          <Grid container spacing={2}>
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip label={skill} color="primary" variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      <Fade direction="right" triggerOnce>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>Hobbies & Interests</Typography>
          <Stack spacing={2}>
            {interests.map((interest, index) => (
              <Typography key={index} variant="body1">
                • {interest}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Fade>
    </Box>
  );
}

export default Skills;
