import React from "react";
import { Box, Grid } from "@mui/material";
import Button from "../../components/button/index";
import { useNavigate } from "react-router-dom";

function InfoView() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/info/rules`); // Redireciona para a página especificada em 'path'

    }

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
            style={{ minHeight: '70vh' }} // Garante que o container ocupe pelo menos 100% da altura da visualização
        >
            <Grid item>
                <Button onClick={handleClick} label="Regras" />
            </Grid>
            <Grid item>
                <Button label="Cardapio" />
            </Grid>
            <Grid item>
                <Button label="IFFar - SVS" />
            </Grid>
            <Grid item>
                <Button label="Institutos Participantes" />
            </Grid>
            <Grid item>
                <Button label="Encontrão" />
            </Grid>
            <Grid item>
                <Button label="NTG Trempe da Saudade" />
            </Grid>
            <Grid item>
                <Button label="Desenvolvedores" />
            </Grid>
        </Grid>
    );
}

export default InfoView;
