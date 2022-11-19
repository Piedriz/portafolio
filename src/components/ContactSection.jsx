import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from '@mui/material';
import { socialItems } from '../utils/socialItems';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import IconButton from '@mui/material/IconButton';

export default function ContactSection() {
    const styles = {
        section: {
            height: '60vh',

        },
        grid: {
            height: '100%',
        },
        container: {
            height: '100%',
            paddingTop: '50px',
            paddingBottom: '20px'
        },
        socialIcons: {
            margin: '10px'
        }
    }
    return (
        <Paper id='contact' sx={styles.section}>
            <Container sx={styles.container} maxWidth='md'>
                <Grid sx={styles.grid} container flexDirection='column' alignItems='center' justifyContent='space-between'>
                    <Grid item>
                        <Typography variant='h2'>¡Contactame!</Typography>
                        <Link href={'mailto:piedrizpasos@gmail.com'}>
                            <Typography textAlign='center' variant='h5'>piedrizpasos@gmail.com</Typography>
                        </Link>
                    </Grid>
                    <Grid item width='100%'>
                        <Grid container flexDirection='row' alignItems='center' justifyContent='space-between'>

                            <Grid item>
                                <Typography textAlign='center' variant='h6'>Santiago Piedriz</Typography>
                                <Typography variant='h6'><LocalPhoneIcon /> +57 304-219-7049</Typography>
                            </Grid>

                            <Grid item>

                                {socialItems.map((item) => (
                                    <IconButton key={item.url} href={item.url}>
                                        <item.icon sx={styles.socialIcons} />
                                    </IconButton>
                                ))}

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}
