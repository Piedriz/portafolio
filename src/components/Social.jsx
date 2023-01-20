import React from 'react';
import { socialItems } from '../utils/socialItems';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link';


export default function Social({direction}) {

    return (
        <Grid container direction={direction || "row"} spacing={2}>
            {socialItems.map((item => (
                 
                <Grid key={item.url} item>
                    <Link href={item.url}>
                        <IconButton>
                            <item.icon color='red' fontSize='large'/>
                        </IconButton>
                    </Link>
                </Grid>
                
            )))}
        </Grid>

    )
}
