import React from 'react'
import Chip from '@mui/material/Chip';

export default function TagsContainer({ tags }) {
    const styles = {
        tag: {
            marginRight: 1,
            marginBottom: 1
        }
    }
    return (
        <div>
            {tags.map((tag) => (
                <Chip sx={styles.tag} variant='outlined' key={tag} label={tag}></Chip>
            ))}
        </div>
    )
}
