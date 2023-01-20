import React from 'react'
import { Card, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import { certifications, education } from '../utils/academicsData';
import Grow from '@mui/material/Grow';
import { useObserver } from '../hooks/useObserver';
import Paper from '@mui/material/Paper';

export default function AcademicSection() {
    const [show, ref] = useObserver()

    const styles = {
        container: {
            height: {md:'900px', xs:'1200px'}
        },
    }
    return (
        <Container sx={styles.container}  ref={ref} maxWidth='md' id='academic'>
            <Typography variant='h4' my={5}>Información académica</Typography>
            {show &&
                <>

                    <Grid spacing={5} container direction='row' alignItems='center' justifyContent='center'>
                        <Grow in={show} {...(show ? { timeout: 1500 } : {})}>
                            <Grid sm={8} xs={8} item >
                                <Paper elevation={3}>
                                    <Card>
                                        <List >
                                            <ListSubheader>
                                                Educación media/superior
                                            </ListSubheader>
                                            {education.map((item => (
                                                <ListItem key={item.title}>
                                                    <ListItemIcon>
                                                        <item.icon color='primary' />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={item.title}
                                                        secondary={item.subtitle}
                                                    />
                                                </ListItem>

                                            )))}
                                        </List>
                                    </Card>
                                </Paper>
                            </Grid>
                        </Grow>

                        <Grow in={show} {...(show ? { timeout: 1500 } : {})}>
                            <Grid sm={8} xs={8} item >
                                <Paper  elevation={3}>
                                    <Card>
                                        <List>
                                            <ListSubheader>
                                                Otras certificaciones
                                            </ListSubheader>
                                            {certifications.map(item => (
                                                <ListItem key={item.title}>
                                                    <ListItemIcon>
                                                        <item.icon color='primary' />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={item.title}
                                                        secondary={item.subtitle}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Card>
                                </Paper>
                            </Grid>
                        </Grow>
                    </Grid>
                </>
            }

        </Container>
    )
}
