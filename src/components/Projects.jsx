import React from 'react';
import { projectsData } from '../utils/projectsData';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Container maxWidth="md" id="projects">
      <Box pt={8} mb={4}>
        <Typography variant="h4" >Proyectos</Typography>
      </Box>
      <Grid mb={10} container direction='column' spacing={4}>
        {projectsData.map((data) =>
        (
          <ProjectCard key={data.id} links={data.links} project={data} />
        ))}
      </Grid>
    </Container>
  )
}

