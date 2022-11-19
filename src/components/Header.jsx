import React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import Hidden from '@mui/material/Hidden';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import logo from '../images/avatar/logo.png'

const navigationLinks = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact"},
    { name: "CV", href: "/cv.pdf" }
]

const styles = {
    link: {
        marginRight: 5,

    },
    avatar: {
        marginRight: "auto",
    },
}

export default function Header() {

    const [open, setOpen] = React.useState(false)
    return (
        <AppBar position='sticky' color="default">
            <Container maxWidth="md">
                <Toolbar disableGutters>
                    <Avatar src={logo} sx={styles.avatar}/>
                    <Hidden smDown>
                        {navigationLinks.map((item) => (
                            <Link 
                                color="textPrimary"
                                key={item.name}
                                sx={styles.link}
                                variant="button"
                                underline="none"
                                href={item.href} >
                                {item.name}
                            </Link>
                        ))}
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={()=>setOpen(true)}>
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
            <SwipeableDrawer
                anchor='right'
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}>
                <Box>
                    <IconButton onClick={()=>setOpen(false)}>
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {navigationLinks.map((item) => (
                        <ListItem key={item.name}>
                            <Link color="textPrimary"
                                sx={styles.link}
                                variant="button"
                                underline="none"
                                href={item.href} >
                                {item.name}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </AppBar>

    )
}
