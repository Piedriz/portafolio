import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from '@mui/material';
import { socialItems } from '../utils/socialItems';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
                        <Typography variant='h2'>¡Contáctame!</Typography>
                        <Link href={'mailto:piedrizpasos@gmail.com'}>
                            <Typography textAlign='center' variant='h5'>piedrizpasos@gmail.com</Typography>
                        </Link>
                    </Grid>
                    <Grid item width='100%'>
                        <Grid container flexDirection='row' alignItems='center' justifyContent='space-between'>

                            <Grid item>
                                <Typography textAlign='center' variant='h6'>Santiago Piedriz</Typography>
                                <Link href='https://api.whatsapp.com/send?phone=573042197049'>
                                    <Typography variant='h6'><WhatsAppIcon /> +57 304-541-5138</Typography>
                                </Link>
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
