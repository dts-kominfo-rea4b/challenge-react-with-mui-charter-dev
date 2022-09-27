// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from 'react';
import { Button, Card, TextField } from "@mui/material";

const ContactForm = ({ handleClick }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        photo: "",
    });

    return (
        <Card style={{ padding: 20, maxWidth: 345 }}>
            <TextField
                fullWidth required

                id="name"
                label="Name"
                margin="dense"
                variant="filled"
                onChange={
                    (e) => { setNewContact({ ...newContact, name: e.target.value }) }
                }
            />
            <TextField
                fullWidth required
                id="phone"
                label="Phone"
                margin="dense"
                variant="filled"
                onChange={
                    (e) => { setNewContact({ ...newContact, phone: e.target.value }) }
                }
            />
            <TextField
                fullWidth required
                id="email"
                label="Email"
                margin="dense"
                variant="filled"
                onChange={
                    (e) => { setNewContact({ ...newContact, email: e.target.value }) }
                }
            />
            <TextField
                fullWidth required
                id="photo"
                label="Photo"
                margin="dense"
                variant="filled"
                onChange={
                    (e) => { setNewContact({ ...newContact, photo: e.target.value }) }
                }
            />


            <Button sx={{ color: 'success.main' }}
                onClick={() => {
                    handleClick(newContact);
                    setNewContact({
                        name: "",
                        phone: "",
                        email: "",
                        photo: "",
                    });
                }}
            >ADD NEW</Button>
        </Card>
    );
}

export default ContactForm;