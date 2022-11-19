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
}

export default function ProjectCard({ project, links }) {
    return (
        <Grid item>
            <Card sx={styles.card}>
                <CardActionArea>
                    <Box>
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
        </Grid>
    )
}
