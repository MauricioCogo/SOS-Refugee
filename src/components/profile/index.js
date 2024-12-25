// src/components/ProfileCard.js
import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import Button from '../button/index'
import { useNavigate } from 'react-router-dom';

const Perfil = (props) => {
    const {
        name,
        avatar,
        campus,
    } = props;


    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <Avatar src={avatar} alt={name} sx={{ marginTop: 2, height: 100, width: 100 }} />
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Typography variant="h5">{name}</Typography>
                                <Typography variant="body2" color="textSecondary" align='center'>
                                    {campus}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Perfil;
