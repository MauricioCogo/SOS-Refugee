import React, { useState, useEffect } from 'react';

const LocationTracker = ({ onUpdateLocation }) => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [dataClima, setDataClima] = useState(null);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const newLocation = {
                            lat: position.coords.latitude,
                            lon: position.coords.longitude,
                        };
                        setLocation(newLocation);
                        setError(null);

                        // Envie os dados imediatamente após obter a localização
                        fetch('http://192.168.1.22/PHP/API/index.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newLocation)
                        })
                            .then(response => response.json())
                            .then(data => {
                                console.log('Resposta do PHP:', data);
                                if (data.status === 'SUCCESS') {
                                    setDataClima(data);
                                    if (onUpdateLocation) {
                                        onUpdateLocation(newLocation, data);
                                    }
                                }
                            })
                            .catch(error => {
                                console.error('Erro ao enviar os dados:', error);
                            });
                    },
                    (err) => {
                        setError(err.message);
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };

        // Chama getLocation a cada 5 minutos (300000 ms)
        const intervalId = setInterval(getLocation, 300000);

        // Obtém a localização imediatamente ao montar o componente
        getLocation();

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(intervalId);
    }, [onUpdateLocation]);

    // Função para converter Fahrenheit para Celsius
    const convertFahrenheitToCelsius = (fahrenheit) => {
        return ((((fahrenheit - 32) * 5) / 10) / 10).toFixed(1);
    };

    return (
        <div style={styles.container}>
            {location && dataClima && (
                <div style={styles.weatherContainer}>
                    <div style={styles.topRow}>
                        <div style={styles.description}>
                            <h2 style={styles.heading}>Descrição</h2>
                            <p style={styles.text}>{dataClima.descricao || 'Descrição não disponível'}</p>
                        </div>
                        <img src={dataClima.icon} alt="Clima" style={styles.icon} />
                    </div>
                    <div style={styles.bottomRow}>
                        <div style={styles.temperature}>
                            <h2 style={styles.heading}>Temperatura</h2>
                            <p style={styles.text}>
                                {typeof dataClima.temp === 'number'
                                    ? `${convertFahrenheitToCelsius(dataClima.temp)}°C`
                                    : 'Dados de temperatura não disponíveis'}
                            </p>
                        </div>
                        <div style={styles.alertContainer}>
                            <h2 style={styles.heading}>Alerta</h2>
                            {dataClima.alert ? (
                                <div style={styles.alert}>
                                    <p style={styles.text}>{dataClima.alert.Alerta || 'Alerta não disponível'}</p>
                                    {dataClima.alert['Perigo'] && (
                                        <p style={styles.text}>
                                            Perigo: {dataClima.alert['Perigo']}
                                        </p>
                                    )}
                                    {dataClima.alert.Descrição && (
                                        <p style={styles.text}>Descrição: {dataClima.alert.Descrição}</p>
                                    )}
                                </div>
                            ) : (
                                <p style={styles.text}>Sem alerta</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {error && <p style={styles.error}>Error: {error}</p>}
        </div>
    );
};

// Styles object
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#98d091',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: 'auto',
    },
    weatherContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    topRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    description: {
        flex: 1,
    },
    icon: {
        width: '100px',
        height: '100px',
    },
    bottomRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    temperature: {
        flex: 1,
    },
    alertContainer: {
        flex: 1,
        marginLeft: '20px',
    },
    alert: {
        borderRadius: '4px',
        padding: '10px',
    },
    heading: {
        fontSize: '1.5rem',
        color: '#333',
        marginBottom: '10px',
    },
    text: {
        fontSize: '1rem',
        color: '#000',
        margin: '5px 0',
    },
    error: {
        color: '#ea2a26',
        fontSize: '1rem',
    },
};

export default LocationTracker;
