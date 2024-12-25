# S.O.S Refugee

Um aplicativo para ajudar comunidades em risco devido a catástrofes naturais, fornecendo monitoramento climático e mapeamento de zonas seguras.

## Requisitos

### Ferramentas Necessárias

- **React Native**: Para rodar o aplicativo mobile.
- **Node.js** (v14 ou superior): Para gerenciar pacotes e rodar o servidor do React Native.
- **XAMPP**: Para o servidor PHP.
- **Git**: Para gerenciar o repositório.

### Dependências do Projeto

- React Native CLI ou Expo CLI (dependendo da configuração do projeto).
- PHP 7.4 ou superior.

## Passo a Passo de Configuração

### Aplicativo Mobile

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/username/sos-refugee.git
   cd sos-refugee
   ```

2. **Instale as dependências do React Native:**
   ```bash
   npm install
   ```

3. **Execute o aplicativo:**
   - Para usuários do React Native CLI:
     ```bash
     npx react-native run-android
     ```
   - Para usuários do Expo CLI:
     ```bash
     npx expo start
     ```

4. **Configuração do backend:** Certifique-se de que o aplicativo esteja configurado para consumir a API PHP no XAMPP. Atualize a URL base no código, se necessário.

### Configuração do Backend (PHP)

1. **Copie a pasta `PHP` para o XAMPP:**
   - Localize a pasta `PHP` no repositório.
   - Cole-a no diretório `htdocs` do XAMPP. O caminho padrão é algo como:
     ```
     C:\xampp\htdocs\PHP
     ```

2. **Inicie o XAMPP:**
   - Certifique-se de que o Apache e o MySQL estão rodando.

3. **Teste a API PHP:**
   - Abra o navegador e vá para:
     ```
     http://localhost/PHP
     ```
   - Certifique-se de que os endpoints estão funcionando corretamente.

### Banco de Dados

1. **Importe o banco de dados:**
   - No phpMyAdmin, importe o arquivo `database.sql` (presente na pasta `PHP`).

2. **Configure o arquivo de conexão:**
   - Abra o arquivo `config.php` (na pasta `PHP`).
   - Certifique-se de que as credenciais do banco estão corretas:
     ```php
     $host = 'localhost';
     $db = 'sos_refugee';
     $user = 'root';
     $password = '';
     ```

## Funcionalidades Principais

1. **Botão SOS:**
   - Aciona um mapa com as zonas seguras na região.

2. **Cadastro de usuário:**
   - Registre-se para acessar funcionalidades exclusivas.

3. **Cadastro de Zonas Seguras:**
   - Permita que usuários adicionem locais seguros ao mapa.

4. **Perfil de Usuário:**
   - Visualize e edite informações pessoais.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-branch
   ```
3. Envie suas alterações:
   ```bash
   git push origin minha-branch
   ```
4. Abra um Pull Request no repositório principal.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

**Equipe Bug Busters**
