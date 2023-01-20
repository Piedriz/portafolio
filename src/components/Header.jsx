import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import Hidden from '@mui/material/Hidden';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import logo from '../images/avatar/logo.png'
import { Link as SLink} from 'react-scroll'


const navigationLinks = [
    { name: "About Me", to:"about", href: "#about" },
    { name: "Academic", to:"academic", href: "#academic"},
    { name: "Projects", to:"projects", href: "#projects" },
    { name: "Contact", to:"contact", href: "#contact"},
    
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
                            <Button 
                                variant='button'
                                key={item.name}
                                >
                            <SLink
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-65}
                                duration={500}
                                
                            >
                                {item.name}
                            </SLink>
                            </Button>
                        ))}
                        <Button 
                            variant='button'
                            href='/cv.pdf'
                        >
                            CV
                        </Button>
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
                            <Button 
                                variant='button'
                                key={item.name}
                                >
                            <SLink
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-65}
                                duration={500}
                                
                            >
                                {item.name}
                            </SLink>
                            </Button>
                        </ListItem>
                    ))}
                    <ListItem>
                    <Button variant='button' href='/cv.pdf'>CV</Button>
                    </ListItem>
                    
                </List>
            </SwipeableDrawer>
        </AppBar>

    )
}
