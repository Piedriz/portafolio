import React from 'react'
import { ListItem, ListItemIcon, ListItemText, List, ListSubheader,} from '@mui/material';
import Card from '@mui/material/Card';


export const AcademicCard = ({ data,title }) => {
    return (
        <>
            <Card>
                <List >
                    <ListSubheader>
                        {title}
                    </ListSubheader>
                    {data.map((item => (

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
        </>
    )
}
