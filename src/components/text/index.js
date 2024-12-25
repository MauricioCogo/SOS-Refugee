import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Text = (props) => {
    const {
        label,
        font,
        h,
        styles,
        al // Ajustado para incluir o alinhamento
    } = props;

    return (
        <Box>
            <Typography
                sx={{ textAlign: al }} // Alinhamento
                variant={h} // Variante do Typography
                style={{
                    fontFamily: font,
                    ...styles // Aplica os estilos adicionais
                }}>
                {label}
            </Typography>
        </Box>
    );
}

Text.propTypes = {
    label: PropTypes.string,
    font: PropTypes.string,
    h: PropTypes.string,
    styles: PropTypes.object, // Adicionado para os estilos
    al: PropTypes.string // Adicionado para o alinhamento
};

Text.defaultProps = {
    label: "Text",
    font: "Arial",
    h: "body1",
    styles: {}, // Inicializa com um objeto vazio
    al: "left" // Alinhamento padrão
};

export default Text;
