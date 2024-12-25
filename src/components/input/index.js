import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextFieldsIcon from '@mui/icons-material/AlternateEmail';
import PropTypes from 'prop-types';

const Input = (props) => {
    const {
        label,
        styles,
        alignment,
        onChange,
    } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: alignment?.alignItems || 'flex-start', // Usa alinhamento do prop ou valor padrão
                justifyContent: alignment?.justifyContent || 'flex-start', // Usa alinhamento do prop ou valor padrão
            }}
            style={styles} // Aplica os estilos adicionais
        >
            <TextFieldsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
                id="input-with-sx"
                label={label}
                onChange={onChange}
                variant="standard"
                type="text"
            />
        </Box>
    );
}

Input.propTypes = {
    styles: PropTypes.object,
    label: PropTypes.string,
    alignment: PropTypes.shape({
        alignItems: PropTypes.string,
        justifyContent: PropTypes.string,
    }), // Define prop types para alinhamento
};

Input.defaultProps = {
    label: "Senha",
    styles: {},
    alignment: {
        alignItems: 'flex-start', // Valor padrão
        justifyContent: 'flex-start', // Valor padrão
    },
};

export default Input;
