import React from 'react';
import TagsContainer from './TagsContainer';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import CardActionArea from '@mui/material/CardActionArea';
import { useModalStatus } from '../hooks/useModalStatus';
import Modal from '@mui/material/Modal';

const styles = {
    cardMedia: {
        width: '200px',
    },
    card: {
        display: "flex"
    },
    links: {
        marginRight: "auto",
    },
    cardMediaMovile: {
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {xs:350,sm:500},
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    animbox:{
        width:'100%',
        objectFit: 'contain'
    }
}

export default function ProjectCard({ project, links }) {
    const { open, handleOpen, handleClose } = useModalStatus();
    return (
        <Grid item>
            <Card sx={styles.card}>
                <CardActionArea onClick={handleOpen}>
                    <Box>
                        <Hidden smUp>
                            <CardMedia component="img" sx={styles.cardMediaMovile} image={project.image} />
                        </Hidden>
                        <CardContent>
                            <Typography variant='h5' paragraph>{project.title}</Typography>
                            <Typography variant='subtitle1' paragraph>{project.description}</Typography>
                            <Hidden smUp>
                                <TagsContainer tags={project.tags} />
                            </Hidden>
                        </CardContent>
                        <CardActions>
                            <Box sx={styles.links}>
                                {links.map((linkItems) => (
                                    <IconButton href={linkItems.href} key={linkItems.href}>
                                        <linkItems.icon />
                                    </IconButton>
                                ))}
                            </Box>
                            <Hidden smDown>
                                <TagsContainer tags={project.tags} />
                            </Hidden>
                        </CardActions>
                    </Box>
                </CardActionArea>
                <Hidden smDown>
                    <CardMedia component="img" sx={styles.cardMedia} image={project.image} />
                </Hidden>
            </Card>

            <Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.modal}>
                        <Box 
                            component="img"
                            sx={styles.animbox}
                            src={project.gif}
                            />        
                        <Typography textAlign='center' mt={1} id="modal-modal-title" variant="h6" component="h2">
                            {project.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {`${project.description}`}
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </Grid>

    )
}
