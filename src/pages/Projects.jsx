import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Link,
  Box
} from '@mui/material';

const projects = [
  {
    title: 'TomoX - AI-Driven Web Server Manager',
    description:
      'A web-based platform to run JSP applications with MySQL & Tomcat. Includes AI-powered error detection, one-click deployment, and security scanner.',
  },
  {
    title: 'Online Test Management System',
    description:
      'An interactive test platform with timer-based quizzes, admin panel, MySQL integration, and result analysis dashboard.',
  },
];

function Projects() {
  return (
    <Fade>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" mt={1}>
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fade>
  );
}

export default Projects;
