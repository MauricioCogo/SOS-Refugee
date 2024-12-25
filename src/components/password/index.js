import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PasswordIcon from '@mui/icons-material/Lock';
import PropTypes from 'prop-types';

const Password = (props) => {
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
            <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
                id="input-with-sx"
                onChange={onChange}
                label={label}
                variant="standard"
                type="password"
            />
        </Box>
    );
}

Password.propTypes = {
    styles: PropTypes.object,
    label: PropTypes.string,
    alignment: PropTypes.shape({
        alignItems: PropTypes.string,
        justifyContent: PropTypes.string,
    }), // Define prop types para alinhamento
};

Password.defaultProps = {
    label: "Senha",
    styles: {},
    alignment: {
        alignItems: 'flex-start', // Valor padrão
        justifyContent: 'flex-start', // Valor padrão
    },
};

export default Password;
