import React from 'react';
import { socialItems } from '../utils/socialItems';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link';
import Grow from '@mui/material/Grow';

export default function Social({direction}) {
    const [shouldShow, setShouldShow] = React.useState(false);

    React.useEffect(() => {
    setShouldShow(true)
    }, [])
   
    return (
        <Grid container direction={direction || "row"} spacing={2}>
            {socialItems.map((item => (
                 <Grow in={setShouldShow} {...(setShouldShow ? { timeout: 1000 } : {})}>
                <Grid key={item.url} item>
                    <Link href={item.url}>
                        <IconButton>
                            <item.icon fontSize='large'/>
                        </IconButton>
                    </Link>
                </Grid>
                </Grow>
            )))}
        </Grid>

    )
}
