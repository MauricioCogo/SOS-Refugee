import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import MapIcon from '@mui/icons-material/Map';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = ({ currentMenu, setCurrentMenu, hidden }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Atualiza o estado do menu com base na URL atual
        const currentPath = location.pathname.substring(1); // Remove a barra inicial '/'
        setCurrentMenu(currentPath || 'home'); // Define como 'home' se o caminho estiver vazio
    }, [location.pathname, setCurrentMenu]);

    const handleMenuChange = (event, newValue) => {
        setCurrentMenu(newValue);
        navigate(`/${newValue}`); // Redireciona para a página especificada
    };

    if (hidden) return null; // Retorna null para não renderizar o footer


    return (
        <BottomNavigation
            value={currentMenu}
            onChange={handleMenuChange}
            showLabels
            sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1300, boxShadow: 'none' }}
        >
            <BottomNavigationAction label="Inicio" value="home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Informações" value="info" icon={<InfoIcon />} />
            <BottomNavigationAction label="Mapa" value="map" icon={<MapIcon sx={{ fontSize: 40 }} />} />
            <BottomNavigationAction label="Provas" value="exams" icon={<ChecklistIcon />} />
            <BottomNavigationAction label="Perfil" value="profile" icon={<AccountCircleIcon />} />
        </BottomNavigation>
    );
};

export default Footer;
