import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid, Box } from "@mui/material";
import ExameCard from "../../components/exam/index";

function ExamView() {
    const provas = [
        { id: 1, title: "TRUCO GAUDÉRIO", local: "NTG", data: "20/08/2024", hora: "10:00", commission: false },
        { id: 2, title: "Prova 2", local: "Quadra", data: "21/08/2024", hora: "11:00", commission: false },
        { id: 3, title: "Prova 3", local: "Campo", data: "22/08/2024", hora: "12:00", commission: true },
        { id: 4, title: "Prova 4", local: "Auditório", data: "23/08/2024", hora: "14:00", commission: false },
        { id: 5, title: null, local: null, data: null, hora: null }, // Exemplo com valores padrão
    ];

    return (
        <Box>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap={2}
            >
                {
                    provas.map((item) => (
                        < Grid item={true} >
                            <ExameCard
                                id={item.id}
                                title={item.title}
                                local={item.local}
                                data={item.data}
                                hora={item.hora}
                                commission={item.commission}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box >
    );
}

ExamView.propTypes = {
    title: PropTypes.string,
};

ExamView.defaultProps = {
    title: "",
};

export default ExamView;
