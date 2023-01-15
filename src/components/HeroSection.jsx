import React from 'react'
import Social from './Social';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Fade from '@mui/material/Fade';
import Image from '../images/background/background2.png'
import Avatar from '@mui/material/Avatar';
import avatar from '../images/avatar/avatarimage2.jpeg'



export default function HeroSection() {
    const styles = {
        section: {
            height: "90vh",
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative"
        },
        content: {
            height: "100%",
            zIndex: 100,
            position: "relative"
        },
        container: {
            height: "100%"
        },
        overlay: {
            backgroundColor: "#00000075",
            height: "100%",
            width: "100%",
            position: "absolute",
        },

}

const [shouldShow, setShouldShow] = React.useState(false);

React.useEffect(() => {
    setShouldShow(true)
}, [])
return (
    <Paper sx={styles.section} id="about">
        <Box sx={styles.overlay}></Box>
        <Container sx={styles.container} maxWidth="md">
            <Grid sx={styles.content} justifyContent="space-between" container alignItems="center">
                <Fade in={shouldShow} {...(shouldShow ? { timeout: 1000 } : {})}>
                    <Grid item sm={8}>
                        <Avatar
                            alt="piedriz avatar"
                            src={avatar}
                            sx={{ width: 90, height: 90, marginBottom: 4 }}
                        />
                        <Typography content="h1" variant="h3">Hola, mi nombre es Santiago Piedriz.</Typography>
                       
                            <Typography content='h5' variant="h5"> 
                                Desarrollo sitios web, aplicaciones web e interfaces de usuario responsivas.
                            </Typography>
                       
                        <Box my={3}>
                            <Button href="mailto:piedrizpasos@gmail.com" variant="outlined">Contactame!</Button>
                        </Box>
                    </Grid>
                </Fade>
                <Hidden smDown>
                    <Grid item><Social direction={'column'} /></Grid>
                </Hidden>
            </Grid>
        </Container>
    </Paper>
)
}
