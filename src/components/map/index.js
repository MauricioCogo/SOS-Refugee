import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from '../../images/escudo.png'; // Certifique-se de que o caminho está correto
import Pin from '../../images/pin.png';

const mapContainerStyle = {
    height: "64vh", // Ajuste a altura para deixar espaço para o footer
    width: "100%",
    zIndex: 1 // Menor que o do footer
};

const center = {
    lat: -29.703101463771155,
    lng: -54.69634891340955
};

// URL da API que retorna os dados dos markers
const markersApiUrl = 'http://192.168.1.22/PHP/SafeZone/getAllSafeZone.php';

const LocationButton = ({ onClick }) => (
    <button onClick={onClick} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '10px',
        backgroundColor: '#058789',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 2
    }}>
        Centralizar no Usuário
    </button>
);

const Map = () => {
    const [markers, setMarkers] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const loadMarkers = async () => {
            try {
                const response = await fetch(markersApiUrl);
                const data = await response.json();

                console.log('Dados recebidos da API:', data);

                if (data && Array.isArray(data.safeZone)) {
                    const validMarkers = data.safeZone.filter(marker =>
                        !isNaN(parseFloat(marker.latitude)) &&
                        !isNaN(parseFloat(marker.longitude))
                    ).map(marker => ({
                        ...marker,
                        latitude: parseFloat(marker.latitude),
                        longitude: parseFloat(marker.longitude)
                    }));
                    setMarkers(validMarkers);
                } else {
                    console.error('A propriedade `safeZone` não é um array ou está ausente.');
                }
            } catch (error) {
                console.error('Erro ao carregar os markers:', error);
            }
        };

        loadMarkers();
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                error => {
                    console.error('Erro ao obter a localização do usuário:', error);
                }
            );
        } else {
            console.error('Geolocalização não é suportada pelo navegador.');
        }
    }, []);

    // Crie o ícone personalizado usando L.Icon
    const customIcon = new L.Icon({
        iconUrl: iconUrl,
        iconSize: [32, 32], // Tamanho do ícone
        iconAnchor: [16, 32], // Ponto do ícone que corresponde à posição do marcador
        popupAnchor: [0, -32] // Ponto a partir do qual o popup será exibido
    });

    // Ícone para a localização do usuário
    const userLocationIcon = new L.Icon({
        iconUrl: Pin, // Substitua pelo caminho para o ícone do usuário
        iconSize: [32, 32], // Tamanho do ícone do usuário
        iconAnchor: [16, 32], // Ponto do ícone que corresponde à posição do marcador
        popupAnchor: [0, -32] // Ponto a partir do qual o popup será exibido
    });

    const handleCenterMap = () => {
        if (map && userLocation) {
            map.setView([userLocation.lat, userLocation.lng], 15);
        }
    };

    const MapWithCentering = () => {
        const leafletMap = useMap();
        useEffect(() => {
            setMap(leafletMap);
        }, [leafletMap]);

        return null;
    };

    return (
        <div style={{ position: 'relative', height: '100%' }}>
            <MapContainer
                style={mapContainerStyle}
                center={center}
                zoom={6}
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={[marker.latitude, marker.longitude]}
                        icon={customIcon}
                    >
                        <Popup>{marker.description}</Popup>
                    </Marker>
                ))}
                {userLocation && (
                    <Marker
                        position={[userLocation.lat, userLocation.lng]}
                        icon={userLocationIcon}
                    >
                        <Popup>Você está aqui</Popup>
                    </Marker>
                )}
                <MapWithCentering />
            </MapContainer>
            <LocationButton onClick={handleCenterMap} />
        </div>
    );
};

export default Map;
