import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Text from '../../components/text/index';
import Input from '../../components/input';
import Password from '../../components/password';
import Button from "../../components/button/index";
import imgIffar from "../../images/Instituto_Federal_Farroupilha.png";
import { useNavigate } from "react-router-dom";
import bottomBackground from '../../images/Button.png';


function LoginView() {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const handleCpfChange = (event) => {
        setCpf(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleSubmit = () => {
        console.log("CPF enviado:", cpf);
        console.log("Senha enviada:", senha);

        if (cpf.trim() === '' || senha.trim() === '') {
            console.error("CPF ou Senha não podem estar vazios");
            return;
        }

        const jsonData = {
            cpf: cpf,
            password: senha
        };

        console.log("JSON enviado:", jsonData);

        fetch('http://192.168.1.22/PHP/User/read.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Resposta do PHP:', data);
                if (data.status === 'SUCCESS') {
                    navigate('/map');
                }
            })
            .catch(error => {
                console.error('Erro ao enviar os dados:', error);
            });
    };

    return (
        <Container sx={{
            position: 'relative',
            backgroundColor: '#98d091',
            paddingTop: '200px',
            paddingBottom: '100%',
            backgroundImage: `url(${bottomBackground})`,
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundPosition: 'top center, bottom center',
            backgroundSize: 'cover, cover',
        }}>
            <Text h={"h5"} label={<span><strong>SOS Refugee!</strong></span>} styles={{ textAlign: 'center', marginTop: '100px' }} />
            <Text h={"h5"} label={<span><strong>Realizar login</strong></span>} styles={{ textAlign: 'center', marginTop: '10px' }} />
            <Input
                label="CPF"
                styles={{ marginTop: "10px" }}
                alignment={{ alignItems: 'flex-end', justifyContent: 'center' }}
                onChange={handleCpfChange}
                value={cpf}
            />
            <Password
                label="Sua Senha"
                styles={{ padding: '5px' }}
                alignment={{ alignItems: 'flex-end', justifyContent: 'center' }}
                onChange={handleSenhaChange}
                value={senha}
            />

            <Box sx={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Button onClick={handleSubmit} label={"Entrar"} styles={{ color: "#fff", backgroundColor: "#ea2a26", width: 258, height: 46, borderRadius: 15, textTransform: 'none' }} />
            </Box>

            <Box sx={{
                marginTop: '40px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <img src={imgIffar} alt="Instituto Federal Farroupilha" style={{ maxWidth: '30%', height: 'auto', marginTop: '60px' }} />
            </Box>
        </Container>
    );
}

export default LoginView;
