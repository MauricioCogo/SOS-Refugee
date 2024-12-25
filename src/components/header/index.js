// Header.js
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ imageUrl }) => {
    return (
        <header style={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            marginBottom: 14,
            position: 'relative', // Adicione a posição relativa
            zIndex: 2, // Valor maior para sobrepor o mapa
        }}>
            <img
                src={imageUrl}
                alt="Header"
                style={{
                    width: '110%',
                    height: 'auto',
                    objectFit: 'cover' // Garante que a imagem cubra o header sem distorção
                }}
            />
        </header>
    );
};

Header.propTypes = {
    imageUrl: PropTypes.string.isRequired, // Valida que a prop imageUrl deve ser uma string
};

export default Header;
