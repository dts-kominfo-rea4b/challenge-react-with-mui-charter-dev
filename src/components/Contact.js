// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data, index }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<div key={index}>
        <List sx={{ bgcolor: 'info.main' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={data.photo} />
                </ListItemAvatar>
                <ListItemText
                    primary={data.name}
                    secondary={
                        <React.Fragment>
                            <Typography component="span" variant="body2" color="text.primary">
                                {data.phone}
                            </Typography>
                            {data.email}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    </div>);
};

export default Contact;
